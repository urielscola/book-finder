import qs from 'querystring';

const BASE_API_URL = process.env.REACT_APP_GOOGLE_BOOKS_API_URL;
const buildQueryString = queryObject => `?${qs.stringify(queryObject)}`;

export default ({ instance, config, resourceName }) => ({
  list: data => {
    const query = data ? buildQueryString(data) : '';
    const { headers } = config();

    return instance({
      method: 'GET',
      url: `${BASE_API_URL}${resourceName}${query}`,
      headers
    });
  },
  get: (id, data) => {
    const query = data ? buildQueryString(data) : '';
    const { headers } = config();

    return instance({
      method: 'GET',
      url: `${BASE_API_URL}${resourceName}/${id}${query}`,
      headers
    });
  }
});
