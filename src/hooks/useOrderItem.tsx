import { useParams } from "react-router-dom";
import { useEffect, useState, type FormEvent } from "react";
import { api } from "../api/api";
import type { Orcamento,Pizzas} from "../types";
import { toast } from "react-toastify";
import { usePizzaStore } from "../store/usePizzaStore";
import { cartSchema } from "../schemas/cartSchema";

function useOrderItem() {
  const [precoTotal, setPrecoTotal] = useState<number>(0.0);
  const [unidades, setUnidades] = useState<number>(0);
  const [adicionais, setAdicionais] = useState<string[]>([]);

  const { sabor } = useParams();
  const [pizzas, setPizzas] = useState<Pizzas[]>([]);
  const [orcamento, setOrcamento] = useState<Orcamento[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
    const {pizzaSelecionada} = usePizzaStore()
  const [modal,setModal] = useState<boolean>(false)

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
    const total = pizzaSelecionada?.preco * unidades
    setPrecoTotal(total);
  }, [pizzaSelecionada, unidades]);

 
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  if (!pizzaSelecionada) return;

  const newOrcamento = {
    ...pizzaSelecionada,
    unidades,
    adicionais,
    precoTotal,
  };

  const parseResult = cartSchema.safeParse(newOrcamento);

  if (!parseResult.success) {
    parseResult.error.issues.forEach((err) => toast.error(err.message));
    return;
  }


  setModal(true);
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
    modal,
    setModal
  } as const;
}

export default useOrderItem;