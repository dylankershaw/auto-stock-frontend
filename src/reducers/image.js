import { SHOW_IMAGE, CLEAR_IMAGE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_IMAGE:
      return action.payload;
    case CLEAR_IMAGE:
      console.log("CLEARING IMAGE IN REDUCER");
      return {};
    default:
      return state;
  }
}
