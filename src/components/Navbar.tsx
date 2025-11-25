import PizzaIcon from "../assets/IMG/faviconPizza.png";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import type { Cart } from "@packages/types/types";
import { api } from "@packages/api/api";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Cart[]>([]);
const location = useLocation();

const toggleModal = () => {
  const next = !isModalOpen;
  setIsModalOpen(next);
  setIsMenuOpen(false);
  if (next) {
    setSearchTerm("");
    setSearchResults([]);
  }
};


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

useEffect(() => {
  if (searchTerm.trim() === "") {
    setSearchResults([]);
    return;
  }

  const timeout = setTimeout(async () => {
    try {
      const { data } = await api.get(`/pizzas/${searchTerm}`);
      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  }, 400); 

  return () => clearTimeout(timeout);
}, [searchTerm]);



 useEffect(() => {
  function handleOutsideClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const isClickInsideMenu =
      target.closest(`.${styles.navItens}`) ||
      target.closest(`.${styles.hamburgerMenu}`);
    if (isMenuOpen && !isClickInsideMenu) {
      setIsMenuOpen(false);
    }
  }

  document.addEventListener("mousedown", handleOutsideClick);
  return () => document.removeEventListener("mousedown", handleOutsideClick);
}, [isMenuOpen]);

useEffect(() => {
  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
}, [isModalOpen]);

useEffect(() => {
  setIsModalOpen(false);
  setSearchTerm("");
  setSearchResults([]);
}, [location.pathname]);

  return (
    <section className={styles.navBar}>
      <div className={styles.content}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </div>

        <a href="/" className={styles.title}>
          <img src={PizzaIcon} alt="Ícone de pizza" />
          <span> LAPIZZA</span>
        </a>
        <nav className={styles.navbarContent}>
          <div
            className={`${styles.navItens} ${isMenuOpen ? styles.open : ""}`}
          >
            <ul>
              <li>
                <button onClick={toggleModal}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </li>
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
                <Link to="/Carrinho">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </li>
              <li>
                <Link to="/Perfil">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={toggleModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>Pesquisar</h2>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Digite sua busca..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className={styles.searchInput}
                />

                {searchTerm && (
                  <button className={styles.clearButton} onClick={clearSearch}>
                    Limpar
                  </button>
                )}
              </div>
              <div className={styles.searchResults}>
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((item, index) => (
                      <div className={styles.pacotesType} key={index}>
                        <img src={item.imagem} alt={item.sabor} />
                        <h2>{item.sabor}</h2>
                        <p>{item.descricao}</p>
                        <div className={styles.pacotesPreco}>
                          <p>R${item.preco.toFixed(2)}</p>
                        </div>
                        <div className={styles.actionPay}>
                          <Link
                            to={`/Orçamento/${item.sabor}`}
                            onClick={closeModal}
                          >
                            Selecionar
                          </Link>
                        </div>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.vazioSearch}>
                    Nenhum pacote encontrado.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
