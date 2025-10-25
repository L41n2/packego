import React, { useState, useEffect } from 'react';
import type { SuitcaseSettings } from '../types';
import { SUITCASE_PRESETS } from '../constants';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: SuitcaseSettings) => void;
  currentSettings: SuitcaseSettings;
}

export default function SettingsModal({ isOpen, onClose, onSave, currentSettings }: SettingsModalProps) {
  const [settings, setSettings] = useState<SuitcaseSettings>(currentSettings);
  const [isCustom, setIsCustom] = useState(false);

  useEffect(() => {
    // Check if current settings match any preset
    const matchesPreset = SUITCASE_PRESETS.some(
      p => p.maxVolume === currentSettings.maxVolume && p.maxWeight === currentSettings.maxWeight
    );
    setIsCustom(!matchesPreset);
    setSettings(currentSettings);
  }, [currentSettings, isOpen]);

  if (!isOpen) {
    return null;
  }
  
  const handlePresetSelect = (preset: SuitcaseSettings) => {
    setSettings(preset);
    setIsCustom(false);
  };

  const handleCustomInputChange = (field: 'maxVolume' | 'maxWeight', value: string) => {
    const numericValue = parseInt(value, 10);
    const newSettings: Partial<SuitcaseSettings> = { name: 'Personalizzata', type: 'trolley' };

    if (!isNaN(numericValue) && numericValue >= 0) {
        newSettings[field] = numericValue;
        setSettings(prev => ({ ...prev, ...newSettings }));
        setIsCustom(true);
    } else if (value === '') {
        newSettings[field] = 0;
        setSettings(prev => ({ ...prev, ...newSettings }));
        setIsCustom(true);
    }
  };

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-amber-100 rounded-xl shadow-2xl w-full max-w-lg border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 text-center border-b border-stone-200">
          <h2 className="text-2xl font-bold mb-1">Impostazioni Bagaglio</h2>
          <p className="text-stone-600">Scegli una dimensione o imposta valori personalizzati.</p>
        </div>

        <div className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider">PRESET</h3>
            <div className="grid grid-cols-5 gap-2">
                {SUITCASE_PRESETS.map(preset => (
                    <button
                        key={preset.name}
                        onClick={() => handlePresetSelect(preset)}
                        className={`p-3 rounded-lg text-center transition-all border-2 ${
                            settings.name === preset.name && !isCustom 
                            ? 'bg-emerald-500 text-white border-emerald-600' 
                            : 'bg-white hover:bg-emerald-50 border-stone-200'
                        }`}
                    >
                        <span className="font-semibold text-xs">{preset.name}</span>
                    </button>
                ))}
            </div>
            
            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider pt-2">PERSONALIZZATO</h3>
            <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Volume Massimo (L)</label>
                    <input 
                        type="number" 
                        value={settings.maxVolume} 
                        onChange={(e) => handleCustomInputChange('maxVolume', e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Peso Massimo (kg)</label>
                    <input 
                        type="number" 
                        value={settings.maxWeight} 
                        onChange={(e) => handleCustomInputChange('maxWeight', e.target.value)}
                        className="w-full p-2 border border-stone-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                    />
                 </div>
            </div>
        </div>

        <div className="p-4 bg-white/50 flex justify-end gap-3">
            <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg hover:bg-stone-200 transition-colors text-stone-600 font-medium"
            >
                Annulla
            </button>
            <button
                onClick={handleSave}
                className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-semibold shadow-sm"
            >
                Salva
            </button>
        </div>
      </div>
    </div>
  );
}