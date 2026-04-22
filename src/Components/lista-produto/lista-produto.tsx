import styles from "./lista-produto.module.css"
import CardProduto from "@/Components/card-produto/card-produto";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSliders} from '@fortawesome/free-solid-svg-icons'

const ListaProduto = () => {
    return (
        <>
            <div className={styles.container_destaques}>
                <div className={styles.botoes}>
                    <button className={styles.filtrar}>Filtrar <FontAwesomeIcon icon={faSliders}/></button>
                    <div className={styles.botao}>
                        <button>Todas as promoções</button>
                        <button>Todos os produtos</button>
                    </div>
                </div>
                <div className={styles.container_cards}>
                    <div className={styles.cards}>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                    </div>
                    <div className={styles.cards}>
                        <CardProduto/>
                        <CardProduto/>
                        <CardProduto/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaProduto;