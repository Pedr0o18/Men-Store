import { useState } from "react"
import styles from "./MarketCart.module.css"
import { useCart } from "../context/CartContext"

const MarketCart = () => {

  const {isOpen, setIsOpen, cartArray, setCartArray} = useCart()

  const handleRemove = (id) => {
    setCartArray((prevCart) => prevCart.filter((product) => product.id !== id))
  }

  if(!isOpen) {
      return null
  }

  return (
    <div className={styles.overlay} >
      <menu className={styles.modal}>
        <header className={styles.header}>
          <h2>CARRINHO</h2>
          <button onClick={() => setIsOpen(false)} className={styles.closeButton}> X </button>
        </header>
        <nav>
          <ul className={styles.fullList} >
            {
              cartArray.map((product) => (
                <li key={product.id} className={styles.listItem} >
                  <img src={product.img} alt={product.img} className={styles.imgCart} />
                  <h2>{product.nome}</h2>
                  <p>R${product.valor}</p>
                  <button onClick={() => handleRemove(product.id)}>Remover</button>
                </li>
              ))
            }
          </ul>
        </nav>
      </menu>
    </div>
  )
}

export default MarketCart