import { fireEvent, render, screen } from "@testing-library/react";
import useOrcamento from "../hooks/useOrcamento";
import { api } from "../api/api";
import { toast } from "react-toastify";


jest.mock('../api/api',()=>({
    api:{
        get: jest.fn(),
        post:jest.fn(),
        put:jest.fn(),
        delete:jest.fn(),
    }
}))

jest.mock('react-toastify',()=>({
    toast:{
        success:jest.fn(),
        error:jest.fn()
    }
}))
const MockUseOrcamento = ()=>{
 const {
    unidades,
    setUnidades,
    adicionais,
    toggleOpcao,
    handleSubmit,
    precoTotal,
    opcoes
  } = useOrcamento();
    return(
        <form onSubmit={handleSubmit}>
              <div >
                <label htmlFor="Unidades">Unidades:</label>
                <select
                  name="Unidades"
                  value={unidades}
                  onChange={(e) => setUnidades(Number(e.target.value))}
                  required
                >
                  <option value="" defaultChecked>
                    Selecione
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div >
                <label htmlFor="Adicionais">Adicionais:</label>
                {opcoes.map((opcao) => (
                  <label key={opcao} >
                    <input
                      type="checkbox"
                      value={opcao}
                      checked={adicionais.includes(opcao)}
                      onChange={() => toggleOpcao(opcao)}
                    />
                     {opcao}
                  </label>
                ))}
              </div>

              {
                <h3 >
                  {" "}
                  Total a Pagar: R$
                  {precoTotal
                    }
                </h3>
              }

              <button type="submit">Prosseguir</button>
            </form>
    )
}
describe('Orcamento Hook', () => {
    
    test('should add Orcamento',async () => {
        
        (api.post as jest.Mock).mockResolvedValue({
          data: {unidades: 2}
        })

        render(<MockUseOrcamento/>)

        fireEvent.change(screen.getByLabelText('Unidades'), {target: {value:'1'}})

        const checkbox = screen.getByText('Adicionais')
        fireEvent.click(checkbox)
        fireEvent.click(screen.getByText('Prosseguir'))

        expect(api.post).toHaveBeenCalledTimes(1)
        expect(api.post).toHaveBeenCalledWith(
            expect.stringContaining('orcamento'),
            expect.any(Object)
        )
        expect(api.delete).not.toHaveBeenCalled()
        expect(api.put).toHaveBeenCalledWith(expect.stringContaining('Parmesao'))

        expect(toast.success).toHaveBeenCalledWith('Enviado ao Carrinho')
    });
});

