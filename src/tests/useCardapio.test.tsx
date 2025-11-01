import useCardapio from '../hooks/useCardapio'
import { Link } from 'react-router-dom'
import { api } from '../api/api'
 import { render, screen, fireEvent } from "@testing-library/react";
jest.mock('../api/api',()=>({
    get: ()=> jest.fn(),
}))

jest.mock('../hooks/useCardapio',()=>({
default: ()=>[
  {
        id: 1,
        sabor: "Calabresa",
        descricao: "Deliciosa pizza de calabresa",
        preco: 45.5,
        imagem: "pizza-calabresa.jpg",
      },
]

    
}))
function MockUsePizza() {
  const {pizzas} = useCardapio()
  return (
        <div >
          {pizzas.map((pizza) => (
            <div key={pizza.id} >
              <img src={pizza.imagem} alt={`Pizza sabor ${pizza.sabor}`} />
              <div >
                <h1 >{pizza.sabor}</h1>

                <p>{pizza.descricao}</p>
                <h4>R${pizza.preco.toFixed(2)}</h4>
                <article >
                  <Link to={`/Orçamento/${pizza.sabor}`} >
                    Comprar
                  </Link>
                </article>
              </div>
            </div>
          ))}
        </div>
     )
}
test('should show Pizza', async() => {
  render(<MockUsePizza/>)

  fireEvent.click(await screen.getByText('Comprar'))

  expect(api.get).toHaveBeenCalledTimes(1)
  expect(api.get).toHaveBeenCalledWith("/pizzas/show")
  expect(await screen.findByText(/R\$/i)).toBeInTheDocument()
});


export default MockUsePizza
