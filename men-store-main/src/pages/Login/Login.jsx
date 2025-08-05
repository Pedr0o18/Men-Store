import styles from "./Login.module.css"

import { Link } from "react-router-dom"

const Login = () => {
  return (
    <main className={styles.loginMain}>
      <h1>Faça Login</h1>
      <section>
        <form>
          <input
            type="email"
            required 
            placeholder='E-mail' />
          <input
           type="password"
            required 
            placeholder='Senha' />
          <Link to="*">Esqueceu a senha ?</Link>
          <button className={styles.loginButton}>Fazer Login</button>
          <Link to="/register" >Criar conta</Link>
        </form>
      </section>
    </main>
  )
}

export default Login