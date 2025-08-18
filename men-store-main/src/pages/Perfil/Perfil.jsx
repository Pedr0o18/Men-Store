import styles from "./Perfil.module.css"
import { useAuthValue } from "../../context/AuthContext"
import { useAuthenticated } from "../../hooks/useAuthenticated"

const Perfil = () => {

  const {user} = useAuthValue()
  const {logout} = useAuthenticated()

  return (
    <main className={styles.userMain} >
      <h2>Olá, {user.displayName}</h2>
      <button onClick={logout}>Logout</button>
    </main>
  )
}

export default Perfil