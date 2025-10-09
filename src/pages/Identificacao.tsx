import React, { useEffect, useState } from "react";
import styles from "../styles/Identificacao.module.css";
import checkoutHook from "../hooks/checkoutHook";
import type { Checkout, Orcamento } from "../types";
import orcamentoHook from "../hooks/orcamentoHook";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
function Identificacao() {
  const { orcamento } = orcamentoHook<Orcamento>("orcamento", []);
  const { identifier, criarIdentifier } = checkoutHook<Checkout>(
    "checkout",
    []
  );
  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
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
  const { cartId } = useParams();
  const dataOrcamento = orcamento.find(
    (value) => value.cartId === Number(cartId)
  );
  // console.log(dataOrcamento);

  if (!dataOrcamento) {
    return <p>Pizza Não Encontrada</p>;
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newIdentifier = criarIdentifier(
        nome,
      sobrenome,
      cpf,
      sexo,
      nascimento,
      email,
      telefone,
      cep,
      estado,
      cidade,
      numero,
      complemento,
      dataOrcamento?.sabor,
      dataOrcamento?.descricao,
      dataOrcamento?.preco,
      dataOrcamento?.imagem,
      dataOrcamento?.precoTotal,
      dataOrcamento?.unidades,
      dataOrcamento?.adicionais,
      dataOrcamento?.cartId
    );

    if (newIdentifier) {
    toast.success("🍕 Pedido realizado com sucesso!");
      console.log(newIdentifier);
    } else {
       toast.error("Não foi possivel fazer a compra! Tente Novamente Mais tarde!");

      return;
    }
  };
  useEffect(() => {
    setNome("");
    setSobrenome("");
    setCPF("");
    setSexo("");
    setNascimento("");
    setEmail("");
    setCEP("");
    setNumero("");
  }, [identifier]);
  return (
    <>
      <section className={styles.Identificacao}>
        <div className={styles.navIdentificacao}>
          <h1>IDENTIFICAÇÃO</h1>
        </div>
        <article className={styles.IdentificacaoContent}>
          <h2>Agora, iremos criar o seu cadastro:</h2>
          <p>Está quase acabando...</p>
          <article className={styles.cadastroIdentificacao}>
            <div className={styles.ContentIdentificacao}>
              <form
                onSubmit={handleSubmit}
                className={styles.formIdentificacao}
              >
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

                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Digite Seu Nome Completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
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
              </form>
              <div className={styles.InfoCadastro}>
                <p>
                  Utilizamos seus dados pessoais somente para o cadastro em
                  nossa plataforma, que nos permite lhe prestar nossos serviços.
                </p>
              </div>
              <div className={styles.btn}>
                <button type="submit">COMPRAR</button>
              </div>
            </div>

            {dataOrcamento ? (
              <section className={styles.InfoPacote}>
                <div className={styles.imgPacote}>
                  <img src={dataOrcamento.imagem} alt="Imagem Pizza" />
                </div>
                <h4>{dataOrcamento.sabor}</h4>
                <p>{dataOrcamento.descricao}</p>
                <div className={styles.itemPrice}>
                  <p>R${dataOrcamento.precoTotal.toFixed(2)}</p>
                </div>
                <div className={styles.infoAdicionais}>
                  <div className={styles.info}>
                         <p>Unidades:</p>
                    <p>{dataOrcamento.unidades}</p>
                  </div>
                  <div className={styles.info}>
                         <p>Adicionais:</p>
                    <p>{dataOrcamento.adicionais}</p>
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
          </article>
        </article>
      </section>
    </>
  );
}

export default Identificacao;
