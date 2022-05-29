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
import Program from "./screens/Program/Program";
import Programs from "./screens/Programs/Programs";
import Privacy from "./screens/Privacy/Privacy";

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
      <Route path="/program" element={<Program />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  );
}

export default App;