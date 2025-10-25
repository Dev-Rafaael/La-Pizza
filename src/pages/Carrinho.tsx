import styles from "../styles/Carrinho.module.css";
import type { Cart } from "../types";
import { Link } from "react-router-dom";
import visa from "../assets/IMG/visa.png";
import mastercard from "../assets/IMG/mastercard.png";
import pix from "../assets/IMG/pix.png";
import { useEffect, useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { id } from "zod/locales";
function Carrinho() {
  const [newQuantidade, setNewQuantidade] = useState<number>(0);
  const [editId, setEditId] = useState<number | null>(null);
  const [itens,setItens]= useState<Cart[]>([])
  const [animatePrices, setAnimatePrices] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(()=>{
    const fetchItens = async()=>{
    try {
      const response = (await api.get('/cart/')).data
      setItens(response)
    } catch (error) {
      console.log(error);     
    }
  }
  fetchItens()
  },[])

  const deletarItem = async (id:number)=>{
     if(!id) return
    try {  
        await api.delete(`/cart/${id}`)
       toast.error("🍕 Pedido Deletado com sucesso!"); 
       setItens((prev)=>
      prev.filter((item) => item.id !== id ))
    } catch (error) {
      console.log(error);
       toast.error("🍕 Pedido Não Foi deletado!");
    }
  }
  const edit = (item: Cart) => {
    setEditId(item.id);
    setNewQuantidade(item.unidades);
  };
  const editItem = async (e:FormEvent,id:number)=>{
    e.preventDefault()

    if(!id) return
  
    const itemOriginal = itens.find((item)=> item.id === id)
    if(!itemOriginal) return
    
    const dataNew = { 
    ...itemOriginal,
        unidades:newQuantidade,
        precoTotal: itemOriginal.preco * newQuantidade,
    }
    try {
      const updatedItem =  (await api.put(`/cart/${id}`,dataNew)).data
       toast.success("🍕 Pedido Atualizado com sucesso!");

       setItens((prev)=>
      prev.filter((item)=> item.id === id ? updatedItem : item ))

      setEditId(null);
    } catch (error) {
      console.log(error);
      toast.success("🍕 Não Foi possivel atualizar!");

    }
  
}

  const valorTotal = itens.reduce((acc, cur) => cur.precoTotal + acc, 0);
  const triggerAnimation = (id: number) => {
    setAnimatePrices((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setAnimatePrices((prev) => ({ ...prev, [id]: false }));
    }, 400);
  };
console.log(itens);

  return (
    <section className={styles.cartSection}>
      <div className={styles.navCart}>
        <h1>CARRINHO</h1>
      </div>
      {itens.length != 0 ? (
        <article className={styles.cartContent}>
          <div className={styles.itensList}>
            {itens.map((pizza) => (
              <article key={pizza.id} className={styles.item}>
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
                      {editId === pizza.id ? (
                        <form onSubmit={(e)=>editItem(e,pizza.id)} className={styles.quantityForm}>
                          <div className="">
                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => {
                                setNewQuantidade((q) => q - 1);
                                triggerAnimation(pizza.id);
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
                                triggerAnimation(pizza.id);
                              }}
                              className={styles.qtyInput}
                            />

                            <button
                              type="button"
                              className={styles.qtyBtn}
                              onClick={() => {
                                setNewQuantidade((q) => q + 1);
                                triggerAnimation(pizza.id);
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
                          animatePrices[pizza.id] ? styles.animate : ""
                        }`}
                      >
                        R$
                        {editId === pizza.id
                          ? (pizza.preco * newQuantidade).toFixed(2)
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
                    <button onClick={() => deletarItem(pizza.id)}>🗑️</button>
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
      ) : (
        <div className={styles.notFoundItem}>
          <h1>Ops! Carrinho Vazio</h1>
          <Link to={"/Cardapio"}>Ver Cardapio</Link>
        </div>
      )}
    </section>
  );
}

export default Carrinho;
