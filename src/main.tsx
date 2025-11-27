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
import Termos from "./pages/Termos.tsx";
import "./index.css";
import LayoutZap from "./components/LayoutZap.jsx";
import Cadastrar from "./pages/Order/UserForm.tsx";
import Login from "./pages/Login.tsx";
import Order from "./pages/Order/Order.tsx";
import OrderItem from "./pages/OrderItem.tsx";
import ProtectedRoute from "./middlewares/ProtectedRoute.tsx";
import User from "./pages/User.tsx";
import CancelPage from "./pages/CancelPage.tsx";
import SuccessPage from "./pages/SuccessPage.tsx";
import OrderStatus from "./pages/OrderStatus.tsx";

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
        path: "/Carrinho/",
        element: <Carrinho />,
      },
      {
        path: "Perfil/",
        element: <User />,
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
       {
        path: "/cancel",
        element: <CancelPage />,
      }, 
        {
        path: "/success/",
        element: <SuccessPage />,
      },
          {
        path: "/order-status/:orderId",
        element: <OrderStatus />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/Identificação/", element: <Order /> },
        ],
      },
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
