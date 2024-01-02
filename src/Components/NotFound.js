import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Import an icon of your choice

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="not-found">
        <h2>404 - Not Found</h2>
        <p>Oops! The page you are looking for doesn't exist.</p>
        <FaExclamationTriangle className="icon" />
        <button
          onClick={(e) => {
            navigate(-1);
          }}
        >
          Go back to previous page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
