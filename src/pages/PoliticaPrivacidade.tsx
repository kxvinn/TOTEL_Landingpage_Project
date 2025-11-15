import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import MadeByHumans from "@/components/MadeByHumans";

const PoliticaPrivacidade = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".animate-on-scroll, .fade-in-element");
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section 
        className="overflow-hidden relative bg-cover" 
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%', 
          padding: '180px 12px 140px'
        }}
      >
        <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-lg rounded-full"></div>
        
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div 
              className="pulse-chip bg-pulse-950 mb-6 sm:mb-10"
            >
              <span className="text-white">Política de Privacidade</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-10"
            >
              Política de Privacidade
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
              <div className="prose prose-lg max-w-none">
                {/* Cabeçalho */}
                <div className="text-center mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Totel Tecnologia do Brasil LTDA</h2>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">POLÍTICA DE PRIVACIDADE</h3>
                </div>

                {/* INTRODUÇÃO GERAL */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8">INTRODUÇÃO GERAL</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                  A TOTEL TECNOLOGIA DO BRASIL tem comprometimento com a sociedade e com os titulares no tratamento dos dados pessoais, aplicando nas suas atividades as melhores práticas de segurança e privacidade de dados.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  Pensando nisso, a TOTEL elaborou essa Política de Privacidade, com a finalidade de explicar para você quais dados pessoais serão coletados por meio do nosso aplicativo e justificar o motivo da coleta de tais dados, bem como a forma que eles serão tratados, expondo também a base legal para o tipo de tratamento realizado.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  Assim, aqui contém informações a respeito do modo como tratamos, total ou parcialmente, de forma automatizada ou não, os dados pessoais dos usuários que acessam nosso aplicativo.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  Esta Política de Privacidade foi elaborada em conformidade com a Lei Federal n. 12.965 de 23 de abril de 2014 (Marco Civil da Internet), com a Lei Federal n. 13.709, de 14 de agosto de 2018 (Lei de Proteção de Dados Pessoais).
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  Esta Política de Privacidade poderá ser atualizada em decorrência de eventual atualização normativa, razão pela qual se convida o usuário a consultar periodicamente esta seção.
                </p>

                {/* Direitos do usuário */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8 opacity-0 fade-in-element" >Direitos do usuário</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  O aplicativo se compromete a cumprir as normas previstas no LGPD, em respeito aos seguintes princípios:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base opacity-0 fade-in-element" >
                  <li>Os dados pessoais do usuário serão processados de forma lícita, leal e transparente (licitude, lealdade e transparência);</li>
                  <li>Os dados pessoais do usuário serão coletados apenas para finalidades determinadas, explícitas e legítimas, não podendo ser tratados posteriormente de uma forma incompatível com essas finalidades (limitação das finalidades);</li>
                  <li>Os dados pessoais do usuário serão coletados de forma adequada, pertinente e limitada às necessidades do objetivo para os quais eles são processados (minimização dos dados);</li>
                  <li>Os dados pessoais do usuário serão exatos e atualizados sempre que necessário, de maneira que os dados inexatos sejam apagados ou rectificados quando possível (exatidão);</li>
                  <li>Os dados pessoais do usuário serão conservados de uma forma que permita a identificação dos titulares dos dados apenas durante o período necessário para as finalidades para as quais são tratados (limitação da conservação);</li>
                  <li>Os dados pessoais do usuário serão tratados de forma segura, protegidos do tratamento não autorizado ou ilícito e contra a sua perda, destruição ou danificação acidental, adotando as medidas técnicas ou organizativas adequadas (integridade e confidencialidade).</li>
                </ul>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  O usuário do aplicativo possui os seguintes direitos, conferidos pela LGPD (Lei de Proteção de Dados Pessoais):
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base opacity-0 fade-in-element" >
                  <li><strong>Direito de confirmação e acesso:</strong> é o direito do usuário de obter do aplicativo a confirmação de que os dados pessoais que lhe digam respeito são ou não objeto de tratamento e, se for esse o caso, o direito de acessar os seus dados pessoais;</li>
                  <li><strong>Direito de retificação:</strong> é o direito do usuário de obter do aplicativo, sem demora injustificada, a retificação dos dados pessoais inexatos que lhe digam respeito;</li>
                  <li><strong>Direito à eliminação dos dados (direito ao esquecimento):</strong> é o direito do usuário de ter seus dados apagados do aplicativo;</li>
                  <li><strong>Direito à limitação do tratamento dos dados:</strong> é o direito do usuário de limitar o tratamento de seus dados pessoais, podendo obtê-la quando contesta a exatidão dos dados, quando o tratamento for ilícito, quando o aplicativo não precisar mais dos dados para as finalidades propostas e quando tiver se oposto ao tratamento dos dados e em caso de tratamento de dados desnecessários;</li>
                  <li><strong>Direito de oposição:</strong> é o direito do usuário de, a qualquer momento, se opor por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito, podendo se opor ainda ao uso de seus dados pessoais para definição de perfil de marketing (profiling);</li>
                  <li><strong>Direito de portabilidade dos dados:</strong> é o direito do usuário de receber os dados pessoais que lhe digam respeito e que tenha fornecido ao aplicativo, num formato estruturado, de uso corrente e de leitura automática, e o direito de transmitir esses dados a outro aplicativo;</li>
                  <li><strong>Direito de não ser submetido a decisões automatizadas:</strong> é o direito do usuário de não ficar sujeito a nenhuma decisão tomada exclusivamente com base no tratamento automatizado, incluindo a definição de perfis (profiling), que produza efeitos na sua esfera jurídica ou que o afete significativamente de forma similar.</li>
                </ul>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" >
                  O usuário poderá exercer os seus direitos por meio de comunicação escrita enviada ao aplicativo com o assunto "LGPD-", especificando:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base opacity-0 fade-in-element" >
                  <li>Nome completo ou razão social, número do CPF (Cadastro de Pessoas Físicas, da Receita Federal do Brasil) ou CNPJ (Cadastro Nacional de Pessoa Jurídica, da Receita Federal do Brasil) e endereço de e-mail do usuário e, se for o caso, do seu representante;</li>
                  <li>Direito que deseja exercer junto ao aplicativo;</li>
                  <li>Data do pedido e assinatura do usuário;</li>
                  <li>Todo documento que possa demonstrar ou justificar o exercício de seu direito.</li>
                </ul>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  O pedido deverá ser enviado ao e-mail: <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a>, ou por correio, ao seguinte endereço:
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  <strong>Totel Tecnologia do Brasil Ltda</strong><br />
                  Avenida Gutemberg, 430 - Araraquara/SP - CEP 14810-180.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  O usuário será informado em caso de retificação ou eliminação dos seus dados.
                </p>

                {/* Dever de não fornecer dados de terceiros */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Dever de não fornecer dados de terceiros</h2>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Durante a utilização do aplicativo, a fim de resguardar e de proteger os direitos de terceiros, o usuário do aplicativo deverá fornecer somente seus dados pessoais, e não os de terceiros.
                </p>

                {/* Informações coletadas */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Informações coletadas</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  A coleta de dados dos usuários se dará em conformidade com o disposto nesta Política de Privacidade e dependerá do consentimento do usuário, sendo este dispensável somente nas hipóteses previstas no art. 11, inciso II, da Lei de Proteção de Dados Pessoais.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >4.1. Tipos de dados coletados</h3>
                
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.1. Dados de identificação do usuário para realização de cadastro</h4>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  A utilização, pelo usuário, de determinadas funcionalidades do aplicativo dependerá de cadastro, sendo que, nestes casos, os seguintes dados do usuário serão coletados e armazenados:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base" >
                  <li>nome</li>
                  <li>data de nascimento</li>
                  <li>endereço de e-mail</li>
                  <li>endereço postal completo</li>
                  <li>detalhes de redes sociais</li>
                  <li>número de celular</li>
                  <li>número de CPF</li>
                  <li>gênero</li>
                  <li>foto</li>
                </ul>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.2. Dados informados no formulário de contato</h4>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  Os dados eventualmente informados pelo usuário que utilizar o formulário de contato disponibilizado no aplicativo, incluindo o teor da mensagem enviada, serão coletados e armazenados.
                </p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.3. Registros de acesso</h4>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  Em atendimento às disposições do art. 15, caput e parágrafos, da Lei Federal n. 12.965/2014 (Marco Civil da Internet), os registros de acesso e dados pessoais (somente quando necessário) do usuário serão coletados pelo aplicativo e transmitidos de forma segura e armazenados no sistema até que o usuário solicite por vontade própria a remoção dos dados — este processo pode ser realizado diretamente dentro do próprio aplicativo.
                </p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.4. Newsletter</h4>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  O endereço de e-mail cadastrado pelo usuário que optar por se inscrever em nossa Newsletter será coletado e armazenado até que o usuário solicite seu descadastro.
                </p>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.5. Dados sensíveis</h4>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Não serão coletados dados sensíveis dos usuários, assim entendidos aqueles definidos nos arts. 9º e 10 do LGPD e nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, dentre outros, não haverá coleta dos seguintes dados:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base" >
                  <li>dados que revelem a origem racial ou étnica, as opiniões políticas, as convicções religiosas ou filosóficas, ou a filiação sindical do usuário;</li>
                  <li>dados genéticos;</li>
                  <li>dados biométricos para identificar uma pessoa de forma inequívoca;</li>
                  <li>dados relativos à saúde do usuário;</li>
                  <li>dados relativos à vida sexual ou à orientação sexual do usuário;</li>
                  <li>dados relacionados a condenações penais ou a infrações ou com medidas de segurança conexas.</li>
                </ul>

                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 mt-4" >4.1.6. Coleta de dados não previstos expressamente</h4>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  Eventualmente, outros tipos de dados não previstos expressamente nesta Política de Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou, ainda, que a coleta seja permitida ou imposta por lei.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >4.2. Fundamento jurídico para o tratamento dos dados pessoais</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Ao utilizar os serviços do aplicativo, o usuário está consentindo com a presente Política de Privacidade.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O usuário tem o direito de retirar seu consentimento a qualquer momento, não comprometendo a licitude do tratamento de seus dados pessoais antes da retirada. A retirada do consentimento poderá ser feita pelo e-mail: <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a>, ou por correio enviado ao seguinte endereço:
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Avenida Gutemberg, 430 – Vila Xavier – Araraquara-SP - CEP 14810-180
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O consentimento dos relativamente ou absolutamente incapazes, especialmente de crianças menores de 16 (dezesseis) anos, apenas poderá ser feito, respectivamente, se devidamente assistidos ou representados.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O tratamento de dados pessoais sem o consentimento do usuário apenas será realizado em razão de interesse legítimo ou para as hipóteses previstas em lei, ou seja, dentre outras, as seguintes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base" >
                  <li>para o cumprimento de obrigação legal ou regulatória pelo controlador;</li>
                  <li>para a realização de estudos por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</li>
                  <li>quando necessário para a execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o usuário, a pedido do titular dos dados;</li>
                  <li>para o exercício regular de direitos em processo judicial, administrativo ou arbitral, esse último nos termos da Lei nº 9.307, de 23 de setembro de 1996 (Lei de Arbitragem);</li>
                  <li>para a proteção da vida ou da incolumidade física do titular dos dados ou de terceiro;</li>
                  <li>para a tutela da saúde, em procedimento realizado por profissionais da área da saúde ou por entidades sanitárias;</li>
                  <li>quando necessário para atender aos interesses legítimos do controlador ou de terceiro, exceto no caso de prevalecer em direitos e liberdades fundamentais do titular dos dados que exijam a proteção dos dados pessoais;</li>
                  <li>para a proteção do crédito, inclusive quanto ao disposto na legislação pertinente.</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >4.3. Finalidades do tratamento dos dados pessoais</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados pessoais do usuário coletados pelo aplicativo têm por finalidade facilitar, agilizar e cumprir os compromissos estabelecidos com o usuário e a fazer cumprir as solicitações realizadas por meio do preenchimento de formulários.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados pessoais poderão ser utilizados também com uma finalidade comercial, para personalizar o conteúdo oferecido ao usuário, bem como para dar subsídio ao aplicativo para a melhora da qualidade e funcionamento de seus serviços.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O aplicativo recolhe os dados do usuário para que seja realizada definição de perfis (profiling), ou seja, tratamento automatizado de dados pessoais que consiste em utilizar estes dados para avaliar certos aspectos pessoais do usuário, principalmente para analisar ou prever características relacionadas ao seu desempenho profissional, a sua situação econômica, saúde, preferências pessoais, interesses, fiabilidade, comportamento, localização ou deslocamento.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados de cadastro serão utilizados para permitir o acesso do usuário a determinados conteúdos do aplicativo, exclusivos para usuários cadastrados.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente ocorrerá mediante comunicação prévia ao usuário, sendo que, em qualquer caso, os direitos e obrigações aqui previstos permanecerão aplicáveis.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >4.4. Prazo de conservação dos dados pessoais</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados pessoais do usuário serão conservados por um período não superior ao exigido para cumprir os objetivos em razão dos quais eles são processados.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O período de conservação dos dados é definido de acordo com os seguintes critérios:
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados permanecerão gravados até que o próprio usuário acesse o aplicativo e exclua sua conta ou peça para que seja removido, através do email <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a>
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os dados pessoais dos usuários apenas poderão ser conservados após o término de seu tratamento nas seguintes hipóteses:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base" >
                  <li>para o cumprimento de obrigação legal ou regulatória pelo controlador;</li>
                  <li>para estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;</li>
                  <li>para a transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na legislação;</li>
                  <li>para uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.</li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >4.5. Destinatários e transferência dos dados pessoais</h3>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Os dados pessoais do usuário não serão compartilhados com terceiros. Serão, portanto, tratados apenas por este aplicativo.
                </p>

                {/* Do tratamento dos dados pessoais */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Do tratamento dos dados pessoais</h2>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >5.1. Do responsável pelo tratamento dos dados (data controller)</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O controlador, responsável pelo tratamento dos dados pessoais do usuário, é a pessoa física ou jurídica, a autoridade pública, a agência ou outro organismo que, individualmente ou em conjunto com outras, determina as finalidades e os meios de tratamento de dados pessoais.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Neste aplicativo, a empresa responsável pelo tratamento dos dados pessoais coletados é Totel Tecnologia do Brasil Ltda, representada por Aristóteles Oliveira de Melo, que poderá ser contactado pelo e-mail: <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a> ou no endereço:
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  Avenida Gutemberg, 430 – Vila Xavier – Araraquara-SP - CEP 14810-180
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  O responsável pelo tratamento dos dados se encarregará diretamente do tratamento dos dados pessoais do usuário.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >5.2. Da hospedagem dos dados</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  Ao se cadastrar, os dados informados pelo usuário serão hospedado no servidor AMAZON AWS SERVICOS BRASIL LTDA, pessoa jurídica, sob o CNPJ 23.412.247/0001-10, localizada a Avenida Presidente Juscelino Kubitschek, 2.041, Andar 18 e 19 Torre e CEP 04.543-000, Vila Nova Conceição, São Paulo-SP, sob responsabilidade solidária e compartilhamento de informações.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >5.3. Do encarregado de proteção de dados (data protection officer)</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O encarregado de proteção de dados ( data protection officer ) é o profissional encarregado de informar, aconselhar e controlar o responsável pelo tratamento dos dados, bem como os trabalhadores que tratem os dados, a respeito das obrigações do aplicativo nos termos do LGDP, da Lei de Proteção de Dados Pessoais e de outras disposições de proteção de dados presentes na legislação nacional e internacional, em cooperação com a autoridade de controle competente.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Neste aplicativo o encarregado de proteção de dados ( data protection officer ) é Aristóteles Oliveira de Melo , que poderá ser contactado pelo e-mail: <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a>.
                </p>

                {/* Segurança no tratamento dos dados pessoais do usuário */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Segurança no tratamento dos dados pessoais do usuário</h2>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O aplicativo se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Para a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos para os direitos e liberdades do usuário.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O aplicativo utiliza certificado SSL (Secure Socket Layer) que garante que os dados pessoais se transmitam de forma segura e confidencial, de maneira que a transmissão dos dados entre o servidor e o usuário, e em retroalimentação, ocorra de maneira totalmente cifrada ou encriptada.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  No entanto, o aplicativo se exime de responsabilidade por culpa exclusiva de terceiros, como em caso de ataque de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere seus dados a terceiro. O aplicativo se compromete, ainda, a comunicar o usuário em prazo adequado caso ocorra algum tipo de violação da segurança de seus dados pessoais que possa lhe causar um alto risco para seus direitos e liberdades pessoais.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  A violação de dados pessoais é uma violação de segurança que provoque, de modo acidental ou ilícito, a destruição, a perda, a alteração, a divulgação ou o acesso não autorizado a dados pessoais transmitidos, conservados ou sujeitos a qualquer outro tipo de tratamento.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Por fim, o aplicativo se compromete a tratar os dados pessoais do usuário com confidencialidade, dentro dos limites legais.
                </p>

                {/* Dados de navegação ( cookies ) */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Dados de navegação ( cookies )</h2>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Cookies são pequenos arquivos de texto enviados pelo aplicativo ao computador do usuário e que nele ficam armazenados, com informações relacionadas à navegação do aplicativo.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Por meio dos cookies, pequenas quantidades de informação são armazenadas pelo navegador do usuário para que nosso servidor possa lê-las posteriormente. Podem ser armazenados, por exemplo, dados sobre o dispositivo utilizado pelo usuário, bem como seu local e horário de acesso ao aplicativo.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os cookies não permitem que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do aplicativo.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  É importante ressaltar que nem todo cookie contém informações que permitam a identificação do usuário, sendo que determinados tipos de cookies podem ser empregados simplesmente para que o aplicativo seja carregado corretamente ou para que suas funcionalidades funcionem do modo esperado.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  As informações eventualmente armazenadas em cookies que permitam identificar um usuário são consideradas dados pessoais. Dessa forma, todas as regras previstas nesta Política de Privacidade também são aplicáveis.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >7.1. Cookies do aplicativo</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Os cookies do aplicativo são aqueles enviados ao computador ou dispositivo do usuário e administrador exclusivamente pelo aplicativo.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >7.2. Cookies de terceiros</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Alguns de nossos parceiros podem configurar cookies nos dispositivos dos usuários que acessam nosso aplicativo.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Estes cookies, em geral, visam possibilitar que nossos parceiros possam oferecer seu conteúdo e seus serviços ao usuário que acessa nosso aplicativo de forma personalizada, por meio da obtenção de dados de navegação extraídos a partir de sua interação com o aplicativo.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O usuário poderá obter mais informações sobre os cookies de terceiro e sobre a forma como os dados obtidos a partir dele são tratados, além de ter acesso à descrição dos cookies utilizados e de suas características.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed" >
                  As entidades encarregadas da coleta dos cookies poderão ceder as informações obtidas a terceiros.
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >7.3. Cookies de redes sociais</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O aplicativo utiliza plugins de redes sociais, que permitem acessá-las a partir do aplicativo. Assim, ao fazê-lo, os cookies utilizados por elas poderão ser armazenados no navegador do usuário.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Cada rede social possui sua própria política de privacidade e de proteção de dados pessoais, sendo as pessoas físicas ou jurídicas que as mantêm responsáveis pelos dados coletados e pelas práticas de privacidade adotadas.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O usuário pode pesquisar, junto às redes sociais, informações sobre como seus dados pessoais são tratados. A título informativo, disponibilizamos os seguintes links, a partir dos quais poderão ser consultadas as políticas de privacidade e de cookies adotadas por algumas das principais redes sociais:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base" >
                  <li>Facebook: <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://www.facebook.com/policies/cookies/</a></li>
                  <li>Twitter: <a href="https://twitter.com/pt/privacy" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://twitter.com/pt/privacy</a></li>
                  <li>Instagram: <a href="https://help.instagram.com/1896641480634370?ref=ig" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://help.instagram.com/1896641480634370?ref=ig</a></li>
                  <li>Youtube: <a href="https://policies.google.com/privacy?hl=pt-BR&gl=pt" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://policies.google.com/privacy?hl=pt-BR&gl=pt</a></li>
                  <li>LinkedIn: <a href="https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies</a></li>
                </ul>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-6" >7.4. Gestão dos cookies e configurações do navegador</h3>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O usuário poderá se opor ao registro de cookies pelo aplicativo, bastando que desative esta opção no seu próprio navegador ou aparelho.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e funcionalidades do aplicativo, comprometendo seu correto e esperado funcionamento. Outra consequência possível é remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  A seguir, são disponibilizados alguns links para as páginas de ajuda e suporte dos navegadores mais utilizados, que poderão ser acessadas pelo usuário interessado em obter mais informações sobre a gestão de cookies em seu navegador:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6 text-sm sm:text-base" >
                  <li>Internet Explorer: <a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                  <li>Safari: <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://support.apple.com/pt-br/guide/safari/sfri11471/mac</a></li>
                  <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt</a></li>
                  <li>Mozilla Firefox: <a href="https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam</a></li>
                  <li>Opera: <a href="https://www.opera.com/help/tutorials/security/privacy/" target="_blank" rel="noopener noreferrer" className="text-pulse-950 hover:underline">https://www.opera.com/help/tutorials/security/privacy/</a></li>
                </ul>

                {/* Reclamação a uma autoridade de controle */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Reclamação a uma autoridade de controle</h2>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Sem prejuízo de qualquer outra via de recurso administrativo ou judicial, todos os titulares de dados têm direito a apresentar reclamação a uma autoridade de controle. A reclamação poderá ser feita à autoridade da sede do aplicativo, do país de residência habitual do usuário, do seu local de trabalho ou do local onde foi alegadamente praticada a infração.
                </p>

                {/* Das alterações */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Das alterações</h2>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  O editor se reserva o direito de modificar, a qualquer momento e sem qualquer aviso prévio, o aplicativo e as presentes normas, especialmente para adaptá-las às evoluções do aplicativo Totel, seja pela disponibilização de novas funcionalidades, seja pela supressão ou modificação daquelas já existentes.
                </p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Dessa forma, convida-se o usuário a consultar periodicamente esta página para verificar as atualizações.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Ao utilizar o serviço após eventuais modificações, o usuário demonstra sua concordância com as novas normas. Caso discorde de alguma das modificações, deverá pedir, imediatamente, o cancelamento de sua conta e apresentar a sua ressalva ao serviço de atendimento, se assim o desejar.
                </p>

                {/* Do Direito aplicável e do foro */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 mt-8" >Do Direito aplicável e do foro</h2>
                <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed" >
                  Para a solução das controvérsias decorrentes do presente instrumento, será aplicado integralmente o Direito brasileiro.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed" >
                  Os eventuais litígios deverão ser apresentados no foro da comarca em que se encontra a sede do editor do aplicativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MadeByHumans />
    </div>
  );
};

export default PoliticaPrivacidade;

