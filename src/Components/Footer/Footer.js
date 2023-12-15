import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer">
          <div className="copy">
            <span>&copy; 2023</span>
          </div>
          <ul className="f-menus">
            <li>
              <Link>Twitter</Link>
            </li>
            <li>
              <Link>LinkedIn</Link>
            </li>
            <li>
              <Link>Email</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
