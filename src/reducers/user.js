import { LOGIN_USER, SIGNUP_USER, LOGOUT_USER } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id
      };
    case SIGNUP_USER:
      return action.payload;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
