export const LOGIN_USER = "LOGIN_USER";

export function loginUser(values) {
  return {
    type: LOGIN_USER,
    payload: null // payload should be the resp from an axios request
  };
}
