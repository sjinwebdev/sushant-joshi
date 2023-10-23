import React from "react";
import "./contactsj.css";
import { Navbar, CTA, Footer } from "../components";

const ContactSj = () => {
  return (
    <div className="photography__contactsj">
      <div className="photography__contactSj_navbar">
        <Navbar />
      </div>

      <div className="photography__contactSj-content">
        <h1>Contact SJ</h1>

        <h3>Email</h3>
        <p>sjphotography@mail.com</p>
        <h3>Phone number</h3>
        <p>1234567891</p>
        <h3>Mailing Address</h3>
        <p>Punjab, India</p>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default ContactSj;
