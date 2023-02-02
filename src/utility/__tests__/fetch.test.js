/** @format */

import fetchApi from '../fetchApi';
import Base64 from 'js-base64';

describe('fetchApi', () => {
  it('should make a GET request to the provided URL', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: '12345' }),
      }),
    );
    const url = 'https://my-api.com/get-data';

    const result = await fetchApi(url);

    expect(fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({ method: 'GET' }),
    );

    expect(result).toEqual({ data: '12345' });
  });

  it('should make a POST request with the provided data', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: '12345' }),
      }),
    );
    const url = 'https://my-api.com/post-data';
    const data = { id: 12345 };

    const result = await fetchApi(url, data, 'POST');

    expect(fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({ method: 'POST', body: JSON.stringify(data) }),
    );

    expect(result).toEqual({ data: '12345' });
  });

  it('should handle errors when making the request', async () => {
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error('request failed')));
    const url = 'https://my-api.com/get-data';
    let error;
    try {
      await fetchApi(url);
    } catch (err) {
      error = err;
    }
    expect(error).toEqual(new Error('request failed'));
  });

  it('should set the Authorization header with basic auth credentials', async () => {
    const config = { username: 'user', password: 'pass' };
    const url = 'https://example.com';

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        headers: {
          get: (header) =>
            header === 'Authorization'
              ? `Basic ${Base64.encode(
                  `${config.username}:${config.password}`,
                )}`
              : null,
        },
      }),
    );

    await fetchApi(url, null, 'GET', config);

    expect(window.fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Basic ${Base64.encode(
            `${config.username}:${config.password}`,
          )}`,
        }),
      }),
    );
  });

  it('should set the Authorization header with a bearer token', async () => {
    const config = { bearerToken: 'token' };
    const url = 'https://example.com';

    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        headers: {
          get: (header) =>
            header === 'Authorization' ? `Bearer ${config.bearerToken}` : null,
        },
      }),
    );

    await fetchApi(url, null, 'GET', config);

    expect(window.fetch).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: `Bearer ${config.bearerToken}`,
        }),
      }),
    );
  });
});
