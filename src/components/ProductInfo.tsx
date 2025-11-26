'use client';

import { useState } from 'react';

interface ProductInfoProps {
  ingredients: string;
  allergens: string;
}

export default function ProductInfo({ ingredients, allergens }: ProductInfoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 rounded-lg text-pink-200 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
      >
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>Zloženie a alergény</span>
      </button>
      
      {isOpen && (
        <div className="mt-3 p-4 bg-black/40 border border-pink-500/20 rounded-lg space-y-3 animate-fade-in">
          <div>
            <h4 className="text-pink-400 font-bold text-sm mb-1">🍔 Zloženie:</h4>
            <p className="text-pink-200 text-xs leading-relaxed">{ingredients}</p>
          </div>
          <div>
            <h4 className="text-pink-400 font-bold text-sm mb-1">⚠️ Alergény:</h4>
            <p className="text-pink-200 text-xs leading-relaxed">{allergens}</p>
          </div>
        </div>
      )}
    </div>
  );
}
