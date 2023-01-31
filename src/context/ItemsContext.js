import { createContext, useState, useContext } from 'react';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    //ToDo:
    // try/catch, call to items service to add the thing to the db
    // if success, expect new item to be returned.
    // add the new item to local state
    // after that, do the map in the Items component
    try {
      //something
      console.log('item to add:', item);
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
