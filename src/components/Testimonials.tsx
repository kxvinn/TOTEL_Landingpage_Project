
import React, { useRef } from "react";
import { Quote } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
  logo: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Aplicativo prático e funcional com inúmeras soluções para as Associações Comerciais, além do apoio técnico impecável.",
  author: "Ivan Fernando Coelho",
  role: "Coordenador de Marketing | Associação Comercial e Industrial de Santo André",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png",
  logo: "/santoandrelogo.webp"
}, {
  content: "Ajudou muito a interação entre consumidor e comércio, garantindo velocidade e segurança nas informações.",
  author: "Alessandro dos Santos",
  role: "Presidente | Associação Comercial e Empresarial de Itápolis",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png",
  logo: "/itapolislogo.webp"
}, {
  content: "Procurava algo inovador e criativo para nossa Associação e o App da Totel nos proporciona isto além da evolução constante com os inúmeros recursos existentes.",
  author: "João Rodrigues",
  role: "Presidente da Associação Comercial e Industrial de Jaguariúna",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png",
  logo: "/jagualogo.webp"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
  logo
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      {/* Logo com ícone de aspas */}
      <div className="absolute top-4 right-4 z-20">
        <div className="relative">
          <img 
            src={logo} 
            alt={`Logo ${author}`}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-md">
            <Quote className="w-3 h-3 text-green-600" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}> {/* Reduced from py-20 */}
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip bg-pulse-950">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-900 text-white mr-2">04</span>
            <span className="text-white">Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">Confira o depoimento dos nossos parceiros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient}
              backgroundImage={testimonial.backgroundImage}
              logo={testimonial.logo} 
            />
          ))}
        </div>
      </div>
    </section>;
};

export default Testimonials;
