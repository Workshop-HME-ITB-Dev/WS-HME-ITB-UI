import axios from "axios";
import { useEffect } from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";
import HomeContent from "./HomeContent";


const Landing = (): JSX.Element => {
  const pingServer = async () => {
    await axios.get("http://wshme.herokuapp.com/api");
  }
  useEffect(() => {
    // Ping to avoid cold start - temp solution 
    try {
      pingServer()
    }
    catch (e: any) {
      console.error(e.message);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start smooth-scroll">
        <NavBar selected="home" />
        <HomeContent />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
