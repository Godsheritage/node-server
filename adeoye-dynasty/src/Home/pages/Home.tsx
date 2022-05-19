import React from "react";
import Main from "./Main";
import Footer from "../../shared/components/Footer";
import MainNavigation from "../../shared/components/UI Elements/MainNavigation";
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
