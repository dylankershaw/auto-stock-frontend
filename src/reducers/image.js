import { UPLOAD_IMAGE, SHOW_IMAGE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_IMAGE:
      return action.payload;
    default:
      return state;
  }
}
