import React from 'react';
import '../App.css';

const CyberSecurity = () => {
  return (
    <div className="course-container">
      <div className="course-item">
      
        <img src="https://www.secquest.co.uk/wp-content/uploads/2024/04/network-security-1024x683.jpg" alt="Network Security" />
        <h3>Understanding Network Security</h3>
        <p>Basics of network security and how to protect your systems.</p>
      </div>
      <div className="course-item">
        <img src="https://www.insystechnologies.in/images/eh.png" alt="Ethical Hacking" />
        <h3>Introduction to Ethical Hacking</h3>
        <p>Learn the fundamentals of ethical hacking.</p>
      </div>
    </div>
  );
};

export default CyberSecurity;
