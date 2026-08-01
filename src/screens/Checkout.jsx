import React from 'react';

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission (fake order submit for this demo)
    console.log('Order submitted!');
    window.location.href = '/thank-you';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block">Name:</label>
          <input type="text" required className="border p-2 rounded w-full" />
        </div>
        <div className="mb-4">
          <label className="block">Address:</label>
          <input type="text" required className="border p-2 rounded w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;