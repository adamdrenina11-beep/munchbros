import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, ORDER_LINK } from '../lib/site';
import Aurora from './Aurora';

export default function Objednavky() {
  return (
    <section id="objednavky" className="relative py-20 px-4 bg-neutral-900 overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7c3aed", "#ec4899", "#be185d"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Objednávky</h2>
          <p className="text-xl text-pink-300">No čo, máš už chuť? Tak si objednaj a poriadne vychutnaj.</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          {/* Telefónne číslo a tlačidlo vedľa seba */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 text-center">
              <p className="text-lg text-pink-200 mb-4">Volajte a objednajte si u nás:</p>
              <a href={`tel:${PHONE_TEL}`} className="text-2xl md:text-3xl font-bold text-pink-300 hover:text-white transition-colors">{PHONE_NUMBER}</a>
            </div>

            <div className="text-center">
              <a
                href={ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 via-rose-500 to-fuchsia-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
                aria-label="Objednať cez Bistro - otvoriť nové okno"
              >
                Objednať cez Bistro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
