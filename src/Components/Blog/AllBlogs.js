import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const AllBlogs = () => {
  const api = process.env.REACT_APP_API_URL;

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${api}/blogs/public/`);
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data, regardless of success or failure
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="sweet-loading">
          <RingLoader
            css={override}
            size={150}
            color={"#123abc"}
            loading={loading}
          />
          Loading...
        </div>
      ) : blogs.length > 0 ? (
        <div className="container all-blogs ">
          <h4>All blog posts</h4>
          <div className="grid-all-blogs m-grid">
            {blogs.map(
              (
                { _id, title, blogger, category, summary, image, updatedAt },
                index
              ) => (
                <div key={index} className="card">
                  <div>
                    {image ? (
                      <img src={image} alt="Blog Thumbnail" />
                    ) : (
                      <div className="placeholder-image"></div>
                    )}
                  </div>
                  <Link to={`/blogs/${_id}`} className="card-content">
                    <h6>{`${blogger} . ${updatedAt}`}</h6>
                    <h4>{title}</h4>
                    <p>{summary}</p>
                    <div>
                      <span>{category}</span>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div>No blogs found.</div>
      )}
    </div>
  );
};

export default AllBlogs;
