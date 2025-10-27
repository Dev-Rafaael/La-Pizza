import useOrcamento from "../hooks/useOrcamento";
import styles from "../styles/Orçamento.module.css";


 function Orçamento() {
  const {
    pizzaSelecionada,
    unidades,
    setUnidades,
    adicionais,
    toggleOpcao,
    handleSubmit,
    precoTotal,
    opcoes
  } = useOrcamento();

  if (!pizzaSelecionada) return <p>Carregando...</p>;

  return (
    <main className={styles.orcamento}>
      <div className={styles.navOrcamento}>
        <h1>ORÇAMENTO Pizza {pizzaSelecionada.sabor}</h1>
      </div>
      <section className={styles.orcamentoSection}>
        <article className={styles.productImage}>
          <img src={pizzaSelecionada.imagem} alt="Imagem Pizza" />
        </article>
        <article className={styles.orcamentoContent}>
          <h1>{pizzaSelecionada.sabor}</h1>
          <p>Pacote {pizzaSelecionada.descricao}</p>
          <h2>Preço: {pizzaSelecionada.preco.toFixed(2)}</h2>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputForm}>
                <label htmlFor="Unidades">Unidades:</label>
                <select
                  name="Unidades"
                  value={unidades}
                  onChange={(e) => setUnidades(Number(e.target.value))}
                  required
                >
                  <option value="" defaultChecked>
                    Selecione
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className={styles.inputForm}>
                <label htmlFor="Adicionais">Adicionais:</label>
                {opcoes.map((opcao) => (
                  <label key={opcao} className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      value={opcao}
                      checked={adicionais.includes(opcao)}
                      onChange={() => toggleOpcao(opcao)}
                    />
                    <span className={styles.customCheckbox}></span>
                    {opcao}
                  </label>
                ))}
              </div>

              {
                <h3 className={styles.valor}>
                  {" "}
                  Total a Pagar: R$
                  {precoTotal
                    ? precoTotal.toFixed(2)
                    : pizzaSelecionada.preco.toFixed(2)}
                </h3>
              }

              <button type="submit">Prosseguir</button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Orçamento;
