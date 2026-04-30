import axios from "axios";
import secureLocalStorage from "react-secure-storage";

const apiLocal = "https://localhost:7050/api/";

const apiRemota = "";

//Criar endereco da api dentro do axios

export const api = axios.create({
  baseURL: apiLocal,
})


//é um interceptador do Axios
//Intercepta(pega) toda a requisicao antes
api.interceptors.request.use((config) => {
  const token = secureLocalStorage.getItem("token");

  if(token){
    config.headers.Authorization = "Bearer " + token;
  }

  return config;
})