import React, { useState, useEffect, useRef, useMemo, forwardRef } from 'react';
import type { PackedItem, SuitcaseSettings, GroupedItem, Item, FoldOption } from '../types';
import { RemoveIcon } from './Icons';

interface SuitcaseProps {
    packedItems: PackedItem[];
    onRemoveItem: (instanceId: number) => void;
    currentVolume: number;
    currentWeight: number;
    maxVolume: number;
    maxWeight: number;
    type: SuitcaseSettings['type'];
    onModifyItem: (group: GroupedItem) => void;
}

const StatusBar: React.FC<{ label: string; value: number; max: number; unit: string; color: string }> = ({ label, value, max, unit, color }) => {
    const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;
    return (
        <div className="w-full">
            <div className="flex justify-between items-center text-xs mb-1 text-stone-600">
                <span className="font-semibold">{label}</span>
                <span>{value.toFixed(1)} / {max} {unit}</span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-2.5">
                <div
                    className={`${color} h-2.5 rounded-full transition-all duration-500 ease-out`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

const Suitcase = forwardRef<HTMLDivElement, SuitcaseProps>(({ packedItems, onRemoveItem, currentVolume, currentWeight, maxVolume, maxWeight, type, onModifyItem }, ref) => {
    const contentWrapperRef = useRef<HTMLDivElement>(null);
    const [contentScale, setContentScale] = useState(1);
    const isBackpack = type === 'backpack';

    const groupedItems = useMemo(() => {
        const groups: Record<string, GroupedItem> = {};
        packedItems.forEach(packedItem => {
            const key = `${packedItem.item.id}-${packedItem.fold.name}`;
            if (!groups[key]) {
                groups[key] = {
                    id: key,
                    item: packedItem.item,
                    fold: packedItem.fold,
                    count: 0,
                    instanceIds: [],
                };
            }
            groups[key].count++;
            groups[key].instanceIds.push(packedItem.instanceId);
        });
        return Object.values(groups);
    }, [packedItems]);

    useEffect(() => {
        const calculateScale = () => {
            const suitcaseBaseRef = ref as React.RefObject<HTMLDivElement>;
            if (!suitcaseBaseRef.current || !contentWrapperRef.current || packedItems.length === 0) {
                setContentScale(1);
                return;
            }

            const container = suitcaseBaseRef.current;
            const content = contentWrapperRef.current;

            const padding = 32;
            const containerWidth = container.clientWidth - padding;
            const containerHeight = container.clientHeight - padding;
            const contentWidth = content.scrollWidth;
            const contentHeight = content.scrollHeight;
            
            if (contentWidth <= containerWidth && contentHeight <= containerHeight) {
                setContentScale(1);
                return;
            }

            const scaleX = containerWidth / contentWidth;
            const scaleY = containerHeight / contentHeight;
            
            setContentScale(Math.min(scaleX, scaleY));
        };
        
        requestAnimationFrame(calculateScale);

    }, [groupedItems, type, ref]);

    const packedItemsContent = (
        <>
        {groupedItems.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-stone-400 text-xl font-medium">{isBackpack ? 'Il tuo zaino è vuoto' : 'La tua valigia è vuota'}</p>
            </div>
        )}
        <div
            ref={contentWrapperRef}
            style={{ transform: `scale(${contentScale})`, transformOrigin: 'top left' }}
            className="flex flex-wrap content-start items-start gap-2 transition-transform duration-300 ease-in-out"
        >
            {groupedItems.map((group) => {
                const addedSizeMultiplier = Math.min(0.5, (group.count - 1) * 0.03);
                const finalMultiplier = 1 + addedSizeMultiplier;
                
                return (
                    <div
                        key={group.id}
                        onClick={() => onModifyItem(group)}
                        className="relative group bg-emerald-200/50 border border-emerald-400 text-emerald-800 rounded-md flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                        style={{
                            width: `${group.fold.dimensions.width * finalMultiplier}rem`,
                            height: `${group.fold.dimensions.height * finalMultiplier}rem`,
                        }}
                        title={`${group.item.name} (${group.fold.name}) x${group.count}`}
                    >
                        <group.item.icon className="w-1/2 h-1/2 opacity-70" />
                        {group.count > 1 && (
                             <div className="absolute bottom-0 right-0 px-1.5 py-0.5 bg-emerald-500 text-white text-[10px] font-bold rounded-tl-md rounded-br-md">
                                x{group.count}
                            </div>
                        )}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemoveItem(group.instanceIds[group.instanceIds.length - 1]);
                            }}
                            className="absolute -top-1.5 -right-1.5 bg-red-400 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-red-500"
                            aria-label={`Remove one ${group.item.name}`}
                        >
                            <RemoveIcon className="w-3.5 h-3.5 text-white" />
                        </button>
                    </div>
                );
            })}
       </div>
       </>
    );

    const TrolleyView = () => (
        <div className="relative w-full max-w-sm h-full flex flex-col justify-center items-center drop-shadow-lg">
            <div className="relative w-full aspect-[3/2] bg-orange-200 rounded-3xl border-4 border-orange-300/80 shadow-lg flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-stone-700 rounded-lg border-2 border-stone-800 flex items-center justify-center gap-4">
                    <div className="w-6 h-full bg-stone-800"></div>
                    <div className="w-6 h-full bg-stone-800"></div>
                </div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-20 bg-orange-300/70 border-2 border-orange-300/90 rounded-lg"></div>

                <div className="w-full h-full p-3 pt-4">
                    <div 
                        ref={ref} 
                        className="relative w-full h-full bg-amber-100 rounded-2xl shadow-inner overflow-hidden p-4"
                    >
                        <div className="absolute inset-1 border border-dashed border-orange-800/20 rounded-xl pointer-events-none"></div>
                        {packedItemsContent}
                    </div>
                </div>
            </div>
             <div className="absolute -bottom-1 w-[90%] flex justify-between px-4">
                <div className="w-10 h-10 bg-stone-800 rounded-full border-2 border-stone-900"></div>
                <div className="w-10 h-10 bg-stone-800 rounded-full border-2 border-stone-900"></div>
            </div>
        </div>
    );

    const BackpackView = () => (
         <div className="w-full max-w-sm h-full flex flex-col items-center justify-center drop-shadow-lg">
            <div className="relative w-[80%] h-[95%]">
                <div className="absolute top-0 left-4 w-12 h-40 bg-green-800 border-4 border-green-900/80 rounded-t-full rounded-b-xl -rotate-[25deg] transform-origin-top-left">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-stone-600 rounded-full"></div>
                </div>
                <div className="absolute top-0 right-4 w-12 h-40 bg-green-800 border-4 border-green-900/80 rounded-t-full rounded-b-xl rotate-[25deg] transform-origin-top-right">
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-stone-600 rounded-full"></div>
                </div>
                
                <div className="relative w-full h-full bg-green-700 rounded-t-full rounded-b-3xl border-4 border-green-900/80 shadow-lg p-3 pt-5 flex flex-col">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 border-4 border-green-900/80 bg-green-800 rounded-t-xl"></div>
                    
                    <div 
                        ref={ref} 
                        className="relative w-full flex-grow bg-amber-100 rounded-2xl shadow-inner overflow-hidden p-4"
                    >
                        {packedItemsContent}
                    </div>
                </div>
            </div>
        </div>
    );


    return (
        <div className="p-4 flex flex-col gap-4 h-full">
            <div className="relative flex-grow flex items-center justify-center min-h-0">
                {isBackpack ? <BackpackView /> : <TrolleyView />}
            </div>
            <div className="relative flex-shrink-0 grid grid-cols-2 gap-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200/50">
                <StatusBar
                    label="Volume Occupato"
                    value={currentVolume}
                    max={maxVolume}
                    unit="L"
                    color="bg-emerald-500"
                />
                <StatusBar
                    label="Peso Stimato"
                    value={currentWeight}
                    max={maxWeight}
                    unit="kg"
                    color="bg-orange-400"
                />
            </div>
        </div>
    );
});

export default Suitcase;