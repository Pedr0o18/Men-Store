import styles from "./Register.module.css"

import { useEffect, useState } from "react"
import { useAuthenticated } from "../../hooks/useAuthenticated"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  
  // States 
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState(null)

  const {auth, createUser, error: authError, loading} = useAuthenticated()

  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    setError(null)

    const user = {
      username,
      email,
      password,
      confirmPassword
    }

    if (password !== confirmPassword) {
      setError("As senhas não são iguais")
      return
    }

    const res = await createUser(user)
    if (res) {
      navigate('/login')
    }

    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <main className={styles.registerMain}>
      <h1>Crie Sua Conta</h1>
      <section>
        <form onSubmit={handleSubmit}>

          <input 
          type="text" 
          required 
          placeholder='Nome'
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          />

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

          <input 
          type="password" 
          required 
          placeholder='Confirme sua senha' 
          value={confirmPassword}
          onChange={(evt) => setConfirmPassword(evt.target.value)}
          />

          {!loading && <button className={styles.registerButton}>Criar</button>}
          {loading && <button className={styles.registerButton} disabled >Aguarde</button>}
          {error && <span className={styles.error}>{error}</span>}

        </form>
      </section>
    </main>
  )
}

export default Register