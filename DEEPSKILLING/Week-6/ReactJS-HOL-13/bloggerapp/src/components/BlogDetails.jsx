import React from 'react';
import blogs from '../data/blogs';

// Component to render Blog Details
function BlogDetails() {
  return (
    <div className="section-column blog-section">
      <h2 className="section-heading">Blog Details</h2>
      <div className="items-container">
        {/* Step 4: Display all blogs using map() with key={blog.id} */}
        {blogs.map((blog) => (
          <div className="item-row blog-item" key={blog.id}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-author"><strong>{blog.author}</strong></p>
            <p className="blog-desc">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
