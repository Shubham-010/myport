// Bubble.js
import React, { useEffect, useRef } from 'react';
import '../bubbleeffect.css';

function Bubble() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const size = Math.random() * 40 + 10; // Random size between 10px and 50px
    const delay = Math.random() * 5; // Random delay up to 5 seconds
    const left = Math.random() * 100; // Random horizontal position (percentage)

    if (bubbleRef.current) {
      bubbleRef.current.style.width = `${size}px`;
      bubbleRef.current.style.height = `${size}px`;
      bubbleRef.current.style.left = `${left}%`;
      bubbleRef.current.style.animationDelay = `${delay}s`;
    }
  }, []);

  return <div className="bubble" ref={bubbleRef}></div>;
}

export default Bubble;
