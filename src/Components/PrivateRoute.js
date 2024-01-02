import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

const PrivateRoute = () => {
  const { authUser } = useContext(UserContext);
  return <div>{authUser ? <Outlet /> : <Navigate to={"/admin/login"} />}</div>;
};

export default PrivateRoute;
