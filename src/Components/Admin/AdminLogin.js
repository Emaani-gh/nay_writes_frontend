import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import { UserContext } from "../Context/UserContext";
import AdminHeader from "./AdminHeader";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { actions } = useContext(UserContext);
  const { authUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    authUser && navigate("/admin/blogs");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await actions.signIn(formData);
      if (user) {
        setFormData({});
        navigate("/admin/blogs");
      } else {
        throw new Error("not signed in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <AdminHeader />
      <div className="container">
        <div className="form-container">
          <form
            className="login-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email || ""}
                required
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password || ""}
                required
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
