import { useState, type FormEvent } from "react";
import accountHook from "../hooks/accountHook";
import styles from "../styles/Account.module.css";
import type { Account } from "../types";
import { toast } from "react-toastify";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Account() {
  const { account, criarAccount,deletarAccount } = accountHook<Account>("account", []);
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [cep, setCEP] = useState<string>("");
  // const [estado, setEstado] = useState<string>("");
  // const [cidade, setCidade] = useState<string>("");
  // const [numero, setNumero] = useState<string>("");
  // const [complemento, setComplemento] = useState<string>("");
  const handleAccount = (e: FormEvent) => {
    e.preventDefault();

    const newAccount = criarAccount(
      nome,
      sobreNome,
      cpf,
      sexo,
      nascimento,
      email,
      telefone,
      // cep,
      // estado,
      // cidade,
      // numero,
      // complemento
    );

    if (newAccount) {
      toast.success("🍕 Pedido realizado com sucesso!");
      console.log(newAccount);
    } else {
      toast.error(
        "Não foi possivel fazer a compra! Tente Novamente Mais tarde!"
      );

      return;
    }
  };
  return (
  <section className={styles.accountContent}>
  <main className={styles.mainAccount}>
    <header className={styles.navAccount}>
      <h1>{account.length > 0 ? 'MINHA CONTA' : 'CADASTRE-SE'}</h1>
    </header>

    <section className={styles.accountSection}>
      {account.length === 0 ? (
        <form onSubmit={handleAccount} className={styles.formIdentificacao}>
    <fieldset>
      <legend>Informações Pessoais</legend>

      <div className={styles.grid2}>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="Digite Seu CPF"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite Seu Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="SobreNome">Sobrenome</label>
          <input
            type="text"
            id="SobreNome"
            name="SobreNome"
            placeholder="Digite Seu Sobrenome"
            value={sobreNome}
            onChange={(e) => setSobreNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="sexo">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione uma Opção
            </option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div>
          <label htmlFor="telefone">DDD + Celular</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="(11) 91092-8922"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="data">Data de Nascimento</label>
          <input
            type="date"
            id="data"
            name="data"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            required
          />
        </div>
      </div>
    </fieldset>
{/* 
    <fieldset>
      <legend>Endereço</legend>
      <div className={styles.grid2}>
         <div>
          <label htmlFor="CEP">CEP</label>
          <input
            type="text"
            id="CEP"
            name="CEP"
                 placeholder="Digite Seu CEP"
            value={cep}
            onChange={(e) => setCEP(e.target.value)}
            required
          />
        </div>
            </div>
<div className={styles.grid2}>
        <div>
          <label htmlFor="Estado">Estado</label>
          <select
            id="Estado"
            name="Estado"
            value={estado}
           
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value="SaoPaulo" selected>
              São Paulo
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="Cidade">Cidade</label>
          <input
            type="text"
            id="Cidade"
            name="Cidade"
                placeholder="Digite Sua Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="Numero">Número</label>
          <input
            type="text"
            id="Numero"
            name="Numero"
                   placeholder="Digite Seu Numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="Complemento">Complemento</label>
          <input
            type="text"
            id="Complemento"
            name="Complemento"
                   placeholder="Digite O Complemeto"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
      </div>  
    </fieldset> */}

    <div className={styles.btn}>
      <button type="submit">CADASTRAR-SE</button>
    </div>
  </form>
      ) : (
        <>
          {account.map((u, index) => (
            <article key={index} className={styles.userCard}>
              <aside className={styles.accountAside}>
                <figure>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt={`Avatar de ${u.nome}`}
                  />
                  <figcaption>
                    <h2>Olá {u.nome}</h2>
                    <p>Bay Area, San Francisco, CA</p>
                  </figcaption>
                  
              <div className={styles.userActions}>
                <button onClick={() => deletarAccount(u.id)}>Logout</button>
                <FontAwesomeIcon icon={faPenToSquare} className={styles.editIcon} />
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

                    {/* <div className={styles.flexRow}>
                      <dt>Endereço</dt>
                      <dd>
                        {u.estado} - {u.cidade}, {u.numero} - {u.complemento} - {u.cep}
                      </dd>
                    </div> */}
                  </dl>
                </article>
              </section>
            </article>
          ))}
        </>
      )}
    </section>
  </main>
</section>

  );
}

export default Account;
