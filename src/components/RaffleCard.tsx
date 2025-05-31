
import React from 'react';

interface RaffleCardProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
}

const RaffleCard = ({ title, subtitle, price, image }: RaffleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
          Adquira já!
        </div>
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm opacity-90">{subtitle}</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-2 rounded flex items-center space-x-1">
          <span className="text-xs">Meus títulos</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-sm text-gray-600 mb-2">Por apenas</p>
        <p className="text-2xl font-bold text-green-600">{price}</p>
      </div>
    </div>
  );
};

export default RaffleCard;
