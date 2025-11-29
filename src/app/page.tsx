'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountUp } from '../components/count-up';
import FadeContent from '../components/FadeContent';
import ProductInfo from '../components/ProductInfo';
import { PHONE_NUMBER, PHONE_TEL, ORDER_LINK } from '../lib/site';
import { productData } from '../lib/productData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 overflow-x-hidden">
      {/* Hero + O nás Combined Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
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

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-32 md:pt-0">
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0} delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
                    MUNCH BROS
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
              O Munch Bros
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
  <section id="menu" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Naše Menu
            </h2>
            <p className="text-xl text-pink-300">
              Čerstvé burgre a jedlá pripravené s láskou
            </p>
          </div>

          {/* BURGER KOMBA */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-black text-pink-400 mb-8 text-center">BURGER KOMBA</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Burger Dynasty */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-48 md:h-[28rem] w-full">
                  <Image 
                    src="/images/kombo13,90.png" 
                    alt="Burger Dynasty"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Burger Dynasty</h3>
                  <p className="text-pink-200 text-xs md:text-base mb-2">burger, hranolky, omáčka</p>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">13,90 €</p>
                </div>
              </div>

              {/* Burger Dynasty Munch */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-48 md:h-[28rem] w-full">
                  <Image 
                    src="/images/kombo14,90.png" 
                    alt="Burger Dynasty Munch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Burger Dynasty Munch</h3>
                  <p className="text-pink-200 text-xs md:text-base mb-2">burger, hranolky, omáčka</p>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">14,90 €</p>
                </div>
              </div>
            </div>
          </div>

          {/* BURGRE */}
          <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-black text-pink-400 mb-8 text-center">BURGRE</h3>
            {/* Prvé 3 burgre - len na desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-3 md:gap-10 mb-3 md:mb-10">
              {/* Munch Bros */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
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
                  <ProductInfo 
                    ingredients={productData["Munch Cheeseburger"].ingredients}
                    allergens={productData["Munch Cheeseburger"].allergens}
                  />
                </div>
              </div>

              {/* Munch of Fire */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
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
                  <ProductInfo 
                    ingredients={productData["Munch of Fire"].ingredients}
                    allergens={productData["Munch of Fire"].allergens}
                  />
                </div>
              </div>

              {/* Smash Bros */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
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
                  <ProductInfo 
                    ingredients={productData["Smash Bros"].ingredients}
                    allergens={productData["Smash Bros"].allergens}
                  />
                </div>
              </div>
            </div>

            {/* Second row - 3 burgre - len na desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-3 md:gap-10 mb-3 md:mb-10">
              {/* OG Munch */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
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
                  <ProductInfo 
                    ingredients={productData["OG Munch"].ingredients}
                    allergens={productData["OG Munch"].allergens}
                  />
                </div>
              </div>

              {/* Munch Chicken */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
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
                  <p className="text-pink-300 text-sm md:text-lg font-bold">9,90 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Chicken"].ingredients}
                    allergens={productData["Munch Chicken"].allergens}
                  />
                </div>
              </div>

              {/* Munch Cheeseburger */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-28 md:h-96 w-full">
                  <Image 
                    src="/images/munchess.png" 
                    alt="Munch Cheeseburger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Cheeseburger</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Bros"].ingredients}
                    allergens={productData["Munch Bros"].allergens}
                  />
                </div>
              </div>
            </div>

            {/* 7th burger centered - len na desktop */}
            <div className="hidden lg:flex lg:justify-center gap-3 md:gap-10 px-4 md:px-20">
              {/* Munch Swiss */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-full sm:w-80 md:w-96">
                <div className="relative h-28 md:h-96 w-full">
                  <Image 
                    src="/images/swiss-munch.png" 
                    alt="Munch Swiss"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Swiss</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">10,20 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Swiss"].ingredients}
                    allergens={productData["Munch Swiss"].allergens}
                  />
                </div>
              </div>
            </div>

            {/* Mobile verzia - grid 2 columns */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              {/* Munch Bros */}
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
                  <ProductInfo 
                    ingredients={productData["Munch Bros"].ingredients}
                    allergens={productData["Munch Bros"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Munch of Fire"].ingredients}
                    allergens={productData["Munch of Fire"].allergens}
                  />
                </div>
              </div>

              {/* Smash Bros */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
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
                  <ProductInfo 
                    ingredients={productData["Smash Bros"].ingredients}
                    allergens={productData["Smash Bros"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["OG Munch"].ingredients}
                    allergens={productData["OG Munch"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Munch Chicken"].ingredients}
                    allergens={productData["Munch Chicken"].allergens}
                  />
                </div>
              </div>

              {/* Munch Cheeseburger */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/munchess.png" 
                    alt="Munch Cheeseburger"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Munch Cheeseburger</h3>
                  <p className="text-pink-300 text-sm font-bold">8,50 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Cheeseburger"].ingredients}
                    allergens={productData["Munch Cheeseburger"].allergens}
                  />
                </div>
              </div>
            </div>

            {/* Munch Swiss vycentrovaný - len na mobile */}
            <div className="flex justify-center px-2 mt-3 lg:hidden">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%]">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/swiss-munch.png" 
                    alt="Munch Swiss"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 text-center">
                  <h3 className="text-sm font-bold text-white mb-1">Munch Swiss</h3>
                  <p className="text-pink-300 text-sm font-bold">10,20 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Swiss"].ingredients}
                    allergens={productData["Munch Swiss"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Munch Dog NYC"].ingredients}
                    allergens={productData["Munch Dog NYC"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Italy Hotdog"].ingredients}
                    allergens={productData["Italy Hotdog"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Kuraci Salat"].ingredients}
                    allergens={productData["Kuraci Salat"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Halloumi"].ingredients}
                    allergens={productData["Halloumi"].allergens}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PRE DETI - HAPPY BROS */}
          <div className="mb-20">
            <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">PRE DETI - HAPPY BROS</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10 px-2 md:px-20">
              {/* Happy Meal */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/Happy bro´s meal pre deti.png" 
                    alt="Happy Bros Meal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Happy Bros Meal</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">7,50 €</p>
                  <ProductInfo 
                    ingredients={productData["Happy Bros Meal"].ingredients}
                    allergens={productData["Happy Bros Meal"].allergens}
                  />
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
                  <p className="text-pink-300 text-sm md:text-lg font-bold">5,80 €</p>
                  <ProductInfo 
                    ingredients={productData["Vyprazane Oreo"].ingredients}
                    allergens={productData["Vyprazane Oreo"].allergens}
                  />
                </div>
              </div>

              {/* Vyprazane Bounty */}
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl w-[48%] sm:w-80 md:w-96">
                <div className="relative h-40 md:h-96 w-full">
                  <Image 
                    src="/images/bounty.png" 
                    alt="Vyprazane Bounty"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-xl font-bold text-white mb-1">Vyprážané Bounty</h3>
                  <p className="text-pink-300 text-sm md:text-lg font-bold">5,80 €</p>
                  <ProductInfo 
                    ingredients={productData["Vyprážané Bounty"].ingredients}
                    allergens={productData["Vyprážané Bounty"].allergens}
                  />
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
                  <p className="text-pink-300 text-sm md:text-lg font-bold">3,50 €</p>
                <ProductInfo 
                  ingredients={productData["Munch Fries"].ingredients}
                  allergens={productData["Munch Fries"].allergens}
                />
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
                  <p className="text-pink-300 text-sm md:text-lg font-bold">4,00 €</p>
                  <ProductInfo 
                    ingredients={productData["Sweet Munch Fries"].ingredients}
                    allergens={productData["Sweet Munch Fries"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Coleslaw"].ingredients}
                    allergens={productData["Coleslaw"].allergens}
                  />
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
                  <ProductInfo 
                    ingredients={productData["Coleslaw"].ingredients}
                    allergens={productData["Coleslaw"].allergens}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Duplicate OMÁČKY removed — keep the styled OMÁČKY section further down */}

        </div>
      </section>

  {/* OMÁČKY — styled like BURGRE cards */}
  <section className="py-20 px-4 bg-black">
        <h3 className="text-4xl font-black text-pink-400 mb-8 text-center">OMÁČKY</h3>

        {/* Desktop: first 3 */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-3 md:gap-10 mb-3 md:mb-10">
          {/* BBQ */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/BBQ.png" alt="BBQ" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">BBQ</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["BBQ"].ingredients}
                allergens={productData["BBQ"].allergens}
              />
            </div>
          </div>

          {/* Blue Cheese */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/Blue-Cheese.png" alt="Blue Cheese" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">Blue Cheese</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["Blue Cheese"].ingredients}
                allergens={productData["Blue Cheese"].allergens}
              />
            </div>
          </div>

          {/* Curry dream */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/Kari-omacka.png" alt="Curry dream" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">Curry dream</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["Curry dream"].ingredients}
                allergens={productData["Curry dream"].allergens}
              />
            </div>
          </div>
        </div>

        {/* Desktop: next 3 - grid layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-3 md:gap-10">
          {/* Munch Bros */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/Munch bros2.png" alt="Munch Bros sauce" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">Munch Bros</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["Munch Bros Sauce"].ingredients}
                allergens={productData["Munch Bros Sauce"].allergens}
              />
            </div>
          </div>

          {/* Ranch */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/Ranch.png" alt="Ranch" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">Ranch</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["Ranch"].ingredients}
                allergens={productData["Ranch"].allergens}
              />
            </div>
          </div>

          {/* Sriracha */}
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="relative h-40 md:h-96 w-full">
              <Image src="/images/Sriracha.png" alt="Sriracha" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-xl font-bold text-white mb-1">Sriracha</h3>
              <p className="text-pink-300 text-sm md:text-lg font-bold">1,50 €</p>
              <ProductInfo 
                ingredients={productData["Sriracha"].ingredients}
                allergens={productData["Sriracha"].allergens}
              />
            </div>
          </div>
        </div>

  {/* Mobile grid (2 cols) */}
  <div className="grid grid-cols-2 gap-3 lg:hidden">
    {/* BBQ */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/BBQ.png" alt="BBQ" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">BBQ</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
        <ProductInfo 
          ingredients={productData["BBQ"].ingredients}
          allergens={productData["BBQ"].allergens}
        />
      </div>
    </div>

    {/* Blue Cheese */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/Blue-Cheese.png" alt="Blue Cheese" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">Blue Cheese</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
        <ProductInfo 
          ingredients={productData["Blue Cheese"].ingredients}
          allergens={productData["Blue Cheese"].allergens}
        />
      </div>
    </div>

    {/* Curry dream */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/Kari-omacka.png" alt="Curry dream" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">Curry dream</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
        <ProductInfo 
          ingredients={productData["Curry dream"].ingredients}
          allergens={productData["Curry dream"].allergens}
        />
      </div>
    </div>

    {/* Munch Bros */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/Munch bros2.png" alt="Munch Bros" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">Munch Bros</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
                  <ProductInfo 
                    ingredients={productData["Munch Bros Sauce"].ingredients}
                    allergens={productData["Munch Bros Sauce"].allergens}
                  />
      </div>
    </div>

    {/* Ranch */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/Ranch.png" alt="Ranch" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">Ranch</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
        <ProductInfo 
          ingredients={productData["Ranch"].ingredients}
          allergens={productData["Ranch"].allergens}
        />
      </div>
    </div>

    {/* Sriracha */}
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg border border-pink-500/20 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl">
      <div className="relative h-40 w-full">
        <Image src="/images/Sriracha.png" alt="Sriracha" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-2 text-center">
        <h3 className="text-sm font-bold text-white mb-1">Sriracha</h3>
        <p className="text-pink-300 text-sm font-bold">1,50 €</p>
        <ProductInfo 
          ingredients={productData["Sriracha"].ingredients}
          allergens={productData["Sriracha"].allergens}
        />
      </div>
    </div>
  </div>
      </section>

      {/* NOVEMBROVÁ ŠPECIALITA Section removed per request */}

      {/* LIMITOVANÁ EDÍCIA Section */}
      <section id="limitovana-edicia" className="py-20 px-4 bg-gradient-to-br from-red-950 via-orange-900 to-amber-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 via-transparent to-transparent animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-full mb-4 animate-bounce-slow">
              <span className="text-white font-black text-sm md:text-base uppercase tracking-wider">🔥 Limitovaná edícia 🔥</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-4 drop-shadow-2xl">
              SMASH JUNIOR
            </h2>
            <p className="text-xl md:text-2xl text-amber-200 font-bold max-w-3xl mx-auto">
              Klasický smash burger v perfektnej veľkosti - chutný, cenovo dostupný a vždy chutí!
            </p>
            <p className="text-amber-300/70 text-sm mt-2">⏰ Dostupné len počas špeciálnej akcie</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-gradient-to-br from-amber-900/60 to-red-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(251,191,36,0.3)] hover:shadow-[0_0_80px_rgba(251,191,36,0.5)] transition-all duration-500 hover:scale-[1.02] relative">
                <div className="relative h-80 md:h-[32rem] w-full overflow-hidden bg-gradient-to-b from-amber-900/40 to-red-900/40">
                  {/* Rounded corner borders - top left */}
                  <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl pointer-events-none z-10" />
                  {/* Rounded corner borders - top right */}
                  <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 border-t-4 border-r-4 border-amber-500 rounded-tr-3xl pointer-events-none z-10" />
                  {/* Rounded corner borders - bottom left */}
                  <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 border-b-4 border-l-4 border-amber-500 rounded-bl-3xl pointer-events-none z-10" />
                  {/* Rounded corner borders - bottom right */}
                  <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-b-4 border-r-4 border-amber-500 rounded-br-3xl pointer-events-none z-10" />
                  
                <Image
                  src="/images/junior.jpg"
                  alt="Smash Junior - Limitovaná edícia"
                  fill
                  className="object-contain p-6 md:p-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-10">
                <div className="text-center mb-6">
                  <h3 className="text-4xl md:text-5xl font-black text-amber-400 mb-3 drop-shadow-lg">SMASH JUNIOR</h3>
                  <p className="text-lg md:text-xl text-amber-100 leading-relaxed mb-6 max-w-2xl mx-auto">
                    <strong className="text-amber-300">Maslová brioška</strong> s chutným <strong className="text-red-400">100g hovädím smash mäsom</strong>, 
                    roztopený <strong className="text-amber-300">čedar</strong>, chrumkavá <strong className="text-amber-300">kyslá uhorka</strong>, 
                    čerstvá <strong className="text-amber-300">cibuľa</strong>, <strong className="text-red-400">kečup a horčica</strong> - 
                    jednoduchý, chutný a cenovo perfektný! 🍔
                  </p>
                  <div className="inline-block">
                    <div className="text-amber-400 text-4xl md:text-5xl font-black mb-2">
                      6,90 €
                    </div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto mb-6">
                  <div className="bg-amber-950/40 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/30">
                    <h4 className="text-amber-300 text-lg font-bold mb-3 flex items-center gap-2">
                      🍔 Zloženie
                    </h4>
                    <p className="text-amber-100 text-sm md:text-base leading-relaxed mb-4">
                      Maslová brioška, 100g hovädzie smash mäso, čedar, kyslá uhorka, cibuľa, kečup, horčica 🍔
                    </p>
                    {/* No allergens for limited edition */}
                  </div>
                </div>
                <div className="text-center mt-8">
                  <a
                    href={ORDER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white text-xl font-black rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl uppercase tracking-wide"
                  >
                    🔥 Objednaj TERAZ! 🔥
                  </a>
                  <p className="text-amber-300/60 text-xs mt-3">Kým je ešte dostupný...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauces section removed per user request */}

      {/* Objednávky + Lokalita a Otváracie hodiny - Combined Section with Aurora */}
      <section className="relative py-20 px-4 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900"></div>
        <div className="absolute inset-0 bg-black/40" aria-hidden />

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

          <div id="lokalita" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
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
                    <span>12:00 - 21:00</span>
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
                text: "S deťmi sme si dali Happy Bros Meal a oni boli nadšené! Konečne kvalitné detské menu. Vyprážané Oreo top!",
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
                text: "Halloumi prekvapil! Konečne niečo aj pre vegetariánov. Čerstvý šalát a skvelá atmosféra.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-800/40 to-purple-900/40"></div>
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
