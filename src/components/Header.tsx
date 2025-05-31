import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 sm:h-12 w-auto" />
        </Link>
        
        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-gray-200 hover:text-gray-100 transition-colors font-medium"
          >
            Início
          </Link>
          {auth.user && (
            <Link 
              to="/meus-numeros" 
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium"
            >
              Meus Números
            </Link>
          )}
          <Link 
            to="/resultados" 
            className="text-gray-200 hover:text-gray-100 transition-colors font-medium"
          >
            Resultados
          </Link>
          <Link 
            to="/contato" 
            className="text-gray-200 hover:text-gray-100 transition-colors font-medium"
          >
            Contato
          </Link>
          {!auth.user ? (
            <Link 
              to="/login" 
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Botão Menu Mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-200 hover:text-gray-100 transition-colors md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-600">
          <div className="flex flex-col space-y-2 mt-4">
            <Link 
              to="/" 
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            {auth.user && (
              <Link 
                to="/meus-numeros" 
                className="text-gray-200 hover:text-gray-100 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Meus Números
              </Link>
            )}
            <Link 
              to="/resultados" 
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </Link>
            <Link 
              to="/contato" 
              className="text-gray-200 hover:text-gray-100 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            {!auth.user ? (
              <Link 
                to="/login" 
                className="text-gray-200 hover:text-gray-100 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-gray-200 hover:text-gray-100 transition-colors font-medium bg-transparent border-none cursor-pointer py-2 text-left"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
