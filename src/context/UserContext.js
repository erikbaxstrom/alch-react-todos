import { createContext, useState, useContext } from 'react';
import { authUser, getUser, signOut } from '../services/auth.js';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);

  const submitAuthHandler = async (email, password, loginType) => {
    try {
      const newUser = await authUser(email, password, loginType);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, submitAuthHandler, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error('useUser must be wrapped in a UserProvider');

  return context;
};

export { UserProvider, useUser };
