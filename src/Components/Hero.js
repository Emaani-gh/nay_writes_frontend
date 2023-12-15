import React from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const loc = useLocation();
  const location = loc.pathname.split("/");

  // Get the last part of the pathname
  const currentRoute = location[location.length - 1];
  const displayCurrentRoute = currentRoute === "" ? "The Blog" : currentRoute;

  return (
    <div className="hero">
      <h1>{displayCurrentRoute}</h1>
    </div>
  );
};

export default Hero;
