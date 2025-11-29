'use client';

interface ProductInfoProps {
  ingredients: string;
  allergens: string;
}

export default function ProductInfo({ ingredients, allergens }: ProductInfoProps) {
  return (
    <div className="mt-3 p-4 bg-pink-950/30 border border-pink-500/30 rounded-lg space-y-3">
      <div>
        <h4 className="text-pink-300 font-bold text-sm mb-2">🍔 Zloženie:</h4>
        <p className="text-pink-100 text-xs leading-relaxed">{ingredients}</p>
      </div>
      {allergens && allergens.trim() !== "" && (
        <div>
          <h4 className="text-pink-300 font-bold text-sm mb-2">⚠️ Alergény:</h4>
          <p className="text-pink-100 text-xs leading-relaxed">{allergens}</p>
        </div>
      )}
    </div>
  );
}
