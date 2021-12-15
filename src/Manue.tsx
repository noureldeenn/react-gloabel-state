import type { ReactNode } from "react";
import React, { createContext, useContext, useReducer } from "react";

const defaultState = { opened: false };
export type Action = "OPEN_MANUE" | "CLOSE_MENUE";
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

const MANUE_CONTEXT = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(null);
const Reducer = (state: State, action: Action) => {
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

export const MenueProvider = ({ children }: { children: ReactNode }) => {
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
