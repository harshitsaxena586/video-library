import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { AppContextProvider } from "./context/appContext";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
