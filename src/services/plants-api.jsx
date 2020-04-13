const BASE_URL = "https://plantsdb.xyz/search/?fields=Common_Name";

export function getAll() {
  return fetch(`${BASE_URL}`, { mode: "cors" }).then((res) => res.json());
}
