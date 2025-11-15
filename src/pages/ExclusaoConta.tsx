import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import MadeByHumans from "@/components/MadeByHumans";

const ExclusaoConta = () => {
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
              <span className="text-white">Exclusão de Conta</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-10 opacity-0 animate-on-scroll"
              style={{ animationDelay: "0.3s" }}
            >
              Exclusão de Conta
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-lg opacity-0 animate-on-scroll" style={{ animationDelay: "0.5s" }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: "0.7s" }}>
                  Respeitamos seu direito à privacidade e oferecemos a opção de excluir sua conta a qualquer momento. 
                  Esta página explica o processo de exclusão e suas implicações.
                </p>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8 opacity-0 fade-in-element" style={{ animationDelay: "0.9s" }}>Como Excluir Sua Conta</h2>
                
                <div className="space-y-6">
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.1s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Acesse as Configurações</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Entre na sua conta e navegue até a seção de configurações do perfil.
                    </p>
                  </div>
                  
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.3s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Selecione Exclusão de Conta</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Localize a opção "Excluir Conta" nas configurações de privacidade.
                    </p>
                  </div>
                  
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.5s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Confirme a Exclusão</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Você será solicitado a confirmar sua decisão. Após a confirmação, sua conta será permanentemente excluída.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-yellow-50 border border-yellow-200 rounded-lg opacity-0 fade-in-element" style={{ animationDelay: "1s" }}>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">⚠️ Importante</h3>
                  <p className="text-yellow-800 leading-relaxed">
                    A exclusão da conta é permanente e irreversível. Todos os seus dados, histórico e informações 
                    associadas à conta serão permanentemente removidos e não poderão ser recuperados.
                  </p>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200 opacity-0 fade-in-element" style={{ animationDelay: "1.9s" }}>
                  <p className="text-gray-600 text-sm">
                    Se você tiver dúvidas sobre a exclusão da conta ou precisar de assistência, 
                    entre em contato conosco através do email: <a href="mailto:aristoteles@totel.com.br" className="text-pulse-950 hover:underline">aristoteles@totel.com.br</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MadeByHumans />
    </div>
  );
};

export default ExclusaoConta;

