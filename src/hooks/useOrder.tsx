import { toast } from "react-toastify";
import { api } from "@packages/api/api";
import { useUserCart } from "../store/useCartStore";
import { useNavigate } from "react-router-dom";

export function useOrder() {
  const { items, clearCart, getTotal } = useUserCart();
  const navigate = useNavigate();

  const handleSubmitOrder = async (
    userId: number | null | undefined,
    addressId: number
  ) => {
    try {
      const precoTotal = getTotal();

      const itemsMapped = items.map(item => ({
        pizzaId: item.id ?? null, 
        sabor: item.sabor,
        descricao: item.descricao || null,
        imagem: item.imagem || null,
        precoUnitario: item.preco,
        quantidade: item.unidades,
        precoTotal: item.precoTotal,
        adicionais: item.adicionais ? JSON.parse(JSON.stringify(item.adicionais)) : undefined,
      }));

      console.log("Payload enviado:", { userId, addressId, precoTotal, items: itemsMapped });

      // Cria pedido com itens de uma vez
      const { data: orderData } = await api.post("/orders/", {
        userId: userId ?? null,
        addressId,
        precoTotal,
        items: itemsMapped,
        status: 'PENDENTE'
      });

      toast.success("Pedido criado. Redirecionando para pagamento...");
      clearCart();
      console.log(orderData);

      navigate(`/pagamento/${orderData.id}`);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao criar pedido");
    }
  };

  return { handleSubmitOrder };
}
