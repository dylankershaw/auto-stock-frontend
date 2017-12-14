export const LOGIN_USER = "LOGIN_USER";
export const SEARCH_TERM = "SEARCH_TERM";

export function loginUser(values) {
  return {
    type: LOGIN_USER,
    payload: values // payload should be the resp from an axios request
  };
}

export function searchTerm(values) {
  return {
    type: SEARCH_TERM,
    payload: values.searchTerm
  };
}
