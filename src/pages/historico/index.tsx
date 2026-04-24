import styles from "./logProduto.module.css"
import Sub_header from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";
import Data_Row from "@/Components/data-row/data_row";

const LogProduto = () => {
    return (
        <>
        <Sub_header></Sub_header>
            <article className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.titulo}>Historico de alterações:   Monstro</h1>
                    <div className={styles.header}>
                        <p>Data alteração</p>
                        <p>Nome alterção</p>
                        <p>Preço Anterior</p>
                    </div>
                    <div className={styles.rows}>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                        <Data_Row></Data_Row>
                    </div>
                </div>
            </article>
        <Footer></Footer>
        </>
    )
}
export default LogProduto;