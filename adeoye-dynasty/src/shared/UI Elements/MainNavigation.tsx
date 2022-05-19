import React from "react";
import Navlinks from "./Navlinks";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";

const MainNavigation:React.FC = () => {
  return (
    <MainHeader>
      <Link to ='/' className="text-decoration-none">
          <h1 className="text-white logo">Adeoye Dynasty</h1>
      </Link>
      <Navlinks />
    </MainHeader>
  );
};

export default MainNavigation;
