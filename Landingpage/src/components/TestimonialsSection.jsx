import React from 'react';
import '../App.css';

const testimonials = [
  {
    name: "Margaret E.",
    quote: "This is fantastic! Thanks so much guys!",
    image: "/images/testimonials-1.jpg" // Replace with the actual path to the image
  },
  {
    name: "Fred S.",
    quote: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    image: "/images/testimonials-2.jpg" // Replace with the actual path to the image
  },
  {
    name: "Sarah W.",
    quote: "Thanks so much for making these free resources available to us!",
    image: "/images/testimonials-3.jpg" // Replace with the actual path to the image
  }
];

const Testimonial = ({ name, quote, image }) => (
  <div className="testimonial">
    <img src={image} alt={name} className="testimonial-image" />
    <h3>{name}</h3>
    <p>"{quote}"</p>
  </div>
);

const TestimonialsSection = () => (
  <div className="testimonials-section">
    <h2>What people are saying...</h2>
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          quote={testimonial.quote}
          image={testimonial.image}
        />
      ))}
    </div>
  </div>
);

export default TestimonialsSection;
