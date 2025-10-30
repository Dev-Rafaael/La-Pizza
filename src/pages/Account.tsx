import { Link} from "react-router-dom";
import styles from "../styles/Account.module.css";
import type { Account } from "../types";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMaskInput } from "react-imask";

import UseAccount from "../hooks/useAccount";
function Account() {
const { account,
    nome,
    setNome,
    sobreNome,
    setSobreNome,
    nascimento,
    setNascimento,
    sexo,
    setSexo,
    telefone,
    setTelefone,
    deletarAccount,
    edit,
    handleCloseModal,
    isModalOpen,
    handleEdit} = UseAccount()
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
        <>
          <header className={styles.navAccount}>
            <h1>MINHA CONTA</h1>
          </header>
          <main className={styles.mainAccount}>
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
                          onClick={() => edit()}
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
        </>
      )}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Editar Conta</h2>

            <form onSubmit={handleEdit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="sobreNome">Sobrenome:</label>
                <input
                  type="text"
                  id="sobreNome"
                  name="sobreNome"
                  value={sobreNome}
                  onChange={(e) => setSobreNome(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="sexo">Sexo:</label>
                <select
                  id="sexo"
                  name="sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecione uma opção
                  </option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="data">Data de Nascimento:</label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="telefone">DDD + Celular:</label>
                <IMaskInput
                  mask="(00) 00000-0000"
                  value={telefone}
                  onAccept={(value: string) => setTelefone(value)}
                  placeholder="(11) 91092-8922"
                  required
                />
              </div>

              <div className={styles.modalButtons}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className={styles.closeButton}
                >
                  Voltar
                </button>
                <button type="submit" className={styles.saveButton}>
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Account;
