import React from 'react';

const Ingredient = ({ ingredient, onAction, actionType }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => onAction(ingredient)}>
        {actionType === 'add' ? '+' : 'X'}
      </button>
    </li>
  );
};

export default Ingredient;
