import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import MadeByHumans from "@/components/MadeByHumans";

const TermosUso = () => {
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
              className="pulse-chip bg-pulse-950 mb-6 sm:mb-10 opacity-0 animate-on-scroll"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-white">Termos de Uso</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-10 opacity-0 animate-on-scroll"
              style={{ animationDelay: "0.3s" }}
            >
              Termos de Uso
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-lg opacity-0 animate-on-scroll" style={{ animationDelay: "0.5s" }}>
              <div className="prose prose-lg max-w-none">
                <div className="text-center mb-8 opacity-0 fade-in-element" style={{ animationDelay: '0.6s' }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Totel Tecnologia do Brasil LTDA</h2>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">TERMOS DE USO</h3>
                </div>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.7s' }}>
                  Estes são os Termos e Condições de Uso destinados a funcionalidades de relacionamento com os Usuários, mantido e disponibilizado para parceiros (“Parceiros”) pela TOTEL TECNOLOGIA DO BRASIL, ora TOTEL/Prestadora, pessoa jurídica de direito privado, inscrita no Cadastro Nacional de Pessoas Jurídicas (“CNPJ/MF”) sob o n. 23.214.891/0001-84, com sede à Avenida Gutemberg, 430, CEP: 14810-180, Araraquara/SP.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.75s' }}>
                  Tendo em vista o compromisso assumido em buscar qualidade e segurança em todas as operações realizadas por meio do Aplicativo, desenvolvemos cuidadosamente o presente Termos e Condições de Uso (“Termo”) para que você (doravante “Usuário”) tenha conhecimento das condições gerais de uso deste.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.8s' }}>
                  O conteúdo trazido deve ser analisado conjuntamente com o disposto em nossa Política de Privacidade.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.85s' }}>
                  Ao prosseguir com o acesso ao sistema, você estará expressamente concordando com o conteúdo deste Termos de Uso, que representa um contrato entre você, a TOTEL e o parceiro deste aplicativo, e concorda em se sujeitar às regras e condições para ter acesso ao Aplicativo.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.9s' }}>
                  O acesso ao Aplicativo implica na total compreensão, aceitação, legitimidade e vinculação a destes Termos de Uso, representando desta maneira uma relação equilibrada entre o Aplicativo e os Usuários, que aderem aos Serviços e a estes Termos de Uso espontaneamente.
                </p>

                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '0.95s' }}>
                  Leia atentamente as condições abaixo estabelecidas para que você possa se utilizar de todas as funcionalidades, obtendo assim a melhor experiência de uso. Ciente que os Termos de Uso representam o integral acordo entre você e o Sistema. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-lo, como também, não realizar o cadastro.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Atualizações e Aceite</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  A TOTEL poderá alterar os Termos a qualquer momento, sendo feita a postagem da versão atualizada dos Termos neste local, de modo que, se você continuar a acessar ou usar os Serviços após essa postagem, representa seu consentimento em vincular-se aos Termos alterados. Recomendamos, assim, que os Termos de Uso sejam verificados periodicamente pelo Usuário, de modo a garantir sua ciência acerca de toda e qualquer alteração eventualmente realizada neste documento, tendo como base a data de atualização indicada ao seu término.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Termo de Aceite</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Ao acessar o aplicativo em qualquer menu que peça para fazer o cadastro, o usuário deve ler o presente Termo e manifestar concordância por meio do botão disponibilizado. Tal ato demonstra aceitação livre, expressa e informada, sem quaisquer reservas. Caso não concorde, abstenha-se de realizar cadastro e uso.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Após o cadastramento, o usuário terá acesso a todas as funcionalidades disponibilizadas. O acesso é livre a todos, mas menores de 18 anos devem estar assistidos/representados. Benefícios podem variar conforme idade e regulamento.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Condições de Acesso e Uso do Aplicativo</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  O usuário é responsável por fornecer dados verdadeiros no cadastro, assumindo total responsabilidade civil e criminal. A TOTEL pode validar a identidade/idade, solicitar documentos, recusar/cancelar solicitações, ou tomar medidas se houver fraude ou descumprimento dos Termos. Sempre mantenha seus dados atualizados.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Novas funcionalidades podem ser adicionadas/removidas a qualquer momento, sujeitas aos Termos atuais sem necessidade de aviso prévio.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Utilização do Aplicativo</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  <li>Ser maior de 18 anos ou estar assistido/representado</li>
                  <li>Usar o app apenas para os fins permitidos nos termos</li>
                  <li>Autorizar o uso da sua imagem/dados para campanhas promocionais (quando aceitar participar delas)</li>
                  <li>Não transmitir conteúdos ilícitos, maliciosos ou vírus</li>
                  <li>Não violar privacidade, propriedade ou direitos de terceiros</li>
                  <li>Não permitir uso de terceiros não autorizados</li>
                  <li>Não tentar acesso ou uso não autorizado à ferramenta ou rede</li>
                  <li>Não usar a plataforma para construir serviços concorrentes</li>
                  <li>Ser responsável pelos dados e resultados do seu uso</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Isenções de Responsabilidade</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-sm sm:text-base opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  <li>Não nos responsabilizamos por falhas, indisponibilidade ou erros do aplicativo, nem pelas consequências de uso indevido por terceiros</li>
                  <li>Não respondemos por atos ilícitos, invasões de sistema, má-fé, ou prejuízos fora do controle da TOTEL</li>
                  <li>A TOTEL pode excluir conteúdo de usuários/terceiros a qualquer momento, sem ressarcimento</li>
                  <li>O usuário é responsável por suas credenciais e por eventuais compras ou acessos indevidos</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Hospedagem dos Dados</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Os dados são hospedados no servidor AMAZON AWS SERVICOS BRASIL LTDA, sob responsabilidade solidária e compartilhada de informações.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Propriedade Intelectual</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Todo o conteúdo apresentado pelo app é de propriedade da TOTEL ou parceiros, protegido por leis e tratados internacionais. Marcas, nomes e logotipos exibidos pertencem à Prestadora ou terceiro autorizado; seu uso não autoriza citação ou reutilização sem permissão formal.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Exclusão da Conta</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  O usuário pode excluir totalmente sua conta a qualquer momento. Sua inscrição em eventos internos será removida, exceto se ações já tiverem sido tomadas (ex: envio de email ou impressão).
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Comunicação com a TOTEL</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Todas as comunicações do usuário devem ser feitas pelos canais oficiais da Parceira. Comunicações recebidas no contato cadastrado são consideradas válidas, assim como as enviadas pelo usuário.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Término do Acesso</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  O acesso ao app é por prazo indeterminado, podendo ser encerrado a qualquer momento pela TOTEL ou Parceira, sem necessidade de aviso prévio, exceto as obrigações contratuais já assumidas.
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-12 opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>Disposições Finais</h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  A relação é regida apenas pelas leis brasileiras. Caso qualquer disposição destes Termos seja declarada nula, as demais permanecem válidas. Falha da TOTEL em exigir cumprimento de direitos não constitui renúncia. Eventuais disputas serão resolvidas no foro do domicílio do usuário no Brasil.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Estes Termos não criam vínculo societário, mandato, franquia ou relação empregatícia. Representam o acordo completo sobre uso do aplicativo e podem ser alterados a qualquer momento pela TOTEL, exceto quando proibido por lei.
                </p>

                <p className="text-gray-600 text-sm opacity-0 fade-in-element" style={{ animationDelay: '1s' }}>
                  Última atualização: {new Date().toLocaleDateString()}
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

export default TermosUso;

