import React, { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';

const App = () => {
  const [stack, setStack] = useState([]);
  const availableIngredients = [
    { id: 1, name: 'Lettuce', color: 'green' },
    { id: 2, name: 'Tomato', color: 'red' },
    { id: 3, name: 'Cheese', color: 'yellow' },
    { id: 4, name: 'Bacon', color: 'brown' },
    { id: 5, name: 'Patty', color: 'darkbrown' },
  ];

  const addToBurger = (ingredient) => {
    setStack([ingredient, ...stack]);
  };

  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          onAdd={addToBurger}
        />
        <BurgerStack stack={stack} onRemove={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;


