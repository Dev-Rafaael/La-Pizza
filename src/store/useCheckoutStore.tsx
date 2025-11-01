import { create } from "zustand";
import { persist } from "zustand/middleware";



interface Checkout {
id: number;
  sabor: string;
  descricao: string;
  preco: number;
  imagem?: string;
  precoTotal: number;
  unidades: number;
  adicionais: string[];
  cartId: number;
  nome: string;
  sobreNome: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  email: string;
  telefone: string;
  cep: string;
  estado: string;
  cidade: string;
  numero: string;
  complemento: string;
}

interface UseCheckout{
  checkout: Checkout | null,
  addCheckout: (check:Checkout)=> void,
}


export const UseCheckoutStore = create<UseCheckout>()(
    persist(
        (set)=>({
        checkout:null,
        addCheckout: (newCheck) => set({checkout:newCheck})
        }),{
            name:'checkout-storage'
        }
        
    )
)
