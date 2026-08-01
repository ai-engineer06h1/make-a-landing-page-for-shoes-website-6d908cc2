import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Sneaker', price: 59.99 },
    { id: 2, name: 'Sandals', price: 39.99 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="mt-4">
          {cartItems.map(item => (
            <li key={item.id} className="border-b py-2 flex justify-between"><span>{item.name}</span><span>${item.price}</span></li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;