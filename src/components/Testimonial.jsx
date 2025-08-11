import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards.jsx";
import '../stylesheets/InfiniteMovingCards.css';

function App() {
  const [testimonials, setTestimonials] = useState([]);

  const CACHE_KEY = "testimonials";
  const CACHE_TIME_KEY = "testimonials_time";

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("https://setc-backend.onrender.com/testimonial");
      const data = await res.json();

      // Update cache and state with latest data
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(CACHE_TIME_KEY, Date.now());
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    // Show cached data instantly if available
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      setTestimonials(JSON.parse(cached));
    }

    // Always fetch fresh data on reload
    fetchTestimonials();
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
          <p className="testimonial_loading_text">Loading testimonials...</p>
        )}
      </div>
    </div>
  );
}

export default App;
