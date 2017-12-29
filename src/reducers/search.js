import { SET_RESULTS, CLEAR_RESULTS } from "../actions";

export default function(state = { results: [] }, action) {
  switch (action.type) {
    case SET_RESULTS:
      return {
        results: action.payload
      };
    case CLEAR_RESULTS:
      return { results: [] };
    default:
      return state;
  }
}
