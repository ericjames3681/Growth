const BASE_URL = "/api/plants";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function findOne(searchTerm) {
  return fetch(BASE_URL + "/search?term=" + searchTerm).then((res) =>
    res.json()
  );
}
