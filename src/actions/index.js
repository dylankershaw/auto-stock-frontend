import * as apiHelpers from "../api";

export const SET_USER = "SET_USER";
export const SHOW_IMAGE = "SHOW_IMAGE";
export const SET_RESULTS = "SET_RESULTS";
export const CLEAR_IMAGE = "CLEAR_IMAGE";
export const LOGOUT_USER = "LOGOUT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const SEARCH_IMAGE = "SEARCH_IMAGE";
export const INVALID_LOGIN = "INVALID_LOGIN";
export const CLEAR_RESULTS = "CLEAR_RESULTS";
export const INVALID_SIGNUP = "INVALID_SIGNUP";
export const ENABLE_TOUCHED = "ENABLE_TOUCHED";
export const DISABLE_TOUCHED = "DISABLE_TOUCHED";
export const START_LOADING_BAR = "START_LOADING_BAR";

export function authenticateToken(token) {
  return function(dispatch) {
    apiHelpers.checkToken(token).then(data => {
      if (!data.error) {
        return dispatch({ type: SET_USER, payload: data });
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
        return dispatch({ type: INVALID_LOGIN });
      }
    });
  };
}

export function signupUser(values) {
  return function(dispatch) {
    apiHelpers.signup(values).then(data => {
      localStorage.setItem("token", data.token);
      if (!data.error) {
        return dispatch({
          type: SET_USER,
          payload: { id: data.id, username: data.username }
        });
      } else {
        return dispatch({ type: INVALID_SIGNUP });
      }
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
      if (!data.error) {
        return dispatch({ type: SET_RESULTS, payload: data });
      } else {
        return dispatch({ type: CLEAR_RESULTS });
      }
    });
  };
}

export function uploadImageUrl(url, userId) {
  return function(dispatch) {
    dispatch({ type: START_LOADING_BAR });
    apiHelpers.postImageUrl(url, userId).then(data => {
      return dispatch({ type: SHOW_IMAGE, payload: data });
    });
  };
}

export function uploadImageFile(image, userId) {
  return function(dispatch) {
    dispatch({ type: START_LOADING_BAR });
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

export function deleteImage(imageId) {
  return function(dispatch) {
    apiHelpers.deleteImage(imageId).then(data => {
      return dispatch({ type: CLEAR_IMAGE });
    });
  };
}

export function clearImage() {
  return { type: CLEAR_IMAGE };
}

export function clearResults() {
  return { type: CLEAR_RESULTS };
}

export function enableTouched() {
  return { type: ENABLE_TOUCHED };
}

export function disableTouched() {
  return { type: DISABLE_TOUCHED };
}

export function clearErrors() {
  return { type: CLEAR_ERRORS };
}
