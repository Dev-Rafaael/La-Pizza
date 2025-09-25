import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Contato from './pages/Contato.tsx';
import Sobre from './pages/Sobre.tsx';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade.tsx';
import Cardapio from './pages/Cardapio.tsx';
import Orçamento from './pages/Orçamento.tsx';
import Checkout from './pages/Checkout.tsx';
import Carrinho from './pages/Carrinho.tsx';
import Account from './pages/Account.tsx';
import Termos from './pages/Termos.tsx';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Home/>,
       }, 
       {
        path:"/fale-conosco/",
        element:<Contato/>
       },{
        path:"/sobre/",
        element:<Sobre/>  
        },
         {
        path:"/Politica-Privacidade/",
        element:<PoliticaPrivacidade/>  
        },
        {
          path:"/Cardapio/",
          element:<Cardapio/>
        },
        // {
        //   path:"/images/",
        //   element:<Images/>
        // },
        {
          path:"Orçamento/:nome",
          element:<Orçamento/>
        },
        {
          path:"/Identificação/:id",
          element:<Checkout/>
        }, 
        // {
        //   path:"/Checkout/",
        //   element:<Checkout/>
        // },
        {
          path:"/Carrinho/",
          element:<Carrinho/>
        },
        {
          path:"Minha Conta/",
          element:<Account/>
        },
         {
          path:"/Termos-De-Uso",
          element:<Termos/>
        },
      //    {
      //     path:"Search/",
      //     element:<PesquisaPacotes/>
      //   }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
