import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cropImage from '../assets/crop.jpg'; // Import the image

const Card = () => {
  return (
    <div className="card bg-dark" style={{ width: '18rem' }}>
      <img src={cropImage} style={{ width: '70px', height: '70px' }} className="card-img-top" alt="Crop" />
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Recommended Crop for Cultivation is:</h5>
        <p className="card-text text-white"></p>
      </div>
    </div>
  );
};

export default Card;
