import React, { useState, useMemo, useCallback, useRef } from 'react';
import { Item, PackedItem, View, FoldOption, SuitcaseSettings, GroupedItem } from './types';
import { ITEMS, SUITCASE_PRESETS } from './constants';
import { SuitcaseIcon, ListIcon, SettingsIcon, VacuumIcon, SearchIcon } from './components/Icons';
import ItemLibrary from './components/ItemLibrary';
import Suitcase from './components/Suitcase';
import PackingList from './components/PackingList';
import FoldOptionsModal from './components/FoldOptionsModal';
import SettingsModal from './components/SettingsModal';
import QuantityModal from './components/QuantityModal';
import SearchBar from './components/SearchBar';

export default function App() {
  const [view, setView] = useState<View>(View.Packing);
  const [packedItems, setPackedItems] = useState<PackedItem[]>([]);
  const [itemToPack, setItemToPack] = useState<Item | null>(null);
  const [suitcaseSettings, setSuitcaseSettings] = useState<SuitcaseSettings>(SUITCASE_PRESETS[2]);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [itemToModify, setItemToModify] = useState<GroupedItem | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Vacuum Seal State
  const [isVacuumModeActive, setIsVacuumModeActive] = useState(false);
  const [preVacuumState, setPreVacuumState] = useState<PackedItem[] | null>(null);

  // Custom Drag & Drop State
  const [draggedItem, setDraggedItem] = useState<Item | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const suitcaseRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartPos = useRef<{ x: number; y: number } | null>(null);
  const dragItemRef = useRef<Item | null>(null);
  const dragIntention = useRef<'none' | 'scroll' | 'pack'>('none');


  const { currentVolume, currentWeight } = useMemo(() => {
    return packedItems.reduce(
      (acc, packedItem) => {
        const volume = packedItem.item.baseVolume * packedItem.fold.volumeMultiplier;
        acc.currentVolume += volume;
        acc.currentWeight += packedItem.item.baseWeight;
        return acc;
      },
      { currentVolume: 0, currentWeight: 0 }
    );
  }, [packedItems]);

  const handleOpenPackingOptions = (item: Item) => {
    // FIX: The modal should always open to allow quantity selection,
    // regardless of the number of fold options. This ensures consistent behavior.
    setItemToPack(item);
  };

  const handleConfirmPacking = useCallback((item: Item, fold: FoldOption, quantity: number) => {
    const volumeToAdd = item.baseVolume * fold.volumeMultiplier * quantity;
    const weightToAdd = item.baseWeight * quantity;

    if (currentVolume + volumeToAdd > suitcaseSettings.maxVolume) {
        alert("Non c'è abbastanza spazio in valigia!");
        setItemToPack(null);
        return;
    }
     if (currentWeight + weightToAdd > suitcaseSettings.maxWeight) {
        alert("Superato il peso massimo della valigia!");
        setItemToPack(null);
        return;
    }
    
    const newItems: PackedItem[] = [];
    for (let i = 0; i < quantity; i++) {
        newItems.push({
            instanceId: Date.now() + i,
            item,
            fold,
        });
    }

    setPackedItems(prevItems => [...prevItems, ...newItems]);
    setItemToPack(null);
  }, [currentVolume, currentWeight, suitcaseSettings.maxVolume, suitcaseSettings.maxWeight]);

  const handleCancelPacking = () => {
    setItemToPack(null);
  };
  
  const handleDropItem = (itemId: number) => {
    const item = ITEMS.find(i => i.id === itemId);
    if (item) {
        const fold = item.foldOptions[0];
        const volumeToAdd = item.baseVolume * fold.volumeMultiplier;
        const weightToAdd = item.baseWeight;

        if (currentVolume + volumeToAdd > suitcaseSettings.maxVolume) {
            alert("Non c'è abbastanza spazio in valigia!");
            return;
        }
        if (currentWeight + weightToAdd > suitcaseSettings.maxWeight) {
            alert("Superato il peso massimo della valigia!");
            return;
        }

        const newItem: PackedItem = {
            instanceId: Date.now(),
            item,
            fold,
        };
        setPackedItems(prev => [...prev, newItem]);
    }
  };

  const handleRemoveItem = (instanceId: number) => {
    setPackedItems(prevItems => prevItems.filter(item => item.instanceId !== instanceId));
  };
  
  const handleModifyItem = (group: GroupedItem) => {
      setItemToModify(group);
  };

  const handleConfirmModification = (group: GroupedItem, newQuantity: number) => {
      const currentQuantity = group.count;

      if (newQuantity > currentQuantity) {
          const itemsToAdd = newQuantity - currentQuantity;
          const volumeToAdd = group.item.baseVolume * group.fold.volumeMultiplier * itemsToAdd;
          if (currentVolume + volumeToAdd > suitcaseSettings.maxVolume) {
              alert("Non c'è abbastanza spazio in valigia per aggiungere altri oggetti!");
              setItemToModify(null);
              return;
          }
          const newItems: PackedItem[] = [];
          for (let i = 0; i < itemsToAdd; i++) {
              newItems.push({
                  instanceId: Date.now() + i,
                  item: group.item,
                  fold: group.fold,
              });
          }
          setPackedItems(prev => [...prev, ...newItems]);

      } else if (newQuantity < currentQuantity) {
          const itemsToRemove = currentQuantity - newQuantity;
          const instanceIdsToRemove = new Set(group.instanceIds.slice(-itemsToRemove));
          setPackedItems(prev => prev.filter(item => !instanceIdsToRemove.has(item.instanceId)));
      }
      setItemToModify(null);
  };

  const handleCancelModification = () => {
      setItemToModify(null);
  };

  const handleSaveSettings = (newSettings: SuitcaseSettings) => {
    setSuitcaseSettings(newSettings);
    const newTotalVolume = packedItems.reduce((acc, packedItem) => acc + (packedItem.item.baseVolume * packedItem.fold.volumeMultiplier), 0);
    if(newTotalVolume > newSettings.maxVolume) {
        alert("Attenzione: la nuova capienza è inferiore al volume degli oggetti già in valigia!");
    }
    setIsSettingsModalOpen(false);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleToggleSearch = () => {
    setIsSearchVisible(prev => !prev);
  };

  const handleItemInteraction = useCallback((item: Item, downEvent: React.PointerEvent) => {
    if (selectedItem?.id === item.id) {
        dragItemRef.current = item;
        dragStartPos.current = { x: downEvent.clientX, y: downEvent.clientY };
        isDraggingRef.current = false;
        dragIntention.current = 'none';

        const handleMove = (moveEvent: PointerEvent) => {
            if (!dragStartPos.current) return;

            const moveX = moveEvent.clientX;
            const moveY = moveEvent.clientY;
            const dx = moveX - dragStartPos.current.x;
            const dy = moveY - dragStartPos.current.y;
            
            if (dragIntention.current === 'none' && Math.sqrt(dx * dx + dy * dy) > 10) {
                if (Math.abs(dy) > Math.abs(dx)) {
                    if (dy < 0) { // Moving UPWARDS
                        dragIntention.current = 'pack';
                        isDraggingRef.current = true;
                        setDraggedItem(dragItemRef.current);
                    } else { // Moving DOWNWARDS
                        dragIntention.current = 'scroll';
                    }
                } else {
                    dragIntention.current = 'scroll';
                }
            }

            if (dragIntention.current === 'pack') {
                moveEvent.preventDefault();
                setDragPosition({ x: moveX, y: moveY });
            }
        };

        const handleEnd = (upEvent: PointerEvent) => {
            // FIX: This prevents the pointerup event from being re-processed as a `click`
            // on a new element (like the modal's confirm button) that appears under the cursor.
            upEvent.preventDefault();

            window.removeEventListener('pointermove', handleMove);
            window.removeEventListener('pointerup', handleEnd);
            
            if (dragIntention.current === 'pack' && dragItemRef.current) {
                const suitcaseRect = suitcaseRef.current?.getBoundingClientRect();
                if (suitcaseRect && upEvent.clientX >= suitcaseRect.left && upEvent.clientX <= suitcaseRect.right && upEvent.clientY >= suitcaseRect.top && upEvent.clientY <= suitcaseRect.bottom) {
                    handleDropItem(dragItemRef.current.id);
                }
            } else if (dragIntention.current === 'none' && dragItemRef.current) {
                handleOpenPackingOptions(dragItemRef.current);
            }
            
            setSelectedItem(null);
            isDraggingRef.current = false;
            dragStartPos.current = null;
            dragItemRef.current = null;
            setDraggedItem(null);
            setDragPosition(null);
            dragIntention.current = 'none';
        };

        window.addEventListener('pointermove', handleMove);
        window.addEventListener('pointerup', handleEnd);

    } else {
        setSelectedItem(item);
    }
  }, [selectedItem, currentVolume, currentWeight, suitcaseSettings]);

  const handleToggleVacuumAll = () => {
    if (isVacuumModeActive) {
        if (preVacuumState) {
            setPackedItems(preVacuumState);
        }
        setIsVacuumModeActive(false);
        setPreVacuumState(null);
    } else {
        setPreVacuumState([...packedItems]);
        const vacuumedItems = packedItems.map(packedItem => {
            const vacuumOption = packedItem.item.foldOptions.find(opt => opt.name === 'Sottovuoto');
            if (vacuumOption && packedItem.fold.name !== 'Sottovuoto') {
                return { ...packedItem, fold: vacuumOption };
            }
            return packedItem;
        });
        setPackedItems(vacuumedItems);
        setIsVacuumModeActive(true);
    }
  };
  
  return (
    <div className="flex flex-col h-screen font-sans bg-amber-50 antialiased select-none">
      {itemToPack && (
        <FoldOptionsModal
          item={itemToPack}
          onConfirm={(fold, quantity) => handleConfirmPacking(itemToPack, fold, quantity)}
          onCancel={handleCancelPacking}
          currentVolume={currentVolume}
          maxVolume={suitcaseSettings.maxVolume}
          currentWeight={currentWeight}
          maxWeight={suitcaseSettings.maxWeight}
        />
      )}
      
      {isSettingsModalOpen && (
        <SettingsModal 
            isOpen={isSettingsModalOpen}
            onClose={() => setIsSettingsModalOpen(false)}
            onSave={handleSaveSettings}
            currentSettings={suitcaseSettings}
        />
      )}
      
      {itemToModify && (
            <QuantityModal
                group={itemToModify}
                onConfirm={handleConfirmModification}
                onCancel={handleCancelModification}
                currentVolume={currentVolume}
                maxVolume={suitcaseSettings.maxVolume}
            />
      )}

      {draggedItem && dragPosition && (
        <div 
          className="fixed top-0 left-0 pointer-events-none z-50 transition-transform"
          style={{ transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)` }}
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-lg shadow-xl border border-emerald-300 flex flex-col items-center justify-center p-1 -translate-x-1/2 -translate-y-1/2">
              <draggedItem.icon className="w-8 h-8 text-emerald-600" />
              <span className="text-xs text-center text-emerald-800 font-semibold">{draggedItem.name}</span>
          </div>
        </div>
      )}

      <header className="flex-shrink-0 flex items-center justify-between p-3 bg-white/60 backdrop-blur-sm border-b border-stone-200">
          <h1 className="text-xl font-bold text-stone-700">Pack & Go</h1>
          <div className="flex items-center gap-2">
            <button onClick={handleToggleSearch} className="p-1.5 text-stone-500 hover:text-emerald-600 transition-colors">
                <SearchIcon className="w-6 h-6" />
            </button>
            <button
                onClick={handleToggleVacuumAll}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  isVacuumModeActive 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
            >
                <VacuumIcon className="w-4 h-4" />
                {isVacuumModeActive ? 'Annulla' : 'Sottovuoto'}
            </button>
            <button onClick={() => setIsSettingsModalOpen(true)} className="p-1.5 text-stone-500 hover:text-emerald-600 transition-colors">
                <SettingsIcon className="w-6 h-6" />
            </button>
          </div>
      </header>
      
      {isSearchVisible && (
        <div className="p-3 bg-amber-50 border-b border-stone-200 flex-shrink-0">
           <SearchBar 
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
      )}

      <main className="flex-grow flex flex-col overflow-hidden">
        {view === View.Packing ? (
          <>
            <div className="h-[50%] flex-shrink-0 flex flex-col min-h-0">
              <Suitcase
                ref={suitcaseRef}
                packedItems={packedItems}
                onRemoveItem={handleRemoveItem}
                currentVolume={currentVolume}
                currentWeight={currentWeight}
                maxVolume={suitcaseSettings.maxVolume}
                maxWeight={suitcaseSettings.maxWeight}
                type={suitcaseSettings.type}
                onModifyItem={handleModifyItem}
              />
            </div>
            <div className="flex-grow flex flex-col min-h-0 border-t border-stone-200">
                <ItemLibrary 
                  items={ITEMS} 
                  onItemInteraction={handleItemInteraction}
                  searchQuery={searchQuery}
                  selectedItem={selectedItem}
                />
            </div>
          </>
        ) : (
          <PackingList packedItems={packedItems} />
        )}
      </main>

      <nav className="flex-shrink-0 flex justify-around bg-white/60 backdrop-blur-sm border-t border-stone-200 p-2">
        <button
          onClick={() => setView(View.Packing)}
          className={`flex flex-col items-center gap-1 px-4 py-1 rounded-lg transition-colors ${
            view === View.Packing ? 'text-emerald-600' : 'text-stone-500 hover:text-emerald-600'
          }`}
        >
          <SuitcaseIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Prepara</span>
        </button>
        <button
          onClick={() => setView(View.List)}
          className={`flex flex-col items-center gap-1 px-4 py-1 rounded-lg transition-colors ${
            view === View.List ? 'text-emerald-600' : 'text-stone-500 hover:text-emerald-600'
          }`}
        >
          <ListIcon className="w-6 h-6" />
          <span className="text-xs font-medium">Lista</span>
        </button>
      </nav>
    </div>
  );
}