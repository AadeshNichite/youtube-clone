import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-56">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/demo">Demo</Link>
        </li>
        <li> Music</li>
        <li> Sport</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li> Home</li>
        <li> Music</li>
        <li> Sport</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li> Home</li>
        <li> Music</li>
        <li> Sport</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li> Home</li>
        <li> Music</li>
        <li> Sport</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
