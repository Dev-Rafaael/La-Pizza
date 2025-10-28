import { useState, type FormEvent } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (!senha || !email) throw new Error("Credenciais não especificadas");

    const { data } = await api.post("/account/login", { email, senha });

    if (data?.token && data?.user) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login feito com sucesso 🍕");
      navigate("/perfil");
    } else {
      throw new Error("Resposta inválida do servidor");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    toast.error("Falha ao fazer login");
  } finally {
    setLoading(false);
  }
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
