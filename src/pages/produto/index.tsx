import Link from "next/link";
import styles from "./produto.module.css"
import Sub_header from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";

const Produto = () => {
    return (
        <>
            <Sub_header></Sub_header>
            <article className={styles.produto}>
                <div className={styles.container_produto}>
                    <h1 className={styles.titulo}>CRIAR PRODUTO</h1>
                    <form action="" className={styles.campo_inputs}>
                    <div className={styles.inputs}>
                        <label htmlFor="nome">Nome do produto</label>
                        <input type="text" name="nome" placeholder="BBQ Especial"/>
                    </div>
                    <div className={styles.inputs} id={styles.descricao}>
                        <label htmlFor="desc">Descricao</label>
                        <textarea name="desc"
                               placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada."/>
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="preco">Preço(R$)</label>
                        <input type="number" name="preco" placeholder="40,00"/>
                    </div>
                    <div className={styles.inputs}>
                        <label htmlFor="cat">Categoria</label>
                        <select name="cat">
                        <option value="" disabled selected>Selecione a categoria</option>
                        <option value="Hamburguer">Hamburguer</option>
                        </select>
                    </div>
                        <div className={styles.adicionar}>
                    <Link href="/categoria" className={styles.link_categoria}>Adicionar categoria</Link>
                        </div>
                    <div className={styles.inputs}>
                        <label htmlFor="url">URL da imagem</label>
                        <input type="url" name="url" placeholder="BBQ Especial"/>
                    </div>

                        <div className={styles.botoes}>
                            <button className={styles.button_save}>Salvar</button>
                        </div>
                    </form>
                </div>


            </article>


            <Footer></Footer>
        </>
    )
}

export default Produto;