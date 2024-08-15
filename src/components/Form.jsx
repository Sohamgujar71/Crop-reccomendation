import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Assuming you have some CSS for styling

const Form = () => {
  const [formData, setFormData] = useState({
    Nitrogen: '',
    Phosporus: '',
    Potassium: '',
    Temperature: '',
    Humidity: '',
    pH: '',
    Rainfall: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data.error) {
        setResult(`Error: ${response.data.error}`);
      } else {
        setResult(response.data.result);
      }
    } catch (error) {
      setResult(`Failed to fetch: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Nitrogen">Nitrogen</label>
          <input type="text" name="Nitrogen" value={formData.Nitrogen} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Phosporus">Phosporus</label>
          <input type="text" name="Phosporus" value={formData.Phosporus} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Potassium">Potassium</label>
          <input type="text" name="Potassium" value={formData.Potassium} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Temperature">Temperature</label>
          <input type="text" name="Temperature" value={formData.Temperature} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Humidity">Humidity</label>
          <input type="text" name="Humidity" value={formData.Humidity} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="pH">pH</label>
          <input type="text" name="pH" value={formData.pH} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="Rainfall">Rainfall</label>
          <input type="text" name="Rainfall" value={formData.Rainfall} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Form;
