import React from 'react';
import { FaPlane, FaPlaneDeparture } from 'react-icons/fa';

function Plane({ planeName, width, height, x, y,}) {
    const isDeparture = planeName.includes('Departing');
    const isLanding = planeName.includes('Landing');
    const planeClass = isDeparture
      ? 'departure-plane-icon'
      : isLanding
      ? 'landing-plane-icon'
      : '';
  
    // Style object to apply width, height, x, and y
    const planeStyle = {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: width || '100px', // default width is '100px'
      height: height || '50px', // default height is '50px'
      border: '1px solid black',
    };

  return (
    <div style={planeStyle}>
      {planeName}
      {isDeparture && (
        <FaPlaneDeparture
          className={`plane-icon ${planeClass}`}
        />
      )}
      {isLanding && (
        <FaPlane
          className={`plane-icon ${planeClass}`}
        />
      )}
    </div>
  );
}

export default Plane;
