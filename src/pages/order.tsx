import styles from "../styles/Order.module.css";
import UseOrder from "../hooks/useOrder";
import useCart from "../hooks/useCart";


function Order() {
  const {
    nome,
    setNome,
    sobreNome,
    setSobreNome,
    cpf,
    setCPF,
    sexo,
    setSexo,
    nascimento,
    setNascimento,
    telefone,
    setTelefone,
    email,
    setEmail,
    cep,
    setCEP,
    estado,
    setEstado,
    cidade,
    setCidade,
    numero,
    setNumero,
    complemento,
    setComplemento,
    handleSubmit,
  } = UseOrder();
   const {
    items
  } = useCart();

  const totalGeral = items.reduce((acc, item) => acc + item.precoTotal, 0);


  return (
    <>
      <section className={styles.Identificacao}>
        <div className={styles.navIdentificacao}>
          <h1>IDENTIFICAÇÃO</h1>
        </div>
        <article className={styles.IdentificacaoContent}>
          <h2>Agora, iremos criar o seu cadastro:</h2>
          <p>Está quase acabando...</p>
          <article className={styles.cadastroIdentificacao}>
            <div className={styles.ContentIdentificacao}>
              <form
                onSubmit={handleSubmit}
                className={styles.formIdentificacao}
              >
                <div className={styles.grid2}>
                  <div>
                    <label htmlFor="cpf">CPF</label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      placeholder="Digite Seu CPF"
                      value={cpf}
                      onChange={(e) => setCPF(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Digite Seu Nome Completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="SobreNome">Sobrenome</label>
                    <input
                      type="text"
                      id="SobreNome"
                      name="SobreNome"
                      placeholder="Digite Seu Sobrenome"
                      value={sobreNome}
                      onChange={(e) => setSobreNome(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Digite Seu E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="sexo">Sexo</label>
                    <select
                      id="sexo"
                      name="sexo"
                      value={sexo}
                      onChange={(e) => setSexo(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Selecione uma Opção
                      </option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="telefone">DDD + Celular</label>
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      placeholder="(11) 91092-8922"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="data">Data de Nascimento</label>
                    <input
                      type="date"
                      id="data"
                      name="data"
                      value={nascimento}
                      onChange={(e) => setNascimento(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="CEP">CEP</label>
                    <input
                      type="text"
                      id="CEP"
                      name="CEP"
                      placeholder="Digite Seu CEP"
                      value={cep}
                      onChange={(e) => setCEP(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className={styles.grid2}>
                  <div>
                    <label htmlFor="Estado">Estado</label>
                    <select
                      id="Estado"
                      name="Estado"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                      required
                    >
                      <option value="Sao Paulo" selected>
                        São Paulo
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="Cidade">Cidade</label>
                    <input
                      type="text"
                      id="Cidade"
                      name="Cidade"
                      placeholder="Digite Sua Cidade"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="Numero">Número</label>
                    <input
                      type="text"
                      id="Numero"
                      name="Numero"
                      placeholder="Digite Seu Numero"
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="Complemento">Complemento</label>
                    <input
                      type="text"
                      id="Complemento"
                      name="Complemento"
                      placeholder="Digite O Complemeto"
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.InfoCadastro}>
                  <p>
                    Utilizamos seus dados pessoais somente para o cadastro em
                    nossa plataforma, que nos permite lhe prestar nossos
                    serviços.
                  </p>
                </div>
                <div className={styles.btn}>
                  <button type="submit">COMPRAR</button>
                </div>
              </form>
            </div>

<div className={styles.resumoPedido}>
  <h2 className={styles.totalGeral}>
    Total Geral: R$ {totalGeral.toFixed(2)}
  </h2>

  {items.map((item) => (
    <div className={styles.InfoPacote} key={item.cartId}>
      <div className={styles.imgPacote}>
        <img src={item.imagem} alt={`Pizza ${item.sabor}`} />
      </div>

      <div className={styles.textContent}>
        <h4>{item.sabor}</h4>
        <p>{item.descricao}</p>

        <div className={styles.itemPrice}>
          <p>R$ {item.precoTotal.toFixed(2)}</p>
        </div>

        <div className={styles.infoAdicionais}>
          <div className={styles.info}>
            <p>Unidades:</p>
            <p>{item.unidades}</p>
          </div>

          {item.adicionais?.length > 0 && (
            <div className={styles.adicionaisContainer}>
              <h4>Adicionais Selecionados:</h4>
              <ul>
                {item.adicionais.map((adicional) => (
                  <li key={adicional.id}>
                    <span>{adicional.nome}</span>
                    <span>+R$ {adicional.preco.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  ))}
</div>


            
          </article>
        </article>
      </section>
    </>
  );
}

export default Order;
