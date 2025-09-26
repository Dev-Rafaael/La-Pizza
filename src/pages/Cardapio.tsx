  import styles from "../styles/Cardapio.module.css";
  import pizzas from "../database/pizzas";

  import { Link } from "react-router-dom";
  function Cardapio() {
    return (
      <section className={styles.cardapio}>
        <h1 className={styles.titleCardapio}>CARDÁPIO</h1>
        <div className={styles.cardapioItens}>
          {pizzas.map((pizza) => (
              <div key={pizza.id}>
                <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />
                <div className={styles.infoItens}>
                  <h1 className={styles.name}>{pizza.sabor}</h1>
                  <h4>
                  {pizza.preco}
                  </h4>
                    <p>{pizza.descricao}</p>
                  <Link to={`/Orçamento/${pizza.sabor}`} className={styles.btn}>Comprar</Link>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    );
  }

  export default Cardapio;
