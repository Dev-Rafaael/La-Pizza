import { useEffect, useState } from 'react'

function contatoHook<T extends {id:number}>(key:string, initialValue: T[]= []) {
    const [contatos,setContatos]= useState<T[]>(()=>{
    const contatoStorage = localStorage.getItem(key)
    return contatoStorage ? JSON.parse(contatoStorage) : initialValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(contatos))
    },[contatos,key])


     const addContatos = (item: T)=>{
        setContatos((prev)=> [...prev,item])
     }

     const criarContato = (nome:string,sobrenome:string,email:string,assunto:string)=>{
        const newContato: T = {nome,sobrenome,email,assunto,id: Date.now()} as T
        addContatos(newContato)
     }

     const atualizarContato = (item: T)=>{
        setContatos((prev)=>
        prev.map((u)=> u.id === item.id ? item : u))
     }

     const deletarContato = (index:number)=>{
        setContatos((prev)=>
        prev.filter((item,i)=> i !== index))
     }
  return {contatos,addContatos,criarContato,atualizarContato,deletarContato} as const
}

export default contatoHook
