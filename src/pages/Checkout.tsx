import React, { useEffect, useState } from "react";
import styles from "../styles/Checkout.module.css";
import checkoutHook from "../hooks/checkoutHook";
import type { Checkout } from "../types";
function Checkout() {
  const { identifier, criarIdentifier } = checkoutHook<Checkout>(
    "checkout",
    []
  );
  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobrenome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [idade, setIdade] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cep, setCEP] = useState<string>("");
  const [numero, setNumero] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newIdentifier = criarIdentifier(
      nome,
      sobrenome,
      cpf,
      sexo,
      idade,
      email,
      cep,
      numero
    );

    if (newIdentifier) {
      alert("Deu certo....");
      console.log(newIdentifier);
    } else {
      alert("Não foi possivel fazer a compra! Tente Novamente Mais tarde");
      return;
    }
  };
  useEffect(() => {
    setNome("");
    setSobrenome("");
    setCPF("");
    setSexo("");
    setIdade("");
    setEmail("");

    setCEP("");
    setNumero("");
  }, [identifier]);
  return (
    <section className={styles.checkoutForm}>
      <h1>Identificação</h1>
      <p>Está quase Terminando</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          placeholder="Digite Seu Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          value={sobrenome}
          placeholder="Digite Seu Sobre Nome"
          onChange={(e) => setSobrenome(e.target.value)}
        />
        <input
          type="text"
          value={cpf}
          placeholder="Digite Seu CPF"
          onChange={(e) => setCPF(e.target.value)}
        />
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="" selected>
            Selecione
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <input
          type="text"
          value={idade}
          placeholder="Digite Sua Idade"
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Digite Seu E-Mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={cep}
          placeholder="Digite Seu CEP"
          onChange={(e) => setCEP(e.target.value)}
        />
        <input
          type="text"
          value={numero}
          placeholder="Digite o Numero"
          onChange={(e) => setNumero(e.target.value)}
        />
        <button type="submit">Finalizar</button>
      </form>
    </section>
  );
}

export default Checkout;
