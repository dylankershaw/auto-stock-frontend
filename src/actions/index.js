import * as apiHelpers from "../api";

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const SEARCH_TERM = "SEARCH_TERM";

export function loginUser(values) {
  return function(dispatch) {
    // dispatch({ type: "START_LOGIN_USER" }); //// uncomment this if using a loading bar
    apiHelpers.login(values).then(data => {
      if (!data.error) {
        console.log("valid login");
        localStorage.setItem("token", data["token"]);
        return dispatch({ type: "LOGIN_USER", payload: data });
      } else {
        console.log("invalid login");
        //// tell user their login is invalid
      }
    });
  };

  return {
    type: LOGIN_USER,
    payload: values
  };
}

export function signupUser(values) {
  return {
    type: SIGNUP_USER,
    payload: values
  };
}

export function searchTerm(values) {
  return {
    type: SEARCH_TERM,
    payload: values.searchTerm
  };
}
