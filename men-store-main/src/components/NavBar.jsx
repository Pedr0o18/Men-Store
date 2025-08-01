import styles from './NavBar.module.css'

import {Link} from 'react-router-dom'

const NavBar = () => {
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
            <Link to=""><img src="/carrinho-icon.png" alt="" /></Link >
          </li>
          <li>
            <Link to="/login"><img src="/login-icon.png" alt="" /></Link >
          </li>
        </ul>
      </nav>
  )
}

export default NavBar