export function login(user_params) {
  console.log(user_params);
  return fetch("http://localhost:3000/api/v1/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user_params)
  }).then(res => res.json());
}
