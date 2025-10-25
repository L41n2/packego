import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import type { Item } from '../types';
import { Category } from '../types';
import DraggableItem from './DraggableItem';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ItemLibraryProps {
    items: Item[];
    onItemInteraction: (item: Item, event: React.PointerEvent) => void;
    searchQuery: string;
    selectedItem: Item | null;
}

interface CategoryCarouselProps {
    category: Category;
    items: Item[];
    onItemInteraction: (item: Item, event: React.PointerEvent) => void;
    selectedItem: Item | null;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ category, items, onItemInteraction, selectedItem }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkForScrollability = useCallback(() => {
        const el = scrollContainerRef.current;
        if (el) {
            const hasOverflow = el.scrollWidth > el.clientWidth;
            setCanScrollLeft(el.scrollLeft > 5);
            setCanScrollRight(hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
        }
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (el) {
            checkForScrollability();
            const resizeObserver = new ResizeObserver(checkForScrollability);
            resizeObserver.observe(el);
            el.addEventListener('scroll', checkForScrollability, { passive: true });
            
            return () => {
                resizeObserver.disconnect();
                el.removeEventListener('scroll', checkForScrollability);
            };
        }
    }, [items, checkForScrollability]);

    const handleScroll = (direction: 'left' | 'right') => {
        const el = scrollContainerRef.current;
        if (el) {
            const scrollAmount = el.clientWidth * 0.8;
            el.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div>
            <h3 className="text-sm font-bold text-stone-500 mb-2 uppercase tracking-wider">{category}</h3>
            <div className="relative">
                <div 
                    ref={scrollContainerRef} 
                    className="flex gap-3 overflow-x-auto pb-2 -mb-2 scroll-smooth scroll-p-10 px-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {items.map((item: Item) => (
                        <DraggableItem
                            key={item.id}
                            item={item}
                            onInteraction={onItemInteraction}
                            isSelected={selectedItem?.id === item.id}
                        />
                    ))}
                </div>
                {canScrollLeft && (
                     <button
                        onClick={() => handleScroll('left')}
                        className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-stone-600 hover:bg-white z-10"
                        aria-label="Scroll left"
                    >
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                )}
                {canScrollRight && (
                    <button
                        onClick={() => handleScroll('right')}
                        className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-stone-600 hover:bg-white z-10"
                        aria-label="Scroll right"
                    >
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default function ItemLibrary({ items, onItemInteraction, searchQuery, selectedItem }: ItemLibraryProps) {
    const filteredItems = useMemo(() => {
        return items.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [items, searchQuery]);

    const categorizedItems = useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            const category = item.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {} as Record<Category, Item[]>);
    }, [filteredItems]);

    return (
        <div className="flex-grow bg-amber-100/70 backdrop-blur-sm p-4 flex flex-col min-h-0">
            {Object.keys(categorizedItems).length > 0 ? (
                <div className="space-y-4 overflow-y-auto -mx-4 px-4">
                    {(Object.keys(categorizedItems) as Category[]).map((category) => (
                        <CategoryCarousel
                            key={category}
                            category={category}
                            items={categorizedItems[category]}
                            onItemInteraction={onItemInteraction}
                            selectedItem={selectedItem}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex-grow flex items-center justify-center text-stone-500">
                    <p>Nessun oggetto trovato.</p>
                </div>
            )}
        </div>
    );
}