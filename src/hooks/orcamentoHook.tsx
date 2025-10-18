import { useEffect, useState } from "react";

function orcamentoHook<T extends { id: number }>(
  key: string,
  initialValue: T[] = []
) {
  const [orcamento, setOrcamento] = useState<T[]>(() => {
    const orcamentoStorage = localStorage.getItem(key);
    return orcamentoStorage ? JSON.parse(orcamentoStorage) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(orcamento));
  }, [key, orcamento]);

  const addOrcamento = (item: T) => {
    setOrcamento((prev) => [...prev, item]);
  };

  const criarOrcamento = (
    id: string,
    sabor: string,
    descricao: string,
    preco: number,
    imagem: string,
    precoTotal: number,
    unidades: number,
    adicionais: string[]
  ) => {
    const newOrcamento: T = {
      id,
      sabor,
      descricao,
      preco,
      imagem,
      precoTotal,
      unidades,
      adicionais,
      cartId: Date.now()
    } as T;

    addOrcamento(newOrcamento);
    return newOrcamento;
  };

  const atualizarOrcamento = (item: T) => {
    const updatedOrcamento = setOrcamento((prev) =>
      prev.map((u) => (u.id === item.id ? item : u))
    );

    return updatedOrcamento;
  };

  const deletarOrcamento = (index: number) => {
    setOrcamento((prev) => prev.filter((_, i) => i !== index));
  };

  const clearOrcamento = () => {
    localStorage.clear();
    setOrcamento([]);
  };
  return {
    orcamento,
    addOrcamento,
    criarOrcamento,
    atualizarOrcamento,
    deletarOrcamento,
    clearOrcamento,
  } as const;
}

export default orcamentoHook;
