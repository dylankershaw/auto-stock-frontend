import * as apiHelpers from "../api";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";

export function authenticateToken(token) {
  return function(dispatch) {
    apiHelpers.checkToken(token).then(data => {
      if (!data.error) {
        return dispatch({ type: LOGIN_USER, payload: data });
      } else {
        console.log("invalid token");
      }
    });
  };
}

export function loginUser(values) {
  return function(dispatch) {
    apiHelpers.login(values).then(data => {
      if (!data.error) {
        localStorage.setItem("token", data.token);
        return dispatch({ type: LOGIN_USER, payload: data });
      } else {
        console.log("invalid login");
      }
    });
  };
}

export function signupUser(values) {
  return function(dispatch) {
    apiHelpers.signup(values).then(data => {
      localStorage.setItem("token", data.token);
      return dispatch({
        type: SIGNUP_USER,
        payload: { id: data.id, username: data.username }
      });
    });
  };
}

export function logoutUser() {
  localStorage.setItem("token", "");
  return {
    type: LOGOUT_USER
  };
}

export function submitSearch(term) {
  return function(dispatch) {
    apiHelpers.getSearchResults(term).then(data => {
      return dispatch({ type: SUBMIT_SEARCH, payload: data });
    });
    console.log(history);
  };
}

export function uploadImageUrl(url, userId) {
  // dispatch({ type: "START_LOADING_BAR" });
  return function(dispatch) {
    apiHelpers.postImageUrl(url, userId).then(data => {
      console.log("uploadImage data:", data);
      return dispatch({ type: UPLOAD_IMAGE, payload: data });
    });
  };
}

export function uploadImageFile(image, userId) {
  // dispatch({ type: "START_LOADING_BAR" });
  return function(dispatch) {
    apiHelpers.postImageFile(image, userId).then(resp => {
      console.log("resp:", resp);
      return dispatch({
        type: UPLOAD_IMAGE,
        payload: resp
      });
    });
  };
}
