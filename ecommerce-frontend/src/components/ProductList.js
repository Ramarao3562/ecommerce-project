import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Flask backend
    axios
      .get("http://localhost:5000/api/products") // Your Flask API endpoint
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
