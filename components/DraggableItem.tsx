import React from 'react';
import type { Item } from '../types';

interface DraggableItemProps {
    item: Item;
    onInteraction: (item: Item, event: React.PointerEvent) => void;
    isSelected?: boolean;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, onInteraction, isSelected }) => {
    return (
        <div
            onPointerDown={(e) => onInteraction(item, e)}
            style={{ touchAction: 'pan-y' }}
            className={`flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 p-2 bg-white rounded-xl cursor-pointer border shadow-sm hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 active:scale-95 group relative
                ${isSelected ? 'border-emerald-500 ring-2 ring-emerald-300' : 'border-stone-200'}`
            }
        >
            <item.icon className="w-10 h-10 mb-1 text-stone-600 pointer-events-none" />
            <span className="text-xs text-center text-stone-500 font-semibold pointer-events-none">{item.name}</span>
        </div>
    );
};

export default DraggableItem;