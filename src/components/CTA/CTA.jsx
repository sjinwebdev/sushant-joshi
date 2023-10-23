import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";
import rightArrow from "../../assets/right_arrow.png";
const CTA = () => {
  return (
    <div className="photography__CTA">
      <div className="photography__CTA-container">
        <div className="photography__CTA-container_text">
          <h2>Read My Blog</h2>
          <p>For stories and insights.</p>
        </div>
        <div className="photography__CTA-container_btn">
          <Link to="/stories">
            <button>
              Explore Stories
              <img className="right_arrow" src={rightArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
