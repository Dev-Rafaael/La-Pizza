import {useState } from "react";

import { toast } from "react-toastify";

import { orderSchema } from "../schemas/orderSchema";
import useCart from "./useCart";
import { UseOrderStore } from "../store/useOrderStore";
import { api } from "../api/api";
import useAddress from "./useAddress";
function UseOrder() {
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const {cep,
    setCEP,
    estado,
    setEstado,
    cidade,
    setCidade,
    bairro,
    setBairro,
    rua,
    setRua,
    numero,
    setNumero,
    complemento,
    setComplemento,} = useAddress()

  const { items } = useCart();
  const setOrder = UseOrderStore((s) => s.addOrder);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder = {
      nome,
      sobreNome,
      cpf,
      sexo,
      nascimento,
      email,
      telefone,
      cep,
      estado,
      cidade,
      numero,
      complemento,
      items,
    };
    const parseResult = orderSchema.safeParse(newOrder);
    if (parseResult.error) {
      parseResult.error.issues.forEach((err) => {
        toast.error(err.message);
      });
    } else {
      const fetchOrder = await api.post("/orders/create", newOrder);
      setOrder(newOrder);
      toast.success("🍕 Pedido realizado com sucesso!");
      console.log(fetchOrder);
    }
  };

  return {
    nome,
    setNome,
    sobreNome,
    setSobreNome,
    cpf,
    setCPF,
    sexo,
    setSexo,
    nascimento,
    setNascimento,
    telefone,
    setTelefone,
    email,
    setEmail,
   cep,
    setCEP,
    estado,
    setEstado,
    cidade,
    setCidade,
    bairro,
    setBairro,
    rua,
    setRua,
    numero,
    setNumero,
    complemento,
    setComplemento,
    handleSubmit,
    items,
  } as const;
}

export default UseOrder;
