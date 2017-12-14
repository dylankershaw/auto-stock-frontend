import { LOGIN_USER } from "../actions";
import { SIGNUP_USER } from "../actions";

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
    default:
      return state;
  }
}
