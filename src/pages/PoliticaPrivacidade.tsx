import styles from "../styles/PoliticaPrivacidade.module.css";

function PoliticaPrivacidade() {
  return (
    <section className={styles.politicaContent}>
      <h2>Coleta de Informações</h2>
      <p>Ao utilizar nosso e-commerce, poderemos coletar os seguintes dados:</p>
      <ul>
        <li>
          <strong>Dados pessoais:</strong> nome, e-mail, telefone e endereço de
          entrega.
        </li>
        <li>
          <strong>Dados de pagamento: </strong>processados por meio de parceiros
          (como Stripe, PayPal ou instituições bancárias), não sendo armazenados
          diretamente por nós.
        </li>
        <li>
          <strong>Dados de navegação:</strong> como cookies, endereço IP, tipo
          de dispositivo e páginas acessadas, para melhorar sua experiência.
        </li>
      </ul>

      <h2>Uso das Informações</h2>
      <p>As informações coletadas são utilizadas para:</p>
      <ul>
        <li>Processar e entregar seus pedidos;</li>
        <li>Enviar confirmações, notas fiscais e atualizações do pedido;</li>
        <li>Melhorar a navegação no site e personalizar a experiência;</li>
        <li>Entrar em contato em caso de dúvidas ou suporte;</li>
        <li>Divulgar promoções e novidades, quando autorizado.</li>
      </ul>

      <h2>Compartilhamento de Informações</h2>
      <p>
        A La Pizza <strong>não vende nem aluga seus dados pessoais.</strong>
      </p>
      <p>Podemos compartilhar informações apenas com:</p>
      <ul>
        <li>
          Parceiros logísticos (entregadores e transportadoras) para a entrega
          dos pedidos;
        </li>
        <li>
          Processadores de pagamento, responsáveis por garantir transações
          seguras;;
        </li>
        <li>Autoridades legais, caso haja obrigação por lei.</li>
      </ul>

      <h2>Armazenamento e Segurança</h2>
      <ul>
        <li>
          Utilizamos medidas de segurança para proteger suas informações contra
          acessos não autorizados.
        </li>
        <li>Os dados são armazenados em servidores seguros.</li>
        <li>
          Você pode solicitar a exclusão ou alteração de seus dados a qualquer
          momento.
        </li>
      </ul>

      <h2>Cookies</h2>
      <p>
        Nosso site utiliza <strong>cookies</strong> para:
      </p>
      <ul>
        <li>Melhorar a usabilidade;</li>
        <li>Memorizar preferências de navegação;</li>
        <li>
          Oferecer recomendações personalizadas. Você pode desativar os cookies
          no navegador, mas algumas funcionalidades podem ser afetadas.
        </li>
      </ul>

      <h2>Direitos do Usuário</h2>
      <p>
        De acordo com a{" "}
        <strong>
          {" "}
          Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)
        </strong>
        , você tem direito de:
      </p>
      <ul>
        <li>Solicitar acesso aos seus dados;</li>
        <li>Corrigir informações incorretas;</li>
        <li>Solicitar a exclusão de seus dados pessoais;</li>
        <li>Revogar consentimentos dados anteriormente.</li>
      </ul>

      <h2>Alterações desta Política</h2>
      <p>
        A La Pizza pode atualizar esta Política de Privacidade periodicamente.
        Sempre que houver alterações, a nova versão estará disponível em nosso
        site.
      </p>

      <h2>Contato</h2>
      <p>📧 [seuemail@lapizza.com ]</p>
      <p>📞 [11111]</p>
    </section>
  );
}

export default PoliticaPrivacidade;
