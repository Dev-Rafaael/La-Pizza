import  { useEffect, useState } from "react";

function accountHook<T extends { id: number }>(
  key: string,
  initialValue: T[] = []
) {
  const [account, setAccount] = useState<T[]>(() => {
    const accountStorage = localStorage.getItem(key);
    return accountStorage ? JSON.parse(accountStorage) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(account));
  }, [key, account]);

  const addAccount = (item: T) => {
    setAccount((prev) => [...prev, item]);
  };

  const criarAccount = (
    nome: string,
    sobreNome: string,
    cpf: string,
    sexo: string,
    nascimento: string,
    email: string,
    telefone: string,
    cep: string,
    estado: string,
    cidade: string,
    numero: string,
    complemento: string
  ) => {
    const newAccount: T = {
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
      id: Date.now()
    } as T;
    addAccount(newAccount);
    return newAccount;
  };

  const deletarAccount = (index:number)=>{
    setAccount((prev)=>
    prev.filter((u)=> u.id !== index))
  }

  const updateAccount = (item: T)=>{
    setAccount((prev)=>
    prev.map((u)=> u.id === item.id ? item : u))
  }

  return {account,addAccount,criarAccount,deletarAccount, updateAccount} as const
}

export default accountHook;
