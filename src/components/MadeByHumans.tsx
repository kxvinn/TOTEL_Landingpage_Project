import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Facebook } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = window.innerWidth < 768 ? 100 : 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = window.innerWidth < 768 ? 100 : 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };
  return (
    <footer className="w-full bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
          {/* Logo e informações da empresa */}
          <div className="text-center sm:text-left">
            <img
              src="/logototel.webp"
              alt="Logo da Totel"
              className="h-16 sm:h-24 w-auto mb-4 mx-auto sm:mx-0"
            />
            <p className="text-sm sm:text-base">
              Totel Tecnologia do Brasil LTDA<br />
              CNPJ 23.214.891/0001-84<br />
              Araraquara, São Paulo<br />
              <a
                href="mailto:aristoteles@totel.com.br"
                className="underline hover:text-pulse-900"
              >
                aristoteles@totel.com.br
              </a>
            </p>
          </div>

          {/* Links úteis */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start">
            {/* Lista Recursos */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-sm font-bold mb-3 text-white">Recursos</h3>
              <ul className="flex flex-col gap-2 text-sm items-center sm:items-start">
                <li>
                  <a 
                    href="#why-humanoid" 
                    className="hover:underline hover:text-pulse-900"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection('why-humanoid');
                    }}
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <Link to="/campanhas" className="hover:underline hover:text-pulse-900">
                    Campanhas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Lista Transparência */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-sm font-semibold mb-3 text-white">Transparência</h3>
              <ul className="flex flex-col gap-2 text-sm items-center sm:items-start">
                <li>
                  <Link to="/exclusao-conta" className="hover:underline hover:text-pulse-900">
                    Exclusão de Conta
                  </Link>
                </li>
                <li>
                  <Link to="/politica-privacidade" className="hover:underline hover:text-pulse-900">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link to="/termos-uso" className="hover:underline hover:text-pulse-900">
                    Termos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a
            href="https://github.com/toteltecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pulse-950 transition-colors duration-500"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.facebook.com/toteltecnologia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pulse-950 transition-colors duration-500"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Direitos autorais */}
        <div className="mt-8 text-center text-sm sm:text-base">
          <p className="italic font-light">
            Totel © 2023. Todos os direitos autorais reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
