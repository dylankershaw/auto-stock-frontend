import { SUBMIT_SEARCH } from "../actions";

export default function(state = { results: [] }, action) {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        results: action.payload
      };
    default:
      return state;
  }
}
