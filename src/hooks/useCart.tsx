import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

import type { Cart } from "../types";
import { cartSchema } from "../schemas/cartSchema";
import { useUserCart } from "../store/useCartStore";
function useCart() {
  const [newQuantidade, setNewQuantidade] = useState<number>(0);
  const [editId, setEditId] = useState<number | null>(null);
  const [animatePrices, setAnimatePrices] = useState<{
    [key: number]: boolean;
  }>({});
  const itemUpdate = useUserCart((s) => s.updateItem);
  const deleteItem = useUserCart((s) => s.deleteItem);
  const items = useUserCart((s) => s.items);
  const deletarItem = async (cartId: number) => {
    if (!cartId) return;
    try {
      deleteItem(cartId);
        toast.success("🍕 Pedido Deletado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("🍕 Pedido Não Foi deletado!");
    }
  };
  const edit = (item: Cart) => {
    setEditId(item.cartId);
    setNewQuantidade(item.unidades);
  };
  const editItem = async (e: FormEvent,   cartId:number) => {
    e.preventDefault();

    if (!cartId) return;

    const itemOriginal = items.find((item) => item.cartId === cartId);
    if (!itemOriginal) return;

    try {
      const dataNew = {
        ...itemOriginal,
        unidades: newQuantidade,
        precoTotal: itemOriginal.preco * newQuantidade,
      };
      const parseResult = cartSchema.safeParse(dataNew);

      if (!parseResult.error) {
        toast.success("🍕 Pedido Atualizado com sucesso!");
        itemUpdate(cartId, dataNew);
        setEditId(null);
      } else {
        parseResult.error.issues.forEach((err) => {
          toast.error(err.message);
        });
      }
    } catch (error) {
      console.log(error);
      toast.success("🍕 Não Foi possivel atualizar!");
    }
  };

  const valorTotal = items.reduce((acc, cur) => cur.precoTotal + acc, 0);
  const triggerAnimation = (cartId: number) => {
    setAnimatePrices((prev) => ({ ...prev, [cartId]: true }));

    setTimeout(() => {
      setAnimatePrices((prev) => ({ ...prev, [cartId]: false }));
    }, 400);
  };

  return {
    items,
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
