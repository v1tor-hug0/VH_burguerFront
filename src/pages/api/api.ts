import axios from "axios";

const apiLocal = "https://localhost:7050/api/";

const apiRemota = "";

//Criar endereco da api dentro do axios

export const api = axios.create({
  baseURL: apiLocal,
})

