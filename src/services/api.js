const API_URL = 'https://www.fruityvice.com/api/fruit/all';

export default async function ApiRequest() {
  let response = await fetch(API_URL);
  let json = await response.json();
  return json;
}
