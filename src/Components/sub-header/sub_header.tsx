import Link from 'next/link'
import styles from "./sub_header.module.css"

const SubHeader = () => {
    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                    <div className={styles.logo}>
                    <img src="/imgs/Logo_footer.svg" alt="Logo do vh burguer que contem como plano de fundo um hamburguer" />
                    </div>
                    <Link href="/home" className={styles.voltar}>Voltar</Link>

                </div>
            </header>
        </>
    )
}

export default SubHeader;