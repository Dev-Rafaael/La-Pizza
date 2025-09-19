import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../styles/Orçamento.module.css";
import React, { useState } from "react";
import orcamentoHook from "../hooks/orcamentoHook";
import type { Orcamento } from "../types";
function Orçamento() {
  const {orcamento,criarOrcamento} = orcamentoHook<Orcamento>('orcamento',[])
  const [pedacos,setPedacos]= useState<string>('')
  const [sabores,setSabores]= useState<string>('')
  const [preco,setPreco]= useState<string>('')
  const navigate = useNavigate()
  const {id}= useParams()
  const dataOrcamento = orcamento.find((value)=> value.id === Number(id))

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()

    criarOrcamento(pedacos,sabores,preco)
    alert('Prosseguindo...')
    navigate(`/Identificação/${dataOrcamento?.id}`)
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="pedacos" value={pedacos}  onChange={(e)=> setPedacos(e.target.value)} placeholder="Pedaços" />
        <input type="text" name="sabores" value={sabores} onChange={(e)=> setSabores(e.target.value)}  placeholder="Sabores"/>
        <input type="text" name="preco" value={preco} onChange={(e)=> setPreco(e.target.value)}  placeholder="Preço"/>

        {/* <Link to={"/Identificação/${}"} type="submit">
          Prosseguir
        </Link> */}

        <button type="submit">Prosseguir</button>
      </form>
    </section>
  );
}

export default Orçamento;
