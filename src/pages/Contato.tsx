import { useState } from "react";
import contatoHook from "../hooks/contatoHook";
import type { Contact } from "../types";
import styles from "../styles/Contato.module.css";
function Contato() {
  const { criarContato } = contatoHook<Contact>("contatos", []);
  const [nome, setNome] = useState<string>("");
  const [sobrenome, setSobreNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    criarContato(nome, sobrenome, email, assunto, mensagem);
  };
  return (
    <main className={styles.contatoMain}>
      <h1>Fale Conosco</h1>
      <p>
        Estamos aqui para ajudar! Se tiver dúvidas sobre nossos produtos,
        pedidos ou qualquer outro assunto, envie sua mensagem e nossa equipe
        entrará em contato o mais rápido possível.
      </p>
      <section className={styles.contatoSection}>
        <article className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nomeGroup}>
              <label>
                {" "}
                <p>Nome:</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className={styles.input}
                />
              </label>
              <label>
                {" "}
                <p>Sobre Nome:</p>
                <input
                  type="text"
                  name="sobreNome"
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobreNome(e.target.value)}
                  required
                  className={styles.input}
                />
              </label>
            </div>
            <div className={styles.nomeGroup}>
              <label>
              
                <p>E-Mail:</p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                />
              </label>
               <label>
              
                <p>Assunto:</p>
              <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                required
                className={styles.input}
              />
                </label>
            </div>  
            <div className={styles.inline}>
              <label htmlFor=""><p>Mensagem:</p>
              <textarea
                name="mensagem"
                placeholder="Escreva sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
                rows={5}
                className={styles.textarea}
              />
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </article>

        <article>
          <div className={styles.contatos}>
            <div
              className={styles.container}
              data-aos="fade-up"
              data-aos-delay="100"
            >
            
                  <div
                    className={styles.infoItem}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
            <i className="fi fi-rr-phone-call"></i>
                     <div className={styles.info}>
                      <h3>Localização</h3>
                      <p>
                        R. Sete de Setembro, 163 - Centro, Embu-Guaçu - SP,
                        06900-135
                      </p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div
                       className={styles.infoItem}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                   <i className="fi fi-rr-phone-call"></i>
                    <div className={styles.info}>
                      <h3>Open Hours</h3>
                      <p>
                        Monday-Saturday:
                        <br />
                        11:00 AM - 2300 PM
                      </p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div
                      className={styles.infoItem}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                             <i className="fi fi-rr-phone-call"></i>
                    <div className={styles.info}>
                      <h3>Contato</h3>
                      <p>(11) 97216-0912</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div
                   className={styles.infoItem}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <i className="fi fi-rr-phone-call"></i>
                    <div className={styles.info}>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}
                </div>
              </div>
          
        </article>
      </section>
    </main>
  );
}

export default Contato;
