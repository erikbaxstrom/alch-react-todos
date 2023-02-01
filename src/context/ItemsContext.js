import { createContext, useState, useContext, useEffect } from 'react';
import { createItem, fetchItems } from '../services/items.js';
import { useUser } from './UserContext.js';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchItems();
        console.log('response from fetching', response.data);
        setItems(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [user]);

  const addItemHandler = async (newItem) => {
    try {
      console.log('addItemHandler called');
      const response = await createItem(newItem);
      setItems([response.data, ...items]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ItemsContext.Provider value={{ items, addItemHandler }}>{children}</ItemsContext.Provider>
  );
};

const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be wrapped in a UserProvider');
  }

  return context;
};

export { ItemsProvider, useItems };
