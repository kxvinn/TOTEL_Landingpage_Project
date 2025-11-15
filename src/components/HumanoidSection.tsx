
import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: window.innerWidth < 768 ? '75vh' : '60vh', // Maior altura no mobile
    maxHeight: window.innerWidth < 768 ? '700px' : '600px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  const thirdCardStyle = {
    height: window.innerWidth < 768 ? '85vh' : '70vh', // Muito maior altura para o último card
    maxHeight: window.innerWidth < 768 ? '800px' : '750px',
    borderRadius: '20px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate the scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">
              <div className="pulse-chip opacity-0 bg-pulse-950 animate-fade-in" style={{
                animationDelay: "0.1s"
              }}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-900 text-white mr-2">02</span>
                <span className="text-white">Resultados</span>
              </div>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-1 md:mb-2">
              Alcance resultados que importam
            </h2>
            <div className="max-w-lg">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-black font-bold leading-tight mb-4">
                Um aplicativo, diversas possibilidades
              </h3>
              <p>
                Explore um mundo de possibilidades com o nosso aplicativo versátil
              </p>
            </div>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl overflow-y-auto ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section1.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Experiência Única</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-3 sm:mb-4">
                    Experiência única<br/>Design personalizado
                  </h3>
                  <p className="text-base sm:text-base text-white leading-relaxed">Personalize cada aspecto do aplicativo para refletir sua identidade visual. Escolha cores, logotipo e marca para uma experiência exclusiva.</p>
                  <ul className="list-inside list-disc text-base sm:text-base mt-3 sm:mt-4 text-white space-y-1">
                    <li>Personalize cada detalhe do aplicativo</li>
                    <li>Construa sua imagem consistente e memorável</li>
                    <li>Sem necessidade de programação adicional</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl overflow-y-auto ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Escalabilidade Superior</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-3 sm:mb-4">
                    Escalabilidade superior<br/>Cresça conosco
                  </h3>
                  <p className="text-base sm:text-base text-white leading-relaxed">Nossa infraestrutura em nuvem é altamente escalável, permitindo um crescimento uniforme. Estamos prontos para evoluir junto com o seu sucesso.</p>
                  <ul className="list-inside list-disc text-base sm:text-base mt-3 sm:mt-4 text-white space-y-1">
                    <li>Infraestrutura em nuvem altamente eficiente</li>
                    <li>Cresça sem preocupações com custos adicionais</li>
                    <li>Alta velocidade e confiabilidade</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl overflow-y-auto ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...thirdCardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-pulse-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/background-section3.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              ></div>
              
              <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <span className="text-sm font-medium">Atualizações Periódicas</span>
                </div>
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center pt-8 sm:pt-10 md:pt-12">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-3">
                    Atualizações periódicas e melhorias contínuas
                  </h3>
                  <p className="text-white text-base leading-relaxed mb-3">
                    Priorizamos manter todos os aplicativos atualizados com as versões mais recentes. Investimos em um fluxo de melhoria contínua para manter todos os aplicativos na vanguarda.
                  </p>
                  <p className="text-white text-base leading-relaxed">
                    Oferecemos maior compatibilidade com Android e iOS, acompanhando as novidades do mercado e reduzindo os custos com time de tecnologia. Aproveite todas as melhorias e inovações, enquanto valorizamos seu feedback para melhorias contínuas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
