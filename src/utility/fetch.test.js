/** @format */

import fetchApi from './fetchApi';

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
});
