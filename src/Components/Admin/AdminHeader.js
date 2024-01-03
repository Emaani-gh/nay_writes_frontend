import React, { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { NavLink } from "react-router-dom";

import "../Header/header.css";

const AdminHeader = () => {
  const { authUser, actions } = useContext(UserContext);

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
            <NavLink
              to={"/admin/blogs"}
              className={"nav-link"}
              onClick={closeMenu}
            >
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
            {authUser ? (
              <>
                <li>
                  <NavLink
                    to={"/settings"}
                    className={"nav-link"}
                    onClick={closeMenu}
                  >
                    Settings
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/admin/login"}
                    className={"nav-link"}
                    onClick={actions.signOut}
                  >
                    Sign Out
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to={"/admin/login"}
                    className={"nav-link"}
                    onClick={closeMenu}
                  >
                    Sign in
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/admin/signup"}
                    className={"nav-link"}
                    onClick={closeMenu}
                  >
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminHeader;
