import { api } from "./api"

type Produto = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[]
}

export async function cadastrarProduto(dados: Produto){
    try{
        const formData = new FormData();
        formData.append("Nome", dados.nome);
        formData.append("Descricao", dados.descricao);
        formData.append("Preco", dados.preco);
        if (dados.imagem) {
            formData.append("Imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("CategoriaIds", id.toString());
        })

        await api.post("Produto", formData);
        console.log(dados);
    }catch(error: any){
        throw new Error(error.response.data);
    }
}