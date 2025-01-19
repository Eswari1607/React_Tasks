import React from 'react';
import '../App.css';

const Career = () => {
  return (
    <div className="course-container">
      <div className="course-item">
       
        <img src="https://www.codecademy.com/resources/blog/wp-content/uploads/2022/12/technical-portfolio-guide.png" alt="Tech Portfolio" />
        <h3>Building a Tech Portfolio</h3>
        <p>Tips on creating an impressive portfolio to showcase your skills.</p>
      </div>
      <div className="course-item">
        <img src="https://resources.workable.com/wp-content/uploads/2018/05/prepare-interviews-featured.png" alt="Interview Preparation" />
        <h3>Interview Preparation Guide</h3>
        <p>How to prepare for technical interviews and succeed.</p>
      </div>
    </div>
  );
};

export default Career;
