import React from "react";
import "./explore.css";
import right_arrow from "../../assets/right_arrow.png";
import Slideshow from "../slideshow/Slideshow";

const Explore = () => {
  return (
    <div className="photography__explore section__padding">
      <div className="photography__explore_slideshow">
        <Slideshow />
      </div>
      <div className="photography__explore_btn">
        <button>
          Explore Gallery
          <img
            className="photography__explore_btn-img"
            src={right_arrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Explore;
