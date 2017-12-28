import { INVALID_LOGIN, SET_USER } from "../actions";

export default function(state = { login: false, signup: false }, action) {
  switch (action.type) {
    case SET_USER:
      return { login: false, signup: false };
    case INVALID_LOGIN:
      return { ...state, login: true };
    default:
      return state;
  }
}
