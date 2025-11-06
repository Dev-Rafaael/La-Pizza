import { useNavigate } from "react-router-dom";
import type { User } from "../types";
import { useEffect, useState, type FormEvent } from "react";
import { useUserStore } from "../store/useUserStore";
import { toast } from "react-toastify";
import { api } from "../api/api";

function UseAccount() {
  const [account, setAccount] = useState<User[]>([]);
  const navigate = useNavigate();
  const user = useUserStore((s) => s.user);
  const logout = useUserStore((s) => s.logout);
  const update = useUserStore((s) => s.updatedUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nome, setNome] = useState<string>("");
  const [sobreNome, setSobreNome] = useState<string>("");
  const [nascimento, setNascimento] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  useEffect(() => {
    if (user) {
      try {
        setAccount([user]);
      } catch (error) {
        console.error("Erro ao converter JSON do usuário:", error);
        navigate("/login");
      }
    } else {
      navigate("/perfil");
    }
  }, [user, navigate]);

  const deletarAccount = () => {
    logout();
    setAccount([]);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const edit = () => {
    setIsModalOpen(true);
    if (!user) return;
    setNome(user.nome);
    setSobreNome(user.sobreNome);
    setNascimento(user.nascimento);
    setSexo(user.sexo);
    setTelefone(user.telefone);
  };

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();
    if (!user?.id) {
      toast.error("Usuário não encontrado!");
      return;
    }
    const dados = {
      nome,
      sobreNome,
      nascimento,
      sexo,
      telefone,
    };
    try {
      const { data } = await api.put(`account/${user.id}`, dados);
      update(data);
      toast.success("Atualizado Com Sucesso ");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao Atualizar Conta");
    } finally {
      setIsModalOpen(false);
    }
     console.log(user);
  };
  return {
    account,
    nome,
    setNome,
    sobreNome,
    setSobreNome,
    nascimento,
    setNascimento,
    sexo,
    setSexo,
    telefone,
    setTelefone,
    deletarAccount,
    edit,
    handleCloseModal,
    isModalOpen,
    handleEdit,
  } as const;
}

export default UseAccount;
