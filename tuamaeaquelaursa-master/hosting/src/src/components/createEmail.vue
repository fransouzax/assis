<template>
  <div class="landing-page">
    <div class="info-guide">
      <div id="features" class="features">
        <h2 class="features-h2">Como funciona</h2>
        <div class="features-card">
          <div class="features-img">
            <div class="features-img-container brown"><img src="@/assets/tmau1.png"></div>
          </div>
          <div class="features-description">
            <h3 class="features-card-h3 c-dark-brown">1. Tua mãe, aquela ursa recebe seus emails</h3>
            <p>Você poderá acessar todos os emails recebidos pelo seu email {{_hosting.suffix}}. Não é preciso criar o email antes, tua mãe, aquela ursa aceita tudo e filtra o que pertence ao seu endereço temporário</p>
          </div>
        </div>
        <div class="features-card">
          <div class="features-description">
            <h3 class="features-card-h3 c-blue">2. Acesse seu email {{_hosting.suffix.replace(/\.com.*/, '')}}</h3>
            <p>É só preencher o endereço no campo acima, ou você pode acessar diretamente pela URL https://{{_hosting.suffix.replace('@', '')}}/nome-do-seu-email</p>
          </div>
          <div class="features-img">
            <div class="features-img-container blue"><img src="@/assets/tmau2.png"></div>
          </div>
        </div>
        <div class="features-card">
          <div class="features-img">
            <div class="features-img-container pink"><img src="@/assets/tmau3.png"></div>
          </div>
          <div class="features-description">
            <h3 class="features-card-h3 c-pink">3. Destruimos tudo para você</h3>
            <p>Após algumas horas, todos os emails recebidos por Tua mãe, aquela ursa são destruídos, sem nenhum resquício. Assim ninguém ficará sabendo das coisas que Tua mãe, aquela ursa recebeu no passado</p>
          </div>
        </div>
      </div>

      <div id="motives" class="motives">
        <h2 class="motives-h2">Por que?</h2>

        <div class="motives-list" v-if="isHovering">
          <div class="motives-card" @mouseover="isHovering = [true, false, false]" @mouseout="isHovering[0] = false" :class="{active: isHovering[0]}">
            <div class="motives-card-title">Evite SPAM</div>
            <div class="motives-card-description">Precisa se cadastrar em um site ou baixar um ebook que requer email? Evite SPAM, utilize um email descartável. Ele dura algumas horas e você poderá receber o email de confirmação de cadastro/link de download.</div>
          </div>
          <div class="motives-card" @mouseover="isHovering = [false, true, false]" @mouseout="isHovering[1] = false" :class="{active: isHovering[1]}">
            <div class="motives-card-title">Irrite Marketeiros</div>
            <div class="motives-card-description">Imagina só a reação do pessoal do marketing quando perceber que estão mandando emails para ”tua mãe, aquela ursa”. Bom, eles merecem, ninguém gosta de SPAM.</div>
          </div>
          <div class="motives-card" @mouseover="isHovering = [false, false, true]" @mouseout="isHovering[2] = false" :class="{active: isHovering[2]}">
            <div class="motives-card-title">Emails autodestrutivos</div>
            <div class="motives-card-description">Depois de algumas horas, o endereço de email e todos os emails que você recebeu vão pelos ares. Não se preocupe, utilizamos ingredientes orgânicos e todos os emails são reciclados.</div>
          </div>
        </div>
      </div>

      <div id="blog" class="blog">
        <h2 class="blog-h2">Blog</h2>

        <div class="blog-container">
          <div class="blog-content">
            <div class="blog-content-text" :class="{'d-none': activeBlogPost !== 1}">
              <div class="blog-h3">Evite SPAM</div>
              <p>Você já pensou em usar uma caixa de email temporária para proteger sua privacidade digital? Se você quer ter maior controle sobre o que é compartilhado e principalmente e com quem então uma caixa de email temporária é a solução certa para você!</p>
              <p>Uma caixa de email temporária oferece uma série de vantagens, incluindo maior segurança, menor risco de violação de dados, sem comprometer a conta principal, sem SPAM e sem política de retenção de dados. Além disso, é muito fácil de usar e você pode criar uma conta em segundos.</p>
              <p>Embora não seja uma prática adequada para todas as situações, ela pode ser útil se você precisar se registrar em um site ou serviço que exige um endereço de email válido. Assim, você pode usar o serviço sem expor sua conta principal.</p>
              <p>Portanto, se você estiver à procura de uma maneira fácil e segura de proteger sua privacidade digital, considere o uso de uma caixa de email temporária. Ela é uma excelente solução para quem deseja ter maior controle sobre o que é compartilhado e principalmente com quem.</p>
              <p>Uma outra prática muito comum são as criações de emails temporários para realização de testes em sistemas, permitindo assim criar cenários de inserção de novos usuários para aquele sistema e acompanhar uma jornada desde o inicio.
              <p>Além disso, é importante lembrar que a caixa de email temporária não deve ser usada para fins críticos, como o acesso a contas bancárias ou informações confidenciais. Isso porque, como o nome sugere, ela é temporária e não é projetada para uso a longo prazo.</p>
              <p>É importante lembrar que, apesar de as caixas de email temporárias oferecerem proteção extra, elas não garantem a segurança total. Por isso, é importante que você tome medidas adicionais para garantir a segurança de suas informações pessoais, como o uso de senhas seguras e o compartilhamento de informações confidenciais somente com quem você confia. Por meio dessas medidas, você pode ter a certeza de que suas informações estão seguras online.</p>
              <p>Mantenha o spam longe de seu e-mail e fique seguro, utilize um endereço de e-mail descartável anônimo! Proteja o seu endereço de e-mail pessoal de abusos online como spam, bots, phishing.</p>
              <p><b>Fique protegido. Sempre.</b></p>
              <p class="blog-content-footer">Publicado em 7 de abril de 2023</p>
            </div>
            <div class="blog-content-text" :class="{'d-none': activeBlogPost !== 2}">
              <div class="blog-h3">Vazamentos de Dados: Um Risco Crescente</div>
              <p>Os vazamentos de dados se tornaram uma preocupação crescente na era digital, com empresas e indivíduos cada vez mais vulneráveis a ataques cibernéticos. Esses incidentes não só expõem informações confidenciais, mas também afetam a confiança dos usuários nas organizações afetadas. Este artigo examinará os riscos associados aos vazamentos de dados, suas consequências e as medidas que podem ser adotadas para mitigar tais ameaças.</p>
              <p>Riscos e ameaças<br />Vazamentos de dados podem ocorrer de várias maneiras, incluindo ataques externos, erros humanos e falhas de segurança. Entre os riscos associados, destacam-se:</p>
              <p>a) Roubo de identidade: Com dados pessoais e financeiros expostos, os criminosos podem assumir a identidade de um indivíduo e cometer fraudes.</p>
              <p>b) Espionagem corporativa: Informações confidenciais sobre empresas e seus negócios podem ser usadas para vantagem competitiva por concorrentes.</p>
              <p>c) Chantagem e extorsão: Criminosos podem exigir pagamento para não divulgar informações sensíveis ou restaurar o acesso a sistemas comprometidos.</p>
              <p>d) Danos à reputação: Vazamentos de dados podem prejudicar a confiança dos consumidores e parceiros de negócios, levando a perdas financeiras e dificuldades em atrair novos clientes.</p>
              <p>Consequências legais e regulatórias<br />Governos e órgãos reguladores ao redor do mundo têm implementado políticas e leis mais rígidas para proteger a privacidade dos dados e responsabilizar as empresas pelos vazamentos. As consequências legais podem incluir multas, sanções e ações judiciais movidas por clientes afetados.</p>
              <p>Medidas de prevenção e mitigação<br />Para reduzir o risco de vazamentos de dados, empresas e indivíduos devem adotar medidas eficazes de segurança da informação. Algumas dessas medidas incluem:</p>
              <p>a) Implementação de sistemas de segurança robustos: Firewalls, criptografia e sistemas de detecção de intrusão podem ajudar a proteger dados e impedir ataques.</p>
              <p>b) Educação e conscientização dos funcionários: Treinamento regular e atualizações sobre as melhores práticas de segurança ajudam a minimizar erros humanos.</p>
              <p>c) Políticas de gerenciamento de acesso: Controle de acesso a informações sensíveis e monitoramento de atividades suspeitas são essenciais para prevenir vazamentos.</p>
              <p>d) Atualização e manutenção de software: Manter sistemas operacionais e aplicativos atualizados ajuda a corrigir vulnerabilidades conhecidas e a prevenir ataques.</p>
              <p>e) Plano de resposta a incidentes: Um plano bem elaborado pode ajudar a identificar, conter e remediar rapidamente um vazamento de dados, minimizando os danos causados.</p>
              <p>Os vazamentos de dados representam uma ameaça real e crescente na era digital. Conscientizar-se dos riscos, implementar medidas de segurança adequadas e cumprir as regulamentações são passos fundamentais para proteger informações valiosas e preservar.</p>
              <p class="blog-content-footer">Publicado em 5 de abril de 2023</p>
            </div>
            <div class="blog-content-text" :class="{'d-none': activeBlogPost !== 3}">
              <div class="blog-h3">A Importância de Emails Temporários</div>
              <p>Nos dias de hoje, a segurança e a privacidade na internet são questões primordiais para os usuários. Com a crescente quantidade de informações e dados pessoais disponíveis online, é essencial encontrar maneiras de proteger a nossa identidade digital. Uma das ferramentas que pode ajudar nesse aspecto são os emails temporários. Estes serviços de email descartáveis oferecem uma alternativa para proteger a privacidade e segurança dos usuários. Neste texto, vamos explorar a importância de usar emails temporários em diversas situações.</p>
              <p>Prevenção de spam e newsletters indesejadas<br />Um dos principais benefícios dos emails temporários é a prevenção de spam e newsletters indesejadas. Ao utilizar um endereço de email descartável, os usuários podem evitar que suas caixas de entrada principais fiquem sobrecarregadas com mensagens não solicitadas. Quando o email temporário é usado para se inscrever em sites e serviços, todas as mensagens subsequentes são enviadas para esse endereço, poupando a caixa de entrada principal de emails indesejados.</p>
              <p>Proteção da privacidade<br />Outro ponto importante é a proteção da privacidade do usuário. Muitas vezes, ao nos inscrevermos em sites ou aplicativos, somos obrigados a fornecer um endereço de email. Porém, nem sempre é possível garantir a segurança das informações fornecidas. Utilizar um email temporário permite manter o endereço de email pessoal em sigilo, protegendo a privacidade e evitando que dados pessoais sejam compartilhados com terceiros.</p>
              <p>Testes de serviços e produtos<br />Muitas vezes, os usuários precisam testar serviços ou produtos online que exigem um endereço de email para acesso. Nesses casos, fornecer um email temporário pode ser uma opção útil e prática. Isso permite experimentar o serviço sem comprometer a segurança do endereço de email principal. Caso o usuário decida continuar utilizando o serviço após o período de teste, pode então fornecer o endereço de email pessoal.</p>
              <p>Redução do risco de ataques de phishing<br />Os emails temporários também ajudam a reduzir o risco de ataques de phishing. Essas tentativas de fraude ocorrem quando criminosos enviam mensagens falsas que se passam por comunicações legítimas, na tentativa de obter informações pessoais, como senhas e dados financeiros. Como os emails temporários são descartáveis e geralmente usados para fins específicos, fica mais fácil identificar tentativas de phishing e descartá-las.</p>
              <p>Em suma, o uso de emails temporários é uma prática eficiente e inteligente para proteger a privacidade e a segurança dos usuários na internet. Ao utilizar esses serviços, podemos nos resguardar de spam, newsletters indesejadas, tentativas de phishing e compartilhamento indevido de informações pessoais. A utilização desses endereços de email descartáveis contribui para uma experiência online mais segura e agradável.</p>
              <p class="blog-content-footer">Publicado em 3 de abril de 2023</p>
            </div>
          </div>
          <div class="blog-index">
            <div class="blog-h3">Menu</div>
            <div class="blog-index-list">
              <a href="javascript:void(0)" class="blog-index-link" v-on:click="activeBlogPost = 1">Evite SPAM</a>
              <a href="javascript:void(0)" class="blog-index-link" v-on:click="activeBlogPost = 2">Vazamentos de Dados: Um Risco Crescente</a>
              <a href="javascript:void(0)" class="blog-index-link" v-on:click="activeBlogPost = 3">A Importância de Emails Temporários</a>
            </div>
          </div>
        </div>
      </div>

      <!--
      <div class="share">
        <h3>Compartilhe tua mãe, aquela ursa, com seus amigos</h3>
        <div class="sharethis-inline-share-buttons"></div>
      </div>
      -->
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import GlobalEmailForm from '@/components/global/GlobalEmailForm.vue';

  export default {
    name: 'CreateEmail',
    components: { GlobalEmailForm },
    computed: mapState(['_hosting' ]),
    data() {
      return {
        isHovering: [true, false, false],
        activeBlogPost: 1
      };
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/scss/_color.scss';

  .landing-page {
    text-align: center;
    color: $light-black;
  }
  .d-none {
    display: none;
  }
  .c-dark-brown { color: $dark-brown; }
  .c-blue { color: #8AA7CC; }
  .c-pink { color: #FF0069; }

  .features {
    margin: auto;
    padding: 2rem;
    max-width: 90rem;
    &-h2 {
      font-size: 40px;
      margin-bottom: 3rem;
    }
    &-card {
      display: flex;
      flex-wrap: wrap;
      font-size: 18px;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-bottom: 3rem;
      &-h3 {
        font-size: 22px;
        margin-top: 1rem;
      }
    }
    &-description {
      flex: 0 0 50%;
      max-width: 50%;
      text-align: left;
      & h3, & p {
        margin-left: 3rem;
        margin-right: 3rem;
      }
      & p {
        margin-right: 10rem;
      }
    }
    &-img {
      flex: 0 0 50%;
      max-width: 50%;
      &-container {
        width: 50%;
        border-radius: 20px;
        &.brown { background-color: #C6B697; }
        &.blue { background-color: #CBE2FF; }
        &.pink { background-color: #FFBAD7; }
      }
      img {
        max-width: 172px;
      }
    }
    &-card:nth-child(even) &-img-container { margin-left: auto; }
    &-card:nth-child(odd) &-card-h3 { margin-left: 10rem; }
    &-card:nth-child(odd) &-description p {
      margin-right: 3rem;
      margin-left: 10rem;
    }
  }

  .motives {
    background-color: $light-gray;
    padding: 4rem 0;
    &-h2 {
      font-size: 40px;
      margin-top: 0;
    }
    &-list {
      display: flex;
      max-width: 90rem;
      margin: auto;
    }
    &-card {
      flex: 1;
      margin: 0 3rem;
      border: 1px solid #E0E0E0;
      border-radius: 15px;
      padding: 2rem;
      &-title {
        font-size: 22px;
        font-weight: 900;
        margin-bottom: 1rem;
      }
      &-description {
        font-size: 18px;
      }
      &:hover, &.active {
        background-color: white;
        box-shadow: 0 10px 30px #00000029;
      }
    }
  }

  .blog {
    padding: 4rem;
    &-h2 {
      font-size: 40px;
    }
    &-h3 {
      font-size: 26px;
      font-weight: 900;
      margin-bottom: 2rem;
    }
    &-container {
      display: flex;
      margin: auto;
      padding: 2rem;
      max-width: 90rem;
    }
    &-content {
      background-color: $light-gray;
      padding: 2.5rem 4rem;
      text-align: left;
      &-footer {
        text-align: right;
        margin-top: 4rem;
      }
    }
    &-index {
      flex: 0 0 30%;
      max-width: 30%;
      padding: 2.5rem 4rem;
      text-align: left;
      &-link {
        display: block;
        color: $dark-brown;
        font-size: 18px;
        margin-bottom: 1rem;
        text-decoration: none;
        &:hover {
          color: darken($dark-brown, 10%);
        }
        &:active {
          color: darken($dark-brown, 20%);
          transform: translateX(2px);
        }
      }
    }
  }

  @media only screen and (max-width:1000px) {
    .features {
      padding: 3rem 0 2rem 0;
      &-card {
        margin-bottom: 0;
        flex-direction: column-reverse;
        &:nth-child(even) {
          flex-direction: column;
        }
      }
      &-description &-card-h3 {
        margin: 0 !important;
        font-size: 19px;
      }
      &-img, &-description {
        max-width: 100%;
      }
      &-img {
        margin-bottom: 1rem;
        &-container {
          width: 100%;
          margin: 0;
        }
      }
      &-description {
        margin-bottom: 3rem;
        p {
          margin: 1rem 0 !important;
          font-size: 1rem;
        }
      }
    }
    .motives {
      padding: 2rem 0;
      &-list {
        display: block;
      }
      &-card {
        margin: 1rem;
      }
    }
    .blog {
      padding: 2rem 0 0 0;
      &-container {
        flex-direction: column-reverse;
        padding: 0;
      }
      &-content {
        padding: 1rem;
      }
      &-index {
        flex: 1;
        max-width: 100%;
        padding: 1rem;
      }
      &-index &-h3 {
        display: none;
      }
    }
  }
</style>

