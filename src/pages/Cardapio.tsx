import styles from "../styles/Cardapio.module.css";

import Pizza1 from "../assets/IMG/pizza1.jpeg";
import Pizza2 from "../assets/IMG/pizza2.jpg";
import Pizza3 from "../assets/IMG/pizza3.jpg";
import Pizza4 from "../assets/IMG/pizza4.jpg";
import Pizza5 from "../assets/IMG/pizza5.jpg";
import Pizza6 from "../assets/IMG/pizza6.jpg";
import { Link } from "react-router-dom";
function Cardapio() {
  return (
    <section className={styles.cardapio}>
      <h1 className={styles.titleCardapio}>CARDÁPIO</h1>
      <div className={styles.cardapioItens}>
        {[Pizza1, Pizza2, Pizza3, Pizza4, Pizza5, Pizza6].map(
          (pizza, index) => (
            <div key={index}>
              <img src={pizza} alt={`Pizza sabor ${index + 1}`} />
              <div className={styles.infoItens}>
                <h1 className={styles.price}>Mussarela</h1>
                <h4>
                  6 Fatias <span>R$35.00</span>
                </h4>
                <h4>
                  8 Fatias <span>R$45.00</span>
                </h4>
                <h4>
                  12 Fatias <span>R$65.00</span>
                </h4>
                <Link to={`/Orçamento/${index + 1}`} className={styles.btn}>Comprar</Link>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Cardapio;
