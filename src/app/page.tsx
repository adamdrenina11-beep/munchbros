'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aurora from '../components/Aurora';
import { CountUp } from '../components/count-up';
import FadeContent from '../components/FadeContent';
import { PHONE_NUMBER, PHONE_TEL, ORDER_LINK } from '../lib/site';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 overflow-x-hidden">
      {/* Hero + O nás Combined Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Aurora Background - pre celú sekciu */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Aurora
            colorStops={["#9333ea", "#ec4899", "#db2777"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.4}
          />
        </div>
        
        {/* Logo v strede hore */}
        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={200}>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Link href="/" className="block w-full h-full">
                <Image
                  src="/images/logo.png"
                  alt="Munch Bros Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </Link>
            </div>
          </div>
        </FadeContent>

        {/* Hero časť */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-32 md:pt-0">
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
                MUNCH BRO&apos;S
              </h1>
              <p className="text-2xl md:text-3xl text-pink-300 font-semibold mb-8">
                Bratia v burgri - Senec
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-between sm:justify-center max-w-5xl mx-auto">
                <a 
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl cursor-pointer sm:order-1"
                >
                  Pozri Menu
                </a>
                <a 
                  href="#lokalita"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#lokalita')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white text-lg font-bold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/30 cursor-pointer sm:order-2"
                >
                  Otváracie hodiny a Lokalita
                </a>
                <a
                  href="#objednavky"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#objednavky')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 via-rose-500 to-fuchsia-600 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl cursor-pointer sm:order-3"
                >
                  Objednávky
                </a>
              </div>
            </div>
          </FadeContent>

          {/* Animated background elements removed as requested */}
        </div>

        {/* Dekoratívna čiara - oddeľovač */}
        <div className="relative z-10 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent"></div>
          </div>
        </div>

        {/* O nás časť - v rámci tej istej sekcie */}
        <div className="relative z-10 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-12 text-center">
              O Munch Bro&apos;s
            </h2>
            
            {/* Grid boxov */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
              {/* Box 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <p className="text-sm md:text-lg text-pink-200 leading-relaxed">
                  Bratia, ktorí milujú dobré jedlo! Mäso z ulice rovno do ruky alebo až k vám domov.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <p className="text-sm md:text-lg text-pink-200 leading-relaxed">
                  Čerstvé suroviny, láska k detailu. Každý kúsok je unikátny!
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <p className="text-sm md:text-lg text-pink-200 leading-relaxed">
                  Street food v Senci! Šťavnaté burgre, chrumkavé hranolčeky a domáce omáčky.
                </p>
              </div>

              {/* Box 4 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                <p className="text-sm md:text-lg text-pink-200 leading-relaxed">
                  Od klasického burgera po Happy Bro&apos;s Meal. Rýchlo, priateľsky, chutne!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Naše Menu
            </h2>
            <p className="text-xl text-pink-300">
              Čerstvé burgre a jedlá pripravené s láskou
            </p>
          </div>

          {/* BURGRE */}
          <div className="mb-20">
    <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">BURGRE</h3>
            {/* Prvé 3 burgre - len na desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-3 md:gap-10 mb-3 md:mb-10">
              {/* Munch Bro's */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Munch bro´s.png" 
                    alt="Munch Bros Burger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Bro&apos;s</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,90 €</p>
                </div>
              </div>

              {/* Munch of Fire */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Munch of fire.png" 
                    alt="Munch of Fire"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch of Fire</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,20 €</p>
                </div>
              </div>

              {/* Smash Bro's */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Smash Bro´s.png" 
                    alt="Smash Bros"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Smash Bro&apos;s</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,20 €</p>
                </div>
              </div>
            </div>

            {/* Posledné 2 burgre vycentrované - len na desktop */}
            <div className="hidden lg:flex lg:justify-center gap-3 md:gap-10 px-4 md:px-20">
              {/* OG Munch */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/OG munch.png" 
                    alt="OG Munch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">OG Munch</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,20 €</p>
                </div>
              </div>

              {/* Munch Chicken */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Munch chicken.png" 
                    alt="Munch Chicken"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Chicken</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,20 €</p>
                </div>
              </div>
            </div>

            {/* Mobile verzia - grid 2+2+1 */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {/* Munch Bro's */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/Munch bro´s.png" 
                    alt="Munch Bros Burger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Munch Bro&apos;s</h3>
                  <p className="text-pink-300 text-sm font-bold">10,90 €</p>
                </div>
              </div>

              {/* Munch of Fire */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/Munch of fire.png" 
                    alt="Munch of Fire"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Munch of Fire</h3>
                  <p className="text-pink-300 text-sm font-bold">10,20 €</p>
                </div>
              </div>

              {/* OG Munch */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/OG munch.png" 
                    alt="OG Munch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">OG Munch</h3>
                  <p className="text-pink-300 text-sm font-bold">10,20 €</p>
                </div>
              </div>

              {/* Munch Chicken */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/Munch chicken.png" 
                    alt="Munch Chicken"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Munch Chicken</h3>
                  <p className="text-pink-300 text-sm font-bold">10,20 €</p>
                </div>
              </div>
            </div>

            {/* Smash Bro's vycentrovaný - len na mobile */}
            <div className="flex justify-center px-2 mt-3 lg:hidden">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%]">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/Smash Bro´s.png" 
                    alt="Smash Bros"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Smash Bro&apos;s</h3>
                  <p className="text-pink-300 text-sm font-bold">10,20 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* HOTDOGY */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">HOTDOGY</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Munch Dog NYC */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Munch dog NYC.png" 
                    alt="Munch Dog NYC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Dog NYC</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">7,90 €</p>
                </div>
              </div>

              {/* Italy Hotdog */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Italy hotdog.png" 
                    alt="Italy Hotdog"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Italy Hotdog</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">7,90 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* ŠALÁTY */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">ŠALÁTY</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Kuraci Salat */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Kuraci salat.png" 
                    alt="Kuraci Salat"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Kuraci Salat</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">8,99 €</p>
                </div>
              </div>

              {/* Halloumi */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Halloumi.png" 
                    alt="Halloumi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Halloumi</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">8,99 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* PRE DETI - HAPPY BRO'S */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">PRE DETI - HAPPY BRO&apos;S</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Happy Meal */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Happy bro´s meal pre deti.png" 
                    alt="Happy Bro's Meal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Happy Bro&apos;s Meal</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">6,50 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* DEZERTY */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">DEZERTY</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Vyprazane Oreo */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/oreo.png" 
                    alt="Vyprazane Oreo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Vyprazane Oreo</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">5,50 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* PRÍLOHY */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">PRÍLOHY</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
              {/* Munch Fries */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Munch fries.png" 
                    alt="Munch Fries"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Fries</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">3,00 €</p>
                </div>
              </div>

              {/* Sweet Munch Fries */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Sweet munch fries.png" 
                    alt="Sweet Munch Fries"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Sweet Munch Fries</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">3,80 €</p>
                </div>
              </div>

              {/* Coleslaw - skryté na mobile, viditeľné na lg */}
              <div className="hidden lg:block bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Coleslaw.png" 
                    alt="Coleslaw"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Coleslaw</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">2,80 €</p>
                </div>
              </div>
            </div>

            {/* Coleslaw vycentrovaný - len na mobile */}
            <div className="flex justify-center px-2 mt-3 lg:hidden">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%]">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/Coleslaw.png" 
                    alt="Coleslaw"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Coleslaw</h3>
                  <p className="text-pink-300 text-sm font-bold">2,80 €</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Októbrová špecialita Section */}
      <section id="oktobrova-specialita" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Októbrová špecialita
            </h2>
            <p className="text-xl text-pink-300">
              Vyskúšajte našu špeciálnu ponuku na tento mesiac!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-56 md:h-80 w-full">
                <Image
                  src="/images/swiss-munch.png"
                  alt="Swiss Munch"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-3xl md:text-4xl font-black text-pink-400 mb-2">Swiss Munch</h3>
                <p className="text-lg text-pink-200 mb-4">
                  S poriadnou dávkou mäsa, karamelizovanou cibuľkou, ementálom, chrumkavou slaninou a BBQ majonézovou omáčkou.
                </p>
                <div className="text-pink-300 text-2xl font-bold">10,90 €</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objednávky + Lokalita a Otváracie hodiny - Combined Section with Aurora */}
      <section className="relative py-20 px-4 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" aria-hidden />

        {/* Aurora Background - pre celú sekciu */}
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <Aurora
            colorStops={["#9333ea", "#ec4899", "#db2777"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.4}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-20">
          {/* Objednávky subsection */}
          <div id="objednavky">
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

          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Lokalita a Otváracie hodiny</h2>
            <p className="text-xl text-pink-300">Kde nás nájdete a kedy máme otvorené</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Mapa */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">Lokalita</h3>
              </div>
              <div className="relative h-64 md:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps?q=Lichnerova+41A+Senec&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Munch Bros Senec"
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-lg text-pink-200 font-semibold">Lichnerova 41A</p>
                <p className="text-lg text-pink-200">Senec, Slovakia</p>
              </div>
            </div>

            {/* Otváracie hodiny */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Otváracie hodiny</h3>
                <div className="space-y-4 text-pink-200 text-lg">
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Pondelok:</span>
                    <span>Zatvorené</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Utorok:</span>
                    <span>12:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Streda:</span>
                    <span>12:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Štvrtok:</span>
                    <span>12:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Piatok:</span>
                    <span>12:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-pink-500/20 pb-3">
                    <span className="font-semibold text-white">Sobota:</span>
                    <span>12:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">Nedeľa:</span>
                    <span>15:00 - 20:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recenzie Section */}
      <section id="recenzie" className="py-20 px-4 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Recenzie našich zákazníkov
            </h2>
            <p className="text-xl text-neutral-400">
              Prečítajte si, čo hovoria naši spokojní zákazníci
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Martin Kováč",
                rating: 5,
                date: "Pred 2 týždňami",
                text: "Skvelé burgre, veľké porcie a super ceny! Munch of Fire má perfektnú pikantnosť. Určite sa vrátime!",
                source: "Google Maps"
              },
              {
                name: "Petra Nováková",
                rating: 5,
                date: "Pred mesiacom",
                text: "Najlepší burger v Senci! Čerstvé suroviny, domáce omáčky a rýchla obsluha. Milá obsluha navyše.",
                source: "Google Maps"
              },
              {
                name: "Jakub Horváth",
                rating: 5,
                date: "Pred 3 týždňami",
                text: "OG Munch je môj obľúbený! Šťavnaté mäso, chrumkavé pečivo. Street food na najvyššej úrovni.",
                source: "Google Maps"
              },
              {
                name: "Lenka Szabová",
                rating: 5,
                date: "Pred 2 mesiacmi",
                text: "S deťmi sme si dali Happy Bro's Meal a oni boli nadšené! Konečne kvalitné detské menu. Vyprážané Oreo top!",
                source: "Google Maps"
              },
              {
                name: "Tomáš Balog",
                rating: 5,
                date: "Pred týždňom",
                text: "Munch Dog NYC je úžasný! Veľká porcia, plno chuti. Sweet fries sú návykové. Odporúčam!",
                source: "Google Maps"
              },
              {
                name: "Simona Krajčíková",
                rating: 5,
                date: "Pred mesiacom",
                text: "Halloumi burger prekvapil! Konečne niečo aj pre vegetariánov. Čerstvý šalát a skvelá atmosféra.",
                source: "Google Maps"
              },
            ].map((review, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-3 md:p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <div>
                    <h3 className="text-sm md:text-lg font-black text-white">{review.name}</h3>
                    <p className="text-xs md:text-sm text-neutral-400">{review.source}</p>
                  </div>
                  <div className="flex gap-0.5 md:gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm md:text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-base text-neutral-300 mb-2 md:mb-4 leading-relaxed">{review.text}</p>
                <p className="text-xs md:text-sm text-neutral-500">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mt-16 text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-6xl font-black text-white">
                    <CountUp end={4.8} decimals={1} />
                  </div>
                  <div className="flex gap-1 text-3xl text-yellow-400">★★★★★</div>
                </div>
                <p className="text-neutral-400">Na základe Google Maps recenzií</p>
              </div>
              <div className="h-20 w-px bg-white/20 hidden md:block"></div>
              <div className="text-left">
                <p className="text-xl text-neutral-200 mb-2"><strong>Najlepší street food</strong> v Senci</p>
                <p className="text-xl text-neutral-200"><strong>Čerstvé suroviny</strong> každý deň</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/50 backdrop-blur-lg py-12 px-4 border-t border-pink-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Aurora
            colorStops={["#581c87", "#be185d", "#701a75"]}
            blend={0.4}
            amplitude={0.6}
            speed={0.3}
          />
        </div>
        <div className="relative z-10 text-center text-pink-300">
          <div className="mt-8 pt-8 border-t border-pink-500/20 text-center text-pink-300">
            <p>&copy; 2025 Munch Bro&apos;s. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Developed and produced by{' '}
              <a
                href="https://webhub-sk.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 font-semibold"
              >
                Webhub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
