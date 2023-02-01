import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { useItems } from '../../context/ItemsContext.js';
import Item from './Item/Item.js';

export default function Items() {
  const { user } = useUser();
  const { addItemHandler, items } = useItems();
  const [newItem, setNewItem] = useState('');

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return (
    <>
      <h2>Add Items </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newItem === '') return;
          addItemHandler(newItem);
          setNewItem('');
        }}
      >
        <label>Add an Item</label>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
        <button type="submit">+</button>
      </form>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
}
