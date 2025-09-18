
import styles from '../styles/Contato.module.css'
function Contato() {
  return (
    <section className={styles.contatoForm}>
       <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contato
