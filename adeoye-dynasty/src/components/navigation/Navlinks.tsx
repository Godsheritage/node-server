import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC = () => {
  return (
    <ul className="d-flex justify-content-evenly pt-3 link-styles ">
      <li className="">
        <NavLink to="/" className="text-decoration-none text-white  ">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/family" className="text-decoration-none text-white">
          Family
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/gallery" className="text-decoration-none text-white">
          Gallery
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
