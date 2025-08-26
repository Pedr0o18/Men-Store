import styles from './NavBar.module.css'

import { useAuthValue } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

import {Link} from 'react-router-dom'

const NavBar = () => {

  const {user} = useAuthValue()
  const {setIsOpen} = useCart()

  return (
      <nav className={styles.navBarDisplay}>
        <Link to='/' ><h1>MEN STORE</h1></Link>
        <ul className={styles.navDisplay}>
          <li>
            <Link to='/products/camisa' >CAMISAS</Link>
          </li>
          <li>
            <Link to='/products/tshirts' >T-SHIRTS</Link>
          </li>
          <li>
            <Link to='/products/calcas' >CALÇAS</Link>
          </li>
          <li>
            <Link to='/products/shorts' >SHORTS</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to=""><img src="/search-icon.png" alt="" /></Link >
          </li>
          <li>
            <button className={styles.buttonCart} onClick={() => setIsOpen(true)} ><img src="/carrinho-icon.png"alt="" /></button>
          </li>
          {user ? 
            <Link to='/perfil' className={styles.displayName} >{user.displayName}</Link>
           : 
            <li>
            <Link to="/login"><img src="/login-icon.png"alt="" /></Link >
            </li> }
        </ul>
      </nav>
  )
}

export default NavBar