
import React from 'react';

interface Winner {
  id: string;
  name: string;
  numbers: number;
  status: 'available' | 'won';
}

const WinnersList = () => {
  const winners: Winner[] = [
    { id: '8612435', name: 'Ramon 🏆', numbers: 1000, status: 'won' },
    { id: '8447491', name: 'Disponível', numbers: 1110, status: 'available' },
    { id: '9589987', name: 'Joallson 🏆', numbers: 1000, status: 'won' },
    { id: '8758268', name: 'Ygor 🏆', numbers: 1000, status: 'won' },
    { id: '1641377', name: 'Elysio 🏆', numbers: 1000, status: 'won' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">Descrição/Regulamento</span>
      </div>
      
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-lg">🏆</span>
        <span className="font-semibold">Títulos Premiados</span>
        <span className="text-sm text-gray-500">instantâneos</span>
        <div className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
          10/14
        </div>
      </div>

      <div className="space-y-2">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className={`flex items-center justify-between p-3 rounded-lg border-2 ${
              winner.status === 'won'
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className={`px-2 py-1 rounded text-sm font-mono ${
                winner.status === 'won'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-400 text-white'
              }`}>
                {winner.id}
              </span>
              <span className="text-center text-sm font-semibold">
                {winner.numbers}
              </span>
            </div>
            <span className={`font-semibold ${
              winner.status === 'won' ? 'text-green-700' : 'text-gray-600'
            }`}>
              {winner.name}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-green-600 font-semibold hover:text-green-800 transition-colors">
        ↓ Mostrar Mais
      </button>
    </div>
  );
};

export default WinnersList;
