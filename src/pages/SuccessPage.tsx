import { useSearchParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../styles/SuccessPage.module.css";
import type { OrderItem } from "@packages/types/types";
import { api } from "@packages/api/api";

function SuccessPage() {
  const [params] = useSearchParams();
   const navigate = useNavigate();
  const orderId = params.get("order");
  const [order, setOrder] = useState<OrderItem | null>(null);

     useEffect(() => {
      async function loadOrder() {
        try {
          const response = (await api.get(`/orders/${orderId}`)).data;
  
          setOrder(response);
        } catch (err) {
          console.log("Erro ao buscar pedido:", err);
        }
      }

      if (orderId) loadOrder();
    }, [orderId]);

    if (!orderId) return <p className={styles.message}>Pedido não encontrado.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.navSuccess}>
        <h1>🍕 Pedido Confirmado!</h1>   </div>
      <p className={styles.orderId}>
        ID do Pedido: <strong>{orderId}</strong>
      </p>

      {order ? (
        <div className={styles.orderBox}>
          <h2>Resumo</h2>
          <p>
            <strong>Pizza:</strong> {order.sabor}
          </p>
          <p>
            <strong>Quantidade:</strong> {order.quantidade}
          </p>
          <p>
            <strong>Total:</strong> R$ {order.precoTotal}
          </p>
        </div>
      ) : (
        <p className={styles.loading}>Carregando informações...</p>
      )}
      <div className={styles.buttons}>
        <button
          onClick={() => navigate(`/order-status/${orderId}`)}
          className={styles.statusBtn}
        >
          Ver Status do Pedido
        </button>

        <a href="/" className={styles.backBtn}>
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

export default SuccessPage;
