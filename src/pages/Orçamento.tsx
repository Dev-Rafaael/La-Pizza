  import { useParams } from "react-router-dom";
  import styles from "../styles/Orçamento.module.css";
  import React, { useEffect, useState, type FormEvent } from "react";
  import { api } from "../api/api";
  import type { Orcamento, Pizzas } from "../types";

  function Orçamento() {
    const [precoTotal, setPrecoTotal] = useState<number>(0.0);
    const [unidades, setUnidades] = useState<number>(0);
    const [adicionais, setAdicionais] = useState<string[]>([]);
    // const navigate = useNavigate();
    const { sabor } = useParams();
    const [pizzas, setPizzas] = useState<Pizzas[]>([]);
    const [orcamento, setOrcamento] = useState<Orcamento[]>([]);
    const [editId,setEditId]=useState<number | null>(null)
    useEffect(() => {
      const fetchPizza = async () => {
        try {
          const response = await api.get("/pizzas/show");
          setPizzas(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchPizza();
    }, []);

    useEffect(() => {
      const total = pizzas.reduce(
        (acc, pizza) => acc + pizza.preco * unidades,
        0
      );
      setPrecoTotal(total);
    }, [pizzas, unidades]);

    const pizzaSelecionada = pizzas.find((pizza) => pizza.sabor === sabor);
    if (!pizzaSelecionada) {
      return;
    }
    const handleSubmit =async (e: React.FormEvent) => {
      e.preventDefault();
      if(!pizzas){
      return
      }
      try {
        const newPizza = {...pizzaSelecionada,unidades,adicionais,precoTotal}
        const pizzaCart = await api.post('cart/',newPizza)
        const pizzaDB = await api.post('/orcamento/criar',newPizza)
        console.log(pizzaDB.data);
        console.log(pizzaCart.data);
        
      } catch (error) {
        console.log(error);
        
      }
    };
    const edit = (item:Orcamento)=>{
      setEditId(item.id)
    }
    const handleEdit = async(e:FormEvent,id:number)=>{
      e.preventDefault()
      const dadosOriginais = orcamento.find((prev)=> prev.id === id )
      const dados = {
        ...dadosOriginais,
        precoTotal,
        unidades,
        adicionais
      }
      try {
        const updateOrcamento = await api.put('/orcamento/',dados)
        setOrcamento((prev)=>
        prev.filter((item)=> item.id === id ? updateOrcamento : item))
      } catch (error) {
        console.log(error);
        
      }
    }
    const handleDelete = async (e:FormEvent,id:number)=>{
      try {
        if(id){
          await api.delete(`/orcamento/${id}`)
        }
      } catch (error) {
        
      }
    }

    const opcoes = ["Salame", "Cheddar", "Catupiry", "Bacon"];
    const toggleOpcao = (opcao: string) => {
      setAdicionais((prev) =>
        prev.includes(opcao) ? prev.filter((a) => a !== opcao) : [...prev, opcao]
      );
    };
    return (
      <main className={styles.orcamento}>
        <div className={styles.navOrcamento}>
          <h1>ORÇAMENTO Pizza {pizzaSelecionada.sabor}</h1>
        </div>
        <section className={styles.orcamentoSection}>
          <article className={styles.productImage}>
            <img src={pizzaSelecionada.imagem} alt="Imagem Pizza" />
          </article>
          <article className={styles.orcamentoContent}>
            <h1>{pizzaSelecionada.sabor}</h1>
            <p>Pacote {pizzaSelecionada.descricao}</p>
            <h2>Preço: {pizzaSelecionada.preco.toFixed(2)}</h2>
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
                    <option value="" defaultChecked>
                      Selecione
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className={styles.inputForm}>
                  <label htmlFor="Adicionais">Adicionais:</label>
                  {opcoes.map((opcao) => (
                    <label key={opcao} className={styles.checkboxContainer}>
                      <input
                        type="checkbox"
                        value={opcao}
                        checked={adicionais.includes(opcao)}
                        onChange={() => toggleOpcao(opcao)}
                      />
                      <span className={styles.customCheckbox}></span>
                      {opcao}
                    </label>
                  ))}
                </div>

                {
                  <h3 className={styles.valor}>
                    {" "}
                    Total a Pagar: R$
                    {precoTotal
                      ? precoTotal.toFixed(2)
                      : pizzaSelecionada.preco.toFixed(2)}
                  </h3>
                }

                <button type="submit">Prosseguir</button>
              </form>
            </div>
          </article>
        </section>
      </main>
    );
  }

  export default Orçamento;
