import {
  SET_RESULTS,
  CLEAR_RESULTS,
  ENABLE_TOUCHED,
  DISABLE_TOUCHED
} from "../actions";

export default function(state = { results: [], touched: false }, action) {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    case CLEAR_RESULTS:
      return { ...state, results: [] };
    case ENABLE_TOUCHED:
      return { ...state, touched: true };
    case DISABLE_TOUCHED:
      return { ...state, touched: false };
    default:
      return state;
  }
}
