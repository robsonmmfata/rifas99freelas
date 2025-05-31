
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-md text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Pagamento Realizado com Sucesso!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Parabéns! Sua participação na rifa foi confirmada. 
            Você receberá um e-mail com os detalhes da sua compra.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">Próximos passos:</h3>
            <ul className="text-sm text-green-700 text-left space-y-1">
              <li>• Verifique seu e-mail para confirmação</li>
              <li>• Acompanhe o sorteio na data marcada</li>
              <li>• Boa sorte! 🍀</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Voltar ao Início
            </Link>
            <Link
              to="/meus-numeros"
              className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Ver Meus Números
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
