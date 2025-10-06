import { useEffect, useState } from "react";

function checkoutHook<T extends { id: number }>(
  key: string,
  initialValue: T[] = []
) {
  const [identifier, setIdentifier] = useState<T[]>(() => {
    const identifierStorage = localStorage.getItem(key);
    return identifierStorage ? JSON.parse(identifierStorage) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(identifier));
  }, [key, identifier]);

  const addIdentifier = (item: T) => {
    setIdentifier((prev) => [...prev, item]);
  };

 const criarIdentifier = (
  nome: string,
  sobrenome: string,
  cpf: string,
  sexo: string,
  idade: string,
  email: string,
  cep: string,
  numero: string,
 sabor: string,
    descricao: string,
    preco: number,
    imagem: string | undefined,
    precoTotal: number,
    unidades: number,
    adicionais: string,
  cartId: number 
  
) => {
  const newIdentifier: T = {
    nome,
    sobrenome,
    cpf,
    sexo,
    idade,
    email,
    cep,
    numero,
    sabor,
    descricao,
    preco,
    imagem,
    precoTotal,
    unidades,
    adicionais,
    cartId
  } as T;

  addIdentifier(newIdentifier);
  return newIdentifier;
};


  const atualizarIdentifier = (item: T) => {
    const updatedIdentifier = setIdentifier((prev) =>
      prev.map((u) => (u.id === item.id ? item : u))
    );
    return updatedIdentifier;
  };

  const deletarIdentifier = (index: number) => {
    setIdentifier((prev) => prev.filter((_, i) => i !== index));
  };
  return {
    identifier,
    criarIdentifier,
    atualizarIdentifier,
    deletarIdentifier,
  } as const;
}

export default checkoutHook;
