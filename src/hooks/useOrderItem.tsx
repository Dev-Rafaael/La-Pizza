import { useParams } from "react-router-dom";
import { useEffect, useState, type FormEvent } from "react";
import { api } from "../api/api";
import type { Adicional, OrderItem, Pizzas } from "../types";
import { toast } from "react-toastify";
import { usePizzaStore } from "../store/usePizzaStore";
import { cartSchema } from "../schemas/cartSchema";

function useOrderItem() {
  const [precoTotal, setPrecoTotal] = useState<number>(0.0);
  const [unidades, setUnidades] = useState<number>(1);
  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState<Adicional[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const { sabor } = useParams();
  const [pizzas, setPizzas] = useState<Pizzas[]>([]);
  const [orcamento, setOrcamento] = useState<OrderItem[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const { pizzaSelecionada } = usePizzaStore();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get("/pizzas/");
        setPizzas(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  useEffect(() => {
    if (!pizzaSelecionada) return;
    const adicionaisTotal = adicionaisSelecionados.reduce((acc, ad) => acc + ad.preco, 0);
    const total = (pizzaSelecionada.preco + adicionaisTotal) * unidades;
    setPrecoTotal(total);
  }, [pizzaSelecionada, unidades,adicionaisSelecionados]);

  const toggleAdicional = (adicional: Adicional) => {
    setAdicionaisSelecionados((prev) => {
      const jaTem = prev.find((item) => item.id === adicional.id);
      if (jaTem) {
        return prev.filter((item) => item.id !== adicional.id);
      } else {
        return [...prev, adicional];
      }
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!pizzaSelecionada) return;

    const newOrcamento = {
      ...pizzaSelecionada,
      unidades,

      precoTotal,
    };

    const parseResult = cartSchema.safeParse(newOrcamento);

    if (!parseResult.success) {
      
      parseResult.error.issues.forEach((err) => toast.error(err.message));
      return;
    }

    setModal(true);
  };

  return {
    precoTotal,
    setPrecoTotal,
    unidades,
    setUnidades,
    adicionaisSelecionados,
    toggleAdicional,
    sabor,
    pizzas,
    orcamento,
    setOrcamento,
    setEditId,
    editId,
    pizzaSelecionada,
    handleSubmit,
    modal,
    setModal,
  } as const;
}

export default useOrderItem;
