import { Link } from "react-router-dom";
import PizzaIcon from "../assets/IMG/faviconPizza.png";
import styles from "../styles/NavBar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
     const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };


    useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMenuOpen && !e.target.closest(`.${styles.navItens}`) && !e.target.closest(`.${styles.hamburgerMenu}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <section className={styles.navBar}>
      <div className={styles.content}>
  <div className={styles.hamburgerMenu} onClick={toggleMenu}>
  <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
</div>

        <a href="/" className={styles.title}>
          <img src={PizzaIcon} alt="Ícone de pizza" /><span> LAPIZZA</span>
        </a>
        <nav className={styles.navbarContent}>
       <div className={`${styles.navItens} ${isMenuOpen ? styles.open : ''}`}>
          <ul>
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
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
                  {/* {searchResults.map((item, index) => (
                    <div className={styles.pacotesType} key={index} onClick={() => handlePacoteClick(item)}>
                      <img src={imageMap[item.img]} alt={item.title} />
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <div className={styles.pacotesPreco}>
                        <p>{item.price}</p>
                      </div>
                      <Link 
                        to={`/Orçamento/${formatTitleForURL(item.title)}`}
                        state={{ item }}
                        onClick={handleLinkClick} // Ativa o spinner ao clicar
                      >
                        SAIBA MAIS
                      </Link>
                    </div>
                  ))} */}
                </ul>
              ) : (
                <p className={styles.vazioSearch}>Nenhum pacote encontrado.</p>
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
