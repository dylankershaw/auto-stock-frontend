// posts username and password params and returns a token from api if login is valid
export function login(user_params) {
  return fetch("http://localhost:3000/api/v1/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user_params)
  }).then(res => res.json());
}

// sends a token and returns user id and username if token is valid
export function checkToken(token) {
  return fetch("http://localhost:3000/api/v1/authenticate", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ token })
  }).then(res => res.json());
}

// sends image url to image#create and returns associated labels
export function postImageUrl(url, userId) {
  return fetch("http://localhost:3000/api/v1/images", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ url, userId })
  }).then(res => res.json());
}

// sends image file to image#create and returns associated labels
export function postImageFile(image_io, userId) {
  return fetch(`http://localhost:3000/api/v1/images`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ image_io, userId })
  }).then(res => res.json());
}

// sends searchTerm to search#show and returns associated images
export function getSearchResults(term) {
  return fetch("http://localhost:3000/api/v1/search", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({ term })
  }).then(res => res.json());
}
