import React from 'react';
import { PHONE_NUMBER, PHONE_TEL, ORDER_LINK } from '../lib/site';

export default function Objednavky() {
  return (
    <section id="objednavky" className="py-20 px-4 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Objednávky</h2>
          <p className="text-xl text-pink-300">No čo, máš už chuť? Tak si objednaj a poriadne vychutnaj.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 text-center">
            <p className="text-lg text-pink-200 mb-4">Volajte nás na telefónne číslo:</p>
            <a href={`tel:${PHONE_TEL}`} className="text-2xl md:text-3xl font-bold text-pink-300 hover:text-white transition-colors">{PHONE_NUMBER}</a>
            <p className="text-sm text-neutral-400 mt-2">(alebo použite link nižšie pre online objednávku)</p>
          </div>

          <div className="text-center">
            <a
              href={ORDER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              Objednať teraz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
