import React from "react";
import "./featured.css";

import right_arrow from "../../assets/right_arrow.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import blogPosts from "../../data/blog";

const Featured = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // get images for the first two objects in blog.js
  const featuredBlogPosts = blogPosts.content.slice(0, 2);

  return (
    <div className="photography__featured">
      <div className="photography__featured-heading">
        <h1>Featured Stories</h1>
      </div>
      <div className="photography__featured-stories_container">
        {featuredBlogPosts.map((post) => (
          <div
            key={post.postId}
            className="photography__features-stories_container-content"
          >
            <img src={post.src} alt={post.title} />
            <div className="story-text">
              <h3>{post.title}</h3>
              <Link to={`/stories/${post.postId}`}>
                <button className="full-story-btn">Uncover the Story</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/stories">
        <button className="photography__featured-btn">
          See More Stories
          <img src={right_arrow} alt="" />
        </button>
      </Link>
    </div>
  );
};

export default Featured;
