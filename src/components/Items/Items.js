import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { useItems } from '../../context/ItemsContext.js';

export default function Items() {
  const { user } = useUser();
  const { addItemHandler } = useItems();
  const [newItem, setNewItem] = useState('');

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  const formSubmitHandler = (newItem) => {};

  return (
    <>
      <h2>Add Items </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newItem === '') return;
          addItemHandler(newItem);
        }}
      >
        <label>Add an Item</label>
        <input type="text" onChange={(e) => setNewItem(e.target.value)}></input>
        <button type="submit">+</button>
      </form>
      <h2>Items</h2>
      <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
    </>
  );
}
