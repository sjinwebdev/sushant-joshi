import React from "react";
import "./galleries.css";
import { Header, Gallery, Navbar, CTA, Footer } from "../components/index";
import bgUrl3 from "../media/background/background_3.jpg";
const data = require("../data/data");

const Galleries = () => {
  return (
    <div className="photography__galleries">
      <Navbar wantHome="true" />
      <Header isVideo={false} url={bgUrl3} header_text="" />
      <div className="photography__galleries-container">
        <h1>Galleries</h1>
        <Gallery data={data} />
      </div>

      <CTA />
      <Footer />
    </div>
  );
};

export default Galleries;
