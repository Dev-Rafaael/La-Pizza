import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Orçamento.module.css";
import React, { useState } from "react";
import orcamentoHook from "../hooks/orcamentoHook";
import type { Orcamento } from "../types";
import pizzas from "../database/pizzas";
function Orçamento() {
  const {criarOrcamento} = orcamentoHook<Orcamento>('orcamento',[])
  const [precoTotal,setPrecoTotal]= useState<string>('')
  const [unidades,setUnidades]= useState<string>('')
  const [adicionais,setAdicionais]= useState<string>('')
  const navigate = useNavigate()
  const {nome}= useParams()
   const dataOrcamento = pizzas.find((value)=> value.nome === nome)
  console.log(dataOrcamento);
console.log(nome);

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()

   const newOrcamento =  criarOrcamento({...dataOrcamento,precoTotal,unidades,adicionais});
    alert('Prosseguindo...')
    navigate(`/Identificação/${newOrcamento.cartId}`)
  }
  return (
    <section className={styles.formDetails}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia
        animi quia temporibus unde voluptas, eius illum. In excepturi delectus
        voluptatem beatae consequuntur vel quos voluptas. Provident temporibus
        voluptatibus beatae?
      </p>
         <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia
        animi quia temporibus unde voluptas, eius illum. In excepturi delectus
        voluptatem beatae consequuntur vel quos voluptas. Provident temporibus
        voluptatibus beatae?
      </p>
      <div className="">
        <ul>
           <li><img src={dataOrcamento?.imagem} alt="Imagem Pizza" /></li>
          <li>{dataOrcamento?.nome}</li>
          <li>{dataOrcamento?.preco}</li>
          <li>{dataOrcamento?.descricao}</li>
         
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
           <select  name="Unidades" value={unidades} onChange={(e)=> setUnidades(e.target.value)} >
          <option value="">Selecione</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select name="adionais" value={adicionais} onChange={(e)=> setAdicionais(e.target.value)}  >
          <option value="">Selecione</option>
          <option value="Salame">Salame</option>
          <option value="Cheddar">Cheddar</option>
          <option value="Catupiry">Catupiry</option>
        </select>
         <input type="text" name="precoTotal" value={precoTotal} onChange={(e)=> setPrecoTotal(e.target.value)}  disabled/>
     
        {/* <Link to={"/Identificação/${}"} type="submit">
          Prosseguir
        </Link> */}

        <button type="submit">Prosseguir</button>
      </form>
    </section>
  );
}

export default Orçamento;
