import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { useToast } from "@/hooks/use-toast";

interface RaffleContextType {
  selectedNumbers: number[];
  addToSelectedNumbers: (numbers: number[]) => void;
  removeFromSelectedNumbers: (numbers: number[]) => void;
  toggleNumber: (number: number) => void;
  clearSelectedNumbers: () => void;
  addToCart: () => void;
  cartItems: CartItem[];
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  totalCartPrice: number;
  totalCartItems: number;
}

interface CartItem {
  id: string;
  numbers: number[];
  price: number;
  timestamp: Date;
}

interface RaffleProviderProps {
  children: ReactNode;
}

interface RaffleContextType {
  selectedNumbers: number[];
  addToSelectedNumbers: (numbers: number[]) => void;
  removeFromSelectedNumbers: (numbers: number[]) => void;
  toggleNumber: (number: number) => void;
  clearSelectedNumbers: () => void;
  addToCart: () => void;
  cartItems: CartItem[];
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  totalCartPrice: number;
  totalCartItems: number;
}

interface CartItem {
  id: string;
  numbers: number[];
  price: number;
  timestamp: Date;
}

const RaffleContext = createContext<RaffleContextType | undefined>(undefined);

interface RaffleProviderProps {
  children: ReactNode;
}

export const RaffleProvider = ({ children }: RaffleProviderProps) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>(() => {
    const saved = localStorage.getItem("selectedNumbers");
    return saved ? JSON.parse(saved) : [];
  });

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("selectedNumbers", JSON.stringify(selectedNumbers));
  }, [selectedNumbers]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToSelectedNumbers = (numbers: number[]) => {
    setSelectedNumbers((prev) => {
      const newNumbers = numbers.filter((num) => !prev.includes(num));
      return [...prev, ...newNumbers];
    });
  };

  const removeFromSelectedNumbers = (numbers: number[]) => {
    setSelectedNumbers((prev) => prev.filter((num) => !numbers.includes(num)));
  };

  const toggleNumber = (number: number) => {
    setSelectedNumbers((prev) => {
      if (prev.includes(number)) {
        return prev.filter((n) => n !== number);
      } else {
        return [...prev, number];
      }
    });
  };

  const clearSelectedNumbers = () => {
    setSelectedNumbers([]);
  };

  const addToCart = () => {
    if (selectedNumbers.length === 0) {
      toast({
        title: "Nenhum número selecionado",
        description:
          "Selecione pelo menos um número para adicionar ao carrinho.",
        variant: "destructive",
      });
      return;
    }

    console.log(selectedNumbers);

    const newItem: CartItem = {
      id: Date.now().toString(),
      numbers: [...selectedNumbers],
      price: selectedNumbers.length * 0.2,
      timestamp: new Date(),
    };

    setCartItems((prev) => [...prev, newItem]);
    clearSelectedNumbers();

    toast({
      title: "Adicionado ao carrinho!",
      description: `${
        newItem.numbers.length
      } número(s) adicionado(s) por R$ ${newItem.price
        .toFixed(2)
        .replace(".", ",")}.`,
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    toast({
      title: "Item removido",
      description: "Item removido do carrinho com sucesso.",
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalCartPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.numbers.length,
    0
  );

  return (
    <RaffleContext.Provider
      value={{
        selectedNumbers,
        addToSelectedNumbers,
        removeFromSelectedNumbers,
        toggleNumber,
        clearSelectedNumbers,
        addToCart,
        cartItems,
        removeFromCart,
        clearCart,
        totalCartPrice,
        totalCartItems,
      }}
    >
      {children}
    </RaffleContext.Provider>
  );
};

export const useRaffle = () => {
  const context = useContext(RaffleContext);
  if (!context) {
    throw new Error("useRaffle must be used within a RaffleProvider");
  }
  return context;
};
