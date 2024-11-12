// BubbleEffect.js
import React from 'react';
import Bubble from '../Component/bubbleComp';

function BubbleEffect() {
  return (
    <div className="bubble-container">
      {Array.from({ length: 20 }).map((_, index) => (
        <Bubble key={index} />
      ))}
    </div>
  );
}

export default BubbleEffect;
