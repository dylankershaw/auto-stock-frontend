import { SEARCH_TERM } from "../actions";

export default function(state = { searchTerm: "", results: [] }, action) {
  switch (action.type) {
    case SEARCH_TERM:
      return {
        searchTerm: action.payload,
        ...state
      };
    // case SEARCH_RESULTS:
    default:
      return state;
  }
}
