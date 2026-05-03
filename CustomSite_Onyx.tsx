import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  Gauge, Target, Radio, Cpu, Layers, ArrowLeft, Download, Check, Copy
} from 'lucide-react';



const ChromePeakHero = () => (
  <section className="relative h-screen w-full flex flex-col justify-between p-12 overflow-hidden bg-black text-white font-black italic">
    <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-8">
      <span className="text-[10px] uppercase tracking-[1em]">Peak_Handover</span>
    </div>
    <div className="relative z-10 flex flex-col items-center">
       <h2 className="text-[12vw] tracking-[-0.1em] leading-none uppercase italic italic-90">CHROME</h2>
       <div className="h-2 w-full max-w-4xl bg-white/20" />
       <h2 className="text-[12vw] font-thin tracking-[0.1em] leading-none uppercase -mt-4 opacity-40">P E A K</h2>
    </div>
    <div className="flex justify-between items-center relative z-10">
      <span className="text-4xl font-black">98% EFFICIENCY</span>
      <button className="px-24 py-10 bg-white text-black font-black uppercase text-xl">ENGAGE</button>
    </div>
  </section>
);

const ProcessHero = () => (
  <section className="relative h-screen w-full flex flex-col p-24 overflow-hidden bg-white text-black font-sans">
    <div className="grid grid-cols-12 gap-12 flex-1">
      <div className="col-span-4 border-r border-black/10 pr-12 flex flex-col justify-between">
        <h2 className="text-8xl font-black uppercase leading-none tracking-tighter">THE <br /> PATH.</h2>
        <p className="text-sm opacity-40 uppercase tracking-widest leading-relaxed">Three stages to absolute performance.</p>
      </div>
      <div className="col-span-8 grid grid-rows-3 gap-1 relative">
         {[ {n: "01", t: "IDENTITY VERIFICATION", d: "Secure biometrics and documentation approval via our encrypted vault." },
            {n: "02", t: "FLEET SELECTION", d: "Select your desired apparatus from our live-status Miami inventory." },
            {n: "03", t: "HANDOVER PROTOCOL", d: "GPS-synchronized delivery to your precise global coordinates." }
         ].map((step, i) => (
           <div key={i} className="flex items-center gap-12 group hover:bg-black/5 transition-all p-8 border-b border-black/5">
              <span className="text-6xl font-black italic opacity-10 group-hover:opacity-100 transition-opacity">{step.n}</span>
              <div className="flex flex-col">
                <span className="text-2xl font-bold uppercase mb-2">{step.t}</span>
                <p className="max-w-md text-[10px] opacity-40 uppercase tracking-widest">{step.d}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const JournalHero = () => (
  <section className="relative h-screen w-full p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="flex gap-24 items-start mb-20">
       <span className="text-xs font-black uppercase tracking-[1em] text-[#C5A47E] rotate-90 origin-left translate-y-32">THE_CHRONICLE</span>
       <h2 className="text-[8vw] font-light italic leading-none border-b border-white/5 pb-8">Luxury in <br /> Transition.</h2>
    </div>
    <div className="grid grid-cols-3 gap-16">
       {[1, 2, 3].map(i => (
         <div key={i} className="flex flex-col gap-6 group cursor-pointer">
            <span className="text-[10px] opacity-20 uppercase tracking-[0.4em]">May 02 // 2026</span>
            <h3 className="text-2xl font-bold italic group-hover:text-[#C5A47E] transition-colors">The Evolution of the V12 Hybrid Platform.</h3>
            <p className="text-sm opacity-40 leading-relaxed font-light">An analysis of the architectural shift in modern performance engineering.</p>
         </div>
       ))}
    </div>
  </section>
);

const FashionShowcase = () => (
  <section className="relative h-screen w-full grid grid-cols-12 overflow-hidden bg-[#0a0a0a] text-white">
     <div className="col-span-5 p-24 flex flex-col justify-between border-r border-white/5 relative bg-white/5">
        <div className="flex flex-col gap-8">
           <span className="text-xl italic font-light text-[#C5A47E] mb-8">Selected Series // V.01</span>
           <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase">THE <br /> ITALIAN <br /> <span className="italic font-light text-white opacity-40">STUDY.</span></h2>
        </div>
        <button className="text-2xl font-bold italic border-b-2 border-[#C5A47E] pb-2 w-fit">Request Details</button>
     </div>
     <div className="col-span-7 relative h-full flex items-center justify-center bg-black">
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2670" className="h-[120%] w-full object-cover transform scale-110 grayscale" />
        <div className="absolute top-12 right-12 flex flex-col items-end gap-2">
           <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#C5A47E]">Location</span>
           <span className="text-xl font-bold uppercase italic">Miami_Design_Dist</span>
        </div>
        <div className="absolute bottom-12 right-12 p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
           <span className="text-xs uppercase tracking-[0.3em] font-bold">In Stock // Immediate Departure</span>
        </div>
     </div>
  </section>
);

const StripsLibrary = () => (
  <section className="relative h-screen w-full flex overflow-hidden bg-black text-white font-black italic">
    {["HYBRID", "NATURAL", "TURBO", "TACTICAL"].map((cat, i) => (
      <div key={i} className="flex-1 border-r border-white/10 group cursor-pointer relative overflow-hidden hover:flex-[2] transition-all duration-700">
         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
         <div className="h-full flex flex-col items-center justify-center">
            <span className="text-[10vw] uppercase leading-none vertical-text tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity whitespace-nowrap">{cat}</span>
         </div>
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
            <span className="text-[10px] not-italic tracking-widest uppercase">Explore_Category</span>
            <ArrowRight size={24} className="-rotate-90" />
         </div>
      </div>
    ))}
  </section>
);

const HeroVisual = () => (
  <section className="min-h-screen w-full flex flex-col items-center pt-32 pb-12 px-6 bg-[#0a0a0a] text-white">
    <div className="max-w-4xl w-full text-center mb-24">
       <span className="text-[10px] tracking-[0.8em] text-[#C5A47E] uppercase font-bold mb-6 block">V12_Architecture</span>
       <h1 className="text-5xl md:text-8xl font-light italic leading-[0.9] tracking-tighter mb-8 italic">THE FUTURE OF <br /> ANALOGUE FAST.</h1>
       <p className="text-lg opacity-40 max-w-xl mx-auto italic mb-12">Precision engineered for the discerning few. Explore the limits of the internal combustion engine.</p>
       <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-[#C5A47E] text-black font-black uppercase text-[10px] tracking-widest hover:opacity-90 transition-all">Request Access</button>
          <button className="px-8 py-3 border border-white/20 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all">Protocol_Info</button>
       </div>
    </div>
    <div className="w-full max-w-7xl aspect-video bg-white/5 border border-white/10 overflow-hidden relative group">
       <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
       <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-60" />
    </div>
  </section>
);

export default function GeneratedSite() {
  

  return (
    <div className="font-retro bg-[#050505] text-white w-full min-h-screen overflow-x-hidden">
      
      <motion.div 
        
        
        className="w-full"
      >
        <ChromePeakHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <ProcessHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <JournalHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <FashionShowcase />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <StripsLibrary />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <HeroVisual />
      </motion.div>
    </div>
  );
}