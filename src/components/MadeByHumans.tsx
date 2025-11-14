
import React from "react";
const MadeByHumans = () => {
  return <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
          backgroundImage: "url('/background-section3.png')"
        }}>
            <div className="flex flex-col items-center text-white">
              <img src="/logototel.webp" alt="Logo da Totel" className="h-16 sm:h-24 w-auto mb-4" />
              <span className="text-white text-lg font-medium text-center mt-2">
                Totel Tecnologia do Brasil LTDA<br />
                CNPJ 23.214.891/0001-84<br />
                Araraquara, São Paulo<br />
                <a href="mailto:aristoteles@totel.com.br" className="underline">aristoteles@totel.com.br</a>
              </span>
            </div>
            <div style={{
            overflow: "hidden",
            maxHeight: "80px",
            marginTop: "40px"
          }}>
              <div className="flex flex-wrap justify-center gap-4 text-white text-sm my-2">
                <a href="#" className="hover:underline">Recursos</a>
                <a href="#" className="hover:underline">Sobre nós</a>
                <a href="#" className="hover:underline">Campanhas</a>
                <a href="#" className="hover:underline">Transparência</a>
                <a href="#" className="hover:underline">Exclusão de Conta</a>
                <a href="#" className="hover:underline">Política de Privacidade</a>
                <a href="#" className="hover:underline">Termos de Uso</a>
              </div>
              <h2 className="sm:text-2xl font-playfair text-white italic mt-2 mx-0 font-thin text-center lg:text-3xl">
                Totel © 2023. Todos os direitos autorais reservados.
              </h2>
            </div>
            <div className=" bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default MadeByHumans;
