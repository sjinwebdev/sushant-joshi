import React from "react";
import "./explore.css";
import right_arrow from "../../assets/right_arrow.png";
import Slideshow from "../slideshow/Slideshow";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="photography__explore section__padding">
      <div className="photography__explore_slideshow">
        <Slideshow />
      </div>
      <div className="photography__explore_btn">
        <Link to="/galleries">
          <button>
            Explore Gallery
            <img
              className="photography__explore_btn-img"
              src={right_arrow}
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
