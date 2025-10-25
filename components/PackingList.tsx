import React, { useMemo } from 'react';
import type { PackedItem } from '../types';
import { Category } from '../types';

interface PackingListProps {
    packedItems: PackedItem[];
}

export default function PackingList({ packedItems }: PackingListProps) {
    const listByCategory = useMemo(() => {
        const grouped = {} as Record<Category, { item: PackedItem['item'], count: number, foldModes: string[] }[]>;

        packedItems.forEach(packedItem => {
            const category = packedItem.item.category;
            if (!grouped[category]) {
                grouped[category] = [];
            }
            
            let existingEntry = grouped[category].find(entry => entry.item.id === packedItem.item.id);
            if(existingEntry) {
                existingEntry.count++;
                if (!existingEntry.foldModes.includes(packedItem.fold.name)) {
                   existingEntry.foldModes.push(packedItem.fold.name);
                }
            } else {
                 grouped[category].push({
                    item: packedItem.item,
                    count: 1,
                    foldModes: [packedItem.fold.name]
                });
            }
        });
        return grouped;
    }, [packedItems]);

    if (packedItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-stone-500 p-4">
                <p className="text-xl">La tua valigia è vuota.</p>
                <p>Vai alla scheda 'Prepara' per aggiungere articoli.</p>
            </div>
        );
    }

    return (
        <div className="p-4 overflow-y-auto h-full bg-amber-50">
            <h1 className="text-3xl font-bold mb-6 text-stone-800">La Tua Lista Bagaglio</h1>
            <div className="space-y-6">
                {/* FIX: Using Object.keys with a type assertion to ensure proper type inference for categorized items, resolving the 'map does not exist on type unknown' error. */}
                {Object.keys(listByCategory).map((category) => (
                    <div key={category}>
                        <h2 className="text-xl font-semibold text-emerald-600 border-b border-stone-200 pb-2 mb-3">{category}</h2>
                        <ul className="space-y-2">
                            {listByCategory[category as Category].map(({ item, count, foldModes }) => (
                                <li key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-stone-200/80">
                                    <div className="flex items-center gap-4">
                                        <item.icon className="w-8 h-8 text-stone-500" />
                                        <div>
                                            <p className="font-bold text-stone-700">{item.name}</p>
                                            <p className="text-xs text-stone-500">{foldModes.join(', ')}</p>
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold text-stone-700 bg-stone-200 rounded-full w-8 h-8 flex items-center justify-center">
                                        {count}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}