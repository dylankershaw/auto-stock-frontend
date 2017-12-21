import * as apiHelpers from "../api";

export const SET_USER = "SET_USER";
export const SHOW_IMAGE = "SHOW_IMAGE";
export const CLEAR_IMAGE = "CLEAR_IMAGE";
export const LOGOUT_USER = "LOGOUT_USER";
export const SEARCH_IMAGE = "SEARCH_IMAGE";
export const CLEAR_RESULTS = "CLEAR_RESULTS";
export const SUBMIT_SEARCH = "SUBMIT_SEARCH";

export function authenticateToken(token) {
  return function(dispatch) {
    apiHelpers.checkToken(token).then(data => {
      if (!data.error) {
        return dispatch({ type: SET_USER, payload: data });
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
        return dispatch({ type: SET_USER, payload: data });
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
        type: SET_USER,
        payload: { id: data.id, username: data.username }
      });
    });
  };
}

export function logoutUser() {
  localStorage.setItem("token", "");
  return { type: LOGOUT_USER };
}

export function submitSearch(term) {
  return function(dispatch) {
    apiHelpers.getSearchResults(term).then(data => {
      return dispatch({ type: SUBMIT_SEARCH, payload: data });
    });
  };
}

export function uploadImageUrl(url, userId) {
  // dispatch({ type: "START_LOADING_BAR" });
  return function(dispatch) {
    apiHelpers.postImageUrl(url, userId).then(data => {
      return dispatch({ type: SHOW_IMAGE, payload: data });
    });
  };
}

export function uploadImageFile(image, userId) {
  // dispatch({ type: "START_LOADING_BAR" });
  return function(dispatch) {
    apiHelpers.postImageFile(image, userId).then(data => {
      return dispatch({ type: SHOW_IMAGE, payload: data });
    });
  };
}

export function showImage(imageId) {
  return function(dispatch) {
    apiHelpers.getImage(imageId).then(data => {
      return dispatch({ type: SHOW_IMAGE, payload: data });
    });
  };
}

export function clearImage() {
  return { type: CLEAR_IMAGE };
}

export function clearResults() {
  return { type: CLEAR_RESULTS };
}
