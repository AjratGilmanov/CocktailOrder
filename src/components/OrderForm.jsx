import React, { useState } from 'react';

const OrderForm = ({ onOrder }) => {
  const [selectedCocktail, setSelectedCocktail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onOrder(selectedCocktail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cocktail-select">
        Select a cocktail:
        <select id="cocktail-select" value={selectedCocktail} onChange={event => setSelectedCocktail(event.target.value)}>
          <option value="">--Please choose a cocktail--</option>
          <option value="Margarita">Margarita</option>
          <option value="Martini">Martini</option>
          <option value="Mojito">Mojito</option>
        </select>
      </label>
      <button type="submit">Order</button>
    </form>
  );
};

export default OrderForm;