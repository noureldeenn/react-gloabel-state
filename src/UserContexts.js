import { createContext, useContext } from "react";

// export const LANGUAGE_CONTEXT = createContext(null);
// export const USER_CONTEXT = createContext(null);
const user = { name: 'nour' , job: 'fron-end', email: 'nourbadr@gmail.com'};
const USER_CONTEXT = createContext(null);

export const UserProvider = ({ children }) => {
  return (
    <USER_CONTEXT.Provider value={{ user }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export const useUser = () => {
  const context = useContext(USER_CONTEXT);
  return context;
};
