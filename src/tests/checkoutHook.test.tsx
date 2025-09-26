import checkoutHook from "../hooks/checkoutHook";
import type { Checkout } from "../types";

describe("Irei verificar Checkout", () => {
  test("should get Identifier", () => {
    const { identifier, criarIdentifier } = checkoutHook<Checkout>(
      "checkout",
      []
    );

    criarIdentifier('Rafael','Moraes','22222','m','20','rafael@gmail','3333','90','mussarela','saborosa',
      '29.99','foto','29.99','1','queijo','111233')
 
      expect(identifier[0]).toMatchObject({
        nome:'Rafael',
        sobrenome:'Moraes'
      })

    });


  
  test("should build Identifiers", () => {
    const { identifier, criarIdentifier } = checkoutHook<Checkout>(
      "checkout",
      []
    );

      criarIdentifier('Rafael','Moraes','22222','m','20','rafael@gmail','3333','90','mussarela','saborosa',
      '29.99','foto','29.99','1','queijo','111233')
 

      expect(identifier[0].nome).toBe('Rafael')
      expect(identifier).toHaveLength(1)
  });
  test("should update Identifiers", () => {
    const { identifier, criarIdentifier, atualizarIdentifier } =
      checkoutHook<Checkout>("checkout", []);

        criarIdentifier('Rafael','Moraes','22222','m','20','rafael@gmail','3333','90','mussarela','saborosa',
      '29.99','foto','29.99','1','queijo','111233')
 
        criarIdentifier('Jack','Sparrow','11111','m','40','sparrow@gmail','333','20','calabresa',' muito saborosa',
      '39.99','foto','39.99','1','queijo','23333')
 
      const newIdentifier = identifier[0]
      atualizarIdentifier({...newIdentifier,idade:'60'})

      expect(identifier).toHaveLength(2)
      expect(identifier[0].idade).toBe('60')
      expect(identifier[1].idade).toBe('40')
  });
  // TESTE PARA VERIFICAR OS OUTROS ITENS
  test("should update a lot identifiers ", () => {
    const { identifier, criarIdentifier, atualizarIdentifier } =
      checkoutHook<Checkout>("checkout", []);


      
        criarIdentifier('Rafael','Moraes','22222','m','20','rafael@gmail','3333','90','mussarela','saborosa',
      '29.99','foto','29.99','1','queijo','111233')
 
        criarIdentifier('Jack','Sparrow','11111','m','40','sparrow@gmail','333','20','calabresa',' muito saborosa',
      '39.99','foto','39.99','1','queijo','23333')
 
      const newIdentifier = identifier[0]
      atualizarIdentifier({...newIdentifier,cpf:'8888'})

      expect(identifier[1]).toMatchObject({
        nome:'Jack',
        sobrenome:'Sparrow'
      })

      expect(identifier).toHaveLength(2)
      expect(identifier[0].cpf).toBe('8888')
  });
  test("should delete Identifiers", () => {});
  const { identifier, criarIdentifier, deletarIdentifier } =
      checkoutHook<Checkout>("checkout", []);
   criarIdentifier('Rafael','Moraes','22222','m','20','rafael@gmail','3333','90','mussarela','saborosa',
      '29.99','foto','29.99','1','queijo','111233')
 
        criarIdentifier('Jack','Sparrow','11111','m','40','sparrow@gmail','333','20','calabresa',' muito saborosa',
      '39.99','foto','39.99','1','queijo','23333')
 
      const oldIdentifier = identifier[0]
      deletarIdentifier(oldIdentifier.id)

      expect(identifier).toHaveLength(1)
      expect(identifier).not.toContainEqual(oldIdentifier)
      expect(identifier[0].nome).toBe('Jack')
    
});
