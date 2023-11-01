import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import insta from "../../assets/instagram_.png";
import fb from "../../assets/facebook_.png";
import ytb from "../../assets/youtube_.png";
import topPg from "../../assets/top.png";
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
      <p>Stories</p>
    </Link>
    <Link to="/contact-sj">
      <p>Contact SJ</p>
    </Link>
  </>
);

//function for top btn
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//clicking on webpages moves viewport view to top, useffect can only be used inside the body of function component
//that's why created scrollTop it doens't work inside jsx
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="photography__footer">
      <div className="photography__footer-content">
        <div className="to-top" onClick={scrollToTop}>
          <p className="to-top-text">Back to Top</p>
          <img src={topPg} alt="top" title="scroll to top" />
        </div>
        <div className="photography__footer-left">
          <Menu />
        </div>
        <div className="photography__footer-right">
          <div className="photography__footer-right_social-media">
            <p>Follow Sushant</p>
            <div className="icons">
              {/* rel="noopener noreferrer" prevents phishing in older browsers */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="instagram" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="facebook" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
