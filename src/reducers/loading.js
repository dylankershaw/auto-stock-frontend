import { START_LOADING_BAR, SHOW_IMAGE } from "../actions";

export default function(state = false, action) {
  switch (action.type) {
    case START_LOADING_BAR:
      return true;
    case SHOW_IMAGE:
      return false;
    default:
      return state;
  }
}
