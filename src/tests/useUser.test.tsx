import UseAccount from "../hooks/useUser";
import { render, screen, fireEvent } from "@testing-library/react";
import { api } from "../api/api";
import toast from 'react-toastify'


const mockLogout = jest.fn()
const mockUser = {id:1,nome:'Rafael',sobrenome:'Moraes'}

jest.mock('../store/useUserStore',()=>({
   useUserStore: jest.fn(()=>({
    user:mockUser,
    logout:mockLogout,
   }))
}))

jest.mock('../api/api',()=>({
  api:{
    put:jest.fn(()=> Promise.resolve({data:{...mockUser,nome:'Rafael'}}))
  }
}))
const mockNavigate = jest.fn()
jest.mock('react-router-dom',()=>({
    useNavigate: ()=> mockNavigate
}))

jest.mock('react-toastify',()=>({
    toast:{
        sucess: jest.fn(),
        error: jest.fn()
    }
}))

const MockUseAccount = () => {
  const {
    nome,
    setNome,
    deletarAccount,
    edit,
    handleCloseModal,
    handleEdit,
  } = UseAccount();

  return (
    <div>
      <span data-testid="nome">{nome}</span>
      <button onClick={edit}>Editar</button>
      <button onClick={handleCloseModal}>Fechar</button>
      <button onClick={deletarAccount}>Deletar</button>
      <form onSubmit={handleEdit}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

   describe('Test Account Function', () => {
        it('deve carregar os dados do usuário    ', () => {
            render(<MockUseAccount/>)

        expect(screen.getByTestId('nome').textContent).toBe('Rafael')
        });
        it('deve abrir o modal e preencher os dados no editar ', () => {
            render(<MockUseAccount/>)

            fireEvent.click(screen.getByText('Editar'))

            expect(screen.getByPlaceholderText('Nome').getAttribute("value")).toBe('Rafael')
        });
        it('deve atualizar os dados do usuário ', () => {
              render(<MockUseAccount/>)

              fireEvent.click(screen.getByText('Editar'))
              fireEvent.click(screen.getByPlaceholderText('Nome'), {target:{value:'NovoNome'}})
              expect(api.put).toHaveBeenCalledWith('acccount/1',expect.objectContaining({nome:'NovoNome'}))
              expect(toast.toast.success).toHaveBeenCalledWith('Atualizado Com Sucesso')
        });
        it('deve deletar a conta ', () => {
            render(<MockUseAccount/>)

            fireEvent.click(screen.getByText('Deletar'))

            expect(mockLogout).toHaveBeenCalled()
        });
    });