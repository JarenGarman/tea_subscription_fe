const baseURL = "http://localhost:3000/api/v1/";

export function getSubscriptions(sort = null) {
  let url = baseURL + "subscriptions";

  if (sort) {
    url += "?sort_by_price=" + sort;
  }

  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
