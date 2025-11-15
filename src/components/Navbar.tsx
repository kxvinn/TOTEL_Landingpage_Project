
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

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
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link 
            to="/"
            className="flex items-center space-x-2"
            onClick={() => {
              scrollToTop();
            }}
            aria-label="Totel Logo"
          >
            <img 
              src="/logototel.webp" 
              alt="Totel Logo" 
              className="h-14 sm:h-20" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/"
              className="nav-link"
              onClick={() => {
                scrollToTop();
              }}
            >
              Início
            </Link>
            <a 
              href="#why-humanoid" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('why-humanoid');
              }}
            >
              Sobre
            </a>
            <a 
              href="#newsletter" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('newsletter');
              }}
            >
              Contato
            </a>
          </nav>

          {/* Mobile menu button - increased touch target */}
          <button 
            className="md:hidden text-gray-700 p-3 focus:outline-none z-[10000]" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation - improved for better touch experience */}
      {isMenuOpen && (
        <div className={cn(
          "fixed inset-0 z-[99999] bg-[url('/background-nav.webp')] bg-cover bg-center bg-white/95 flex flex-col pt-16 px-6 md:hidden transition-all duration-500 ease-in-out animate-fade-in",
        )}>
          {/* Botão de fechar no topo do menu */}
          <button
            className="absolute top-4 right-4 text-gray-700 p-2 focus:outline-none hover:bg-gray-100 rounded-md transition-colors z-[100000]"
            onClick={toggleMenu}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-8 items-center mt-8">
            <Link 
              to="/"
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
                document.body.style.overflow = '';
              }}
            >
              Início
            </Link>
            <a 
              href="#why-humanoid" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('why-humanoid');
              }}
            >
              Sobre
            </a>
            <a 
              href="#newsletter" 
              className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('newsletter');
              }}
            >
              Contato
            </a>
          </nav>
          {/* Logo Totel na parte de baixo do menu */}
          <div className="mt-auto flex flex-col items-center pb-8 pt-10">
            <img src="/logototel.webp" alt="Totel Logo" className="w-32 h-auto opacity-90" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
