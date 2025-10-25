import React, { useState, useMemo } from 'react';
import type { GroupedItem } from '../types';

interface QuantityModalProps {
  group: GroupedItem;
  // FIX: Corrected typo from Groupeditem to GroupedItem
  onConfirm: (group: GroupedItem, quantity: number) => void;
  onCancel: () => void;
  currentVolume: number;
  maxVolume: number;
}

export default function QuantityModal({ group, onConfirm, onCancel, currentVolume, maxVolume }: QuantityModalProps) {
  const [quantity, setQuantity] = useState(group.count);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(0, prev + amount));
  };
  
  const volumeChange = useMemo(() => {
    const itemVolume = group.item.baseVolume * group.fold.volumeMultiplier;
    return (quantity - group.count) * itemVolume;
  }, [group, quantity]);

  const canPack = useMemo(() => {
    return currentVolume + volumeChange <= maxVolume;
  }, [currentVolume, volumeChange, maxVolume]);

  const handleConfirm = () => {
    if (canPack) {
      onConfirm(group, quantity);
    }
  };
  
  const handleRemoveAll = () => {
    onConfirm(group, 0);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onCancel}>
      <div
        className="bg-amber-100 rounded-xl shadow-2xl w-full max-w-sm border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 text-center">
          <group.item.icon className="w-16 h-16 mx-auto mb-4 text-emerald-500" />
          <h2 className="text-2xl font-bold mb-2">Modifica Quantità</h2>
          <p className="text-stone-600 mb-6">{group.item.name} ({group.fold.name})</p>
        </div>

        <div className="px-6 pb-4 flex items-center justify-center gap-4">
            <button onClick={() => handleQuantityChange(-1)} className="w-10 h-10 bg-stone-200 rounded-full text-2xl font-bold flex items-center justify-center hover:bg-stone-300 transition-colors">-</button>
            <span className="text-3xl font-bold w-16 text-center">{quantity}</span>
            <button onClick={() => handleQuantityChange(1)} className="w-10 h-10 bg-stone-200 rounded-full text-2xl font-bold flex items-center justify-center hover:bg-stone-300 transition-colors">+</button>
        </div>
        
        <div className="p-4 bg-white/50">
             <div className="text-center mb-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm text-stone-500">Variazione Volume</p>
                <p className={`text-lg font-bold ${canPack ? 'text-stone-800' : 'text-red-500'}`}>
                    {volumeChange >= 0 ? '+' : ''}{volumeChange.toFixed(1)} unità
                </p>
                {!canPack && <p className="text-xs text-red-500 mt-1">Spazio insufficiente in valigia!</p>}
             </div>
             <button
                onClick={handleConfirm}
                disabled={!canPack}
                className="w-full p-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-stone-300 disabled:text-stone-500 disabled:cursor-not-allowed transition-colors text-white font-semibold shadow-sm"
            >
                Conferma Quantità
            </button>
             <button
                onClick={handleRemoveAll}
                className="w-full mt-2 p-2 rounded-lg bg-red-100 hover:bg-red-200 transition-colors text-red-600 font-medium"
            >
                Rimuovi Tutto
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