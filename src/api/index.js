const BASE_URL = "http://localhost:3000/api/v1/";

function postRequest(endpoint, data) {
  return fetch(BASE_URL + endpoint, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then(res => res.json());
}

// posts username and password to authenticate#show and returns a token from api if valid
export function login(user_params) {
  return postRequest("login", user_params);
}

// posts username and password to user#create and returns a token from api if valid
export function signup(user_params) {
  return postRequest("users", user_params);
}

// sends a token and returns user id and username if token is valid
export function checkToken(token) {
  return postRequest("authenticate", { token });
}

// sends image url to image#create and returns associated labels
export function postImageUrl(url, userId) {
  return postRequest("images", { url, userId });
}

// sends image file to image#create and returns associated labels
export function postImageFile(image_io, userId) {
  return postRequest("images", { image_io, userId });
}

// sends searchTerm to search#show and returns associated images
export function getSearchResults(term) {
  return postRequest("search", { term });
}

// sends imageId to image#show and returns associated image
export function getImage(id) {
  return fetch(`${BASE_URL}images/${id}`).then(res => res.json());
}
