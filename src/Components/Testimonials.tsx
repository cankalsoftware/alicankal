import React from "react";
import { TestimonialsData } from "../types/resume";

interface TestimonialsProps {
  data?: TestimonialsData;
}

const Testimonials = ({ data }: TestimonialsProps) => {
  if (!data) return null;

  const testimonials = data.testimonials.map(function (testimonial) {
    return (
      <li key={testimonial.user}>
        <blockquote>
          <p style={{ whiteSpace: 'pre-line' }}>{testimonial.text}</p>
          <cite>{testimonial.user}</cite>
        </blockquote>
      </li>
    );
  });

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
