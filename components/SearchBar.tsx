import React from 'react';
import { SearchIcon } from './Icons';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-stone-400" />
      </div>
      <input
        type="text"
        placeholder="Cerca un oggetto..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
      />
    </div>
  );
}