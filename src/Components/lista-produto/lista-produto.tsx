import styles from "./lista-produto.module.css"
import CardProduto from "@/Components/card-produto/card-produto";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const ListaProduto = () => {
    return (
        <>
            <div className={styles.container_destaques}>
                <div className={styles.botoes}>
                    <button className={styles.filtrar}>Filtrar <FontAwesomeIcon icon={faSliders}/></button>
                    <div className={styles.botao}>
                        <Link href="/promocoes" className={styles.botao_lista}>Todas as promoções</Link>
                        <Link className={styles.botao_lista} href="/produto">Adicionar produtos</Link>
                    </div>
                </div>
                <div className={styles.container_cards}>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                </div>
            </div>
        </>
    )
}

export default ListaProduto;