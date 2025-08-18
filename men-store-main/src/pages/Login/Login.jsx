import styles from "./Login.module.css"

import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuthenticated } from "../../hooks/useAuthenticated"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const {login, loginError, user, authLoading} = useAuthenticated()
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    console.log("Enviados", email, password)
    evt.preventDefault()

    login(email, password)

  }

  useEffect(() => {
    if(user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <main className={styles.loginMain}>
      <h1>Faça Login</h1>
      <section>
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            required 
            placeholder='E-mail'
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />

          <input
           type="password"
            required 
            placeholder='Senha' 
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />

          <Link to="*">Esqueceu a senha ?</Link>
          <button className={styles.loginButton} type="submit">Fazer Login</button>
          <Link to="/register" >Criar conta</Link>
        </form>
      </section>
    </main>
  )
}

export default Login