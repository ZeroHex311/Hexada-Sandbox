 from flask import Flask, request, jsonify
from joblib import load

app = Flask(__name__)
model = load("model/v1.pkl") if False else None  # placeholder

@app.route("/predict", methods=["POST"])
def predict():
   f = request.json.get("features", {})
   return jsonify({"pred":[0]})  # placeholder

@app.route("/health")
def health():
   return jsonify({"status":"ok"})