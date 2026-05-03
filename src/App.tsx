/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Car, 
  MapPin, 
  Clock, 
  Shield, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';
import { useState, useRef } from 'react';

const cars = [
  {
    name: "Lamborghini Huracán Evo",
    price: "$1,200/day",
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=1000&auto=format&fit=crop",
    accel: "2.9s",
    topSpeed: "202 mph"
  },
  {
    name: "Ferrari F8 Tributo",
    price: "$1,500/day",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop",
    accel: "2.8s",
    topSpeed: "211 mph"
  },
  {
    name: "Rolls-Royce Ghost",
    price: "$1,800/day",
    image: "https://images.unsplash.com/photo-1631215539281-af7cb1cc3c8a?q=80&w=1000&auto=format&fit=crop",
    accel: "4.7s",
    topSpeed: "155 mph"
  },
  {
    name: "Porsche 911 GT3",
    price: "$1,100/day",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1000&auto=format&fit=crop",
    accel: "3.2s",
    topSpeed: "197 mph"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-semibold tracking-tighter"
        >
          CAPITAL EXOTICS
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Collection', 'Services', 'Membership', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <button className="px-6 py-2 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-brand-black border-b border-white/10 p-10 flex flex-col gap-6 md:hidden"
        >
          {['Collection', 'Services', 'Membership', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xl uppercase tracking-widest" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <button className="w-full py-4 border border-white text-xs uppercase tracking-widest mt-4">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden grainy-bg">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26859203199?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury car dashboard" 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/20 to-brand-black" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.5em] text-white/50 mb-6"
        >
          The Zenith of Motion
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-9xl font-display font-semibold tracking-tighter leading-none mb-8"
        >
          UNCOMPROMISED<br />
          <span className="font-serif italic font-normal">PRECISION</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.2em] font-semibold hover:bg-transparent hover:text-white border border-white transition-all duration-500">
            View Collection
          </button>
          <button className="px-10 py-5 border border-white/30 text-xs uppercase tracking-[0.2em] font-semibold hover:border-white transition-all duration-500">
            Our Legacy
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const Collection = () => {
  return (
    <section id="collection" className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Fleet Selection 2024</span>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight">The Curation</h2>
          </div>
          <p className="max-w-md text-white/50 text-sm leading-relaxed">
            A meticulously maintained ensemble of the world's most sought-after machinery. 
            Engineered for those who demand excellence as standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {cars.map((car, i) => (
            <motion.div 
              key={car.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest font-medium">{car.price}</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-display mb-2">{car.name}</h3>
                  <div className="flex gap-6 text-[10px] uppercase tracking-widest text-white/40 font-medium">
                    <span>0-60: {car.accel}</span>
                    <span>Top: {car.topSpeed}</span>
                  </div>
                </div>
                <div className="p-3 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Airport Chauffeur",
      desc: "Discreet, secure transportation from regional hubs to your final destination.",
      icon: <MapPin size={24} />
    },
    {
      title: "Luxury Concierge",
      desc: "Bespoke arrangements for travel, dinning, and exclusive event access.",
      icon: <Shield size={24} />
    },
    {
      title: "Long-term Fleet",
      desc: "Preferred rates for extended engagements and corporate requirements.",
      icon: <Clock size={24} />
    }
  ];

  return (
    <section id="services" className="py-32 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display mb-4">Beyond the Drive</h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm">Elevating your experience through dedicated personal services tailored for the discerning traveler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-white/5 hover:border-white/20 transition-all bg-brand-black/30"
            >
              <div className="text-white/40 mb-6">{service.icon}</div>
              <h3 className="text-xl font-display mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-white/5 pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-6xl font-display font-semibold mb-10 tracking-tighter">LET'S CONNECT</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60">
                <Phone size={18} />
                <span className="text-sm font-medium tracking-widest">+1 (800) EXOTICS</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <Mail size={18} />
                <span className="text-sm font-medium tracking-widest">concierge@capitalexotics.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <MapPin size={18} />
                <span className="text-sm font-medium tracking-widest">1200 Luxury Way, Beverly Hills, CA</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold">Company</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold">Social</h4>
              <ul className="space-y-4 text-sm font-light text-white/60">
                <li className="flex items-center gap-2"><Instagram size={14} /><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li className="flex items-center gap-2"><Twitter size={14} /><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li className="flex items-center gap-2"><Facebook size={14} /><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20">
            © 2024 CAPITAL EXOTICS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Collection />
      <Services />
      
      {/* Narrative Section */}
      <section className="py-40 bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block opacity-40">Since 1998</span>
              <h2 className="text-5xl md:text-7xl font-display font-semibold tracking-tighter mb-10 leading-none">
                CRAFTING<br />
                <span className="italic font-serif font-normal">UNFORGETTABLE</span><br />
                MOMENTS
              </h2>
              <p className="text-black/60 text-lg leading-relaxed mb-12 max-w-md">
                We believe that the vehicle you choose is a reflection of your ambition. 
                Capital Exotics was founded on the principle that luxury is not just a 
                possession, but an experience that remains etched in memory.
              </p>
              <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest group">
                Deep Dive into our Story
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-3 bg-black text-white rounded-full"
                >
                  <ChevronRight size={18} />
                </motion.div>
              </button>
            </div>
            <div className="lg:w-1/2 relative">
               <motion.div 
                 initial={{ scale: 1.1, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1.5 }}
                 className="aspect-square bg-neutral-200 overflow-hidden rounded-2xl"
               >
                 <img 
                   src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop" 
                   alt="Classic luxury interior" 
                   className="w-full h-full object-cover grayscale"
                 />
               </motion.div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-black p-1 hidden lg:block">
                  <div className="w-full h-full border border-white/20 flex items-center justify-center p-8 text-center">
                    <p className="text-[10px] uppercase leading-relaxed tracking-widest text-white/60">
                      "Excellence is not an act, but a habit."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
