import { Link } from "react-router-dom";
import styles from "../styles/Orçamento.module.css";
function Orçamento() {
  return (
    <section className={styles.formDetails}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia
        animi quia temporibus unde voluptas, eius illum. In excepturi delectus
        voluptatem beatae consequuntur vel quos voluptas. Provident temporibus
        voluptatibus beatae?
      </p>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <Link to={"/Identificação"} type="submit">
          Prosseguir
        </Link>
      </form>
    </section>
  );
}

export default Orçamento;
