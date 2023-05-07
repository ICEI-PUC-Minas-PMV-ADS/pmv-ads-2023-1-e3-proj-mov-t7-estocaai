import { BASE_URL} from '../config/config' ;

export const get = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return fetchData(endpoint, options);
};
export const obterEnderecos = async () => {
    console.log(BASE_URL) 
    const response = await fetch(`${BASE_URL}/Enderecos`);
    const data = await response.json();
    return data;
  }