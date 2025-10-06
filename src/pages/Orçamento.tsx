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
  const [precoTotal, setPrecoTotal] = useState<number>(0.0);
  const [unidades, setUnidades] = useState<number>(0);
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
    setPrecoTotal(Number(precoTotalPizza));
  }, [unidades, precoTotal]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrcamento = criarOrcamento(
      String(dataOrcamento.id),
      dataOrcamento.sabor,
      dataOrcamento.descricao,
      dataOrcamento.preco,
      String(dataOrcamento.imagem),
      precoTotal,
      unidades,
      adicionais
    );
    criarItem(
      dataOrcamento.sabor,
      dataOrcamento.descricao,
      Number(dataOrcamento.preco),
      precoTotal,
      unidades,
      adicionais,
      newOrcamento.cartId,
      String(dataOrcamento.imagem)
    );
    alert("Prosseguindo...");
    navigate(`/Identificação/${newOrcamento.cartId}`);
  };

  return (
    <main className={styles.orcamento}>
  <div className={styles.navOrcamento}>
          <h1>ORÇAMENTO Pizza {dataOrcamento.sabor}</h1>
         
        </div>
      <section className={styles.orcamentoSection}>
        <article className={styles.productImage}>
          <img src={dataOrcamento.imagem} alt="Imagem Pizza" />
        </article>
        <article className={styles.orcamentoContent}>
          <h1>{dataOrcamento.sabor}</h1>
          <p>Pacote {dataOrcamento.descricao}</p>
          <h2>Preço: {dataOrcamento.preco.toFixed(2)}</h2>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                 <div className={styles.inputForm}>
            <label htmlFor="Unidades">Unidades:</label>
           <select
                name="Unidades"
                value={unidades}
                onChange={(e) => setUnidades(Number(e.target.value))}
                required
              >
              <option value="" disabled>Selecione as Unidades</option>
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </div>
          <div className={styles.inputForm}>
            <label htmlFor="Adicionais">Adicionais:</label>
            <select
                name="adionais"
                value={adicionais}
                onChange={(e) => setAdicionais(e.target.value)}
                required
              >
                 <option value="" disabled>Selecione</option>
                 <option value="Salame">Salame</option>
                <option value="Cheddar">Cheddar</option>
                <option value="Catupiry">Catupiry</option>
            </select>
          </div>
        
             { <h3 className={styles.valor}> Total a Pagar: R${ precoTotal ? precoTotal.toFixed(2) : dataOrcamento.preco.toFixed(2)}</h3> }
              {/* <Link to={"/Identificação/${}"} type="submit">
          Prosseguir
        </Link> */}

              <button type="submit">Prosseguir</button>
            </form>
          </div>
        </article>
      </section>
      <button onClick={() => clearOrcamento()}>Limpar Tudo</button>
    </main>
  );
}

export default Orçamento;
