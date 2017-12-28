import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";

import loadingReducer from "./loading";
import searchReducer from "./search";
import imageReducer from "./image";
import userReducer from "./user";
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  user: userReducer,
  image: imageReducer,
  loading: loadingReducer,
  errors: errorsReducer
});

export default rootReducer;
