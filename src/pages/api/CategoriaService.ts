import { api } from "./api";

export async function cadastrarCategoria(nome: string) {
    try {
         await api.post("Categoria", {nome});
         console.log("Cadastrado com sucesso");
    }
    catch (error: any) {
        throw new Error("Cadastro de categoria invalido");
    }
}
