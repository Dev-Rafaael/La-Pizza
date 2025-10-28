import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";
import { api } from "../api/api";

function useCadastrar() {
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [cpf, setCPF] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>();
  const [telefone, setTelefone] = useState<string >("");

  const [loading, setLoading] = useState(false);
  const [account,setAccount] = useState()
  const handleAccount = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const dataAccount = {
      nome,
      sobreNome,
      email,
      cpf,
      nascimento,
      telefone,
      sexo,
      senha,
    };
    console.log(dataAccount);

    if (dataAccount) {
      const newAccount = await api.post("account/", dataAccount);
      // setAccount(dataAccount)
      toast.success("🍕 Pedido realizado com sucesso!");
      console.log(newAccount);
      setLoading(false);
      setNome('')
      setSobreNome('')
      setEmail('')
      setSenha('')
      setSexo('')
      setNascimento('')
      setTelefone('')
    } else {
      toast.error(
        "Não foi possivel fazer a compra! Tente Novamente Mais tarde!"
      );
    }
    } catch (error) {
      console.log(error);
      console.log('Deu Erro');
      
      
    }finally{
        setLoading(false);
    }
  };
  return {
    nome,
    setNome,
    sobreNome,
    setSobreNome,
    cpf,
    email,
    setEmail,
    senha,
    setSenha,
    setCPF,
    sexo,
    setSexo,
    nascimento,
    setNascimento,
    telefone,
    setTelefone,
    loading,
    setLoading,
    handleAccount,
    account,setAccount
  } as const;
}

export default useCadastrar;
