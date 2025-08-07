import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards.jsx";
import '../stylesheets/InfiniteMovingCards.css';

function App() {
  const [testimonials, setTestimonials] = useState([]);

  const CACHE_KEY = "testimonials";
  const CACHE_TIME_KEY = "testimonials_time";
  const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

  const fetchTestimonials = async () => {
    try {
      const res = await fetch("https://setc-backend.onrender.com/testimonial");
      const data = await res.json();

      const cached = localStorage.getItem(CACHE_KEY);
      const cachedData = cached ? JSON.parse(cached) : null;

      if (!cachedData || JSON.stringify(cachedData) !== JSON.stringify(data)) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIME_KEY, Date.now());
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    const isFresh = cachedTime && (Date.now() - cachedTime < CACHE_DURATION);

    if (cached && isFresh) {
      setTestimonials(JSON.parse(cached));
    } else {
      fetchTestimonials();
    }
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
