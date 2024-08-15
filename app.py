from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests

# Load models and scalers
model = pickle.load(open('model.pkl', 'rb'))
sc = pickle.load(open('standardscaler.pkl', 'rb'))
mx = pickle.load(open('minmaxscaler.pkl', 'rb'))

@app.route('/')
def index():
    return "Welcome to the Crop Recommendation System!"

@app.route("/predict", methods=['POST'])
def predict():
    data = request.form.to_dict()  # Get form data as a dictionary
    try:
        # Extract features from form data
        feature_list = [
            data['Nitrogen'],
            data['Phosporus'],
            data['Potassium'],
            data['Temperature'],
            data['Humidity'],
            data['pH'],
            data['Rainfall']
        ]
        single_pred = np.array(feature_list).reshape(1, -1)

        # Process features
        mx_features = mx.transform(single_pred)
        sc_mx_features = sc.transform(mx_features)
        prediction = model.predict(sc_mx_features)

        # Map prediction to crop
        crop_dict = {
            1: 'Rice', 2: 'Maize', 3: 'Chickpea', 4: 'Kidneybeans',
            5: 'Pigeonpeas', 6: 'Mothbeans', 7: 'Mungbean', 8: 'Blackgram',
            9: 'Lentil', 10: 'Pomegranate', 11: 'Banana', 12: 'Mango',
            13: 'Grapes', 14: 'Watermelon', 15: 'Muskmelon', 16: 'Apple',
            17: 'Orange', 18: 'Papaya', 19: 'Coconut', 20: 'Cotton',
            21: 'Jute', 22: 'Coffee'
        }

        # Get the crop name
        crop = crop_dict.get(prediction[0], "Unknown crop")
        result = f"{crop} is the best crop to be cultivated right there."
        
        return jsonify(result=result)
    except Exception as e:
        return jsonify(error=str(e)), 500

if __name__ == "__main__":
    app.run(debug=True)
