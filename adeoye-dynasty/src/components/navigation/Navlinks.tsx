import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC = () => {
  return (
    <ul className="d-flex flex-row">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Family</NavLink>
      </li>
      <li>
        <NavLink to="/">Gallery</NavLink>
      </li>
      <button className="btn btn-primary">dddddd</button>
    </ul>
  );
};

export default Navlinks;
