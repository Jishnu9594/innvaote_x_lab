import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/innovatex/blogs/") // Update with your actual API endpoint
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  // Show only the latest 6 blogs initially
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 6);

  return (
    <div className="blog-section">
      <div className="blog-header">
        <h1 className="blog-section-title">InnovateX Labs Blog</h1>
        <p className="blog-section-description">
          Stay updated with the latest trends and insights in software
          development, AI, and more.
        </p>
      </div>

      <div className="blog-posts-container">
        {visiblePosts.map((post, index) => (
          <div key={index} className="blog-post-card">
            <div className="blog-post-image-container">
              <img
                src={post.image} // Assuming Django API returns the full image URL
                alt={post.blog_title}
                className="blog-post-image"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }} // Fallback image if error occurs
              />
            </div>
            <div className="blog-post-content">
              <h3 className="blog-post-title">{post.blog_title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-post-link">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Show "View All Blogs" button only if there are more than 6 posts */}
      {blogPosts.length > 6 && !showAll && (
        <div className="blog-view-all">
          <button className="view-all-button" onClick={() => setShowAll(true)}>
            View All Blogs
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
