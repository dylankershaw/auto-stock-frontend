import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import userReducer from "./user";
import searchReducer from "./search";

const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  search: searchReducer
});

export default rootReducer;
