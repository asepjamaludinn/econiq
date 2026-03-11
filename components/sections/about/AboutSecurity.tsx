"use client";

import { useState } from "react";

export default function AboutSecurity() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#E15A2B] flex flex-col items-center justify-center py-24 px-4 overflow-hidden text-center z-20 relative">
      
      <h2 className="text-4xl md:text-7xl font-black uppercase text-[#4A2010] leading-none mb-12">
        TRACK THE NODE <br/> AT A DISTANCE
      </h2>

      {/* Display Animasi Interaktif */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-12 flex justify-center items-end overflow-hidden">
        
        {/* Tab 0: Kamera CCTV (Berayun) */}
        <div className={`absolute bottom-0 transition-opacity duration-500 ${activeTab === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-48 h-48 bg-white rounded-t-full shadow-inner relative flex justify-center items-center overflow-hidden border-b-8 border-gray-300">
             <div className="w-24 h-24 bg-zinc-900 rounded-full animate-cctv flex items-center justify-center relative">
               <div className="w-8 h-8 bg-red-500 rounded-full animate-pulse shadow-[0_0_20px_red]" />
             </div>
          </div>
        </div>

        {/* Tab 1: Proteksi (ID Card masuk ke scanner) */}
        <div className={`absolute bottom-0 transition-opacity duration-500 w-full h-full flex flex-col items-center justify-end ${activeTab === 1 ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
          <div className={`w-32 h-48 bg-white rounded-xl shadow-2xl border-2 border-gray-200 flex flex-col items-center pt-4 transition-transform duration-1000 ${activeTab === 1 ? 'translate-y-8' : '-translate-y-full'}`}>
             <div className="w-16 h-16 bg-gray-300 rounded-full mb-4" /> {/* Foto ID */}
             <div className="w-20 h-2 bg-gray-300 rounded mb-2" />
             <div className="w-12 h-2 bg-gray-300 rounded" />
          </div>
          <div className="w-48 h-12 bg-zinc-900 rounded-t-2xl z-20 border-t-4 border-[#660DFF]" /> {/* Scanner */}
        </div>

        {/* Tab 2: Anti-Vandalismo (Koin berjatuhan) */}
        <div className={`absolute bottom-0 transition-opacity duration-500 w-full h-full flex justify-center items-center ${activeTab === 2 ? 'opacity-100' : 'opacity-0'}`}>
           <div className={`w-20 h-32 bg-zinc-900 rounded-full origin-bottom transition-transform duration-[2000ms] ${activeTab === 2 ? 'rotate-12' : '-rotate-45'}`} /> {/* Representasi tangan */}
           {/* Animasi Koin */}
           {activeTab === 2 && (
             <>
               <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-yellow-400 animate-coin-drop delay-100" />
               <div className="absolute top-5 right-20 w-6 h-6 rounded-full bg-yellow-400 animate-coin-drop delay-300" />
               <div className="absolute top-20 right-10 w-10 h-10 rounded-full bg-yellow-400 animate-coin-drop delay-500" />
             </>
           )}
        </div>
      </div>

      {/* Buttons Tab */}
      <div className="flex flex-wrap justify-center gap-4 bg-white/20 p-2 rounded-full backdrop-blur-md">
        {["Monitoring", "Protection", "Anti-Tamper"].map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-colors ${
              activeTab === idx ? "bg-white text-[#E15A2B]" : "text-white hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        .animate-cctv { animation: cctv-swing 4s ease-in-out infinite alternate; }
        @keyframes cctv-swing { 0% { transform: rotate(-30deg); } 100% { transform: rotate(30deg); } }
        
        .animate-coin-drop { animation: coin-drop 2s ease-in infinite; }
        @keyframes coin-drop { 
          0% { transform: translateY(-100px) rotate(0deg); opacity: 0; } 
          50% { opacity: 1; }
          100% { transform: translateY(200px) rotate(360deg); opacity: 0; } 
        }
      `}</style>
    </section>
  );
}