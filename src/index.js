import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSj from "../src/routes/AboutSj";
import Galleries from "../src/routes/Galleries";
import Stories from "../src/routes/Stories";
import ContactSj from "../src/routes/ContactSj";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about-sj" element={<AboutSj />} />
      <Route path="/galleries" element={<Galleries />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/contact-sj" element={<ContactSj />} />
    </Routes>
  </BrowserRouter>
);
