import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import loadingReducer from "./loading";
import searchReducer from "./search";
import errorsReducer from "./errors";
import imageReducer from "./image";
import userReducer from "./user";

const rootReducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  user: userReducer,
  image: imageReducer,
  loading: loadingReducer,
  errors: errorsReducer
});

export default rootReducer;
