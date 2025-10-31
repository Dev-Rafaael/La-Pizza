import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { checkoutSchema } from "../schemas/checkoutSchema";
function UseCheckout() {
    const [nome, setNome] = useState<string>("");
    const [sobreNome, setSobreNome] = useState<string>("");
    const [cpf, setCPF] = useState<string>("");
    const [sexo, setSexo] = useState<string>("");
    const [nascimento, setNascimento] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cep, setCEP] = useState<string>("");
     const [estado, setEstado] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [complemento, setComplemento] = useState<string>("");
    const { cartId } = useParams();
    // const dataOrcamento = orcamento.find(
    //   (value) => value.cartId === Number(cartId)
    // );
    // console.log(dataOrcamento);
  
    // if (!dataOrcamento) {
    //   return <p>Pizza Não Encontrada</p>;
    // }
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      const newIdentifier = {
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
        // dataOrcamento?.sabor,
        // dataOrcamento?.descricao,
        // dataOrcamento?.preco,
        // dataOrcamento?.imagem,
        // dataOrcamento?.precoTotal,
        // dataOrcamento?.unidades,
        // dataOrcamento?.adicionais,
        // dataOrcamento?.cartId
      };
      const parseResult = checkoutSchema.safeParse(newIdentifier)
      if(parseResult.error){
       parseResult.error.issues.forEach((err)=>{
           toast.error(err.message)
        })
      }else{
          toast.success("🍕 Pedido realizado com sucesso!");
      }
  
    };
    useEffect(() => {
      setNome("");
      setSobreNome("");
      setCPF("");
      setSexo("");
      setNascimento("");
      setEmail("");
      setCEP("");
      setNumero("");
    }, []);
  return {
    nome, setNome,
    sobreNome, setSobreNome,cpf, setCPF,sexo, setSexo,
    nascimento, setNascimento,telefone, setTelefone,
    email, setEmail,
    cep, setCEP,
    estado, setEstado,
  cidade, setCidade,
  numero, setNumero,
  complemento, setComplemento,
  cartId,
  handleSubmit,
  } as const;
}

export default UseCheckout;
