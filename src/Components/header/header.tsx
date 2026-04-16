import styles from "./header.module.css"

const Header = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>

                    <img src="/imgs/Logo_VH_Burguer.svg"
                         alt="Logo do vh burguer que contem como plano de fundo um hamburguer" id={styles.logo}/>

                    <nav id={styles.nav_menu}>
                        <a href="">Destaques</a>
                        <a href="">Cardápio</a>
                        <a href="">Unidades</a>
                        <a href="">Login</a>
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