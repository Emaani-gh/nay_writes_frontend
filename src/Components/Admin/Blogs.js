import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { Link, json, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import cookie from "react-cookies";
import Cookies from "js-cookie";
import AdminHeader from "./AdminHeader";

const Blogs = () => {
  const api = process.env.REACT_APP_API_URL;

  const [blogs, setBlogs] = useState([]);
  const [authUser, setAuthUser] = useState({});
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    const jwtToken = Cookies.get("jwt");
    const headers = jwtToken
      ? { Authorization: `Bearer ${JSON.parse(jwtToken)}` }
      : {};

    try {
      const res = await axios.get(`${api}/blogs/private/`, {
        headers: headers,
      });
      setBlogs(res.data.blogs);
      setAuthUser(res.data.user);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Cookies.remove("jwt");
        navigate("/admin/login");
      } else {
        console.error("Error fetching blogs:", error);
        navigate("/admin/login");
      }
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (dateParam) => {
    const date = new Date(dateParam);
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "GMT",
    });
    return formattedDate;
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${api}/blogs/${id}`);
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log("Error Deleting", error);
    }
  };

  return (
    <>
      <AdminHeader />

      <div className="container">
        <div className="admin-top-div">
          <div>
            <h4>Blogs</h4>
            <p>{`${blogs.length} entry found`}</p>
          </div>
          <div>
            <Link className="link-button " to={"/admin/blogs/create"}>
              Create New Blog
            </Link>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Blogger</th>
                <th>Date</th>
                <th>options</th>
              </tr>
            </thead>

            <tbody>
              {blogs.map(({ _id, title, blogger, updatedAt }, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{blogger}</td>
                  <td>{formatDate(updatedAt)}</td>
                  <td className="options">
                    <div>
                      <Link to={`/admin/blog/${_id}`}>
                        <MdEdit />
                      </Link>

                      <Link>
                        <IoMdTrash
                          onClick={(e) => {
                            handleDelete(_id);
                          }}
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Blogs;
