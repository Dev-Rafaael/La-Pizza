import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/OrderStatus.module.css";
import { api } from "@packages/api/api";

type StatusType =
  | "pendente"
  | "pago"
  | "em_preparacao"
  | "saiu_para_entrega"
  | "entregue";

function OrderStatus() {
  const { orderId } = useParams();
  const [status, setStatus] = useState<StatusType>("pendente");

  const steps = [
    { id: "pago", label: "Pagamento aprovado" },
    { id: "em_preparacao", label: "Em preparo" },
    { id: "saiu_para_entrega", label: "Saiu para entrega" },
    { id: "entregue", label: "Entregue" },
  ];
  useEffect(() => {
  async function loadOrderStatus() {
        try {
          const response = (await api.post(`/orders/${orderId}`)).data;
          setStatus(response.status);
        } catch (err) {
          console.log("Erro ao buscar pedido:", err);
        }
      }
       if (orderId) loadOrderStatus();
  }, [orderId]);

  return (
    <section className={styles.container}>
      <div className={styles.navOrderStatus}>
        <h1>🍕 Acompanhe seu pedido #{orderId}</h1>
      </div>
      <article className={styles.contentStatus}>
        <div className={styles.timeline}>
          {steps.map((step) => {
            const isActive =
              steps.findIndex((s) => s.id === status) >=
              steps.findIndex((s) => s.id === step.id);

            return (
              <div
                key={step.id}
                className={`${styles.step} ${isActive ? styles.active : ""}`}
              >
                <div className={styles.circle}>{isActive ? "✔" : ""}</div>
                <p>{step.label}</p>
              </div>
            );
          })}
        </div>

        <p className={styles.obs}>
          A página atualiza automaticamente a cada 5 segundos.
        </p>
        <div className={styles.buttons}>
          <button
            onClick={() => window.location.reload()}
            className={styles.reloadBtn}
          >
            Atualizar agora
          </button>
          <a href="/" className={styles.backBtn}>
            Voltar ao início
          </a>
        </div>
      </article>
    </section>
  );
}

export default OrderStatus;
