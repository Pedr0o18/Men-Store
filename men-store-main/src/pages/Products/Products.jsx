import styles from "./Products.module.css"
import produtos from "../../database/db.json"
import { useParams } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Products = () => {
  const { cartArray, setCartArray } = useCart()
  const { productType } = useParams()

  const produtosFiltrados = produtos.produtos.filter(
    (produto) => produto.tipo.toLowerCase() === productType.toLowerCase()
  )

  const handleAddToCart = (produto) => {

    if(cartArray.length >= 4) {
      return
    }

    setCartArray((prevCart) => [
      ...prevCart,
      {
        id: produto.id,
        img: produto.url,
        nome: produto.nome,
        valor: produto.valor,
      },
    ])
  }

  return (
    <main className={styles.container}>
      {produtosFiltrados.map((produto) => (
        <div key={produto.id} className={styles.card}>
          <img src={produto.url} alt={produto.nome} className={styles.img} />
          <h2>{produto.nome}</h2>
          <p>R$ {produto.valor}</p>
          <button
            className={styles.buttonAdd}
            onClick={() => handleAddToCart(produto)}
          >
            Adicionar Ao Carrinho
          </button>
        </div>
      ))}
    </main>
  )
}

export default Products
