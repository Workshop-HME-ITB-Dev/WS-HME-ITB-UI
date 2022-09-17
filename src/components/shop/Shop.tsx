import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_SHOPS } from "../../graphql/shopQuery";
import { GetShopsResponse } from "../../graphql/shopQuery.types";
import AlertCard from "../dashboard/basiccomponent/AlertCard";
import Footer from "../Footer";
import NavBar from "../Navbar";
import Spinner from "../Spinner";
import ShopCard from "./ShopCard";

const Shop = (): JSX.Element => {
  const { loading, error, data } = useQuery<GetShopsResponse>(GET_SHOPS);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  return (
    <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
      <NavBar selected="shop" />
      <div className="flex  h-full w-full mb-auto">
        <div className="flex flex-col max-w-7xl justify-start mx-auto px-6">
          <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
            WS Shop
          </h1>
          <h2 className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
            Workshop HME menyediakan aneka komponen serta kit elektronik dengan harga yang terjangkau dan kualitas barang yang terjamin.
          </h2>
          <section id='shopCard'>
            <div className="flex flex-wrap justify-center w-full items-center mb-8 mt-10">
              {showAlert && error && <AlertCard data={{
                title: 'ERROR',
                desc: error.message,
                type: 'error'
              }} onClose={setShowAlert} />}
              {loading ? <Spinner /> : <>
                {data?.shops.map(product => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </>}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
