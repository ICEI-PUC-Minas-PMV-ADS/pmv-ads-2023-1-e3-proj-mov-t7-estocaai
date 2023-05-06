import { BASE_URL } from '../config/config.jsx';
import axios from 'axios';

axios({
  method: 'get',
  url: `${BASE_URL}/Enderecos`,
}).then((response) => {
  console.log(response.data);
});


export const obterEnderecos = async () => {
  fetch('https://4c80-2804-2488-5081-2ce0-9c2c-2e5f-2af7-e2a.ngrok-free.app/Enderecos')
  .then(response => response.json())
    .then(json => {
      return console.log(json);
    })
    .catch(error => {
      console.error(error);
    });
}