import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contato from "./pages/Contato.tsx";
import Sobre from "./pages/Sobre.tsx";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade.tsx";
import Cardapio from "./pages/Pizza.tsx";
import Carrinho from "./pages/Cart.tsx";
import Account from "./pages/User.tsx";
import Termos from "./pages/Termos.tsx";
import "./index.css";
import LayoutZap from "./components/LayoutZap.jsx";
import Cadastrar from "./pages/Cadastrar.tsx";
import Login from "./pages/Login.tsx";
import Order from "./pages/Order.tsx";
import OrderItem from "./pages/OrderItem.tsx";
import Address from "./pages/Address.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fale-conosco/",
        element: <Contato />,
      },
      {
        path: "/sobre/",
        element: <Sobre />,
      },
      {
        path: "/Politica-Privacidade/",
        element: <PoliticaPrivacidade />,
      },
      {
        path: "/Cardapio/",
        element: <Cardapio />,
      },
    {
        path: "Orçamento/:sabor",
        element: <OrderItem />,
      },
    
      {
        path: "/Identificação/",
        element: <Order />,
      },
      // {
      //   path:"/Checkout/",
      //   element:<Checkout/>
      // },
      {
        path: "/Carrinho/",
        element: <Carrinho />,
      },
      {
        path: "Perfil/",
        element: <Account />,
      },
      {
        path: "Enderecos/",
        element: <Address />,
      },
      {
        path: "/Termos-De-Uso",
        element: <Termos />,
      },
      {
        path: "/Cadastro",
        element: <Cadastrar />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      //    {
      //     path:"Search/",
      //     element:<PesquisaPacotes/>
      //   }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutZap>
      <RouterProvider router={router} />
    </LayoutZap>
  </StrictMode>
);
