import React,{useState,useRef} from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const signupRef = useRef(null);
  const handleSignupClick = () => { 
  signupRef.current.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => { const emailInput = signupRef.current.querySelector('#emailAddressBelow');
    emailInput.focus();
  }, 500);
};
const handleHeaderSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
};
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Start Bootstrap</div>
        <a href="#signup" className="sign-up-button">Sign Up </a>
      </nav>
      <header className="header">
        <h1>
          Generate more leads 
          with a professional <br />
          landing page!
        </h1>
        <div className="email-form">
        {!submitted ? (
          <form onSubmit={handleHeaderSubmit}>
          <input type="email" placeholder="Email Address" required/>
          <button type="submit">Submit</button>
          </form>
        ):(
          <div className="text-center mb-3">
          <div className="fw-bolder">Form submission successful!</div>
          <p>To activate this form, sign up at</p>
          <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
           https://startbootstrap.com/solution/contact-forms </a>
        </div>
        )}
        </div>
      </header>
      <section className="features">
        <div className="features-container">
          <div className="features-icons-item">
            <div className="features-icons-icon d-flex">
              <i className="bi bi-window m-auto text-primary"></i>
            </div>
            <h3>Fully Responsive</h3>
            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
          </div>
          <div className="features-icons-item">
            <div className="features-icons-icon d-flex">
              <i className="bi bi-layers m-auto text-primary"></i>
            </div>
            <h3>Bootstrap 5 Ready</h3>
            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
          </div>
          <div className="features-icons-item">
            <div className="features-icons-icon d-flex">
              <i className="bi bi-terminal m-auto text-primary"></i>
            </div>
            <h3>Easy to Use</h3>
            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0 showcase-row">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('/images/bg-showcase-1.jpg')" }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Fully Responsive Design</h2>
              <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
            </div>
          </div>
          <div className="row g-0 showcase-row">
           
            <div className="col-lg-6 my-auto showcase-text">
              <h2>Updated For Bootstrap 5</h2>
              <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
            </div>
            <div className="col-lg-6 showcase-img" style={{ backgroundImage: "url('/images/bg-showcase-2.jpg')" }}></div>
          </div>
          <div className="row g-0 showcase-row">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url('/images/bg-showcase-3.jpg')" }}></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Easy to Use & Customize</h2>
              <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection /> 
      <CallToActionSection  ref={signupRef}/>
      <Footer/>
    </div>
  );
}

export default App;
