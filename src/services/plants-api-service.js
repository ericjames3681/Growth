const BASE_URL = "/api/plants";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}
