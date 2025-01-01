import React from 'react';
import Ingredient from '../Ingredient';

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient}
          onAction={onAdd}
          actionType="add"
        />
      ))}
    </ul>
  );
};

export default IngredientList;



  
  