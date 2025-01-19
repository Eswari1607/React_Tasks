import React from 'react';
import '../App.css';

const FullStackDevelopment = () => {
  return (
    <div className="course-container">
      <div className="course-item">
        <img src="https://miro.medium.com/v2/resize:fit:700/0*PSxcvFBVaufSCuwt.png" alt="REST APIs" />
        <h3>Understanding REST APIs</h3>
        <p>Learn about RESTful APIs and how to build them.</p>
      </div>
      <div className="course-item">
        <img src="https://www.guvi.in/blog/wp-content/uploads/2024/04/4-1200x628.webp" alt="Node.js" />
        <h3>Introduction to Node.js</h3>
        <p>A beginner's guide to Node.js and its ecosystem.</p>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
