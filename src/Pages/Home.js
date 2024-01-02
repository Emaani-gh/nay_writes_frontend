import React from "react";
import RecentBlog from "../Components/Blog/RecentBlog";
import AllBlogs from "../Components/Blog/AllBlogs";
import Hero from "../Components/Hero";
import Header from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <RecentBlog /> */}
      <AllBlogs />
    </>
  );
};

export default Home;
