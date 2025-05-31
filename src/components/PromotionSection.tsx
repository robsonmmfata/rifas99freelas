
import React from 'react';

const PromotionSection = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <div className="bg-gray-600 p-2 rounded">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="font-semibold text-gray-700">Promoção</span>
        <span className="text-sm text-gray-500">Compre mais barato!</span>
      </div>
      <div className="flex space-x-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
          500 POR R$ 10,00
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors">
          1000 POR R$ 20,00
        </button>
      </div>
    </div>
  );
};

export default PromotionSection;
