import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import MadeByHumans from "@/components/MadeByHumans";

const Campanhas = () => {
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
              <span className="text-white">Campanhas</span>
            </div>
            
            <h1 
              className="section-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 sm:mb-10 opacity-0 animate-on-scroll"
              style={{ animationDelay: "0.3s" }}
            >
              Campanhas
            </h1>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 md:p-10 shadow-lg opacity-0 animate-on-scroll" style={{ animationDelay: "0.5s" }}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed opacity-0 fade-in-element" style={{ animationDelay: "0.7s" }}>
                  Nossa plataforma oferece uma variedade de campanhas para engajar seu público e fortalecer a presença da sua marca. 
                  Explore as diferentes opções disponíveis e descubra como podemos ajudar a alcançar seus objetivos de marketing.
                </p>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8 opacity-0 fade-in-element" style={{ animationDelay: "0.9s" }}>Tipos de Campanhas</h2>
                
                <div className="space-y-6">
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.1s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Campanhas de Engajamento</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Crie campanhas interativas que envolvem seu público e aumentam a participação. 
                      Ideal para aumentar o conhecimento da marca e construir relacionamentos duradouros.
                    </p>
                  </div>
                  
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.3s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Campanhas Promocionais</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Lance promoções especiais para estimular vendas e recompensar a lealdade dos seus clientes. 
                      Perfeito para períodos sazonais ou lançamentos de produtos.
                    </p>
                  </div>
                  
                  <div className="opacity-0 fade-in-element" style={{ animationDelay: "1.5s" }}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Campanhas de Fidelização</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Desenvolva programas de fidelidade que recompensam clientes frequentes e incentivam 
                      o retorno, criando uma base sólida de clientes fiéis.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200 opacity-0 fade-in-element" style={{ animationDelay: "1.7s" }}>
                  <p className="text-gray-600 text-sm">
                    Para mais informações sobre nossas campanhas, entre em contato conosco através do formulário de contato.
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

export default Campanhas;

