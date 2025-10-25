import React, { useState, useMemo } from 'react';
import type { Item, FoldOption } from '../types';

interface PackingOptionsModalProps {
  item: Item;
  onConfirm: (fold: FoldOption, quantity: number) => void;
  onCancel: () => void;
  currentVolume: number;
  maxVolume: number;
  currentWeight: number;
  maxWeight: number;
}

export default function PackingOptionsModal({ item, onConfirm, onCancel, currentVolume, maxVolume, currentWeight, maxWeight }: PackingOptionsModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedFold, setSelectedFold] = useState<FoldOption>(item.foldOptions[0]);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const totalVolume = useMemo(() => {
    return item.baseVolume * selectedFold.volumeMultiplier * quantity;
  }, [item, selectedFold, quantity]);
  
  const totalWeight = useMemo(() => {
    return item.baseWeight * quantity;
  }, [item, quantity]);

  const canPackVolume = useMemo(() => {
    return currentVolume + totalVolume <= maxVolume;
  }, [currentVolume, totalVolume, maxVolume]);

  const canPackWeight = useMemo(() => {
    return currentWeight + totalWeight <= maxWeight;
  }, [currentWeight, totalWeight, maxWeight]);

  const canPack = canPackVolume && canPackWeight;

  const handleConfirm = () => {
    if (canPack) {
        onConfirm(selectedFold, quantity);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onCancel}>
      <div
        className="bg-amber-100 rounded-xl shadow-2xl w-full max-w-sm border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 text-center">
          <item.icon className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
          <h2 className="text-2xl font-bold mb-2">Prepara: {item.name}</h2>
          <p className="text-stone-600 mb-6">Seleziona quantità e stile.</p>
        </div>

        <div className="px-6 pb-4 flex items-center justify-center gap-4">
            <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 bg-stone-200 rounded-full text-2xl font-bold flex items-center justify-center hover:bg-stone-300 transition-colors">-</button>
            <span className="text-3xl font-bold w-16 text-center">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 bg-stone-200 rounded-full text-2xl font-bold flex items-center justify-center hover:bg-stone-300 transition-colors">+</button>
        </div>

        <div className="p-4 space-y-3 bg-amber-50">
          {item.foldOptions.map((option) => (
            <button
              key={option.name}
              onClick={() => setSelectedFold(option)}
              className={`w-full text-left p-4 rounded-lg bg-white hover:bg-emerald-50 transition-all duration-200 flex justify-between items-center border-2 ${selectedFold.name === option.name ? 'border-emerald-500' : 'border-stone-200'}`}
            >
              <div>
                <span className="font-semibold">{option.name}</span>
                <p className="text-xs text-stone-500">
                    Volume: {(item.baseVolume * option.volumeMultiplier).toFixed(1)} L | Peso: {item.baseWeight.toFixed(2)} kg
                </p>
              </div>
            </button>
          ))}
        </div>
        
        <div className="p-4 bg-white/50">
             <div className="text-center mb-4 p-3 bg-amber-50 rounded-lg">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <p className="text-sm text-stone-500">Volume Totale</p>
                        <p className={`text-lg font-bold ${canPackVolume ? 'text-stone-800' : 'text-red-500'}`}>{totalVolume.toFixed(1)} L</p>
                    </div>
                    <div>
                        <p className="text-sm text-stone-500">Peso Totale</p>
                        <p className={`text-lg font-bold ${canPackWeight ? 'text-stone-800' : 'text-red-500'}`}>{totalWeight.toFixed(2)} kg</p>
                    </div>
                </div>
                 {!canPack && (
                    <p className="text-xs text-red-500 mt-2">
                        {!canPackVolume ? 'Spazio insufficiente in valigia!' : 'Peso massimo superato!'}
                    </p>
                )}
             </div>
             <button
                onClick={handleConfirm}
                disabled={!canPack}
                className="w-full p-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed transition-colors text-white font-semibold shadow-sm"
            >
                Aggiungi {quantity} alla Valigia
            </button>
             <button
                onClick={onCancel}
                className="w-full mt-2 p-2 rounded-lg hover:bg-stone-200 transition-colors text-stone-500 font-medium"
            >
                Annulla
            </button>
        </div>
      </div>
    </div>
  );
}