import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OrderItem{
  id: number;
  sabor: string;
  descricao: string;
  preco: number;
  imagem?: string;
  precoTotal: number;
  unidades: number;
  adicionais: string[];
  cartId: number;
}

interface UseOrderItem {
  item: OrderItem | null;
  addItem: (item: OrderItem) => void;
}

export const UseOrcamentoStore = create<UseOrderItem>()(
  persist(
    (set) => ({
      item: null,
      addItem: (newItem) => set({ item:newItem }),
    }),
    {
      name: "orcamento-storage",
    }
  )
);
