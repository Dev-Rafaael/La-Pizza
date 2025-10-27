import accountHook from "../hooks/useAccount";
import type { Account } from "../types";

describe('Name of the group', () => {
    
    test('should get an account', () => {
        const {account,criarAccount} = accountHook<Account>('account',[])

        criarAccount('Rafael','Moraes','11111','Masculino','27052005','rafael@gmail.com','119999222','06900155','SP','EB','90','Ap648')
   
        expect(account[0].nome).toBe('Rafael')
        expect(account).toHaveLength(1)
    });

    test('should create an account', () => {
          const {account,criarAccount} = accountHook<Account>('account',[])

        criarAccount('Rafael','Moraes','11111','Masculino','27052005','rafael@gmail.com','119999222','06900155','SP','EB','90','Ap648')
   
        expect(account[0].nome).toBe('Rafael')
        expect(account).toHaveLength(1)
        expect(account[0]).toMatchObject({
            nome:'Rafael',
            sobreNome:'Moraes',
            cpf:'11111'
        })
    });

    test('should update an account', () => {
          const {account,criarAccount,updateAccount} = accountHook<Account>('account',[])

        criarAccount('Rafael','Moraes','11111','Masculino','27052005','rafael@gmail.com','119999222','06900155','SP','EB','90','Ap648')
        criarAccount('Jack','Sparrow','3333','Masculino','28031940','sparrow@gmail.com','119992299','06900155','SP','EB','90','Ap648')
        
         expect(account[1]).toMatchObject({
             nome:'Rafael',
            sobreNome:'Moraes',
            cpf:'11111'
         })
        const newAccount = account[0]
        updateAccount(newAccount)


       
        expect(account).toHaveLength(1)
        expect(account[0].nome).toBe('Jack')
    });
    test('should ', () => {
         const {account,criarAccount,deletarAccount} = accountHook<Account>('account',[])

        criarAccount('Rafael','Moraes','11111','Masculino','27052005','rafael@gmail.com','119999222','06900155','SP','EB','90','Ap648')
        criarAccount('Jack','Sparrow','3333','Masculino','28031940','sparrow@gmail.com','119992299','06900155','SP','EB','90','Ap648')
        
        const oldAccount = account[0]
        deletarAccount(oldAccount.id)

        expect(account).toHaveLength(1)
        expect(account[0]).not.toContainEqual(oldAccount)
        expect(account[0]).toMatchObject({
            nome:'Jack',
            sobreNome:'Sparrow',
            cpf:'3333'
        })
    });
});