import styles from './login.module.css';
import {useState} from "react";
import {login} from "../api/authService"
import {useRouter} from "next/router";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

//Estrutura PADRAO
const Login = () => {

    const[email, setEmail] = useState<string>('');
    const[senha, setSenha] = useState<string>('');

    const router = useRouter();
    const notificacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await login(email, senha);
            notificacao("Login efetuado!");
            setTimeout(() => {
                router.push("/home");
            }, 1500)

        }
        catch (error) {
            erro("Email ou senha invalidos");
        }

    }
    
    return (
        <>
            <ToastContainer/>
            <main className={styles.main}>
                    <img className={styles.imagem} src="/imgs/hamburguer-login.png" alt="Imagem de um hamburguer com seus igredientes voando" />

                <div className={styles.content}>

                    <h1 className={styles.titulo}>Login</h1>
                    <form action="" className={styles.login_form} onSubmit={autenticar}>

                        <div className={styles.campo_form} >
                            <label htmlFor="email" className={styles.label_}>E-mail </label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required className={styles.input_}
                                   value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha" className={styles.label_}>Senha </label>
                            <input type="password" name="senha" placeholder="********" required className={styles.input_}
                                   value={senha} onChange={(e) => setSenha(e.target.value)}/>
                        </div>

                        <a href="#" className={styles.senha}> Esqueceu sua senha?</a>
                        <button type="submit" className={styles.entrar}>Entrar</button>

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;