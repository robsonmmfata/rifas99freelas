
import React, { useState } from 'react';
import { useRaffle } from '../contexts/RaffleContext';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, totalCartPrice, totalCartItems } = useRaffle();
  const { toast } = useToast();
  const auth = useAuth();
  const navigate = useNavigate();

  const checkout = () => {
    if (!auth.user) {
      toast({
        title: "Login necessário",
        description: "Por favor, faça login ou cadastre-se para finalizar a compra.",
        variant: "destructive",
      });
      navigate('/register', { state: { redirectTo: '/cart' } });
      return;
    }

    if (cartItems.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione alguns números ao carrinho antes de finalizar a compra.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Redirecionando para pagamento...",
      description: `Total: R$ ${totalCartPrice.toFixed(2)} - ${totalCartItems} número(s)`,
    });
    
    // Aqui seria integrado com sistema de pagamento real
    setTimeout(() => {
      clearCart();
      setIsOpen(false);
      toast({
        title: "Pagamento simulado!",
        description: "Em um sistema real, você seria redirecionado para o gateway de pagamento.",
      });
    }, 2000);
  };

  const formatNumbers = (numbers: number[]) => {
    const sorted = numbers.sort((a, b) => a - b);
    if (sorted.length <= 5) {
      return sorted.join(', ');
    }
    return `${sorted.slice(0, 5).join(', ')} e mais ${sorted.length - 5}...`;
  };

  return (
    <>
      {/* Botão do carrinho fixo */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all z-50 animate-pulse-slow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m5.5-5v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6m8 0V9a1 1 0 00-1-1h-4a1 1 0 00-1 1v4.01" />
        </svg>
        {totalCartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {totalCartItems > 99 ? '99+' : totalCartItems}
          </span>
        )}
      </button>

      {/* Modal do carrinho */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-md max-h-[90vh] rounded-t-lg sm:rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b bg-green-50">
              <h2 className="text-lg font-semibold text-green-800">Meu Carrinho</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 max-h-60 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m5.5-5v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6m8 0V9a1 1 0 00-1-1h-4a1 1 0 00-1 1v4.01" />
                  </svg>
                  <p className="text-gray-500">Carrinho vazio</p>
                  <p className="text-sm text-gray-400 mt-1">Adicione números para começar</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
                      <div className="flex-1">
                        <p className="font-semibold text-green-700">
                          {item.numbers.length} número(s)
                        </p>
                        <p className="text-sm text-gray-600">
                          {formatNumbers(item.numbers)}
                        </p>
                        <p className="text-xs text-gray-400">
                          {item.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 ml-2">
                        <span className="font-semibold text-green-600">R$ {item.price.toFixed(2)}</span>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Itens no carrinho:</span>
                  <span className="font-semibold">{totalCartItems}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-green-600">
                    R$ {totalCartPrice.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2">
                  <button
                    onClick={checkout}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Finalizar Compra
                  </button>
                  <button
                    onClick={() => {
                      clearCart();
                      toast({
                        title: "Carrinho limpo",
                        description: "Todos os itens foram removidos do carrinho.",
                      });
                    }}
                    className="w-full bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                  >
                    Limpar Carrinho
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
