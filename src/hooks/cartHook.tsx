import { useEffect, useState } from 'react'

function cartHook<T extends {cartId:number}>(key:string,initialValue: T[]=[]) {
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
    sabor:string,
    descricao:string,
    preco:string,
    precoTotal:string,
    unidades:string,
    adicionais:string,
    cartId:number,
   imagem?:string,) =>{
        const newItem: T = {
           sabor,
      descricao,
      preco,
      precoTotal,
      unidades,
      adicionais,
      cartId,
       imagem}as T 
        addItem(newItem)
        return newItem
    }

    const atualizarItem = (item:T)=>{
      setItens((prev)=> prev.map((u)=> u.cartId === item.cartId ? item : u))
    }

    const deletarItem = (cartId:number)=>{
      setItens((prev)=> prev.filter((u)=> u.cartId !== cartId))
    }
  return {itens,criarItem,atualizarItem,deletarItem}as const
}

export default cartHook
