import React from "react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Transforming the Future of Software with AI",
      excerpt:
        "AI is revolutionizing software development, making applications smarter and more efficient. Here's how.",
      image: "images/blog1.jpg",
      link: "#",
    },
    {
      title: "The Importance of Cybersecurity in Modern Applications",
      excerpt:
        "In today's digital world, cybersecurity is more important than ever. Learn how to secure your software applications.",
      image: "images/blog2.jpg",
      link: "#",
    },
    {
      title: "Mastering Cloud Computing for Scalable Solutions",
      excerpt:
        "Cloud computing is the backbone of scalable software solutions. Explore how it's changing the game for developers.",
      image: "images/blog3.jpg",
      link: "#",
    },
  ];

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
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post-card">
            <div className="blog-post-image-container">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
            </div>
            <div className="blog-post-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-post-link">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
