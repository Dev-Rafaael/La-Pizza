
import styles from '../styles/Sobre.module.css'

import Pizza from '../assets/IMG/pizza.jpg'
function Sobre() {
  return (
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
      </section>
  )
}

export default Sobre
