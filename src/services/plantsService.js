import tokenService from "./tokenService";

const BASE_URL = "/api/lists/garden";

export default {
  index,
  create,
  deleteOne,
};

function index() {
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch(BASE_URL, options).then((res) => res.json());
}

function create(plant) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(plant),
  };
  return fetch(BASE_URL, options).then((res) => res.json());
}

function deleteOne(id) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch(BASE_URL + "/" + id, options).then((res) => res.json());
}
