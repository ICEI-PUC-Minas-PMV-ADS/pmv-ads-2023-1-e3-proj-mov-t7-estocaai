import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "MESSAGE01":
      return "Preencha todos os campos";
    case "MESSAGE02":
      return "Credenciais inválidas";
    case "MESSAGE03":
      return "Digite todas as rotas";
    default:
      return state;
  }
};

export const useLoginReducer = () => {
  const initialState = "";
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
