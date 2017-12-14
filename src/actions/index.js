import * as apiHelpers from "../api";

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const SEARCH_TERM = "SEARCH_TERM";

export function loginUser(values) {
  console.log(values);
  return function(dispatch) {
    // dispatch({ type: "START_LOGIN_USER" });
    apiHelpers.login(values).then(data => {
      if (data) {
        localStorage.setItem("token", data["token"]);
        return dispatch({ type: "LOGIN_USER", payload: data });
      } else {
        // edit conditional so it hits false for invalid login
        console.log("invalid login");
      }
    });
  };

  return {
    type: LOGIN_USER,
    payload: values // payload should be the resp from an axios request
  };
}

export function signupUser(values) {
  return {
    type: SIGNUP_USER,
    payload: values // payload should be the resp from an axios request
  };
}

export function searchTerm(values) {
  return {
    type: SEARCH_TERM,
    payload: values.searchTerm
  };
}
