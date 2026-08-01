import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const shoe = { id, name: 'Sneaker', price: 59.99, image: '/images/sneaker.jpg' }; // Fetch from API based on ID

  const addToCart = () => {
    console.log(`Added ${shoe.name} to cart`);
  };

  return (
    <div className="container mx-auto p-4">
      <img src={shoe.image} alt={shoe.name} className="mb-2" />
      <h1 className="text-2xl font-bold">{shoe.name}</h1>
      <p>Price: ${shoe.price}</p>
      <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
      <Link to="/cart" className="text-blue-500 ml-2">Go to Cart</Link>
    </div>
  );
};

export default ProductDetail;