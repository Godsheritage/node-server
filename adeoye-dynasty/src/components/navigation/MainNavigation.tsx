import React from "react";
import Navlinks from "./Navlinks";
import MainHeader from "./MainHeader";

const MainNavigation:React.FC = () => {
  return (
    <MainHeader>
      <div>
          <h1 className="text-white">Adeoye Dynasty</h1>
      </div>
      <Navlinks />
    </MainHeader>
  );
};

export default MainNavigation;
