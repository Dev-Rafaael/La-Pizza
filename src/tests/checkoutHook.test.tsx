import checkoutHook from "../hooks/checkoutHook";
import type { Checkout } from "../types";

describe("Irei verificar Checkout", () => {
  test("should get Identifier", () => {
    const { identifier, criarIdentifier } = checkoutHook<Checkout>(
      "checkout",
      []
    );
    criarIdentifier(
      "Rafael",
      "Moraes",
      "22222",
      "masculino",
      "20",
      "rafael@gmail",
      "000099",
      "90"
    );

    expect(identifier[0]).toMatchObject({
      nome: "Rafael",
      sobrenome: "Moraes",
    });
  });
  test("should build Identifiers", () => {
    const { identifier, criarIdentifier } = checkoutHook<checkout>(
      "checkout",
      []
    );

    criarIdentifier(
      "Rafael",
      "Moraes",
      "22222",
      "masculino",
      "20",
      "rafael@gmail",
      "000099",
      "90"
    );
    criarIdentifier(
      "Jack",
      "Sparrow",
      "7777",
      "masculino",
      "60",
      "sparrow@gmail",
      "33333",
      "390"
    );

    expect(identifier.length).toBe(2);
    expect(identifier[1].nome).toBe("Jack");
  });
  test("should update Identifiers", () => {
    const { identifier, criarIdentifier, atualizarIdentifier } =
      checkoutHook<checkout>("checkout", []);
    criarIdentifier(
      "Rafael",
      "Moraes",
      "22222",
      "masculino",
      "20",
      "rafael@gmail",
      "000099",
      "90"
    );
    criarIdentifier(
      "Jack",
      "Sparrow",
      "7777",
      "masculino",
      "60",
      "sparrow@gmail",
      "33333",
      "390"
    );

    const newIdentifier = identifier[0];
    atualizarIdentifier({ ...newIdentifier, cep: "99999" });

    expect(identifier.length).toBe(2);
    expect(identifier[0].cep).toBe("99999");
  });
  // TESTE PARA VERIFICAR OS OUTROS ITENS
  test("should ", () => {
    const { identifier, criarIdentifier, atualizarIdentifier } =
      checkoutHook<checkout>("checkout", []);
    criarIdentifier(
      "Rafael",
      "Moraes",
      "22222",
      "masculino",
      "20",
      "rafael@gmail",
      "000099",
      "90"
    );
    criarIdentifier(
      "Jack",
      "Sparrow",
      "7777",
      "masculino",
      "60",
      "sparrow@gmail",
      "33333",
      "390"
    );

    const newIdentifier = identifier[0];
    atualizarIdentifier({ ...newIdentifier, cpf: "8888" });

    expect(identifier.length).toBe(2);

    expect(identifier[1]).toMatchObject({
      nome: "Jack",
      sobrenome: "Sparrow",
      cpf: "7777",
    });

    expect(identifier[0].cpf).toBe("8888");
  });
  test("should delete Identifiers", () => {
    const { identifier, criarIdentifier, deletarIdentifier } =
      checkoutHook<checkout>("checkout", []);
    criarIdentifier(
      "Rafael",
      "Moraes",
      "22222",
      "masculino",
      "20",
      "rafael@gmail",
      "000099",
      "90"
    );
    criarIdentifier(
      "Jack",
      "Sparrow",
      "7777",
      "masculino",
      "60",
      "sparrow@gmail",
      "33333",
      "390"
    );

    const oldIdentifier = identifier[1];
    deletarIdentifier(oldIdentifier.id);

    expect(identifier.length).toBe(1);
    expect(identifier).not.toContainEqual(oldIdentifier);
  });
});
