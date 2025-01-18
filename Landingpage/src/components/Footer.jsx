import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start my-auto">
            <ul className="list-inline mb-2">
              <div className="list-inline-item"><a href="#!">About</a>
             
             <a href="#!">Contact</a>
             
              <a href="#!">Terms of Use</a>
              
              <a href="#!">Privacy Policy</a></div>
            </ul>
            <p className="text-muted small mb-0">&copy; Your Website 2023. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 text-center text-lg-end my-auto">
            <ul className="list-inline mb-0">
              <div className="list-inline-item me-4">
                <a href="#!"><i className="bi-facebook fs-3"></i></a>
              
                <a href="#!"><i className="bi-twitter fs-3"></i></a>
              
              
                <a href="#!"><i className="bi-instagram fs-3"></i></a>
                </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
