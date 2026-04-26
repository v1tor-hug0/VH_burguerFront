import Link from "next/link";
import styles from "./detalhe_produto.module.css"
import SubHeader from "@/Components/sub-header/sub_header";
import Footer from "@/Components/footer/footer";

const detalheProduto = () => {
    return (
        <>
            <SubHeader></SubHeader>
            <article className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.titulo}>
                    <h2>Detalhes do X-Bacon</h2>
                    </div>
                    <div className={styles.imagem}>
                        <img src="/imgs/HamburguerAlcatraComBacon_1-scaled%201.png" alt=""/>
                    </div>

                    <div className={styles.texts}>
                        <div className={styles.info_left}>

                                <div className={styles.descricao}>
                                    <h3>Descrição</h3>
                                    <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas,
                                        queijo
                                        cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada
                                        no
                                        ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra
                                        tudo.
                                        Para completar o ataque, uma camada extra de onion rings ou molho defumado que
                                        transforma cada mordida numa explosão.</p>
                                </div>
                        </div>


                        <div className={styles.info_right}>

                            <div>
                                <h3>Preço (R$)</h3>
                                <p><span className={styles.riscado}>R$45,00</span> R$35,00</p>

                            </div>
                            <div>
                                <h3>Categoria</h3>
                                <ul>
                                    <li>Premium</li>
                                    <li>Artesanal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
            <Footer></Footer>
        </>
    )
}
export default detalheProduto;