import { BrowserRouter, Route, Switch } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import ReactDOM from "react-dom";
import React from "react";

import Homepage from "./components/search/homepage";
import Login from "./components/user/login";
import Signup from "./components/user/signup";
import reducers from "./reducers";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* Switch renders the first route that matches */}
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
