import { Link } from "react-router-dom";
import PizzaIcon from "../assets/IMG/faviconPizza.png";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <section className={styles.navBar}>
      <div className={styles.content}>
        <a href="/" className={styles.title}>
          <img src={PizzaIcon} alt="Ícone de pizza" /> LAPIZZA
        </a>
        <nav className={styles.navbarContent}>
          <ul className={styles.navItens}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/Sobre">Sobre nós</Link>
            </li>
            <li>
              <Link to="/Cardapio">Cardápio</Link>
            </li>
            <li>
              <Link to="/fale-conosco/">Contato</Link>
            </li>
            <li>
              <Link to="/Politica-Privacidade">Politica</Link>
            </li>
            <li>
              <Link to="/#id-contato">
                <i className="fi fi-brands-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="/#id-contato">
                <i className="fi fi-rr-phone-call"></i>
              </Link>
            </li>
            <li>
              <Link to="/Carrinho">
              <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
