import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";
import Hero from "../Hero";

const Header = () => {
  return (
    <div className="nav-wrapper">
      <div className="">
        <nav>
          <div className="logo">
            <h4>N A Y WRITES </h4>
          </div>

          <ul className="menus">
            <li>
              <NavLink to={"/"} className={"nav-link"}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to={"/project"} className={"nav-link"}>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className={"nav-link"} to={"about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"newsletter"} className={"nav-link"}>
                Newsletter
              </NavLink>
            </li>

            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </ul>
        </nav>
      </div>

      {/* <Hero /> */}
    </div>
  );
};

export default Header;
