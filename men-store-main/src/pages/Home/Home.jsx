import styles from "./Home.module.css"
import produtos from "../../database/db.json"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Home = () => {
  return (
    <main className={styles.main}>
      <img src="parallax.png" className={styles.backgroundImg} alt="Background" />
      
      <section className={styles.products}>
        <h2>Produtos</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation 
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.cardsNav}
        >
          {produtos.produtos
            .filter(produto => produto.id % 2 === 0) // seleciona apenas ids pares
            .map((produto) => (
              <SwiperSlide key={produto.id}>
                <div className={styles.card}>
                  <img src={produto.url} alt={produto.nome} className={styles.img} />
                  <h3 className={styles.name}>{produto.nome}</h3>
                  <p className={styles.value}>R${produto.valor}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </main>
  )
}

export default Home
