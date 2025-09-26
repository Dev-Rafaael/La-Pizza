import orcamentoHook from "../hooks/orcamentoHook";
import type { Orcamento } from "../types";

describe('Orcamento Hook', () => {
    
    test('should add Orcamento', () => {
        const {orcamento,criarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('1','mussarela','boa toda','29.99','foto','29.99','1','mussarela')

        expect(orcamento).toHaveLength(1)
        expect(orcamento[0].sabor).toBe('mussarela')
    });

    test('should delete Orcamento', () => {
        const {orcamento,criarOrcamento,deletarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

        criarOrcamento('1','mussarela','boa toda','29.99','foto','29.99','1','mussarela')
        criarOrcamento('2','calabresa','boa toda','39.99','foto','39.99','1','mussarela')

        const oldPizza = orcamento[0]
        deletarOrcamento(oldPizza.id)

        expect(orcamento).toHaveLength(1)
        expect(orcamento[0].sabor).toBe('calabresa')
        expect(orcamento).not.toContainEqual(oldPizza)
    });

    test('should update Orcamento', () => {
        const {orcamento,criarOrcamento,atualizarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);
        criarOrcamento('1','mussarela','boa toda','29.99','foto','29.99','1','mussarela')
        criarOrcamento('2','calabresa','boa toda','39.99','foto','39.99','1','mussarela')

        const newPizza = orcamento[0]
        atualizarOrcamento({...newPizza,preco:'40.00'})
        expect(orcamento).toHaveLength(2)
        expect(orcamento[0].preco).toBe('40.00')
        expect(orcamento[0]).toMatchObject({
            sabor:'mussarela',
            preco: '40.00'
        })
    
    });

     // TESTE PARA VERIFICAR OS OUTROS ITENS 

     test('should update a Pedidos and check the others', () => {
          const {orcamento,criarOrcamento,atualizarOrcamento} = orcamentoHook<Orcamento>('orcamento',[]);

          criarOrcamento('1','mussarela','boa toda','29.99','foto','29.99','1','mussarela')
        criarOrcamento('2','calabresa','boa toda','39.99','foto','39.99','1','mussarela')

        const newPizza = orcamento[0]
        atualizarOrcamento({...newPizza, descricao:'Muito saborosa'})

        expect(orcamento[0]).toMatchObject({
            id:'1',
            sabor:'mussarela',
            descricao: 'Muito saborosa'
        })
        expect(orcamento).toHaveLength(2)
        expect(orcamento[1].descricao).toBe('boa toda')
    });
});

