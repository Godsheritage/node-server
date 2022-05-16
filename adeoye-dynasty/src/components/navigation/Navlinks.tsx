import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Family</NavLink>
      </li>
      <li>
        <NavLink to="/">Gallery</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
