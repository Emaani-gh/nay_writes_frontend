import React, { useEffect, useState } from "react";
import image from "./images/2ndImg.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:1337/api/blogs?populate=*");
    setBlogs(res.data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.data?.length > 0 ? (
        <div className="container all-blogs ">
          <h4>All blog posts</h4>
          <div className="grid-all-blogs m-grid">
            {blogs?.data.map(
              (
                {
                  id,
                  attributes: { Title, content, blogger, date, categories },
                },
                index
              ) => (
                <div key={index} className="card">
                  <div>
                    <img src={image} />
                  </div>
                  <Link to={`/blogs/${id}`} className="card-content">
                    <h6>{`${blogger} . ${date}`}</h6>
                    <h4>{Title}</h4>
                    <p>{content}</p>
                    <div>
                      {categories.data &&
                        categories.data.map(
                          ({ attributes: { name } }, index) => (
                            <span key={index}>{name}</span>
                          )
                        )}
                    </div>
                  </Link>
                </div>
              )
            )}

            {/* <Link to={`/blogs/1`} className="card">
            <div>
              <img src={image} />
            </div>
            <div className="card-content">
              <h6>Oliver Rhye . 1 Jan 2023</h6>
              <h4>UX review presentations</h4>
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div>
                <span>Design</span>
                <span>Research</span>
                <span>Presentation</span>
              </div>
            </div>
          </Link>

          <Link className="card">
            <div>
              <img src={image} />
            </div>
            <div className="card-content">
              <h6>Oliver Rhye . 1 Jan 2023</h6>
              <h4>UX review presentations</h4>
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div>
                <span>Design</span>
                <span>Research</span>
                <span>Presentation</span>
              </div>
            </div>
          </Link>
          <Link className="card">
            <div>
              <img src={image} />
            </div>
            <div className="card-content">
              <h6>Oliver Rhye . 1 Jan 2023</h6>
              <h4>UX review presentations</h4>
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div>
                <span>Design</span>
                <span>Research</span>
                <span>Presentation</span>
              </div>
            </div>
          </Link>
          <Link className="card">
            <div>
              <img src={image} />
            </div>
            <div className="card-content">
              <h6>Oliver Rhye . 1 Jan 2023</h6>
              <h4>UX review presentations</h4>
              <p>
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div>
                <span>Design</span>
                <span>Research</span>
                <span>Presentation</span>
              </div>
            </div>
          </Link> */}
          </div>
        </div>
      ) : (
        <>loding</>
      )}
    </div>
  );
};

export default AllBlogs;
