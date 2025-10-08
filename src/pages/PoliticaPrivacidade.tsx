
import styles from "../styles/PoliticaPrivacidade.module.css";
function PoliticaPrivacidade() {
  return (
    <section className={styles.PoliticaSection}>
        <div className={styles.navPoliticaPrivacidade}>
             <h1>POLÍTICA DE PRIVACIDADE</h1>
           </div>
<section className="flex flex-col items-center bg-black-900 pt-20 pb-20">
  <div className="flex flex-col gap-8 w-5/5 max-w-6xl ">
    
  

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white" >Política de Privacidade</h2>
      <p className="mt-2 text-gray-300">Ao utilizar nosso e-commerce, poderemos coletar os seguintes dados:</p>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li><strong>Dados pessoais:</strong> nome, e-mail, telefone e endereço de entrega.</li>
        <li><strong>Dados de pagamento:</strong> processados por meio de parceiros (Stripe, PayPal, instituições bancárias), não sendo armazenados diretamente por nós.</li>
        <li><strong>Dados de navegação:</strong> cookies, endereço IP, tipo de dispositivo e páginas acessadas.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Uso das Informações</h2>
      <p className="mt-2 text-gray-300">As informações coletadas são utilizadas para:</p>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li>Processar e entregar seus pedidos;</li>
        <li>Enviar confirmações, notas fiscais e atualizações do pedido;</li>
        <li>Melhorar a navegação no site e personalizar a experiência;</li>
        <li>Entrar em contato em caso de dúvidas ou suporte;</li>
        <li>Divulgar promoções e novidades, quando autorizado.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Compartilhamento de Informações</h2>
      <p className="mt-2 text-gray-300">A La Pizza <strong>não vende nem aluga seus dados pessoais.</strong></p>
      <p className="mt-2 text-gray-300">Podemos compartilhar informações apenas com:</p>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li>Parceiros logísticos (entregadores e transportadoras);</li>
        <li>Processadores de pagamento (transações seguras);</li>
        <li>Autoridades legais, quando exigido por lei.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Armazenamento e Segurança</h2>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li>Utilizamos medidas de segurança contra acessos não autorizados;</li>
        <li>Os dados são armazenados em servidores seguros;</li>
        <li>Você pode solicitar exclusão ou alteração dos seus dados.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Cookies</h2>
      <p className="mt-2 text-gray-300">Nosso site utiliza <strong>cookies</strong> para:</p>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li>Melhorar a usabilidade;</li>
        <li>Memorizar preferências de navegação;</li>
        <li>Oferecer recomendações personalizadas. Você pode desativar os cookies, mas algumas funções podem ser afetadas.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Direitos do Usuário</h2>
      <p className="mt-2 text-gray-300">
        Conforme a <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>, você tem direito de:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-200">
        <li>Solicitar acesso aos seus dados;</li>
        <li>Corrigir informações incorretas;</li>
        <li>Solicitar a exclusão de dados pessoais;</li>
        <li>Revogar consentimentos dados anteriormente.</li>
      </ul>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Alterações desta Política</h2>
      <p className="mt-2 text-gray-200">
        A La Pizza pode atualizar esta Política periodicamente. Sempre que houver alterações, a nova versão estará disponível no site.
      </p>
    </article>

    <article>
      <h2 className="text-2xl font-bold mt-4 text-white">Contato</h2>
      <ul className="list-disc list-inside mt-2 text-gray-300">
        <li>📧 pizzaria@lapizza.com</li>
        <li>📞 (11) 98147-4757</li>
      </ul>
    </article>

  </div>
</section>
</section>

  );
}

export default PoliticaPrivacidade;
