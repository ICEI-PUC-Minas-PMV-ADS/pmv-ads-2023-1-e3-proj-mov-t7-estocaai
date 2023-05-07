import { BASE_URL } from '../config/config.jsx';

export const obterEnderecos = async () => {
  console.log(`${BASE_URL}/Enderecos`)
  return await fetch(`${BASE_URL}/Enderecos`)
    .then(response => console.log(response))
}

export const cadastrarEnderecoBancoDeDados = async (valorCep, valorEndereco) => {
  console.log(valorCep,valorEndereco)
  fetch(`${BASE_URL}/Enderecos?cep=${valorCep}&numero=${valorEndereco}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}