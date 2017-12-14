import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";

const rootReducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  user: userReducer
});

export default rootReducer;
