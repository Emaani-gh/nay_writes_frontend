import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="nav-wrapper">
      <div className="container">
        <nav>
          <div className="logo">
            <NavLink to={"/"} className={"nav-link"} onClick={closeMenu}>
              N A Y W R I T E
            </NavLink>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <ul className={`menus ${menuOpen ? "openMenu" : ""}`}>
            <li>
              <NavLink to={"/"} className={"nav-link"} onClick={closeMenu}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/project"}
                className={"nav-link"}
                onClick={closeMenu}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className={"nav-link"} to={"/about"} onClick={closeMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/newsletter"}
                className={"nav-link"}
                onClick={closeMenu}
              >
                Newsletter
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
