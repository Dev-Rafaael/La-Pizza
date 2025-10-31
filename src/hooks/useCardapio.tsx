import { useEffect, useState } from "react";
import type { Pizzas } from "../types";
import { api } from "../api/api";

function useCardapio() {
      const [pizzas, setPizzas] = useState<Pizzas[]>([]);
    
      useEffect(() => {
        const handlePizzas = async () => {
          try {
            const responsePizza = await api.get("/pizzas/show");
            setPizzas(responsePizza.data);
            
          } catch (error) {
            console.log(error);
          }
        };
        handlePizzas();
      }, [])
  return {pizzas}as const
}

export default useCardapio
