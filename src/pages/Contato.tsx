
import { useState } from 'react'
import contatoHook from '../hooks/contatoHook'
import type { Contact } from '../types'
function Contato() {
  const {criarContato} = contatoHook<Contact>('contatos',[])
  const [nome,setNome] = useState<string>('')
  const [sobrenome,setSobreNome] = useState<string>('')
  const [email,setEmail] = useState<string>('') 
  const [assunto,setAssunto] = useState<string>('')
  const [mensagem,setMensagem] = useState<string>('')

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault()

    criarContato(nome,sobrenome,email,assunto,mensagem)
    
  }
  return (
   <section className="bg-gray-400 pt-20 pb-20 h-screen" >
    <h1>Fale Conosco</h1>
  <p>
    Estamos aqui para ajudar! Se tiver dúvidas sobre nossos produtos, pedidos ou qualquer outro assunto, envie sua mensagem e nossa equipe entrará em contato o mais rápido possível.
  </p> <article className='bg-gray-700 w-4/4 max-w-2xl max-h-full h-143 pt-20 pb-20 flex justify-center items-center flex-col'>
 
  <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-100 ">
    <div className=" flex gap-8 w-full">
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className='border  w-full border-black border-x rounded-xl bg-gray-400 pl-6'
      />
      <input
        type="text"
        name="sobreNome"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobreNome(e.target.value)}
        required
         className='  w-full border-black border-x rounded-xl bg-gray-400'
      />
    </div>
    <input
      type="email"
      name="email"
      placeholder="E-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
       className='border-black border-x rounded-xl bg-gray-400'
    />
    <input
      type="text"
      name="assunto"
      placeholder="Assunto"
      value={assunto}
      onChange={(e) => setAssunto(e.target.value)}
      required
       className='border-black border-x rounded-xl bg-gray-400'
    />
    <textarea
      name="mensagem"
      placeholder="Escreva sua mensagem..."
      value={mensagem}
      onChange={(e) => setMensagem(e.target.value)}
      required
      rows={5}
     className='border-black border-x rounded-xl bg-gray-400'
    />
    <button type="submit">Enviar Mensagem</button>
  </form>

</article>
</section>

  )
}

export default Contato
