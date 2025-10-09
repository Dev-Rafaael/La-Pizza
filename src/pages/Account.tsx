import { useState, type FormEvent } from "react";
import accountHook from "../hooks/accountHook";
import styles from "../styles/Account.module.css";
import type { Account } from "../types";
import { toast } from "react-toastify";
function Account() {
  const { account, criarAccount } = accountHook<Account>("account", []);
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCEP] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
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
      cep,
      estado,
      cidade,
      numero,
      complemento
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
        <div className={styles.navAccount}>
          <h1>MINHA CONTA</h1>
        </div>

        {/* {AccountItems.map((item, index) => ( */}
        <section className={styles.accountSection}>
          {account.length == 0 ? (
            <form onSubmit={handleAccount} className={styles.formIdentificacao}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Digite Seu CPF"
                value={cpf}
                onChange={(e) => setCPF(e.target.value)}
                required
              />

              <label htmlFor="nome">Nome </label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Digite Seu Nome Completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <label htmlFor="SobreNome">SobreNome</label>
              <input
                type="text"
                name="SobreNome"
                id="SobreNome"
                placeholder="Digite Seu Nome Completo"
                value={sobreNome}
                onChange={(e) => setSobreNome(e.target.value)}
                required
              />
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite Seu E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="sexo">Sexo</label>
              <select
                name="sexo"
                id="sexo"
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

              <label htmlFor="telefone">DDD + Celular</label>
              <input
                type="text"
                name="telefone"
                id="telefone"
                placeholder="(11) 91092-8922"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />

              <label htmlFor="data">Data de Nascimento</label>
              <input
                type="date"
                name="data"
                id="data"
                value={nascimento}
                onChange={(e) => setNascimento(e.target.value)}
                required
              />

              <label htmlFor="CEP">CEP</label>
              <input
                type="text"
                name="CEP"
                id="CEP"
                value={cep}
                onChange={(e) => setCEP(e.target.value)}
                required
              />
              <label htmlFor="Estado">Estado</label>
              <select
                name="Estado"
                id="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              >
                <option value="SaoPaulo" disabled selected>
                  São Paulo
                </option>
              </select>
              <label htmlFor="Cidade">Cidade</label>
              <input
                type="text"
                name="Cidade"
                id="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
              <label htmlFor="Numero">N</label>
              <input
                type="text"
                name="Numero"
                id="Numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
              <label htmlFor="Complemento">Complemento</label>
              <input
                type="text"
                name="Complemento"
                id="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                required
              />

                <div className={styles.btn}>
                <button type="submit">COMPRAR</button>
              </div>
            </form>
          ) : (
            <>
            {account.map((u)=>(
              <div className="">
              <aside className={styles.accountAside}>
                <figure>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                  />
                  <figcaption>
                    <h1>Olá {u.nome}</h1>
                    <p>Bay Area, San Francisco, CA</p>
                    {/* <Link to={"#"}>Excluir</Link>
          <Link to={"#"}>Editar</Link> */}
                  </figcaption>
                </figure>
              </aside>

              <section className={styles.infoSection}>
                <article className={styles.infoArticle}>
                  <h2>INFORMAÇOES PESSOAIS</h2>
                  <dl>
                    <div className={styles.flexRow}>
                      <dt>Nome Completo</dt>
                      <dd>{u.nome} {u.sobreNome}</dd>
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
                      <dt>Data De Nascimento</dt>
                      <dd>{u.nascimento}</dd>
                    </div>

                    <div className={styles.flexRow}>
                      <dt>Endereço</dt>
                      <dd>{u.estado}-{u.cidade}-{u.numero}-{u.complemento}-{u.cep}</dd>
                    </div>
                  </dl>
                </article>
              </section>
             </div> ))}
            </>
          )}
        </section>

        {/* ))} */}
      </main>
    </section>
  );
}

export default Account;
