 
from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder='build', static_url_path='')

@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/products')
def get_products():
    products = [
        {"id": 1, "name": "Laptop", "price": 999.99},
        {"id": 2, "name": "Headphones", "price": 199.99}
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
