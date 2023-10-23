import React from "react";

import { Header, Blog, Footer } from "../components";

import bgUrl4 from "../media/background/background_4.jpg";

const Stories = () => {
  return (
    <div className="photography__stories">
      <Header isVideo={false} url={bgUrl4} header_text="" />
      <h1 className="photography__stories">Moments in Focus</h1>
      <Blog />
      <Footer />
    </div>
  );
};

export default Stories;
