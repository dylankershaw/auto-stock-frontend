import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import searchReducer from "./search";
import userReducer from "./user";
import imageReducer from "./image";

const rootReducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  user: userReducer,
  image: imageReducer
});

export default rootReducer;
