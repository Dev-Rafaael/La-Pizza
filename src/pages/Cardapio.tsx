import useCardapio from "../hooks/useCardapio";
import styles from "../styles/Cardapio.module.css";
import { Link } from "react-router-dom";

function Cardapio() {
  const {pizzas} = useCardapio()

  return (
    <section className={styles.cardapio}>
      <div className={styles.navCardapio}>
        <h1>CARDAPIO</h1>
      </div>
      <div className={styles.cardapioItens}>
        <h2>
          ENCONTRE AQUI A <span>PIZZA</span> IDEAL PARA <span>VOCÊ</span>
        </h2>
        <div className={styles.cardapioContainer}>
          {pizzas.map((pizza) => (
            <div key={pizza.id} className={styles.pizzaItem}>
              <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />
              <div className={styles.infoItens}>
                <h1 className={styles.name}>{pizza.sabor}</h1>

                <p>{pizza.descricao}</p>
                <h4>R${pizza.preco.toFixed(2)}</h4>
                <article className={styles.cardapioOption}>
                  <Link to={`/Orçamento/${pizza.sabor}`} className={styles.btn}>
                    Comprar
                  </Link>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cardapio;
