import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";
import React from "react";

import App from "./components/app";
import reducers from "./reducers";
import "./index.css";

const middleware = [thunk, logger];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
