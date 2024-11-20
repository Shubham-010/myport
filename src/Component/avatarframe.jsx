import React from 'react';
import '../App.css'; 
import img1 from '../Image/ShprofileimgBR.png'
import { Grid } from '@material-ui/core';

const AvatarFrame = ({ imageUrl, altText, size = '270px', borderColor = '#4c93af' }) => {
  return (
    <Grid>
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
      </Grid>
  );
};

export default AvatarFrame;
