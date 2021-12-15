import { createContext, useContext, useReducer } from "react";

// export const LANGUAGE_CONTEXT = createContext(null);
// export const USER_CONTEXT = createContext(null);
const defaultState = { opened: false };
const MANUE_CONTEXT = createContext(null);

const Reducer = (state, action) => {
  switch (action) {
    case "OPEN_MANUE":
      return {
        opened: true,
      };
    case "CLOSE_MENUE":
      return {
        opened: false,
      };
    default:
      return state;
  }
};

export const MenueProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);
  return (
    <MANUE_CONTEXT.Provider value={{ state, dispatch }}>
      {children}
    </MANUE_CONTEXT.Provider>
  );
};

export const useMenue = () => {
  const context = useContext(MANUE_CONTEXT);
  return context;
};
