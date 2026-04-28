import { api } from "./api";

export async function cadastrarCategoria(nomeCategoria: string) {
    try {
         await api.post("Categoria", {nomeCategoria});
         console.log("Cadastrado com sucesso");
    }
    catch (error: any) {
        throw new Error("Cadastro de categoria invalido");
    }
}
