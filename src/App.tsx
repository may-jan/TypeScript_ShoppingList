// ******** Hooks 공식문서 참고 ********
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/items';
import { v4 as getId } from 'uuid';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log('Made To The App Component');
    let newQuantity = quantity;
    let newId = getId();
    items.forEach((i, idx) => {
      if (i.product === product) {
        items.splice(idx, 1);
        newQuantity = i.quantity + quantity;
        newId = i.id;
      }
    });
    setItems([...items, { id: newId, product, quantity: newQuantity }]);
  };
  console.log(items);

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
