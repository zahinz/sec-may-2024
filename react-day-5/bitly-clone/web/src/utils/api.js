// PUBLIC API

export function postApi(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function getApi(url) {
  return fetch(url);
}

// PROTECTED API

export function getApiWithToken(url, token) {
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
