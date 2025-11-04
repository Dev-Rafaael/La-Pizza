import { fireEvent, render, screen } from "@testing-library/react";
import UseCheckout from "../hooks/useOrder";
import { api } from "../api/api";
import { toast } from "react-toastify";

jest.mock("../api/api", () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
  },
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

export const MockUseCheckout = () => {
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
  } = UseCheckout();
  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      <div>
        <div>
          <label htmlFor="Estado">Estado</label>
          <select
            id="Estado"
            name="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value="SaoPaulo" selected>
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
      <div>
        <p>
          Utilizamos seus dados pessoais somente para o cadastro em nossa
          plataforma, que nos permite lhe prestar nossos serviços.
        </p>
      </div>
      <div>
        <button type="submit">COMPRAR</button>
      </div>
    </form>
  );
};
describe("Irei verificar Checkout", () => {
  test("should get Identifier", async () => {
    (api.post as jest.Mock).mockResolvedValue({
      data: { nome: "Rafael" },
    });
    render(<MockUseCheckout />);

    fireEvent.change(screen.getByPlaceholderText("Digite Seu Numero"), {
      target: { value: 123 },
    });
    fireEvent.change(screen.getByPlaceholderText("Digite O Complemeto"), {
      target: { value: "Centro" },
    });
    fireEvent.change(screen.getByPlaceholderText("Digite Seu Sobrenome"), {
      target: { value: "Moraes" },
    });
    fireEvent.click(screen.getByText("COMPRAR"));

    expect(
      await screen.findByPlaceholderText("Digite Seu Numero")
    ).toBeInTheDocument();
    expect(api.post).toHaveBeenCalledTimes(1);
    expect(api.post).toHaveBeenCalledWith(
      expect.stringContaining("checkout"),
      expect.any(Object)
    );
    expect(toast.success).toHaveBeenCalledWith(
      "🍕 Pedido realizado com sucesso!"
    );
  });
});
