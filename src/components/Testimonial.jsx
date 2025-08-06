import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards.jsx";
import '../stylesheets/InfiniteMovingCards.css';

function App() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://setc-backend.onrender.com/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  return (
    <div className="testimonial-container">
      <div className="testimonial-container1">
        <p className="test_text1">What Our Members Say</p>
        <p className="test_text2">
          Each meeting brought a little progress. Here's what our members have
          experienced along the way.
        </p>
      </div>

      <div className="testimonial-container2">
        {testimonials.length > 0 ? (
          <InfiniteMovingCards
            items={testimonials.map(t => ({
              quote: t.message,
              name: t.name
            }))}
            speed="normal"
          />
        ) : (
          <p>Loading testimonials...</p>
        )}
      </div>
    </div>
  );
}

export default App;
