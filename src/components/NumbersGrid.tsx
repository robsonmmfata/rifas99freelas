
import React, { useState } from 'react';
import { useRaffle } from '../contexts/RaffleContext';

const NumbersGrid = () => {
  const [soldNumbers] = useState<number[]>([15, 23, 45, 67, 89, 102, 156, 234, 345, 456]);
  const { selectedNumbers, toggleNumber } = useRaffle();

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 500; i++) {
      const isSold = soldNumbers.includes(i);
      const isSelected = selectedNumbers.includes(i);
      
      numbers.push(
        <button
          key={i}
          onClick={() => !isSold && toggleNumber(i)}
          disabled={isSold}
          className={`w-12 h-12 text-xs font-semibold rounded border transition-all ${
            isSold
              ? 'bg-red-500 text-white border-red-500 cursor-not-allowed'
              : isSelected
              ? 'bg-green-500 text-white border-green-500 shadow-lg'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400'
          }`}
        >
          {i.toString().padStart(3, '0')}
        </button>
      );
    }
    return numbers;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Números Disponíveis</h3>
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
            <span>Disponível</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Selecionado</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Vendido</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-10 gap-1 max-h-96 overflow-y-auto p-2 bg-gray-50 rounded">
        {renderNumbers()}
      </div>
      
      {selectedNumbers.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
          <p className="text-green-700 font-semibold">
            {selectedNumbers.length} números selecionados
          </p>
          <p className="text-sm text-green-600">
            Total: R$ {(selectedNumbers.length * 0.02).toFixed(2)}
          </p>
          <div className="mt-2 text-xs text-green-600 max-h-16 overflow-y-auto">
            <strong>Números:</strong> {selectedNumbers.sort((a, b) => a - b).join(', ')}
          </div>
        </div>
      )}
    </div>
  );
};

export default NumbersGrid;
