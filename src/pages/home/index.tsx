import {AppProps} from "next/app";
import Header from "@/Components/header/header";
import Footer from "@/Components/footer/footer";
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
            <Header></Header>

            <main>
                <section className={`${styles.banner} layout_guide`}>

                    <h1>BEM-VINDO AO VH BURGUER</h1>
                    <div className={styles.content_banner}>
                        <div className={styles.imagem}>
                        <img src="/imgs/foto_de_hamburgueres.png" id={styles.hamburgueres} alt="Foto de três hamburgueres"/>
                        </div>
                        <div className={styles.botoes_banner}>
                            <button id={styles.chamar}>Chamar atendente</button>
                            <button id={styles.ver_cardapio}>Ver cardápio</button>
                        </div>
                    </div>


                </section>

                <section className={`${styles.destaques} layout_guide`}>
                    <div className={styles.content_destaques}>
                        <div className={`${styles.direita} ${styles.card_destaque}`}>
                            <div id={styles.pedidos}>
                            <p id={styles.texto}>Os queridinhos da galera</p>
                            <p id={styles.texto_grande}>MAIS PEDIDOS</p>
                        </div>
                        </div>

                        <div className={styles.esquerda}>
                            <div className={`${styles.bacon} ${styles.card_destaque}`}>
                                <p id={styles.texto}>Lanches com</p>
                                <p id={styles.texto_grande}>MUITO BACON</p>
                            </div>
                            <div className={`${styles.combos} ${styles.card_destaque}`}>
                                <p id={styles.texto}>Se tiver muita fome</p>
                                <p id={styles.texto_grande}>SUPER COMBOS</p>
                            </div>
                        </div>
                    </div>

                </section>


                <section id={styles.cardapio}>
                    <h2>Cardapio</h2>
                    {/*Chamar componente da lista*/}
                </section>


                <section className={`${styles.unidades} layout_guide`}>
                    <div className={styles.texto_unidades}>
                        <h3 className={styles.titulo_unidades}>Nossas unidades</h3>
                        <ul className={styles.lista_unidades}>
                            <li>Centro – Av. Aurora, 742</li>
                            <li>Jardim – Av. das Palmeiras, 1280</li>
                            <li>Norte – Av. Horizonte, 305</li>
                            <li>Sul – Av. Nova Esperança, 910</li>
                        </ul>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}

export default Home;