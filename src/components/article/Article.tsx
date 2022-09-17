import axios from "axios";
import { useState, useEffect } from "react";
import { GetArticlesResponse, GetArticlesResponseRest } from "../../graphql/articleQuery.types";
import AlertCard from "../dashboard/basiccomponent/AlertCard";
import Footer from "../Footer";
import NavBar from "../Navbar";
import Spinner from "../Spinner";
import ArticleCard from "./ArticleCard";

const Article = (): JSX.Element => {
  const [data, setData] = useState<GetArticlesResponse>({
    articles: []
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchArticles = async () => {
    setLoading(true);
    console.log(process.env.REACT_APP_API_HOST_URL + '/articles');
    try {
      const { data }: { data: GetArticlesResponseRest } = await axios.get(process.env.REACT_APP_API_HOST_URL + '/articles');
      setData({
        articles: data.data
      });
      setLoading(false);
    } catch (e: any) {
      setError(e.message);
      setShowAlert(true);
    }
    console.log(data);
  }

  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="article" />
        <main className="flex  h-full w-full mb-auto">
          <div className="flex flex-col max-w-6xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Article
            </h1>
            <h2 className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Daftar technical article seputar dunia IT dan elektronik yang telah di-publish oleh Workshop HME pada platform medium.
            </h2>
            <section className="flex flex-col justify-start items-center mx-10 mb-8 mt-10">
              {showAlert && error && <AlertCard data={{
                title: 'ERROR',
                desc: error,
                type: 'error'
              }} onClose={setShowAlert} />}

              {loading ? <Spinner /> :
                <>
                  {
                    data?.articles.map(article => (
                      <ArticleCard key={article.id} article={article} />
                    ))
                  }
                </>
              }
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Article;
