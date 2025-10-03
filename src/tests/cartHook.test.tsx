import cartHook from "../hooks/cartHook";
import type { Cart } from "../types";

describe('Test the cart Features', () => {
    
    test('should get a Pizza', () => {
       const {itens,criarItem} = cartHook<Cart>('cart',[])

       criarItem('mussarela','Muito Saborosa',40.00,80.00,'2','nada',12345,'pizza.png');

       expect(itens[0].sabor).toBe('mussarela')
       expect(itens).toHaveLength(1)
    });
    test('should add a Pizza', () => {
        const {itens,criarItem} = cartHook<Cart>('cart',[])

       criarItem('mussarela','Muito Saborosa',40.00,80.00,'2','nada',12345,'pizza.png');

       expect(itens[0].descricao).toBe('mussarela')
       expect(itens[0]).toMatchObject({
        sabor:'mussarela',
        descricao:'Muito Saborosa',
        valor:'40.00'
       })
    });
    test('should update a Pizza', () => {
         const {itens,criarItem,atualizarItem} = cartHook<Cart>('cart',[])

       criarItem('mussarela','Muito Saborosa',40.00,80.00,'2','nada',12345,'pizza.png');
       criarItem('calabresa','Muito Boa',42.00,126.00,'3','cebola',3333,'pizzaCB.png');


    const newPizza = itens[1]
    atualizarItem({...newPizza,preco:41.00})
       expect(itens).toHaveLength(2)
       expect(itens[1].preco).toBe('41.00')
     
    });
       test('should update and check various Pizza', () => {
         const {itens,criarItem,atualizarItem} = cartHook<Cart>('cart',[])

       criarItem('mussarela','Muito Saborosa',40.00,80.00,'2','nada',444,'pizza.png');
       criarItem('calabresa','Muito Boa',40.00,80.00,'2','nada',333,'pizza.png');

       const newPizza = itens[1]
         atualizarItem({...newPizza,precoTotal:81.00})

         expect(itens[0].precoTotal).toBe('80')

         expect(itens[1]).toMatchObject({
            sabor:'calabresa',
            descricao:'Muito Boa',
            preco:'40.00',
            precoTotal:'81.00'
         })

         expect(itens).toHaveLength(2)
    });
    test('should delete a Pizzaa', () => {
            const {itens,criarItem,deletarItem} = cartHook<Cart>('cart',[])

       criarItem('mussarela','Muito Saborosa',40.00,80.00,'2','nada',12345,'pizza.png');
       criarItem('calabresa','Muito Boa',40.00,80.00,'2','nada',3333,'pizza.png');

       const oldPizza = itens[0]
        deletarItem(oldPizza.cartId)

        expect(itens).toHaveLength(1)
        expect(itens[0]).not.toContainEqual(oldPizza)
        expect(itens[0].sabor).toBe('calabresa')
    });
});