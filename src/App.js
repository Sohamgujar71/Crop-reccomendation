import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [result, setResult] = useState('');

  const handlePrediction = (prediction) => {
    setResult(prediction);
  };

  return (
    <div>
      <Navbar />
      <div className="container my-3">
        <h1 className="text-success">Know what can be cultivated 🌱</h1>
        <Form onPrediction={handlePrediction} />
        {result && <Card result={result} />}
      </div>
    </div>
  );
};

export default App;
