import * as apiHelpers from "../api";

// export const AUTHENTICATE_TOKEN = "AUTHENTICATE_TOKEN";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const SEARCH_TERM = "SEARCH_TERM";
export const UPLOAD_IMAGE_URL = "UPLOAD_IMAGE_URL";
export const UPLOAD_IMAGE_FILE = "UPLOAD_IMAGE_FILE";

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
    // dispatch({ type: "START_LOGIN_USER" }); //// uncomment this if using a loading bar
    apiHelpers.login(values).then(data => {
      if (!data.error) {
        localStorage.setItem("token", data["token"]);
        return dispatch({ type: LOGIN_USER, payload: data });
      } else {
        console.log("invalid login");
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

export function uploadImageUrl(url, userId) {
  return function(dispatch) {
    apiHelpers.postImageUrl(url, userId).then(data => {
      console.log("uploadImage data:", data);
      return dispatch({ type: UPLOAD_IMAGE_URL, payload: data });
    });
    //// NEED TO CREATE REDUCER FOR THIS
  };
}

export function uploadImageFile(image, userId) {
  return function(dispatch) {
    apiHelpers.postImageFile(image, userId).then(resp => {
      console.log("resp:", resp);
      // return dispatch({ type: UPLOAD_IMAGE_FILE, payload: resp });
    });
    //// NEED TO CREATE REDUCER FOR THIS
  };
}
