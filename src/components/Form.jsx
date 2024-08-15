import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
  return (
    <form action="/predict" method="POST">
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="Nitrogen">Nitrogen</label>
          <input type="number" id="Nitrogen" name="Nitrogen" placeholder="Enter Nitrogen" className="form-control" required step="0" />
        </div>
        <div className="col-md-4">
          <label htmlFor="Phosphorus">Phosphorus</label>
          <input type="number" id="Phosphorus" name="Phosphorus" placeholder="Enter Phosphorus" className="form-control" required step="0" />
        </div>
        <div className="col-md-4">
          <label htmlFor="Potassium">Potassium</label>
          <input type="number" id="Potassium" name="Potassium" placeholder="Enter Potassium" className="form-control" required step="0" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="Temperature">Temperature</label>
          <input type="number" step="0.01" id="Temperature" name="Temperature" placeholder="Enter Temperature in °C" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="Humidity">Humidity</label>
          <input type="number" step="0.01" id="Humidity" name="Humidity" placeholder="Enter Humidity in %" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="pH">pH</label>
          <input type="number" step="0.01" id="pH" name="pH" placeholder="Enter pH value" className="form-control" required />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="Rainfall">Rainfall</label>
          <input type="number" step="0.01" id="Rainfall" name="Rainfall" placeholder="Enter Rainfall in mm" className="form-control" required />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary btn-lg">Get Recommendation</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
