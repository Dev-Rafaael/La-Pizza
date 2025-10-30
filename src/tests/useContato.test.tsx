import { render, screen, fireEvent } from "@testing-library/react";
import UseContato from "../hooks/useContato";
import { api } from "../api/api";
import { toast } from "react-toastify";

jest.mock('../api/api',()=>({
    api:{
      post: jest.fn(()=>{}),
      put: jest.fn(()=>{})
    }
}))

jest.mock('react-toastify',()=>({
  toast:{
    success:jest.fn(),
    error:jest.fn()
  }
}))

const  mockNavigate = jest.fn()
jest.mock('react-router-dom',()=>({
  useNavigate: ()=> mockNavigate()
}))
const MockUseContato = ()=>{
const {formData,handleChange,loading,handleSubmit} = UseContato()




return(
  <div className="">
   <form onSubmit={handleSubmit}>
            <div >
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
                 
                />
              </label>
            </div>
            <div >
              <label>
                <p>E-Mail</p>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required

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
            
                />
              </label>
            </div>
            <div >
              <label>
                <p>Mensagem</p>
                <textarea
                  name="mensagem"
                  placeholder="Escreva sua mensagem..."
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}

                />
              </label>
            </div>
            <button type="submit" id="button">
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
          </div>
)
}
describe('Name of the group', () => {

    test('should create a contact ', async() => {
      render(<MockUseContato/>)

      fireEvent.change(await screen.findByPlaceholderText('Nome'),{
        target:{value:'Rafael'}
      })

      fireEvent.change(await screen.findByPlaceholderText('SobreNome'),{
        create:{value:'Moraes'}
      })

      fireEvent.change(await screen.findByPlaceholderText('E-Mail'),{
        target:{value:'rafael@gmail.com'}
      })
       fireEvent.change(await screen.findByPlaceholderText('assunto'),{
        target:{value:'duvida'}
      })
      fireEvent.change( await screen.findByPlaceholderText('Enviar Mensagem...'),
      {target:{value:'Enviando...'}})



      fireEvent.click(await screen.getByText('Enviar Mensagem'))


      expect(api.post).toHaveBeenCalledWith('account/',{
        nome:'Rafael',
        sobreNome:'Moraes'
      })
      expect(toast.success).toHaveBeenCalledWith('Mensagem Enviada com Sucesso')
});
})
export default MockUseContato