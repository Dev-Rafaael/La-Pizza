import { useState } from "react";
import styles from "../styles/Contato.module.css";
import { toast } from "react-toastify";
import { api } from "../api/api";
import { schemaContato } from "../schemas/contatosSchema";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    sobreNome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const parseResult = schemaContato.safeParse(formData);

    if (!parseResult.success) {
      parseResult.error.issues.forEach((err) => {
        toast.warning(`🛎️ ${err.message}`);
      });

      setLoading(false);
      return;
    }

    try {
      await api.post("/contatos/criar", formData);
      toast.success("🛎️ Mensagem Enviada com sucesso!");
      setFormData({
        nome: "",
        sobreNome: "",
        email: "",
        assunto: "",
        mensagem: "",
      });
    } catch (error) {
      console.log(error);
      toast.warning("🛎️ Mensagem Não foi Enviada!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.contatoMain}>
      <div className={styles.navContato}>
        <h1>FALE CONOSCO</h1>{" "}
        <p>
          Estamos aqui para ajudar! Se tiver dúvidas sobre nossos produtos,
          pedidos ou qualquer outro assunto, envie sua mensagem e nossa equipe
          entrará em contato o mais rápido possível.
        </p>
      </div>

      <section className={styles.contatoSection}>
        <article className={styles.formContainer}>
          <div className={styles.formText}>
            <h2>Fale Conosco</h2>
            <p>Envie-nos uma Mensagem.</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nomeGroup}>
              <label>
                {" "}
                <p>Nome</p>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
              <label>
                {" "}
                <p>Sobre Nome</p>
                <input
                  type="text"
                  name="sobreNome"
                  value={formData.sobreNome}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
            </div>
            <div className={styles.nomeGroup}>
              <label>
                <p>E-Mail</p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
              <label>
                <p>Assunto</p>
                <input
                  type="text"
                  name="assunto"
                  placeholder="Assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>
            </div>
            <div className={styles.inline}>
              <label>
                <p>Mensagem</p>
                <textarea
                  name="mensagem"
                  placeholder="Escreva sua mensagem..."
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </article>

        <article className={styles.contatosContent}>
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
