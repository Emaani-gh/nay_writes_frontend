import React, { useEffect, useState } from "react";
import "./blogDetails.css";
import { sanitizeAndValidateHTML } from "../../Helper";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const BlogDetail = () => {
  const api = process.env.REACT_APP_API_URL;

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
  const { id } = useParams();

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${api}/blogs/${id}`);
      setBlog(res.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data, regardless of success or failure
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {loading ? (
          <div className="sweet-loading">
            <RingLoader size={150} color={"#123abc"} loading={loading} />
          </div>
        ) : blog ? (
          <>
            <div className="blog-detail">
              <h6>{`${blog.blogger} . 1 Jan 2023`}</h6>
              <h4>{blog.title}</h4>
              <div className="d-img">
                {blog.image ? (
                  <img src={blog.image} alt="Blog Thumbnail" />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeAndValidateHTML(blog.content),
                }}
              ></p>
            </div>
          </>
        ) : (
          <>Loading</>
        )}
      </div>
    </>
  );
};

export default BlogDetail;
