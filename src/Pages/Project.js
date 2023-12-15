import React from "react";
import image from "../Components/Blog/images/2ndImg.jpg";
import Hero from "../Components/Hero";

const Project = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <h4>List Project</h4>
        <div className="m-grid">
          <div className="card">
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
          </div>
          <div className="card">
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
          </div>
          <div className="card">
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
          </div>
          <div className="card">
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
