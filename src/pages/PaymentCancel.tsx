
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-md text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Pagamento Cancelado
          </h1>
          
          <p className="text-gray-600 mb-6">
            Sua compra foi cancelada. Não se preocupe, você pode tentar novamente a qualquer momento.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Não desista!</h3>
            <p className="text-sm text-blue-700">
              Seus números selecionados ainda estão disponíveis. 
              Volte e complete sua participação na rifa.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Tentar Novamente
            </Link>
            <Link
              to="/contato"
              className="block w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Precisa de Ajuda?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
