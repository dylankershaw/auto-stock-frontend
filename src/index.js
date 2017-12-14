import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";

import Signup from "./components/user/signup";
import Searchbar from "./components/search/searchbar";
import reducers from "./reducers";
import Login from "./components/user/login";
import "./index.css";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* Switch renders the first route that matches */}
          <Route exact path="/" component={Searchbar} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
