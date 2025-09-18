
import styles from '../styles/Home.module.css'


import Pizza from '../assets/IMG/pizza.jpg'
import Pizza1 from '../assets/IMG/pizza1.jpeg'
import Pizza2 from '../assets/IMG/pizza2.jpg'
import Pizza3 from '../assets/IMG/pizza3.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
  
      <main>
        <div className={styles.mainContainer}>
          <h1 className={styles.primeText}>Deixe seu dia mais saboroso!!!</h1>
          <h2 className={styles.segundText}>As melhores pizzas da região</h2>
          <div className={styles.btns}>
            <button className={styles.reserve}>Reserve a sua</button>
            <button className={styles.monter}>Monte a sua</button>
          </div>
        </div>
      </main>

      {/* SOBRE */}
      <section className={styles.sobre} >
        <h1 className={styles.titleSobre}>SOBRE NÓS</h1>
        <div className={styles.sobreInfo}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Adipisci doloremque aperiam id atque, optio cumque tempore corporis 
            laudantium nam vitae. Saepe totam tenetur 
            nam ipsum quae qui tempora velit adipisci.
          </p>
          <div className={styles.slogan}>
            <img src={Pizza} alt="Pizza representando nosso slogan" />
          </div>
        </div>
        <Link to={'/Sobre'}>Ver Mais</Link>
      </section>

      {/* CARDÁPIO */}
      <section className={styles.cardapio}>
        <h1 className={styles.titleCardapio}>CARDÁPIO</h1>
        <div className={styles.cardapioItens}>
          {[Pizza1, Pizza2, Pizza3].map((pizza, index) => (
            <div key={index}>
              <img src={pizza} alt={`Pizza sabor ${index + 1}`} />
              <div className={styles.infoItens}>
                <h1 className={styles.price}>Mussarela</h1>
              
              </div>
            </div>
          ))}
          <Link to={'/Cardapio'}>Ver Mais</Link>
        </div>
      </section>
    </section>  
  )
}

export default Home
