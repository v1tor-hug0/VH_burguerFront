import Link from "next/link";
import styles from "./categoria.module.css"
import Sub_header from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";

const Categoria = () => {
    return (
        <>

            <Sub_header></Sub_header>

                <article className={styles.container}>
                    <div className={styles.content}>
                        <h1>CRIAR CATEGORIA</h1>
                        <form action="" className={styles.form_input}>
                            <div className={styles.campo_input}>
                            <label htmlFor="nome">Nome categoria</label>
                            <input type="text" placeholder="Premium" />
                            </div>
                            <div className={styles.botoes}>
                                <button type="submit" className={styles.button_salvar}>Salvar</button>
                                <button className={styles.button_cancelar}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </article>

            <Footer></Footer>

        </>
    )
}
export default Categoria;