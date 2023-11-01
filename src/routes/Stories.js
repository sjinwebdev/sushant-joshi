import React from "react";
import "./stories.css";

import { Header, Blog, Footer, Navbar } from "../components";

import bgUrl4 from "../media/background/background_4.jpg";

const Stories = () => {
  return (
    <div className="photography__stories">
      <Navbar wantHome="true" />
      <Header isVideo={false} url={bgUrl4} header_text="" />
      <div className="photography__stories-container">
        <h1 className="photography__stories-heading">Moments in Focus</h1>
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default Stories;
