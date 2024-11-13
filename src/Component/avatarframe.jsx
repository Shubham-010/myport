import React from 'react';
import '../App.css'; 
import img1 from '../Image/Profile.jpg'

const AvatarFrame = ({ imageUrl, altText, size = '270px', borderColor = '#4caf50' }) => {
  return (
    <div style={{ padding:"30%"}}>
    <div 
      className="avatar-frame" 
      style={{
        width: size,
        height: size,
        borderColor: borderColor,
        borderRadius: '50%',
      }}
    >
      <img
        src={img1}
        alt={altText}
        className="avatar-image"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
      </div>
  );
};

export default AvatarFrame;
