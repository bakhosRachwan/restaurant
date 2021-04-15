import { createContext, useReducer } from "react";
export const StateContext = createContext({});
const initialState = { order: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ORDER":
      let t = [...state.order];
      t.push(action.payload);
      return { ...state, order: t };
    default:
      return state;
  }
};
export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
