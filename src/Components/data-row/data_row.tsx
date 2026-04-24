import styles from "./data_row.module.css"


const Data_Row = () => {
    return (
        <>
            <div className={styles.row}>
                <p data-label="data">12/12/12</p>
                <p data-label="nome">Monstro</p>
                <p data-label="preco">R$55,00</p>
            </div>
        </>
    )
}
export default Data_Row;