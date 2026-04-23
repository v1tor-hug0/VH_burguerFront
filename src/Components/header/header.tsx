import styles from "./header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>

                    <img src="/imgs/Logo_VH_Burguer.svg"
                         alt="Logo do vh burguer que contem como plano de fundo um hamburguer" id={styles.logo}/>

                    <nav id={styles.nav_menu}>
                        <a href="#destaques">Destaques</a>
                        <a href="#cardapio">Cardápio</a>
                        <a href="#unidades">Unidades</a>
                        <Link href="/login">Login</Link>
                    </nav>

                    <button id={styles.btn_icon}>
                        <img src="/imgs/icon-hamburguer.svg" alt="Icone de hamburguer do VH Burguer"/>
                    </button>


                </div>
            </header>


        </>
    )
}

export default Header;