import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState, type FormEvent } from "react";
import { api } from "../api/api";
import type { Orcamento,Pizzas} from "../types";
import { schemaOrcamento } from "../schemas/orcamentoSchema";
import { toast } from "react-toastify";
import { useUserCart } from "../store/useCartStore";

function useOrcamento() {
  const [precoTotal, setPrecoTotal] = useState<number>(0.0);
  const [unidades, setUnidades] = useState<number>(0);
  const [adicionais, setAdicionais] = useState<string[]>([]);
  // const navigate = useNavigate();
  const { sabor } = useParams();
  const [pizzas, setPizzas] = useState<Pizzas[]>([]);
  const [orcamento, setOrcamento] = useState<Orcamento[]>([]);
  // const [carrinhos, setCarrinhos] = useState<Cart[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const addItem = useUserCart((s)=>s.addItem)
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/pizzas/show");
        setPizzas(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const total = pizzas.reduce(
      (acc, pizza) => acc + pizza.preco * unidades,
      0
    );
    setPrecoTotal(total);
  }, [pizzas, unidades]);

  const pizzaSelecionada = pizzas.find((pizza) => pizza.sabor === sabor);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pizzaSelecionada) {
      return;
    }
    try {
        const newOrcamento = {
          ...pizzaSelecionada,
          unidades,
          adicionais,
  
  
    };  
    const parseResult = schemaOrcamento.safeParse(newOrcamento)

    if(!parseResult.error){
       const pizzaDB = (await api.post("/orcamentos/criar", newOrcamento)).data;
        // navigate(`Identificação/${newOrcamento.userId}`)
      console.log(pizzaDB);
      // console.log(pizzaCart);
      addItem(pizzaDB)
      toast.success('Enviado ao Carrinho')
    }else{
      parseResult.error.issues.forEach((err)=>{
        toast.error(err.message)
      })
    }

     
    } catch (error) {
      console.log(error);
    }
  };
  const edit = (item: Orcamento) => {
    setEditId(item.id);
  };
  const handleEdit = async (e: FormEvent, id: number) => {
    e.preventDefault();
    if (!id) return;
    const dadosOriginais = orcamento.find((prev) => prev.id === id);
    if (!dadosOriginais) return;
    const dados = {
      ...dadosOriginais,
      precoTotal,
      unidades,
      adicionais,
    };
    try {
      const updateOrcamento = await api.put("/orcamento/", dados);
      setOrcamento((prev) =>
        prev.map((item) => (item.id === id ? updateOrcamento.data : item))
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (e: FormEvent, id: number) => {
    e.preventDefault();
    if (!id) return;
    try {
      if (id) {
        await api.delete(`/orcamento/${id}`);
        await api.delete(`cart/${id}`);
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  const opcoes = ["Salame", "Cheddar", "Catupiry", "Bacon"];
  const toggleOpcao = (opcao: string) => {
    setAdicionais((prev) =>
      prev.includes(opcao) ? prev.filter((a) => a !== opcao) : [...prev, opcao]
    );
  };
  return {
    precoTotal,
    setPrecoTotal,
    unidades,
    setUnidades,
    adicionais,
    setAdicionais,
    sabor,
    pizzas,
    setPizzas,
    orcamento,
    setOrcamento,
    editId,
    setEditId,
    pizzaSelecionada,
    handleSubmit,
    edit,
    handleEdit,
    handleDelete,
    opcoes,
    toggleOpcao,
  } as const;
}

export default useOrcamento;
