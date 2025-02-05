import React, { useEffect, useState } from "react";
import { fetchProducts } from "../data/products";
import "../App.css";

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} className="card-img" />
          <h3 className="card-title">{product.title}</h3>
          <p className="card-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
