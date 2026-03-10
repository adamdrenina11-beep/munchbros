'use client';

import { useState } from 'react';

interface ProductInfoProps {
  ingredients: string;
  allergens: string;
}

export default function ProductInfo({ ingredients, allergens }: ProductInfoProps) {
  const [open, setOpen] = useState(false);

  const hasContent = ingredients.trim() !== '' || (allergens && allergens.trim() !== '');
  if (!hasContent) return null;

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-3 py-2 bg-pink-950/40 border border-pink-500/30 rounded-lg text-pink-300 text-xs font-bold hover:bg-pink-950/60 transition-colors flex items-center justify-center gap-1"
      >
        {open ? 'Zavrieť' : 'Viac informácií'}
        <span className={`inline-block transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="mt-2 p-4 bg-pink-950/30 border border-pink-500/30 rounded-lg space-y-3">
          {ingredients.trim() !== '' && (
            <div>
              <h4 className="text-pink-300 font-bold text-sm mb-2">🍔 Zloženie:</h4>
              <p className="text-pink-100 text-xs leading-relaxed">{ingredients}</p>
            </div>
          )}
          {allergens && allergens.trim() !== '' && (
            <div>
              <h4 className="text-pink-300 font-bold text-sm mb-2">⚠️ Alergény:</h4>
              <p className="text-pink-100 text-xs leading-relaxed">{allergens}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
