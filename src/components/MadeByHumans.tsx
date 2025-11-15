import React from "react";

const Footer = () => {
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
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
            <a href="#" className="hover:underline hover:text-pulse-900">
              Recursos
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Sobre nós
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Campanhas
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Transparência
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Exclusão de Conta
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline hover:text-pulse-900">
              Termos de Uso
            </a>
          </div>
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
