import React, { useContext, useEffect, useState } from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import AdminHeader from "./AdminHeader";

const AdminSignUp = () => {
  const { actions, authUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    authUser && navigate("/admin/blogs");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.passConfirm) {
      try {
        const user = await actions.signUp(formData);
        if (user) {
          setFormData({});
          navigate("/admin/blogs");
        } else {
          throw new Error("User not created");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("password does not match");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <AdminHeader />
      <div className="container ">
        <div className="form-container">
          <form
            className="signup-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="fname">first name</label>
              <input
                name="firstName"
                type="text"
                id="fname"
                placeholder="Enter your First Name"
                value={formData.firstName || ""}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last name</label>
              <input
                name="lastName"
                type="text"
                id="lname"
                placeholder="Enter your Last Name"
                value={formData.lastName || ""}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="uname">Username</label>
              <input
                name="username"
                type="text"
                id="uname"
                placeholder="Enter your Username"
                value={formData.username || ""}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email || ""}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password || ""}
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Confirm Password</label>
              <input
                name="passConfirm"
                type="password"
                id="passConfirm"
                placeholder="Enter your password"
                value={formData.passConfirm || ""}
                required
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

export default AdminSignUp;
