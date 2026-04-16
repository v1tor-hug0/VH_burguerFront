import styles from './login.module.css';


//Estrutura PADRAO
const Login = () => {
    return (
        <>
            <main className={styles.main}>
                    <img className={styles.imagem} src="/imgs/hamburguer-login.png" alt="Imagem de um hamburguer com seus igredientes voando" />

                <div className={styles.content}>
                    <h1 className={styles.titulo}>Login</h1>
                    <form action="" className={styles.login_form}>

                        <div className={styles.campo_form}>
                            <label htmlFor="email" className={styles.label_}>E-mail </label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required className={styles.input_} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha" className={styles.label_}>Senha </label>
                            <input type="password" name="senha" placeholder="********" required className={styles.input_}/>
                        </div>

                        <a href="#" className={styles.senha}> Esqueceu sua senha?</a>
                        <button className={styles.entrar}>Entrar</button>

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;