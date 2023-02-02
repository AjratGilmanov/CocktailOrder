import React, { useState, useEffect } from 'react';

const CocktailList = ({ onOrder }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => response.json())
      .then(data => setCocktails(data.drinks))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => (
        <div className="cocktail-card" key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h2>{cocktail.strDrink}</h2>
          <button onClick={() => onOrder(cocktail.strDrink)}>Order</button>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;