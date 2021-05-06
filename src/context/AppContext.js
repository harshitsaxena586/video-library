import  { createContext, useContext, useReducer } from "react";
import  reducer  from "../Reducer/AppReducer";

const AppContext = createContext();

const initialState={
    history:[],
    watchlater:[],
    liked:[]
}

export function AppContextProvider({ children }) {
  const [state,dispatch]=useReducer(reducer,initialState)
  
  return (
    <AppContext.Provider value={{state,dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
 return useContext(AppContext);
}