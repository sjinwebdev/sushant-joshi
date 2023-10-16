import React from "react";
import "./App.css";
import { Header, Explore, Featured, Footer } from "./components";
import bgUrl from "./media/background/background.mp4";

const App = () => {
  return (
    <div className="photography">
      <div className="photography__header-app">
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
