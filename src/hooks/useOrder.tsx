import { toast } from "react-toastify";
import { api } from "../api/api";
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
      const payload = {
        userId: userId ?? null,
        addressId,
        precoTotal,
        items: items,
      };

      console.log("Payload enviado:", payload);

      const { data } = await api.post("/orders", payload);
      toast.success("Pedido criado. Redirecionando para pagamento...");
      clearCart();
      console.log(data);

      navigate(`/pagamento/${data.id}`);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao criar pedido");
    }
  };

  return { handleSubmitOrder };
}
