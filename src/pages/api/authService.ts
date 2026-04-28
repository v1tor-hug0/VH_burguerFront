import {api} from "./api"

export async function login(email: string, senha: string) {
    try{
        //requisicao:
      const response = await api.post("Autenticacao/login", {email, senha});

      console.log("deu");
      console.log(response);
      console.log(response.data.token);
    }
    catch(error: any) {
        throw new Error("Email ou senha invalidos")
    }
}