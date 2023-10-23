import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import insta from "../../assets/instagram_.png";
import fb from "../../assets/facebook_.png";
import ytb from "../../assets/youtube_.png";
import { useEffect } from "react";

const Menu = () => (
  //fragment
  <>
    <Link to="/about-sj">
      <p>About SJ</p>
    </Link>
    <Link to="/galleries">
      <p>Gallery</p>
    </Link>
    <Link to="/stories">
      <p>Blog</p>
    </Link>
    <Link to="/contact-sj">
      <p>Contact SJ</p>
    </Link>
  </>
);

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="photography__footer">
      <div className="photography__footer-content">
        <div className="photography__footer-left">
          <Menu />
        </div>
        <div className="photography__footer-right">
          <div className="photography__footer-right_social-media">
            <p>Follow Sushant</p>
            <div className="icons">
              <a href="www.instagram.com">
                <img src={insta} alt="instagram" />
              </a>
              <a href="www.facebook.com">
                <img src={fb} alt="facebook" />
              </a>
              <a href="www.youtube.com">
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
