import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import backgroundImage from './assets/background.jpg'; // Import the image

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <Navbar />
      <div className="container my-3 mt-3">
        <h1 className="text-success">Know what can be cultivated<span role="img" aria-label="seedling">🌱</span></h1>
        <Form />
        <Card />
      </div>
    </div>
  );
};

export default App;
