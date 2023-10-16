import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Main-Logo.png";

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

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="photography__navbar">
      <div className="photography__navbar-logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="photography__navbar-links__container">
        <Menu />
      </div>
      <div className="photography__navbar-menu">
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
