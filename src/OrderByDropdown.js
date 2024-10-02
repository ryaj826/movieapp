import React, { useState } from 'react';

const OrderByDropdown = ({ orderBy, onOrderChange }) => {
    // List of order options
  const orderOptions = ['Name', 'Release Date', 'Rating', 'Price', 'Liked'];

  // Handle change in the dropdown selection
  const handleOrderChange = (event) => {
    onOrderChange(event.target.value); // Send the new order value to the parent (App)
  };

  return (
    <div className="order-by-dropdown">
      <label htmlFor="order-by-select">Order by: </label>
      <select id="order-by-select" value={orderBy} onChange={handleOrderChange}>
        {orderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderByDropdown;
