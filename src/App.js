import React from "react";
import { Route, Routes } from "react-router";
import './index.css';
import Home from "./screens/Index"
import Gallery from "./screens/Gallery/Gallery"
import Contact from "./screens/Contact/Contact";
import About from "./screens/About/About";
import News from "./screens/News/News";
import SingleNews from "./screens/SingleNews/SingleNews";
import Faqs from "./screens/Faqs/Faqs";
import Programs from "./screens/Programs/Programs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/single-news" element={<SingleNews />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/programs" element={<Programs />} />
    </Routes>
  );
}

export default App;