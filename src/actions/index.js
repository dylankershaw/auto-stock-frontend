import * as apiHelpers from "../api";

// export const AUTHENTICATE_TOKEN = "AUTHENTICATE_TOKEN";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const SEARCH_TERM = "SEARCH_TERM";

export function loginUser(values) {
  return function(dispatch) {
    // dispatch({ type: "START_LOGIN_USER" }); //// uncomment this if using a loading bar
    apiHelpers.login(values).then(data => {
      if (!data.error) {
        localStorage.setItem("token", data["token"]);
        return dispatch({ type: "LOGIN_USER", payload: data });
      } else {
        console.log("invalid login");
      }
    });
  };
}

export function authenticateToken(token) {
  return function(dispatch) {
    apiHelpers.checkToken(token).then(data => {
      if (!data.error) {
        return dispatch({ type: "LOGIN_USER", payload: data });
      } else {
        console.log("invalid token");
      }
    });
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
