import React from "react";
import RecentBlog from "../Components/Blog/RecentBlog";
import AllBlogs from "../Components/Blog/AllBlogs";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <RecentBlog />
      <AllBlogs />
    </>
  );
};

export default Home;
