import React from 'react'
import styles from '../styles/Carrinho.module.css'
import cartHook from '../hooks/cartHook'
import type { Cart } from '../types'
import { Link } from 'react-router-dom'
function Carrinho() {
  const {itens,deletarItem} = cartHook<Cart>('cart',[])

 
  
    const deletar =(index:number)=>{
       const confirm = window.confirm('Tem Certeza que deseja Deletar?')
      if(confirm){
      deletarItem(index)
    }
    
  }
  return ( 
    <>
    {itens.map((pizza,i)=>(
    <section key={i} className={styles.carrinhoContent}>
     
        <h1>Carrinho</h1>
        <h1>Deus é Fiel</h1>
        <h2>Produto:{pizza.sabor}</h2>
        <h2>Preço:{pizza.precoTotal}</h2>
        <h2>Quantidade:{pizza.unidades}</h2>
    
        <Link to={`/Identificação/${pizza.cartId}`}>Pagar</Link>
        <button onClick={()=>deletar(pizza.cartId)}>Remover Do Carrinho</button>
    </section>
      ))}
      </>
  )
}

export default Carrinho
