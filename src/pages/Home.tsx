
import styles from '../styles/Home.module.css'


import Pizza from '../assets/IMG/pizza.jpg'
import Pizza1 from '../assets/IMG/pizza1.jpeg'
import Pizza2 from '../assets/IMG/pizza2.jpg'
import Pizza3 from '../assets/IMG/pizza3.jpg'
import { Link } from 'react-router-dom'
import avaliacoes from '../database/avaliacoes'
import lista from '../database/beneficios'
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
      {/* APRESENTACAO  */}
      <section className={styles.pizzaSection}>
  <div className={styles.content}>
    <p className={styles.chamada}></p>
    <h3>Experimente nossas pizzas com</h3>
    <h4>Sabor e Qualidade Incomparáveis</h4>
    <p>
      Na La Pizza, preparamos pizzas deliciosas para qualquer ocasião: almoço em família, encontro com amigos ou aquela noite especial.  
      Ingredientes frescos, massa artesanal e combinações únicas que vão conquistar todos os paladares!
    </p>
    <div className={styles.contentBtn}>
      <Link to="/Cardapio/">VEJA NOSSO CARDÁPIO</Link>
    </div>
  </div>
  <div className={styles.contentVideo}>
    <iframe
      src="https://www.youtube.com/embed/GwS5ASoSQos"
      title="Vídeo La Pizza"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
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

      

      {/* BENEFICIOS E DIFERENCIAS  */}
        <section className={styles.beneficiosContent}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        ⭐ Nossos Diferenciais
      </h2>
            <ul style={{ maxWidth: "600px", margin: "0 auto", listStyle: "none" }}>
        {lista.map((beneficio, index) => (
          <li
            key={index}
            style={{
              marginBottom: "0.8rem",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "0.5rem" }}>✅</span> {beneficio}
          </li>
        ))}
      </ul>
        </section>

      {/* AVALIACOES  */}
      <section className={styles.avaliacoesContent}>
        {avaliacoes.map((avaliacao, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              width: "250px",
              background: "#fff",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <p style={{ fontSize: "1.2rem" }}>
              {"⭐".repeat(avaliacao.estrelas)}
              {"☆".repeat(5 - avaliacao.estrelas)}
            </p>
            <p>{avaliacao.texto}</p>
            <p>
              <strong>— {avaliacao.nome}</strong>
            </p>
          </div>
        ))}
      </section>
    </section>  
  )
}

export default Home
