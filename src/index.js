import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import counterReducer from "./store/reducers/Counter";
import resultsReducer from "./store/reducers/Results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middlewarre] dispatching", action);
      const result = next(action);
      console.log("Middleware store", store.getState());
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
