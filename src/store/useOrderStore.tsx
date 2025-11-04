import { create } from "zustand";
import { persist } from "zustand/middleware";



interface Order {
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

interface UseOrder{
  checkout: Order | null,
  addCheckout: (check:Order)=> void,
}


export const UseCheckoutStore = create<UseOrder>()(
    persist(
        (set)=>({
        checkout:null,
        addCheckout: (newCheck) => set({checkout:newCheck})
        }),{
            name:'checkout-storage'
        }
        
    )
)
