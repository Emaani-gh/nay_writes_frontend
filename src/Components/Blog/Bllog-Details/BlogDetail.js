import React, { useEffect, useState } from "react";
import "./blogDetails.css";
import { sanitizeAndValidateHTML } from "../../Helper";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../Header/Header";

const BlogDetail = () => {
  const api = process.env.REACT_APP_API_URL;

  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const fetchBlog = async () => {
    const res = await axios.get(`${api}/blogs/${id}`);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {blog ? (
          <>
            <div className="blog-detail">
              <h6>{`${blog.blogger} . 1 Jan 2023`}</h6>
              <h4>{blog.title}</h4>
              <div className="d-img">
                <img src={`${blog.image}`} />
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
