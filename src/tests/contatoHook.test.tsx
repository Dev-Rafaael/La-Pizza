import contatoHook from "../hooks/useContato";
import type { Contact } from "../types";

describe('Name of the group', () => {
    test('should be get contacts', () => {
        const {contatos,criarContato}= contatoHook<Contact>('contatos',[])
        
      criarContato('Rafael','Moraes','rafael@gmail.com','duvida','hello World');

      expect(contatos).toHaveLength(1)
      expect(contatos[0].nome).toBe('Rafael')
    });
    test('should create a contact ', () => {
         const {contatos,criarContato}= contatoHook<Contact>('contatos',[])
        
      criarContato('Rafael','Moraes','rafael@gmail.com','duvida','hello World');

      expect(contatos[0]).toMatchObject({
        nome:'Rafael',
        sobrenome:'Moraes',
        email:'rafael@gmail.com'
      })
    });

    test('should update a contact', () => {
        const {contatos,criarContato,atualizarContato}= contatoHook<Contact>('contatos',[])
        
      criarContato('Rafael','Moraes','rafael@gmail.com','duvida','hello World');
      criarContato('Jack','Sparrow','sparrow@gmail.com','duvida','Ola Mundo');

      const newContato = contatos[0]
      atualizarContato({...newContato,email:'sparrow123@gmail.com'})
      expect(contatos[0].email).toBe('sparrow123@gmail.com')
      expect(contatos).toHaveLength(2)
      expect(contatos[0]).toMatchObject({
        nome:'Jack',
        sobrenome:'Sparrow',
        email:"sparrow123@gmail.com"
      })
        });
    test('should update and check various contact', () => {
         const {contatos,criarContato,atualizarContato}= contatoHook<Contact>('contatos',[])
        
      criarContato('Rafael','Moraes','rafael@gmail.com','duvida','hello World');
      criarContato('Jack','Sparrow','sparrow@gmail.com','duvida','Ola Mundo');

        const newContato = contatos[0]
      atualizarContato({...newContato,email:'rafael123@gmail.com'})
      expect(contatos[0]).toMatchObject({
        nome:'Rafael',
        sobrenome:'Moraes',
        email:'rafael123@gmail.com'
      })

      expect(contatos).toHaveLength(2)
      expect(contatos[1].email).toBe('sparrow@gmail.com')
    });
    test('should delete a Contact', () => {
        const {contatos,criarContato,deletarContato}= contatoHook<Contact>('contatos',[])
        
      criarContato('Rafael','Moraes','rafael@gmail.com','duvida','hello World');
      criarContato('Jack','Sparrow','sparrow@gmail.com','duvida','Ola Mundo');

      const oldContact = contatos[0]
      deletarContato(oldContact.id)

      expect(contatos).toHaveLength(1)
      expect(contatos[0].nome).toBe('Jack')
      expect(contatos[0]).not.toContainEqual(oldContact)
    });
});