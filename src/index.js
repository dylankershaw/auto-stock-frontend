import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";

import reducers from "./reducers";
import "./index.css";
import App from "./components/app";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
