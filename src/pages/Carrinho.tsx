import styles from "../styles/Carrinho.module.css";
import cartHook from "../hooks/cartHook";
import type { Cart } from "../types";
import { Link } from "react-router-dom";
import visa from "../assets/IMG/visa.png";
import mastercard from "../assets/IMG/mastercard.png";
import pix from "../assets/IMG/pix.png";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
function Carrinho() {
  const [newQuantidade, setNewQuantidade] = useState<number>(0);
  const { itens, deletarItem, atualizarItem } = cartHook<Cart>("cart", []);
  const [editId, setEditId] = useState<number | null>(null);
  const [animatePrices, setAnimatePrices] = useState<{
    [key: number]: boolean;
  }>({});

  // console.log(itens);

  const deletar = (index: number) => {
    const confirm = window.confirm("Tem Certeza que deseja Deletar?");
    if (confirm) {
      deletarItem(index);
        toast.error("🍕 Pedido Deletado com sucesso!");
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
        precoTotal: itemOriginal.preco * newQuantidade,
      };
      
      atualizarItem(novoItem);
         toast.success("🍕 Pedido Atualizado com sucesso!");
      setEditId(null);
      setNewQuantidade(0);
    } else {
      return itens;
    }
  };
  const valorTotal = itens.reduce((acc, cur) => cur.precoTotal + acc, 0);
  const triggerAnimation = (cartId: number) => {
    setAnimatePrices((prev) => ({ ...prev, [cartId]: true }));

    setTimeout(() => {
      setAnimatePrices((prev) => ({ ...prev, [cartId]: false }));
    }, 400);
  };

  return (
    <section className={styles.cartSection}>
       <div className={styles.navCart}>
          <h1>CARRINHO</h1>
         
        </div>
      {itens.length != 0 ?
      <article className={styles.cartContent}>
        <div className={styles.itensList}>
          { itens.map((pizza) => (
            <article key={pizza.cartId} className={styles.item}>
              <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />
            <article className={styles.detailsList}>
              <div className={styles.infoItem}>
                <h2>
                  <span>Sabor</span> {pizza.sabor}
                </h2>
                <h2>
                  <span>Preço Unitario</span> R${pizza.preco.toFixed(2)}
                </h2>
                <h2>
                  <span>Quantidade</span>
                  {editId === pizza.cartId ? (
                    <form onSubmit={editar} className={styles.quantityForm}>
                      <div className="">
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => {
                            setNewQuantidade((q) => q - 1);
                            triggerAnimation(pizza.cartId);
                          }}
                        >
                          −
                        </button>

                        <input
                          type="number"
                          min="1"
                          value={newQuantidade}
                          onChange={(e) => {
                            setNewQuantidade(Number(e.target.value));
                            triggerAnimation(pizza.cartId);
                          }}
                          className={styles.qtyInput}
                        />

                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() => {
                            setNewQuantidade((q) => q + 1);
                            triggerAnimation(pizza.cartId);
                          }}
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
                  <span>Preço Total</span>
                  <p
                    className={`${styles.totalPrice} ${
                      animatePrices[pizza.cartId] ? styles.animate : ""
                    }`}
                  >R$
                    {editId === pizza.cartId
                      ?  (pizza.preco * newQuantidade).toFixed(2)
                      : pizza.precoTotal.toFixed(2)}
                  </p>
                </h2>
                
              </div>
                <div className={styles.infoAdicionais}>
                   <h2>
                  <span>Descrição</span> {pizza.descricao}
                </h2>
                 <h2>
                  <span>Adicionais</span> {pizza.adicionais.join(",")}
                </h2>
                </div>
                </article>
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
          )) }
        </div>

        <div className={styles.valoresContent}>
          <h2>
            Total Do Carrinho: <strong>R${valorTotal.toFixed(2)}</strong>
          </h2>

          <div className={styles.payment}>
            <h2>Formas Pagamentos:</h2>
            <div className={styles.bandeiras}>
              <img src={visa} alt="Visa" />
              <img src={mastercard} alt="Mastercard" />
              <img src={pix} alt="Pix" />
            </div>
          </div>
          <button>PAGAR</button>
        </div>
         
      </article>
    : <div className={styles.notFoundItem}><h1 >Ops! Carrinho Vazio</h1>
           <Link to={'/Cardapio'}>Ver Cardapio</Link>
            </div>} 
    </section>
  );
}

export default Carrinho;
