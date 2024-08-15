import React from 'react';

const Card = ({ result }) => {
  return (
    <div className="card bg-dark" style={{ width: '18rem' }}>
      <img src="./static/crop.png" style={{ width: '70px', height: '70px' }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title" style={{ color: 'white' }}>Recommended Crop for Cultivation is:</h5>
        <p className="card-text text-white">{result}</p>
      </div>
    </div>
  );
};

export default Card;
