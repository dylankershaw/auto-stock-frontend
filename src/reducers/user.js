import { LOGIN_USER } from "../actions";
import { SIGNUP_USER } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("hit login", action);
      // debugger;
      return { ...state, username: action.payload };
    case SIGNUP_USER:
      return action.payload;
    default:
      return state;
  }
}
