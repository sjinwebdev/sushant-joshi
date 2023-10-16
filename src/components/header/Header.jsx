import "./header.css";
import Navbar from "../navbar/Navbar";
import right_arrow from "../../assets/right_arrow.png";
import down_arrow from "../../assets/down-arrow.png";
import { useState, useEffect } from "react";

const Header = ({ isVideo = true, url = "", header_text }) => {
  // used chatGpt for scroll logic, used for downArrow
  const [hideDownArrow, setHideDownArrow] = useState(false);

  useEffect(() => {
    //event listener function
    const handleScroll = () => {
      if (window.scrollY >= 25) {
        setHideDownArrow(true);
      } else {
        setHideDownArrow(false);
      }
    };
    //creating an event listener
    window.addEventListener("scroll", handleScroll);
    //this is a cleanup function to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="photography__header">
      <Navbar />
      {isVideo ? (
        <>
          <video src={url} autoPlay loop muted preload="auto" />
          <div className="photography__header-content">
            <h1 className="photography__header-content-heading">
              {header_text}
            </h1>
            <div className="photography__header-content-btn">
              <button>Visit Gallery</button>
              <img src={right_arrow} alt="" />
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="photography__header-imgBackground"
            src={url}
            alt="background"
          />
        </>
      )}
      <div
        className={`photography__header-downArrow slide-bottom ${
          hideDownArrow && "hidden"
        }`}
      >
        <img src={down_arrow} alt=""></img>
      </div>
    </div>
  );
};

export default Header;
