import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CSS
import "./index.css";

// Main APP
import App from "./App";

// Context
import { FavouritesContextProvider } from "./contexts/favourites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
