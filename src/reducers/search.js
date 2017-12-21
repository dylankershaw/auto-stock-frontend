import { SUBMIT_SEARCH, CLEAR_RESULTS } from "../actions";

export default function(state = { results: [] }, action) {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        results: action.payload
      };
    case CLEAR_RESULTS:
      return { results: [] };
    default:
      return state;
  }
}
