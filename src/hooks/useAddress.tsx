import { useState, type FormEvent } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { addressSchema } from "../schemas/addressSchema";

function useAddress() {
  const [cep, setCEP] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [rua, setRua] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");

  const handleAddress = async (e: FormEvent) => {
    e.preventDefault();

    const addressData = {
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
    };
    try {
      const parseResult = addressSchema.safeParse(addressData);
      if (parseResult.error) {
        parseResult.error.issues.forEach((err) => {
          toast.error(err.message);
        });
      }
      const address = await api.post("address", addressData);
      console.log(address);
      toast.success("Endereço Criado Com Sucesso");
    } catch (error) {
      console.log(error);
    }
  };
  return {
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
    handleAddress,
  } as const;
}

export default useAddress;
