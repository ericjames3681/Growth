import tokenService from "./tokenService";
const BASE_URL = "/api/plants";
console.log("----------" + BASE_URL);
export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function findOne(searchTerm) {
  return fetch(BASE_URL + "/search?term=" + searchTerm).then((res) =>
    res.json()
  );
}

export function findId(id) {
  return fetch(BASE_URL + "/detail?id=" + id).then((res) => res.json());
}

export function index() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch(BASE_URL + "/garden", options).then((res) => res.json());
}

export function create(plant) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(plant),
  };
  return fetch(BASE_URL + "/garden", options).then((res) => res.json());
}

export function deleteOne(id) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch(BASE_URL + "/garden/" + id, options).then((res) => res.json());
}
