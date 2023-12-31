import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

// Route
import { BrowserRouter } from "react-router-dom";


import { createRoot } from 'react-dom/client';

const store = createStore(rootReducer, composeWithDevTools());
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,

);
