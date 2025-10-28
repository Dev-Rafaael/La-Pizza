import { Link, useNavigate } from "react-router-dom";

import styles from "../styles/Account.module.css";
import type { Account } from "../types";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
function Account() {
  const [account, setAccount] = useState<Account[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        setAccount([JSON.parse(user)]);
      } catch (error) {
        console.error("Erro ao converter JSON do usuário:", error);
        navigate("/login");
      }
    } else {
      navigate("/perfil");
    }
  }, [navigate]);
  
  const deletarAccount = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAccount([])
  };

  return (
    <section className={styles.accountContent}>
      {account.length === 0 ? (
        <main className={styles.accountVoid}>
          <h2>O CADASTRO ESTA VAZIO</h2>
          <div className={styles.buttonContainer}>
            <Link to="/Cadastro" className={styles.btnCadastrar}>
              Cadastrar
            </Link>
            <Link to="/Login" className={styles.btnLogar}>
              Entrar
            </Link>
          </div>
        </main>
      ) : (
        <header className={styles.navAccount}>
          <main className={styles.mainAccount}>
            <h1>MINHA CONTA</h1>

            <section className={styles.accountSection}>
              {account.map((u, index) => (
                <article key={index} className={styles.userCard}>
                  <aside className={styles.accountAside}>
                    <figure>
                      <img
                        src={
                          u.sexo === "feminino"
                            ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                            : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                        }
                        alt="avatar"
                      />

                      <figcaption>
                        <h2>Olá {u.nome}</h2>
                        <p>Bay Area, San Francisco, CA</p>
                      </figcaption>

                      <div className={styles.userActions}>
                        <button onClick={() => deletarAccount()}>Logout</button>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className={styles.editIcon}
                        />
                      </div>
                    </figure>
                  </aside>

                  <section className={styles.infoSection}>
                    <article className={styles.infoArticle}>
                      <h3>Informações Pessoais</h3>
                      <dl>
                        <div className={styles.flexRow}>
                          <dt>Nome Completo</dt>
                          <dd>
                            {u.nome} {u.sobreNome}
                          </dd>
                        </div>

                        <div className={styles.flexRow}>
                          <dt>Sexo</dt>
                          <dd>{u.sexo}</dd>
                        </div>

                        <div className={styles.flexRow}>
                          <dt>Email</dt>
                          <dd>{u.email}</dd>
                        </div>

                        <div className={styles.flexRow}>
                          <dt>Telefone</dt>
                          <dd>{u.telefone}</dd>
                        </div>

                        <div className={styles.flexRow}>
                          <dt>Data de Nascimento</dt>
                          <dd>{u.nascimento}</dd>
                        </div>
                      </dl>
                    </article>
                  </section>
                </article>
              ))}
            </section>
          </main>
        </header>
      )}
    </section>
  );
}

export default Account;
