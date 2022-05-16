import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks: React.FC = () => {
  return (
    <ul className="d-flex justify-content-between pt-2 ">
      <li className="card-link ">
        <NavLink to="/" className="text-decoration-none text-white  ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="text-decoration-none text-white">
          Family
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="text-decoration-none text-white">
          Gallery
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
