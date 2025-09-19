import React, { useEffect, useState } from 'react'

function orcamentoHook<T extends {id:number}>(key:string, initialValue: T[]= []) {
    const [orcamento,setOrcamento]= useState<T[]>(()=>{
        const orcamentoStorage = localStorage.getItem(key)
        return orcamentoStorage ? JSON.parse(orcamentoStorage) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(orcamento))
    },[key,orcamento])

    const addOrcamento = (item: T)=>{
        setOrcamento((prev)=> [...prev,item])
    }

    const criarOrcamento = (pedacos:string,sabores:string,preco:string)=>{
        const newOrcamento: T = {pedacos,sabores,preco,id:Date.now()} as T
        addOrcamento(newOrcamento)
    }

    const atualizarOrcamento = (item: T)=>{
        setOrcamento((prev)=>
        prev.map((u)=> u.id === item.id ? item : u))
    }

    const deletarOrcamento = (index:number)=>{
        setOrcamento((prev)=>
        prev.filter((item,i)=> i !== index))
    }
  return {orcamento,addOrcamento,criarOrcamento,atualizarOrcamento,deletarOrcamento} as const
}

export default orcamentoHook
