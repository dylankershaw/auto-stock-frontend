import { LOGIN_USER } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return null;
    default:
      return state;
  }
}
