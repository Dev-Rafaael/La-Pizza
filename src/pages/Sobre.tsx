import styles from "../styles/Sobre.module.css";
import PizzaSobre from '../assets/IMG/sobrePizza.png'
function Sobre() {
  return (
    <section className={styles.sobre}>
      
      <h1 className={styles.titleSobre}>Sobre Nós – La Pizza </h1>
     <article className={styles.sobreContent}>
      <div className={styles.sobreInfo}>
        <p>
          Bem-vindo à <strong>La Pizza</strong>, o lugar onde tradição, sabor e qualidade se
          encontram para transformar cada pedaço em uma experiência
          inesquecível! Desde nossa fundação, temos um único propósito: levar
          até você pizzas preparadas com ingredientes selecionados, massa
          artesanal e muito carinho. Cada receita é pensada para proporcionar
          momentos especiais em família, entre amigos ou até mesmo naquela noite
          que você merece saborear algo único.
        </p>
        <div className={styles.sobreValores}>
                <h2>Nossa Missão</h2>
        <p>Oferecer pizzas de qualidade, com sabor autêntico e atendimento diferenciado, sempre prezando pela satisfação de nossos clientes.</p>
          <h2>Nossos Valores</h2>
          <ul>
            <li><strong>Qualidade:</strong> utilizamos ingredientes frescos e de confiança.</li>
            <li><strong>Tradição:</strong> receitas que respeitam o verdadeiro espírito da pizza artesanal.</li>
            <li><strong>Inovação:</strong> além dos clássicos, criamos sabores especiais que surpreendem.</li>
            <li><strong>Respeito:</strong> valorizamos nossos clientes, colaboradores e fornecedores.</li>
          </ul>
        </div>
  </div>
        
        
      <article className={styles.pizzaSobre}>
        <img src={PizzaSobre} alt="" />
      </article>
      </article>
      
    </section>
  );
}

export default Sobre;
