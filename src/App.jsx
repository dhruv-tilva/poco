import { useState } from "react";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
