import { useState, type FormEvent } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";

function useLogin() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:FormEvent) => {
     e.preventDefault();
    setLoading(true);
    if (!senha && !email) throw new Error("Credenciais não especificadas");

    try {
      const login = await api.post("/account/loginUser", { email, senha });
      toast.success("login feito");
      console.log("Login Feito", login);
      setLoading(false)
    } catch (error) {
      console.log(error);
      console.log('erro');
      
    }
    setLoading(false)
  };
  return {
    email,
    setEmail,
    senha,
    setSenha,
    loading,
    setLoading,
    handleSubmit,
  } as const;
}

export default useLogin;
