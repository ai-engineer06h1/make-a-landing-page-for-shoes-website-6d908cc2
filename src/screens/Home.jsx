import React from 'react';
import { Link } from 'react-router-dom';

const shoesCollection = [
  { id: 1, name: 'Sneaker', image: '/images/sneaker.jpg' },
  { id: 2, name: 'Sandals', image: '/images/sandals.jpg' },
    { id: 3, name: 'Boots', image: '/images/boots.jpg' },
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shoe Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shoesCollection.map(shoe => (
          <div key={shoe.id} className="border p-4 rounded shadow">
            <img src={shoe.image} alt={shoe.name} className="mb-2" />
            <h2 className="font-semibold">{shoe.name}</h2>
            <Link to={`/product/${shoe.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;