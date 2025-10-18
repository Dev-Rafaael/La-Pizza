import { useState, type FormEvent } from "react";
import styles from "../styles/Cadastrar.module.css";
import type { Account } from "../types";
import accountHook from "../hooks/accountHook";
import { toast } from "react-toastify";
function Cadastrar() {
  const { criarAccount } = accountHook<Account>("account", []);
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  // const [cep, setCEP] = useState<string>("");
  // const [estado, setEstado] = useState<string>("");
  // const [cidade, setCidade] = useState<string>("");
  // const [numero, setNumero] = useState<string>("");
  // const [complemento, setComplemento] = useState<string>("");

  const handleAccount = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const newAccount = criarAccount(
      nome,
      sobreNome,
      cpf,
      sexo,
      nascimento,
      email,
      telefone
      // cep,
      // estado,
      // cidade,
      // numero,
      // complemento
    );

    if (newAccount) {
      toast.success("🍕 Pedido realizado com sucesso!");
      console.log(newAccount);
      setLoading(false);
    } else {
      toast.error(
        "Não foi possivel fazer a compra! Tente Novamente Mais tarde!"
      );
      setLoading(false);

      return;
    }
  };
  return (
    <main className={styles.mainCadastro}>
      <div className={styles.navCadastro}>
        <h1>CADASTRO DE USUÁRIO</h1>
      </div>
      <article className={styles.cadastroSection}>
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
            <button
              type="submit"
              className={styles.btnEntrar}
              disabled={loading}
            >
              {loading ? "CADASTRANDO..." : "CADASTRAR-SE"}
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Cadastrar;
