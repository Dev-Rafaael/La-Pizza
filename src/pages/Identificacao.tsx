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
    setSobreNome("");
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
                <form onSubmit={handleSubmit} className={styles.formIdentificacao}>
   
     

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
   <div className={styles.InfoCadastro}>
                <p>
                  Utilizamos seus dados pessoais somente para o cadastro em
                  nossa plataforma, que nos permite lhe prestar nossos serviços.
                </p>
              </div>
              <div className={styles.btn}>
                <button type="submit">COMPRAR</button>
              </div>
  </form>
           
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
