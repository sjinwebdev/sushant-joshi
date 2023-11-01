import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import blogPosts from "../../data/blog";

const Blog = () => {
  return (
    <div className="photography__blog">
      <div className="photography__blog-container">
        {blogPosts.content.map((post) => (
          <div className="photography__blog-container_post" key={post.postId}>
            <img className="post-image" src={post.src} alt={post.title} />
            <p className="post-date">{post.date}</p>
            <h3 className="post-title">{post.title}</h3>
            <div className="title-bar"></div>
            <p className="post-description">{post.description}</p>
            {/* provides postId value to the url */}
            <Link to={`/stories/${post.postId}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
