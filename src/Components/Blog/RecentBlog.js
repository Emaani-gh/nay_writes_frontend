import React from "react";
import "./blog.css";
import Image from "./images/remy.jpg";
import Image2 from "./images/2ndImg.jpg";
import { Link } from "react-router-dom";

const RecentBlog = () => {
  return (
    <div className="container recent-blogs">
      <h4>Recent Blog Post</h4>
      <div className="grid-recent-blog">
        <Link to={`/blogs/1`} className="card card-1">
          <div className="image">
            <img src={Image} />
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

        <Link className="card card-2">
          <div className="image">
            <img src={Image2} />
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
        <Link className="card card-3">
          <div className="image">
            <img src={Image2} />
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
        <Link className="card card-4">
          <div className="image">
            <img src={Image} />
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
      </div>
    </div>
  );
};

export default RecentBlog;
