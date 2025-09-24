
import { useState } from 'react'
import styles from '../styles/Contato.module.css'
import contatoHook from '../hooks/contatoHook'
import type { Contato } from '../types'
function Contato() {
  const {criarContato} = contatoHook<Contato>('contatos',[])
  const [nome,setNome] = useState<string>('')
  const [sobrenome,setSobreNome] = useState<string>('')
  const [email,setEmail] = useState<string>('') 
  const [assunto,setAssunto] = useState<string>('')

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()

    criarContato(nome,sobrenome,email,assunto)
    
  }
  return (
    <section className={styles.contatoForm}>
      <h1>Fale Conosco</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem nisi quae animi, exercitationem ab nemo! Optio eum repellendus assumenda sint dolores perferendis dolore, est rerum nostrum esse? Facilis, dicta.</p>
       <form onSubmit={handleSubmit}>
        <input type="text" name='nome' value={nome} onChange={(e)=> setNome(e.target.value)}/>
        <input type="text" name='sobreNome' value={sobrenome} onChange={(e)=> setSobreNome(e.target.value)}/>
        <input type="text" name='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" name='assunto' value={assunto} onChange={(e)=> setAssunto(e.target.value)}/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contato
