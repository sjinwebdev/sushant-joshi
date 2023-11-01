import React from "react";
import "./App.css";
import { Header, Explore, Navbar, Featured, Footer } from "./components";
import bgUrl from "./media/background/background.mp4";

const App = () => {
  return (
    <div className="photography">
      <div className="photography__header-app">
        <Navbar />
        <Header
          isVideo={true}
          url={bgUrl}
          header_text="Capturing Moments Creating Memories"
        />
      </div>
      <Explore />
      <Featured />
      <Footer />
    </div>
  );
};

export default App;
// link to github put inside package.json
// "https://sjinwebdev.github.io/sushant-joshi"
