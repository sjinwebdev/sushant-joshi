import React from "react";
import "./aboutsj.css";
import { Header, CTA, Footer, Navbar } from "../components";

import bgUrl2 from "../media/background/background_2.jpg";

const AboutSj = () => {
  return (
    <div className="photography__aboutSj">
      <Navbar wantHome="true" />
      <Header isVideo={false} url={bgUrl2} header_text="" />

      <div className="photography__aboutSj-content">
        <h1>About Sushant Joshi</h1>

        <p>
          Hello, I'm Sushant Joshi, a passionate mobile photographer with an
          unyielding love for capturing the beauty of nature, the essence of
          people, and the soul of animals through the lens of my mobile device.
          My photography journey has been a delightful adventure as I seek to
          preserve the remarkable moments that surround us every day. Whether
          it's the serenity of a sunrise, the warmth of a smile, or the
          playfulness of a furry friend, I aim to share the beauty that the
          world offers.
        </p>

        <h3>🌍A Glimpse Beyond Photography🌍</h3>
        <p>
          Beyond photography, I am a frontend developer, crafting digital
          experiences and user interfaces. I've created this website from
          scratch, meticulously designing and coding every element to showcase
          my visual storytelling.
        </p>

        <h3>🎨Art Enthusiast🎨</h3>
        <p>
          In addition to photography and web development, I find joy in
          expressing myself through other creative avenues. Sketching, painting,
          and singing are my outlets for exploring the depths of my artistic
          soul. Thank you for joining me on this visual journey. I hope my work
          resonates with you and brings a touch of beauty, inspiration, and
          wonder to your day. Feel free to explore my portfolio, and don't
          hesitate to reach out for collaboration, inquiries, or just to share
          your thoughts
        </p>

        <p>🎉Cheers to the beauty of life, art, and exploration!</p>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutSj;
