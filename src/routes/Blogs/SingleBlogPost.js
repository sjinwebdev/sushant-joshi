import React from "react";
import { Link, useParams } from "react-router-dom";
import "./singleBlogPost.css";
import blogPosts from "../../data/blog";
import { Footer, Navbar } from "../../components";
import arrowLeft from "../../assets/arrow-left.png";

function SingleBlogPost() {
  //collects the postId got from blog.jsx --> index.js
  const { postId } = useParams();

  // Access the content property to get the array of blog posts
  const blogPostsArray = blogPosts.content;

  // Finds the blog post with the matching postId
  const blogPost = blogPostsArray.find(
    (post) => post.postId === parseInt(postId, 10)
  );

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="photography__singlePost">
      <div className="photography__singlePost-navbar">
        <Navbar wantHome="true" />
      </div>
      <div className="photography__singlePost_container">
        <div className="photography__singlePost_container-content">
          <h2>{blogPost.title}</h2>
          <p className="date">{blogPost.date}</p>
          <img src={blogPost.src} alt={blogPost.title} />
          <div className="article">
            {blogPost.article.map((para, index) => (
              <p key={index}>
                {/* logic to seletect the first letter of the very first index */}
                {index === 0 ? (
                  <div>
                    <span className="first-letter">{para.charAt(0)}</span>
                    {para.substring(1)}
                  </div>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>
        </div>
        <Link to="/stories">
          <button>
            <img className="arrow-left" src={arrowLeft} alt="arrow-left" />
            Back to Stories
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default SingleBlogPost;
