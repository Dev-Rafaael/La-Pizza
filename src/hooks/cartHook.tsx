import { useEffect, useState } from 'react'

function cartHook<T extends {id:number}>(key:string,initialValue: T[]=[]) {
    const [itens,setItens]=useState<T[]>(()=>{
        const itemStorage = localStorage.getItem(key)
        return itemStorage ? JSON.parse(itemStorage) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(itens))
    },[key,itens])


    const addItem = (item: T)=>{
        setItens((prev)=> [...prev, item])
    }

    const criarItem = (
    produto:string,
    preco:string,
    quantidade:string) =>{
        const newItem: T = {produto,preco,quantidade, id: Date.now()}as T 
        addItem(newItem)
        return newItem
    }

    const atualizarItem = (item:T)=>{
      setItens((prev)=> prev.map((u)=> u.id === item.id ? item : u))
    }

    const deletarItem = (index:number)=>{
      setItens((prev)=> prev.filter((_,i)=> i !== index))
    }
  return {itens,criarItem,atualizarItem,deletarItem}as const
}

export default cartHook
