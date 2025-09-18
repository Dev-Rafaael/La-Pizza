import styles from "../styles/Checkout.module.css";
function Checkout() {
  return (
    <section className={styles.checkoutForm}>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Finalizar</button>
      </form>
    </section>
  );
}

export default Checkout;
