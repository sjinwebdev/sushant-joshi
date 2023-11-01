import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Main-Logo.png";
import homeLogo from "../../assets/home48.png";
import { Link } from "react-router-dom";

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

const Navbar = ({ wantHome = false }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="photography__navbar">
      <div className="photography__navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="photography__navbar-links__container">
        <Menu />
        <div
          className={`photography__navbar-home ${wantHome ? "" : "hide-home"}`}
        >
          <Link to="/">
            <img src={homeLogo} alt="home" title="home" />
          </Link>
        </div>
      </div>
      <div className="photography__navbar-menu">
        <div
          className={`photography__navbar-home ${wantHome ? "" : "hide-home"}`}
        >
          <Link to="/">
            <img src={homeLogo} alt="home" title="home" />
          </Link>
        </div>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="photography__navbar-menu_container shadow-drop-2-tr">
            <div className="photography__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
