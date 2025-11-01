import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Orcamento {
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

interface UseOrcamento {
  item: Orcamento | null;
  addItem: (item: Orcamento) => void;
}

export const UseOrcamentoStore = create<UseOrcamento>()(
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
