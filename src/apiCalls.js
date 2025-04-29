const baseURL = "http://localhost:3000/api/v1/";

export function getSubscriptions(sort) {
  let url = baseURL + "subscriptions";

  if (sort) {
    url += "?sort_by_price=" + sort;
  }

  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function getSubscription(id) {
  const url = baseURL + "subscriptions/" + id;

  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function updateSubStatus(id, status) {
  const url = baseURL + "customer_subscriptions/" + id;

  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ active: status }),
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
