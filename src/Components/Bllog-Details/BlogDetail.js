import React, { useEffect, useState } from "react";
import "./blogDetails.css";
import image from "../Blog/images/2ndImg.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const fetchBlog = async () => {
    const res = await axios.get(`http://localhost:1337/api/blogs/1?populate=*`);
    const {
      data: {
        id,
        attributes: {
          Title,
          blogger,
          date,
          content,
          image: { data },
        },
      },
    } = res.data;
    console.log(data);

    setBlog({
      title: Title,
      blogger,
      date,
      content,
      image: data.attributes.url,
    });
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <div className="container">
        {blog ? (
          <>
            <div className="blog-detail">
              <h6>{`${blog.blogger} . 1 Jan 2023`}</h6>
              <h4>{blog.title}</h4>
              <div className="d-img">
                <img src={`http://localhost:1337${blog.image}`} />
              </div>
              <p>{blog.content}</p>
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
