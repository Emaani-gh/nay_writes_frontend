import React from "react";
import Hero from "../Components/Hero";

const Newsletter = () => {
  return (
    <>
      <Hero />
      <div className="container newsletter">
        <h5>Newsletter</h5>
        <h4>Stories and interviews</h4>
        <p>
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
        <form className="newsletter-form">
          <input type="text" placeholder="Enter Your email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
