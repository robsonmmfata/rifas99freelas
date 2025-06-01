import React, { useState } from "react";
import { useRaffle } from "../contexts/RaffleContext";

const NumberSelector = () => {
  const [selectedOption, setSelectedOption] = useState(350);

  const [quantity, setQuantity] = useState(50);

  const [showNumberGrid, setShowNumberGrid] = useState(false);

  const {
    selectedNumbers,
    addToSelectedNumbers,
    clearSelectedNumbers,
    addToCart,
  } = useRaffle();

  const options = [
    { value: 50, label: "+50", popular: false },
    { value: 350, label: "+350", popular: true },
    { value: 850, label: "+850", popular: false },
    { value: 1000, label: "+1000", popular: false },
    { value: 5000, label: "+5000", popular: false },
    { value: 10000, label: "+10000", popular: false },
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const generateRandomNumbers = () => {
    const numbers = [];
    while (numbers.length < quantity) {
      const random = Math.floor(Math.random() * 100) + 1;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }
    clearSelectedNumbers();
    addToSelectedNumbers(numbers);
  };

  const selectOptionNumbers = (optionValue: number) => {
    setSelectedOption(optionValue);
    setQuantity(optionValue);

    const numbers = [];

    while (numbers.length < optionValue) {
      const random = Math.floor(Math.random() * 100) + 1;
      if (!numbers.includes(random)) {
        numbers.push(random);
      }
    }

    clearSelectedNumbers();
    addToSelectedNumbers(numbers);
  };

  const renderNumberGrid = () => {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
      numbers.push(
        <button
          key={i}
          onClick={() => {
            if (selectedNumbers.includes(i)) {
              const newNumbers = selectedNumbers.filter((n) => n !== i);
              clearSelectedNumbers();
              addToSelectedNumbers(newNumbers);
            } else {
              addToSelectedNumbers([i]);
            }
          }}
          className={`w-10 h-10 text-xs font-semibold rounded border transition-all ${
            selectedNumbers.includes(i)
              ? "bg-green-500 text-white border-green-500"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i.toString().padStart(2, "0")}
        </button>
      );
    }
    return numbers;
  };

  const totalPrice = selectedNumbers.length * 0.2;

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center justify-center mb-4 bg-gray-600 text-white py-2 rounded">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="font-semibold">Prêmios</span>
      </div>

      <p className="text-center text-sm text-gray-600 mb-4">
        Quanto mais títulos, mais chances de ganhar!
      </p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => selectOptionNumbers(option.value)}
            className={`relative p-3 rounded text-center font-semibold transition-all ${
              selectedOption === option.value
                ? option.popular
                  ? "bg-green-500 text-white"
                  : "bg-black text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {option.popular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-400 text-xs px-2 py-1 rounded text-black font-bold">
                Mais popular
              </div>
            )}
            <div className="text-lg">{option.label}</div>
            <div className="text-xs">SELECIONAR</div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={decreaseQuantity}
          className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
        >
          <span className="text-lg font-bold">-</span>
        </button>
        <span className="text-2xl font-bold">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
        >
          <span className="text-lg font-bold">+</span>
        </button>
      </div>

      <div className="mb-4 space-y-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowNumberGrid(!showNumberGrid)}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            {showNumberGrid ? "Ocultar números" : "Escolher números"}
          </button>
          <button
            onClick={generateRandomNumbers}
            className="flex-1 bg-yellow-600 text-white py-2 px-4 rounded font-semibold hover:bg-yellow-700 transition-colors"
          >
            Números aleatórios
          </button>
        </div>

        {selectedNumbers.length > 0 && (
          <div className="text-center text-sm text-gray-600">
            {selectedNumbers.length} número(s) selecionado(s)
          </div>
        )}
      </div>

      {showNumberGrid && (
        <div className="mb-4 p-4 bg-white rounded border">
          <h3 className="text-center font-semibold mb-3">
            Escolha seus números
          </h3>
          <div className="grid grid-cols-10 gap-1 max-h-60 overflow-y-auto">
            {renderNumberGrid()}
          </div>
        </div>
      )}

      <button
        onClick={addToCart}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>Adicionar ao carrinho</span>
        <span className="font-bold">
          R$ {totalPrice.toFixed(2).replace(".", ",")}
        </span>
      </button>
    </div>
  );
};

export default NumberSelector;
