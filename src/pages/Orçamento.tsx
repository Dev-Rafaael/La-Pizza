import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Orçamento.module.css";
import React, { useEffect, useState } from "react";
import orcamentoHook from "../hooks/orcamentoHook";
import type { Cart, Orcamento } from "../types";
import pizzas from "../database/pizzas";
import cartHook from "../hooks/cartHook";
function Orçamento() {
  const { criarItem } = cartHook<Cart>("cart", []);
  const { criarOrcamento, clearOrcamento } = orcamentoHook<Orcamento>(
    "orcamento",
    []
  );
  const [precoTotal, setPrecoTotal] = useState<string>("0.00");
  const [unidades, setUnidades] = useState<string>("");
  const [adicionais, setAdicionais] = useState<string>("");
  const navigate = useNavigate();
  const { sabor } = useParams();
  const dataOrcamento = pizzas.find((value) => value.sabor === sabor);
  if (!dataOrcamento) {
    return <p>Pizza não encontrada</p>;
  }
  useEffect(() => {
    const qtd = Number(unidades) || 0;
    const precoTotalPizza = (dataOrcamento.preco * qtd).toFixed(2);
    setPrecoTotal(precoTotalPizza);
  }, [unidades, precoTotal]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrcamento = criarOrcamento(
      String(dataOrcamento.id),
      dataOrcamento.sabor,
      dataOrcamento.descricao,
      String(dataOrcamento.preco),
      String(dataOrcamento.imagem),
      precoTotal,
      unidades,
      adicionais
    );
    criarItem(
      dataOrcamento.sabor,
      dataOrcamento.descricao,
      String(dataOrcamento.preco),
      Number(precoTotal),
      unidades,
      adicionais,
      Number(newOrcamento.cartId),
      String(dataOrcamento.imagem)
    );
    alert("Prosseguindo...");
    navigate(`/Identificação/${newOrcamento.cartId}`);
  };

  return (
    <section className={styles.formDetails}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia
        animi quia temporibus unde voluptas, eius illum. In excepturi delectus
        voluptatem beatae consequuntur vel quos voluptas. Provident temporibus
        voluptatibus beatae?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia
        animi quia temporibus unde voluptas, eius illum. In excepturi delectus
        voluptatem beatae consequuntur vel quos voluptas. Provident temporibus
        voluptatibus beatae?
      </p>
      <div className="">
        <ul>
          <li>
            <img src={dataOrcamento?.imagem} alt="Imagem Pizza" />
          </li>
          <li>{dataOrcamento?.sabor}</li>
          <li>{dataOrcamento?.preco}</li>
          <li>{dataOrcamento?.descricao}</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <select
          name="Unidades"
          value={unidades}
          onChange={(e) => setUnidades(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select
          name="adionais"
          value={adicionais}
          onChange={(e) => setAdicionais(e.target.value)}
        >
          <option value="" disabled>
            Selecione
          </option>
          <option value="Salame">Salame</option>
          <option value="Cheddar">Cheddar</option>
          <option value="Catupiry">Catupiry</option>
        </select>
        {unidades ? <h1>{precoTotal}</h1> : ""}
        {/* <Link to={"/Identificação/${}"} type="submit">
          Prosseguir
        </Link> */}

        <button type="submit">Prosseguir</button>
      </form>

      <button onClick={() => clearOrcamento()}>Limpar Tudo</button>
    </section>
  );
}

export default Orçamento;
