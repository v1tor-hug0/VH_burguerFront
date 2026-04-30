import Link from "next/link";
import styles from "./produto.module.css"
import Sub_header from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";
import {useEffect, useState} from "react";
import {listarCategoria} from "@/pages/api/CategoriaService";
import {cadastrarProduto} from "@/pages/api/produtoService";
import {erro, notificacao} from "@/utils/toast";
import Toast from "@/Components/toast/toast";

interface Categoria {
    categoriaID: number,
    nome: string
}


const Produto = () => {

    const [categorias, setCategoria] = useState<Categoria[]>([]);

    const [nome, setNome] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [preco, setPreco] = useState<string>("");
    const [imagem, setImagem] = useState<File | null>(null);
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);


    async function listaCategoriaEmProduto() {
        const lista = await listarCategoria();
        setCategoria(lista.data);
        // console.log(lista.data);
    }

    const dados = {
        nome,
        descricao,
        preco,
        imagem,
        categoriasId: categoriasSelecionadas,
    }

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await cadastrarProduto(dados)
            notificacao("Produto cadastrado com sucesso!")
        } catch (error: any) {
            erro(error.message);
        }
    }

    //Quando o produto for renderizado, a funcao listarCategoriaEmProduto acontece
    useEffect(() => {
        listaCategoriaEmProduto();
    }, [])


    return (
        <>
            <Sub_header></Sub_header>
            <Toast/>
            <article className={styles.produto}>
                <div className={styles.container_produto}>
                    <h1 className={styles.titulo}>CRIAR PRODUTO</h1>
                    <form action="" className={styles.campo_inputs} onSubmit={Cadastrar}>
                        <div className={styles.inputs}>
                            <label htmlFor="nome">Nome do produto</label>
                            <input type="text" name="nome" placeholder="BBQ Especial" value={nome}
                                   onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className={styles.inputs} id={styles.descricao}>
                            <label htmlFor="desc">Descricao</label>
                            <textarea name="desc" value={descricao} onChange={(e) => setDescricao(e.target.value)}
                                      placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada."/>
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="preco">Preço(R$)</label>
                            <input type="number" name="preco" placeholder="40,00" value={preco}
                                   onChange={(e) => setPreco(e.target.value)}/>
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="cat">Categoria</label>
                            <select name="cat" multiple onChange={(e) => {
                                setCategoriasSelecionadas(
                                    Array.from(e.target.selectedOptions).map((option) => Number(option.value))
                                )
                            }}>
                                <option value="" disabled selected>Selecione a categoria</option>
                                {categorias.map((item) => (
                                    <option value={item.categoriaID} key={item.categoriaID}>{item.nome}</option>
                                ))}


                            </select>
                        </div>
                        <div className={styles.adicionar}>
                            <Link href="/categoria" className={styles.link_categoria}>Adicionar categoria</Link>
                        </div>
                        <div className={styles.inputs}>
                            <label htmlFor="file">Imagem do produto</label>
                            <input type="file" name="file" onChange={(e) => {
                                if (e.target.files && e.target.files[0])
                                    setImagem(e.target.files[0])
                            }}/>
                        </div>

                        <div className={styles.botoes}>
                            <button className={styles.button_save} onClick={
                                event => {
                                    console.log(dados)
                                }
                            } type="submit">Salvar
                            </button>
                        </div>
                    </form>
                </div>


            </article>


            <Footer></Footer>
        </>
    )
}

export default Produto;