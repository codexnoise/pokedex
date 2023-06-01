import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "./middleware";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

const composeAlernative =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlernative(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Hello Word</h1>
    <Provider store={store}>
    <BrowserRouter >
        <Routes>
          <Route path="/pokedex" component={App} />
          <Route path="/" component={App} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <h1>God Bye Word</h1>
  </React.StrictMode>
);
