import { create } from "zustand";
import { persist } from "zustand/middleware";


interface Cart {
  id: number;
  cartId: string;
  sabor: string;
  descricao: string;
  preco: number;
  precoTotal: number;
  unidades: number;
  adicionais: string[];
  imagem?: string;
}

interface UserCart {
  items: Cart[];
  addItem: (item: Cart) => void;
  updateItem: (id: number, newData: Partial<Cart>) => void;
  deleteItem: (id: number) => void;
  clearCart: () => void;
}

export const useUserCart = create<UserCart>()(
  persist(
    (set)=>({
        items:[],
        addItem: (item) => set((state)=>({
            items: [...state.items,item]
        })),
        updateItem: (id,newData)=> set((state)=>({
            items: state.items.map((item)=> item.id === id ? {...item,...newData}: item)
        })),
        deleteItem: (id)=> set((state)=>({
            items: state.items.filter((item)=> item.id !== id)
        })),
        clearCart: ()=> set({items: []})
    }),{
        name:"cart-storage"
    }
),

)

