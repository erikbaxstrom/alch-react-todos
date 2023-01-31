import { createContext, useState, useContext } from 'react';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    console.log('item to add:', item);
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
