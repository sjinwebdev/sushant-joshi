import React from "react";
import "./footer.css";
import insta from "../../assets/instagram_.png";
import fb from "../../assets/facebook_.png";
import ytb from "../../assets/youtube_.png";

const Menu = () => (
  //fragment
  <>
    <p>
      <a href="#about-sj">About SJ</a>
    </p>
    <p>
      <a href="#gallery">Gallery</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
    <p>
      <a href="#contact-sj">Contact SJ</a>
    </p>
  </>
);

const Footer = () => {
  return (
    <div className="photography__footer">
      <div className="photography__footer-content">
        <div className="photography__footer-left">
          <Menu />
        </div>
        <div className="photography__footer-right">
          <div className="photography__footer-right_social-media">
            <h3>Follow Sushant</h3>
            <div className="icons">
              <a href="">
                <img src={insta} alt="instagram" />
              </a>
              <a href="">
                <img src={fb} alt="facebook" />
              </a>
              <a href="">
                <img src={ytb} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="email-list">
            <h3>Join the email list</h3>
            <input type="email" placeholder="Enter your email" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="photography_footer-copyright">
        <p>&copy; Copyright Sushant Joshi 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
