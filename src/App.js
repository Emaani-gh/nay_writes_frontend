import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About/About";

import Footer from "./Components/Footer/Footer";
import Project from "./Pages/Project";
import Newsletter from "./Pages/Newsletter";
import BlogDetail from "./Components/Bllog-Details/BlogDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="layout">
          <Header />
          <Routes>
            <Route>
              <Route path="/" index element={<Home />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
