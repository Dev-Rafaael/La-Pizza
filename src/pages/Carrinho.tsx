import styles from "../styles/Carrinho.module.css";
import cartHook from "../hooks/cartHook";
import type { Cart } from "../types";
import { Link } from "react-router-dom";
import visa from "../assets/IMG/visa.png";
import mastercard from "../assets/IMG/mastercard.png";
import pix from "../assets/IMG/pix.png";
import { useState, type FormEvent } from "react";
function Carrinho() {
  const [newQuantidade, setNewQuantidade] = useState<number>(0);
  const { itens, deletarItem, atualizarItem } = cartHook<Cart>("cart", []);
  const [editId, setEditId] = useState<number | null>(null);

  const deletar = (index: number) => {
    const confirm = window.confirm("Tem Certeza que deseja Deletar?");
    if (confirm) {
      deletarItem(index);
    }
  };
  const edit = (item: Cart) => {
    setEditId(item.cartId);
    setNewQuantidade(item.unidades);
  };

  const editar = (e: FormEvent) => {
    e.preventDefault();

    if (editId != null) {
      const itemOriginal = itens.find((item) => item.cartId === editId);
      if (!itemOriginal) return;
      const novoItem = {
        ...itemOriginal,
        unidades: newQuantidade,
        precoTotal: itemOriginal.preco * newQuantidade
      };

      atualizarItem(novoItem);
      setEditId(null);
      setNewQuantidade(0);
    } else {
      return itens;
    }
  };

  const valorTotal = itens.reduce((acc, cur) => cur.precoTotal + acc, 0);
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
                <h2>
                  <span>Sabor</span> {pizza.sabor}
                </h2>
                <h2>
                  <span>Preço Unitario</span> {pizza.preco}
                </h2>
                <h2>
                  <span>Quantidade</span>
                  {editId === pizza.cartId ? (
                    <form onSubmit={editar} className={styles.quantityForm}>
                      <div className="">
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() =>
                            setNewQuantidade((q) => Math.max(1, q - 1))
                          }
                        >
                          −
                        </button>

                        <input
                          type="number"
                          min="1"
                          value={newQuantidade}
                          onChange={(e) =>
                            setNewQuantidade(Number(e.target.value))
                          }
                          className={styles.qtyInput}
                        />

                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => setNewQuantidade((q) => q + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="">
                        <button type="submit" className={styles.saveButton}>
                          Salvar
                        </button>
                      </div>
                    </form>
                  ) : (
                    <p>{pizza.unidades}</p>
                  )}
                </h2>

                <h2>
                  <span>Preço Total</span> {pizza.precoTotal.toFixed(2)}
                </h2>
              </div>

              <div className={styles.actions}>
                <div className={styles.actionBtn}>
                  <button onClick={() => deletar(pizza.cartId)}>🗑️</button>
                  <button
                    className={styles.editBtn}
                    onClick={() => edit(pizza)}
                  >
                    ✏️
                  </button>
                </div>{" "}
                <div className={styles.actionPay}>
                  <Link to={`/Identificação/${pizza.cartId}`}>Pagar</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.valoresContent}>
          <h2>
            Total Do Carrinho: <strong>R${valorTotal.toFixed(2)}</strong>
          </h2>

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
