import React from "react";
import styles from "../styles/Carrinho.module.css";
import cartHook from "../hooks/cartHook";
import type { Cart } from "../types";
import { Link } from "react-router-dom";
import visa from '../assets/IMG/visa.png'
import mastercard from '../assets/IMG/mastercard.png'
import pix from '../assets/IMG/pix.png'
function Carrinho() {
  const { itens, deletarItem } = cartHook<Cart>("cart", []);

  const deletar = (index: number) => {
    const confirm = window.confirm("Tem Certeza que deseja Deletar?");
    if (confirm) {
      deletarItem(index);
    }
  };

  const valorTotal = itens.reduce((acc,cur)=>cur.precoTotal + acc,0)
  return (
   <section className={styles.cartSection}>
  <div className={styles.titleCart}>
    <h1>Carrinho</h1>
  </div>
<article className={styles.cartContent}>
  <div className={styles.itensList}>
    {itens.map((pizza) => (
      <article key={pizza.cartId} className={styles.item}>
        <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />

        <div className={styles.infoItem}>
          <h2><span>Pizza:</span> {pizza.sabor}</h2>
          <h2><span>Preço:</span> {pizza.precoTotal}</h2>
          <h2><span>Quantidade:</span> {pizza.unidades}</h2>
        </div>

        <div className={styles.actions}>
          <Link to={`/Identificação/${pizza.cartId}`}>Pagar</Link>
          <button onClick={() => deletar(pizza.cartId)}>Remover</button>
          <button className={styles.editBtn} onClick={() => deletar(pizza.cartId)}>Editar</button>
        </div>
      </article>
    ))}
  </div>

  <div className={styles.valoresContent}>
    <h2>Total Do Carrinho: <strong>R${valorTotal.toFixed(2)}</strong></h2>
  
  <div className={styles.payment}>
     <h2>Formas Pagamentos</h2>
        <div className={styles.bandeiras}>
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="Mastercard" />
          <img src={pix} alt="Pix" />
        </div>
  </div>
  <button>PAGAR</button>
  </div>
  </article>
</section>

  );
}

export default Carrinho;
