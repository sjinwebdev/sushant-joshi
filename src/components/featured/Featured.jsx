import React from "react";
import "./featured.css";
import featured_1 from "../../media/featured_stories/featured_1.jpg";
import featured_2 from "../../media/featured_stories/featured_2.jpg";
import right_arrow from "../../assets/right_arrow.png";

const Featured = () => {
  return (
    <div className="photography__featured">
      <div className="photography__featured-heading">
        <h1>Featured Stories</h1>
      </div>
      <div className="photography__featured-stories_container">
        <div className="photography__features-stories_container-content">
          <img src={featured_1} alt="a mountain in Uttrakhand" />

          <div className="story-text">
            <h3>Uttarakhand</h3>
            <div className="story-text_bar"></div>
          </div>
        </div>
        <div className="photography__features-stories_container-content">
          <img src={featured_2} alt="trains's engine" />
          <div className="story-text">
            <h3>Electric Loco Shed Ludhiana</h3>
            <div className="story-text_bar"></div>
          </div>
        </div>
      </div>
      <button className="photography__featured-btn">
        See More Stories
        <img src={right_arrow} alt="" />
      </button>
    </div>
  );
};

export default Featured;
