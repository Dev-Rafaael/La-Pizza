  import styles from "../styles/Cardapio.module.css";
  import pizzas from "../database/pizzas";

  import { Link } from "react-router-dom";
  function Cardapio() {
    return (
      <section className={styles.cardapio}>
       <div className={styles.navCardapio}>
          <h1>CARDAPIO</h1>
         
        </div>
        <div className={styles.cardapioItens}>
          {pizzas.map((pizza) => (
              <div key={pizza.id}  className={styles.pizzaItem}>
                <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />
                <div className={styles.infoItens}>
                  <h1 className={styles.name}>{pizza.sabor}</h1>
                 
                    <p>{pizza.descricao}</p>
                     <h4>
                  {pizza.preco.toFixed(2)}
                  </h4>
                  <article className={styles.cardapioOption}>
                  <Link to={`/Orçamento/${pizza.sabor}`} className={styles.btn}>Comprar</Link>
                  </article>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  }

  export default Cardapio;
