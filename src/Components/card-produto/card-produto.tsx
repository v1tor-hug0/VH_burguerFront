import styles from "./card-produto.module.css"

const CardProduto = () => {
    return (
        <>
            <article className={styles.container}>
                <img src="/imgs/HamburguerAlcatraComBacon_1-scaled%201.png" className={styles.imagem} alt="" />
                <h3 className={styles.titulo}>Monster</h3>
                <div className={styles.content}>
                <p >Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                </div>
                <div className={styles.footer}>
                    <p>R$ 35,00</p>
                    <div className={styles.props}>
                    <img src="/imgs/" alt="" />
                    <img src="/imgs/edit.svg" alt="botao editar" />
                    <img src="/imgs/trash.svg" alt="botao excluir" />
                    </div>
                </div>
            </article>
        </>
    )
}

export default CardProduto;