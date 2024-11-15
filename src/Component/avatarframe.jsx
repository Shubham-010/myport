import React from 'react';
import '../App.css'; 
import img1 from '../Image/ShprofileimgBR.png'

const AvatarFrame = ({ imageUrl, altText, size = '270px', borderColor = '#4c93af' }) => {
  return (
    <div>
    <div 
      className="avatar-frame" 
      style={{
        width: size,
        height: size,
        borderColor: borderColor,
        backgroundColor: '#4c93af',
        borderRadius: '50%',
        boxShadow:'2px 3px 3px 3px black'
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
