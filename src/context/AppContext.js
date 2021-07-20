import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/appReducer";

const AppContext = createContext();

const token = localStorage.getItem("token");
const initialState = {
  history: [],
  watchlater: [],
  liked: [],
  videoDB: [],
  playlists: [],
  authToken: token,
};

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
