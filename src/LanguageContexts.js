import { createContext, useContext, useReducer } from "react";

// export const LANGUAGE_CONTEXT = createContext(null);
// export const USER_CONTEXT = createContext(null);
const defaultState = { langauge: 'ar' };
const LANGUAGE_CONTEXT = createContext(null);

const Reducer = (state, action) => {
  switch (action) {
    case "ARABIC_LANG":
      return {
        langauge: 'ar',
      };
      case "ENGLISH_LANG":
      return {
        langauge: 'en',
      };
    default:
      return state;
  }
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, defaultState);
  return (
    <LANGUAGE_CONTEXT.Provider value={{ langaugeState : state , langaugeDispatch: dispatch }}>
      {children}
    </LANGUAGE_CONTEXT.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LANGUAGE_CONTEXT);
  return context;
};
