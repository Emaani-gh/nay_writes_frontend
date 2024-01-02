import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About/About";

import Footer from "./Components/Footer/Footer";
import Project from "./Pages/Project";
import Newsletter from "./Pages/Newsletter";
import BlogDetail from "./Components/Blog/Bllog-Details/BlogDetail";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminBlogs from "./Components/Admin/Blogs";
import CreateBlog from "./Components/Admin/CreateBlog";
import ViewBlogDetail from "./Components/Admin/ViewBlogDetail";
import AdminSignUp from "./Components/Admin/AdminSignUp";
import PrivateRoute from "./Components/PrivateRoute";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="layout">
          {/* <Header /> */}

          <Routes>
            <Route path="/admin/signup" element={<AdminSignUp />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<PrivateRoute />}>
              <Route path="/admin/blogs" element={<AdminBlogs />} />
              <Route path="/admin/blogs/create" element={<CreateBlog />} />
              <Route path="/admin/blog/:id" element={<ViewBlogDetail />} />
            </Route>

            <Route>
              <Route path="/" index element={<Home />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/newsletter" element={<Newsletter />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
