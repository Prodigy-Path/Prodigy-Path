/** @format */

import { Base64 } from 'js-base64';

async function fetchApi(url = '', body = null, method = 'GET', config = null) {
  let headers = { 'Content-Type': 'application/json' };

  if (config) {
    if (config.username && config.password) {
      const basicAuth = Base64.encode(`${config.username}:${config.password}`);
      headers['Authorization'] = `Basic ${basicAuth}`;
    } else if (config.bearerToken) {
      headers['Authorization'] = `Bearer ${config.bearerToken}`;
    }
  }

  const response = await fetch(url, {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: headers,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: body ? JSON.stringify(body) : null,
  });
  return response.json();
}

export default fetchApi;
