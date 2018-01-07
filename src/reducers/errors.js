import {
  INVALID_LOGIN,
  INVALID_SIGNUP,
  SET_USER,
  CLEAR_ERRORS
} from "../actions";

export default function(state = { login: false, signup: false }, action) {
  switch (action.type) {
    case SET_USER:
      return { login: false, signup: false };
    case INVALID_LOGIN:
      return { ...state, login: true };
    case INVALID_SIGNUP:
      return { ...state, signup: true };
    case CLEAR_ERRORS:
      return { login: false, signup: false };
    default:
      return state;
  }
}
