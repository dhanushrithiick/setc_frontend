"use client";

import React, { useEffect, useState, useRef } from "react";
import "../stylesheets/InfiniteMovingCards.css";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      if (scrollerRef.current.children.length > items.length) return;

      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicate);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  }

  function setDirection() {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  }

  function setSpeed() {
    let duration = "20s"; // fast
    if (speed === "normal") duration = "35s";
    else if (speed === "slow") duration = "80s";

    containerRef.current?.style.setProperty("--animation-duration", duration);
  }

  return (
    <div ref={containerRef} className={`scroller ${className}`}>
      <ul
        ref={scrollerRef}
        className={`${start ? "animate-scroll" : ""} ${
          pauseOnHover ? "hover-pause" : ""
        }`}
      >
        {items.map((item, idx) => (
          <li className="card" key={item.name + idx}>
            <blockquote>
              <span className="quote-text">{item.quote}</span>
              <div className="quote-author">
                <span>~{item.name}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
