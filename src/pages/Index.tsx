
import React from 'react';
import Header from '../components/Header';
import RaffleCard from '../components/RaffleCard';
import PromotionSection from '../components/PromotionSection';
import NumberSelector from '../components/NumberSelector';
import NumbersGrid from '../components/NumbersGrid';
import WinnersList from '../components/WinnersList';
import SocialLinks from '../components/SocialLinks';
import Cart from '../components/Cart';

const Index = () => {
  return (
<div className="min-h-screen bg-gray-50 pt-20">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
<RaffleCard
  title="XRE 300 RARIDADE"
  subtitle="PARTICIPE E CONCORRA!"
  price="R$ 0,20"
  image="/xre300.jpeg"
/>
            
            <div className="mt-6">
              <PromotionSection />
            </div>
            
            <div className="mt-6">
              <NumberSelector />
            </div>
          </div>
          
          <div>
            <NumbersGrid />
          </div>
        </div>
        
        <div className="mt-8">
          <WinnersList />
        </div>
        
        <SocialLinks />
      </div>
      
      <Cart />
      
      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 mt-8">
        <p className="text-sm">© 2025 Ofichina - Todos os direitos reservados Por Robson Alex</p>
      </footer>
    </div>
  );
};

export default Index;
