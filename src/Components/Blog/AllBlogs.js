import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllBlogs = () => {
  const api = process.env.REACT_APP_API_URL;

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get(`${api}/blogs/public/`);

    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.length > 0 ? (
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
                    <img src={image} />
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
        <>loding</>
      )}
    </div>
  );
};

export default AllBlogs;
