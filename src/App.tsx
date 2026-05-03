/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Clock, MapPin, Phone, Mail, Menu
} from 'lucide-react';

const ChromePeakHero = () => (
  <section className="relative h-screen w-full flex flex-col justify-between p-12 overflow-hidden bg-black text-white font-black italic">
    <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-8">
      <span className="text-[10px] uppercase tracking-[1em] font-sans not-italic font-bold">CAPITAL EXOTICS // DC // MD // VA</span>
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold not-italic">
        <span>Fleet</span>
        <span>Services</span>
        <span>Contact</span>
      </div>
    </div>
    <div className="relative z-10 flex flex-col items-center">
       <h2 className="text-[12vw] tracking-[-0.1em] leading-none uppercase italic">CAPITAL</h2>
       <div className="h-2 w-full max-w-4xl bg-white" />
       <h2 className="text-[12vw] font-bold tracking-[0.1em] leading-none uppercase -mt-4 opacity-40">EXOTICS</h2>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
      <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">The Ultimate Fleet.</span>
      <button className="px-24 py-10 bg-white text-black font-black uppercase text-xl hover:bg-neutral-200 transition-colors">ENGAGE</button>
    </div>
  </section>
);

const ProcessHero = () => (
  <section className="relative h-screen w-full flex flex-col p-12 md:p-24 overflow-hidden bg-white text-black font-sans">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 flex-1">
      <div className="col-span-1 md:col-span-4 border-b md:border-b-0 md:border-r border-black/10 pb-12 md:pb-0 md:pr-12 flex flex-col justify-between">
        <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">THE <br /> PROTOCOL.</h2>
        <p className="text-sm opacity-40 uppercase tracking-widest leading-relaxed">Three stages to absolute luxury.</p>
      </div>
      <div className="col-span-1 md:col-span-8 grid grid-rows-3 gap-1 relative">
         {[ {n: "01", t: "IDENTITY VERIFICATION", d: "Secure biometrics and documentation approval via our encrypted vault." },
            {n: "02", t: "FLEET SELECTION", d: "Select your desired apparatus from our live-status DMV inventory." },
            {n: "03", t: "HANDOVER PROTOCOL", d: "GPS-synchronized delivery to your precise location by our concierge." }
         ].map((step, i) => (
           <div key={i} className="flex items-center gap-12 group hover:bg-black/5 transition-all p-8 border-b border-black/5">
              <span className="text-4xl md:text-6xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity">{step.n}</span>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold uppercase mb-2">{step.t}</span>
                <p className="max-w-md text-[10px] opacity-40 uppercase tracking-widest leading-relaxed">{step.d}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const JournalHero = () => (
  <section className="relative h-screen w-full p-12 md:p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-20">
       <span className="text-xs font-black uppercase tracking-[1em] text-white rotate-0 md:rotate-90 origin-left md:translate-y-32 mb-4 md:mb-0">THE_CHRONICLE</span>
       <h2 className="text-5xl md:text-8xl font-bold italic leading-none border-b border-white/5 pb-8">Luxury in <br /> Transition.</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
       {[
         { date: "May 02 // 2026", title: "The Evolution of the V12 Hybrid Platform." },
         { date: "April 28 // 2026", title: "Chauffeur Etiquette: The Silent Standard." },
         { date: "April 15 // 2026", title: "Aerodynamics of the Modern Supercar." }
       ].map((item, i) => (
         <div key={i} className="flex flex-col gap-6 group cursor-pointer border-l border-white/10 pl-6">
            <span className="text-[10px] opacity-20 uppercase tracking-[0.4em]">{item.date}</span>
            <h3 className="text-xl md:text-2xl font-bold italic group-hover:text-neutral-400 transition-colors">{item.title}</h3>
            <p className="text-sm opacity-40 leading-relaxed font-light">An analysis of the architectural shift in modern performance engineering and lifestyle concierge.</p>
         </div>
       ))}
    </div>
  </section>
);

const FashionShowcase = () => (
  <section className="relative h-screen w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-[#0a0a0a] text-white">
     <div className="col-span-1 md:col-span-5 p-12 md:p-24 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative bg-white/5 z-10">
        <div className="flex flex-col gap-8">
           <span className="text-xl italic font-bold text-white mb-8">Selected Series // V.01</span>
           <h2 className="text-6xl md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase">THE <br /> EXOTIC <br /> <span className="italic font-bold text-white opacity-40">STUDY.</span></h2>
        </div>
        <button className="text-xl md:text-2xl font-bold italic border-b-2 border-white pb-2 w-fit mt-12 hover:opacity-70 transition-opacity">Request Details</button>
     </div>
     <div className="col-span-1 md:col-span-7 relative h-full flex items-center justify-center bg-black">
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2670" className="h-full w-full object-cover grayscale opacity-50 transition-opacity duration-1000" />
        <div className="absolute top-12 right-12 flex flex-col items-end gap-2 text-right">
           <span className="text-[10px] uppercase font-black tracking-[0.5em] text-white opacity-40">Location</span>
           <span className="text-xl font-bold uppercase italic">Washington_DC</span>
        </div>
        <div className="absolute bottom-12 left-12 md:left-auto md:right-12 p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
           <span className="text-xs uppercase tracking-[0.3em] font-bold">In Stock // Immediate Departure</span>
        </div>
     </div>
  </section>
);

const StripsLibrary = () => (
  <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black text-white font-black italic">
    {["HYBRID", "NATURAL", "TURBO", "TACTICAL"].map((cat, i) => (
      <div key={i} className="flex-1 border-b md:border-b-0 md:border-r border-white/10 group cursor-pointer relative overflow-hidden hover:flex-[2] transition-all duration-700">
         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="h-full flex flex-col items-center justify-center py-20">
            <span className="text-6xl md:text-[10vw] uppercase leading-none md:vertical-text tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity whitespace-nowrap">{cat}</span>
         </div>
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 hidden md:flex">
            <span className="text-[10px] not-italic tracking-widest uppercase">Explore_Category</span>
            <ArrowRight size={24} className="-rotate-90" />
         </div>
      </div>
    ))}
  </section>
);

const HeroVisual = () => (
  <section className="min-h-screen w-full flex flex-col items-center pt-32 pb-12 px-6 bg-[#0a0a0a] text-white border-t border-white/5">
    <div className="max-w-4xl w-full text-center mb-24">
       <span className="text-[10px] tracking-[0.8em] text-white/40 uppercase font-bold mb-6 block">V12_Architecture</span>
       <h1 className="text-5xl md:text-8xl font-bold italic leading-[0.9] tracking-tighter mb-8 italic">THE FUTURE OF <br /> ANALOGUE FAST.</h1>
       <p className="text-lg opacity-40 max-w-xl mx-auto italic mb-12 uppercase tracking-widest text-sm font-bold">Capital Exotics: Engineered for the discerning few.</p>
       <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-12 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-neutral-200 transition-all">Request Access</button>
          <button className="px-12 py-4 border border-white/20 font-black uppercase text-[10px] tracking-widest hover:border-white transition-all">Protocol_Info</button>
       </div>
    </div>
    <div className="w-full max-w-7xl aspect-video bg-white/5 border border-white/10 overflow-hidden relative group">
       <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-105" />
       <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-white p-12 md:p-24 border-t border-white/10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-6">
        <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8">CAPITAL EXOTICS.</h3>
        <p className="text-sm opacity-40 max-w-sm uppercase tracking-widest leading-relaxed">The pinnacle of exotic rentals and luxury lifestyle concierge in the DMV area.</p>
      </div>
      <div className="md:col-span-3">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-20 block mb-6">Contact</span>
        <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
           <a href="mailto:concierge@capitalexotics.com" className="hover:opacity-60 transition-opacity">E: Concierge@CapitalExotics.com</a>
           <a href="tel:+15550123" className="hover:opacity-60 transition-opacity">T: +1 (555) 000-0000</a>
        </div>
      </div>
      <div className="md:col-span-3">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-20 block mb-6">Social</span>
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white cursor-pointer transition-colors font-bold uppercase text-[10px]">IG</div>
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white cursor-pointer transition-colors font-bold uppercase text-[10px]">TW</div>
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white cursor-pointer transition-colors font-bold uppercase text-[10px]">FB</div>
        </div>
      </div>
    </div>
    <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-20 gap-4">
      <span>© 2024 CAPITAL EXOTICS. ALL RIGHTS RESERVED.</span>
      <span>ESTABLISHED IN THE DMV.</span>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#050505] text-white w-full min-h-screen overflow-x-hidden selection:bg-white selection:text-black font-sans">
      <ChromePeakHero />
      <ProcessHero />
      <JournalHero />
      <FashionShowcase />
      <StripsLibrary />
      <HeroVisual />
      <Footer />
    </div>
  );
}

