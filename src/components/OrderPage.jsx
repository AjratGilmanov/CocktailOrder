import React, { useState } from 'react';

const OrderPage = ({ order, onRemove }) => {
  return (
    <div className="order-page">
      <h2>Your Order</h2>
      <ul>
        {order.map(cocktail => (
          <li key={cocktail}>
            {cocktail}
            <button onClick={() => onRemove(cocktail)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderPage;