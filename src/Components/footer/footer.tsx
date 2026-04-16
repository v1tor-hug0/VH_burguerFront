import styles from "./footer.module.css"

const Footer = () => {
    return (

        <>
        <footer id={styles.footer}>
                <div className={`${styles.container} layout_guide`}>
                    <div className={styles.content}>
                    <img src="/imgs/Logo_footer.svg" id={styles.logo} alt="Logo Vh Burguer"/>
                    <div className={styles.redes_sociais}>
                        <a href=""><img src="/imgs/tiktok.png" alt=""/></a>
                        <a href=""><img src="/imgs/face.png" alt=""/></a>
                        <a href=""><img src="/imgs/insta.png" alt=""/></a>
                        <a href=""><img src="/imgs/youtube.png" alt=""/></a>
                    </div>
            </div>
                <div className={styles.direitos}>
                    Copyright © 2025 VH Burguer | Todos os direitos reservados
                </div>
            </div>
        </footer>
        </>

    )
}

export default Footer;
