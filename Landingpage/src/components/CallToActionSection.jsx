import React, { useState, forwardRef } from 'react';
import '../App.css';

const CallToActionSection = forwardRef((props, ref) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="call-to-action text-white text-center" id="signup" ref={ref}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            {submitted ? (
              <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                <p>To activate this form, sign up at</p>
                <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            ) : (
              <form className="form-subscribe" id="contactFormFooter" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <input
                      className="form-control form-control-lg"
                      id="emailAddressBelow"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <div className="invalid-feedback text-white">Email Address is required.</div>
                    <div className="invalid-feedback text-white">Email Address Email is not valid.</div>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default CallToActionSection;
