import React from "react";
import Main from "./Main";
import Footer from "../../shared/Footer";
import MainNavigation from "../../components/navigation/MainNavigation";

const Home = () => {
  return (
    <div className="home">
      <MainNavigation />
      <Main/>
      <Footer/>
    </div>
  );
};

export default Home;
