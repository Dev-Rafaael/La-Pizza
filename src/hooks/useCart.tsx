import { useEffect, useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";
import type { Cart, CreateCartInput } from "../types";
function useCart() { 
  const [itens, setItens] = useState<CreateCartInput[]>([]);
  const [newQuantidade, setNewQuantidade] = useState<number>(0);
  const [editId, setEditId] = useState<number | null>(null);
  const [animatePrices, setAnimatePrices] = useState<{
    [key: number]: boolean;
  }>({});
  useEffect(() => {
     (async () => {
      try {
        const response = (await api.get("/cart/")).data;
        setItens(response);
      } catch (error) {
        console.log(error);
      }
    })();
    
  }, []);
    console.log(itens);
  const deletarItem = async (id: number) => {
    if (!id) return;
    try {
      await api.delete(`/cart/${id}`);
      toast.error("🍕 Pedido Deletado com sucesso!");
      setItens((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
      toast.error("🍕 Pedido Não Foi deletado!");
    }
  };
  const edit = (item: Cart) => {
    setEditId(item.id);
    setNewQuantidade(item.unidades);
  };
  const editItem = async (e: FormEvent, id: number) => {
    e.preventDefault();

    if (!id) return;

    const itemOriginal = itens.find((item) => item.id === id);
    if (!itemOriginal) return;

    const dataNew = {
      ...itemOriginal,
      unidades: newQuantidade,
      precoTotal: itemOriginal.preco * newQuantidade,
    };
    try {
      const updatedItem = (await api.put(`/cart/${id}`, dataNew)).data;
      toast.success("🍕 Pedido Atualizado com sucesso!");

      setItens((prev) =>
        prev.map((item) => (item.id === id ? updatedItem : item))
      );

      setEditId(null);
    } catch (error) {
      console.log(error);
      toast.success("🍕 Não Foi possivel atualizar!");
    }
  };

  const valorTotal = itens.reduce((acc, cur) => cur.precoTotal + acc, 0);
  const triggerAnimation = (id: number) => {
    setAnimatePrices((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setAnimatePrices((prev) => ({ ...prev, [id]: false }));
    }, 400);
  };
  console.log(itens);
  return {
    itens,
    newQuantidade,
    setNewQuantidade,
    editId,
    animatePrices,
    deletarItem,
    edit,
    editItem,
    valorTotal,
    triggerAnimation,
  } as const;
}

export default useCart;
