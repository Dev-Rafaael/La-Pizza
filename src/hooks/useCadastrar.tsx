import { useState, type FormEvent } from 'react'
import { toast } from 'react-toastify';
import { api } from '../api/api';

function useCadastrar() {
      const [nome, setNome] = useState<string>("");
      const [sobreNome, setSobreNome] = useState<string>("");
      const [cpf, setCPF] = useState<string>("");
      const [sexo, setSexo] = useState<string>("");
      const [nascimento, setNascimento] = useState<string>();
      const [telefone, setTelefone] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [loading, setLoading] = useState(false);
    
    
      
    const handleAccount =async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const dataAccount ={
      nome,
      sobreNome,
      cpf,
      sexo,
      nascimento,
      email,
      telefone
    }
    console.log(dataAccount);
    
    if (dataAccount) {
        const newAccount = await api.post('/accounts/',dataAccount)
      toast.success("🍕 Pedido realizado com sucesso!");
      console.log(newAccount);
      setLoading(false);
    } else {
      toast.error(
        "Não foi possivel fazer a compra! Tente Novamente Mais tarde!"
      );
      setLoading(false);

      return;
    }
  };
  return {nome, setNome,sobreNome, setSobreNome,cpf, setCPF,sexo, setSexo,nascimento, setNascimento,telefone, setTelefone,email, setEmail,loading, setLoading,handleAccount} as const
}

export default useCadastrar
