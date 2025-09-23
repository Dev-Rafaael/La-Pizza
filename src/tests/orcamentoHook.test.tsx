import orcamentoHook from "../hooks/orcamentoHook";
import type { Orcamento } from "../types";

describe('Orcamento Hook', () => {
    
    test('should add Orcamento', () => {
        const {orcamento,criarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('2','mussarela','29.99')

        expect(orcamento[1].pedacos).toBe('2')
    });

    test('should delete Orcamento', () => {
        const {orcamento,criarOrcamento,deletarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('2','mussarela','29.99')
        criarOrcamento('5','calabresa','49.99')
 
        const oldOrcamento = orcamento[1]

        deletarOrcamento(oldOrcamento.id)

        expect(orcamento.length).toBe(1)
        expect(orcamento[1].pedacos).toBe('2')
        expect(orcamento).not.toContainEqual(oldOrcamento)
    });

    test('should update Orcamento', () => {
        const {orcamento,criarOrcamento,atualizarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('2','mussarela','29.99')
        criarOrcamento('5','calabresa','49.99')


        const newOrcamento = orcamento[1]
        atualizarOrcamento({...newOrcamento, pedacos:'3'})

        expect(orcamento[1].pedacos).toBe('3')
        expect(orcamento.length).toBe(2)
    });

     // TESTE PARA VERIFICAR OS OUTROS ITENS 

     test('should update a Pedidos and check the others', () => {
          const {orcamento,criarOrcamento,atualizarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('2','mussarela','29.99')
        criarOrcamento('5','calabresa','49.99')


        const newOrcamento = orcamento[0]
        atualizarOrcamento({...newOrcamento,sabores:"portuguesa"})

        expect(orcamento[0].sabores).toBe("portuguesa")

        expect(orcamento[1]).toMatchObject({
            pedacos:"5",
            sabores:"calabresa"
        })   

        expect(orcamento.length).toBe(2)
    });
});

