import Link from "next/link";
import styles from "./categoria.module.css"
import Sub_header from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";
import {useState} from "react";
import {cadastrarCategoria} from "../api/CategoriaService";
import {toast, ToastContainer} from "react-toastify";

const Categoria = () => {

    const[categoria, setCategoria] = useState<string>('');

    const notificacao = (msg: string)=> toast.success(msg);
    const erro = (msg: string)=> toast.error(msg);

    async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await cadastrarCategoria(categoria);
            notificacao("Cadastro realizado")
        }
        catch (error: any) {
            erro(error.message);
        }
    }


    return (
        <>
            <ToastContainer />
            <Sub_header></Sub_header>

                <article className={styles.container}>
                    <div className={styles.content}>
                        <h1>CRIAR CATEGORIA</h1>
                        <form action="" className={styles.form_input} onSubmit={Cadastrar}>
                            <div className={styles.campo_input}>
                            <label htmlFor="nome">Nome categoria</label>
                            <input type="text" placeholder="Premium" value={categoria}
                                   onChange={e => setCategoria(e.target.value)} />
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