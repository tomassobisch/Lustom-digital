import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X,
  ArrowRight,
  Plus,
  Play
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled ? 'py-4 glass-nav' : 'py-12 bg-transparent'}`}>
      <div className="max-w-[1800px] mx-auto px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-12 group cursor-pointer"
        >
          <img src={logo} alt="Lustom" className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-1000 group-hover:scale-110" />
          <div className="hidden sm:flex flex-col border-l border-black/5 pl-12">
            <span className="text-text-primary font-black serif-title text-4xl leading-none tracking-tightest">Lustom</span>
            <span className="text-accent-dark font-black tracking-[0.6em] text-[8px] uppercase mt-2">Digital Agency</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-20">
          {['Expertise', 'The Method', 'Inquiry'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[9px] font-black text-text-primary/40 hover:text-text-primary transition-all uppercase tracking-[0.4em] relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-text-primary transition-all duration-700 group-hover:w-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-text-primary text-white px-12 py-5 rounded-full font-black text-[9px] uppercase tracking-mega-widest shadow-2xl transition-all"
          >
            Start a Project
          </motion.button>
        </div>

        <button className="lg:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full h-screen bg-bg-primary p-24 flex flex-col gap-16 lg:hidden"
          >
            {['Expertise', 'The Method', 'Inquiry'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="serif-title text-8xl font-light text-text-primary uppercase tracking-tighter hover:italic transition-all" onClick={() => setIsOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-bg-primary">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: yText }}
        className="absolute top-1/4 left-10 opacity-5 pointer-events-none"
      >
        <span className="serif-title text-[400px] font-black leading-none uppercase select-none">Lustom</span>
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="serif-title text-8xl md:text-[180px] font-light text-text-primary leading-[0.85] uppercase tracking-tightest mb-16">
                Redefining <br />
                <span className="italic font-normal lowercase ml-[-0.05em] text-gradient-earth">Digital Architecture</span>
              </h1>
              <div className="flex flex-col md:flex-row items-start gap-12">
                 <p className="max-w-md text-text-primary/50 text-xl font-light leading-relaxed tracking-tight">
                    We transform traditional value into scalable digital assets. High-end engineering meets elite aesthetic.
                 </p>
                 <motion.button 
                   whileHover={{ scale: 1.1, rotate: -2 }}
                   className="w-24 h-24 rounded-full border border-black/10 flex items-center justify-center group"
                 >
                   <Play size={24} className="group-hover:fill-black transition-all" />
                 </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative">
             <motion.div 
               style={{ opacity }}
               className="vertical-text absolute -left-20 top-0 text-[10px] font-black uppercase tracking-[0.8em] text-accent-dark"
             >
                Established 2026 — Lustom Digital
             </motion.div>
             <div className="relative aspect-[3/4] overflow-hidden rounded-[60px] group">
                <img src={logo} alt="Lustom Agency" className="w-full h-full object-contain bg-white/50 scale-75 group-hover:scale-100 transition-all duration-1000" />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-12 flex items-center gap-12">
         <div className="flex gap-4">
            <div className="w-2 h-2 bg-text-primary rounded-full animate-ping"></div>
            <span className="text-[10px] font-black uppercase tracking-mega-widest">Now Scaling Brands Globally</span>
         </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle, align = 'left' }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-32 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-accent-dark font-black uppercase tracking-[1em] text-[9px] mb-8 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="serif-title text-7xl md:text-[120px] font-light text-text-primary uppercase tracking-tighter leading-none"
      >
        {title}
      </motion.h2>
    </div>
  );
};

const ExpertiseCard = ({ title, desc, index, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="organic-card p-16 h-full flex flex-col justify-between"
  >
    <div>
      <span className="serif-title text-8xl font-extralight text-black/5 leading-none mb-12 block">{index}</span>
      <h3 className="serif-title text-4xl font-normal text-text-primary uppercase tracking-tight mb-8 italic">{title}</h3>
      <p className="text-text-primary/50 text-lg font-medium leading-relaxed">{desc}</p>
    </div>
    <div className="mt-20 flex items-center justify-between border-t border-black/5 pt-10">
      <span className="text-[9px] font-black uppercase tracking-widest text-accent-dark">Inquiry</span>
      <Plus size={20} strokeWidth={1} />
    </div>
  </motion.div>
);

const Services = () => (
  <section id="expertise" className="py-60 bg-white">
    <div className="max-w-[1600px] mx-auto px-12">
      <SectionTitle title="The Expertise" subtitle="Our Domain" />
      <div className="grid md:grid-cols-3 gap-12">
        <ExpertiseCard 
          index="01"
          title="Presence"
          desc="Social & Content Strategy that captures attention and converts it into brand authority."
          delay={0.1}
        />
        <ExpertiseCard 
          index="02"
          title="Engineering"
          desc="Robust Web Infrastructure and Custom Software designed for high-load performance."
          delay={0.2}
        />
        <ExpertiseCard 
          index="03"
          title="Performance"
          desc="Data-driven Advertising and intelligent Automation that guarantees scalable ROI."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const TheMethod = () => (
  <section id="themethod" className="py-60 bg-bg-primary overflow-hidden">
    <div className="max-w-[1600px] mx-auto px-12 relative">
      <div className="grid lg:grid-cols-2 gap-40 items-center">
         <div className="relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="aspect-square bg-white rounded-[100px] shadow-2xl flex items-center justify-center p-20 overflow-hidden"
            >
               <motion.img 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 src={logo} 
                 alt="Concept" 
                 className="w-full h-full object-contain opacity-5 grayscale" 
               />
               <div className="absolute flex flex-col items-center">
                  <span className="serif-title text-[200px] font-extralight text-text-primary italic leading-none">LU</span>
                  <span className="text-[10px] font-black uppercase tracking-[1em] text-accent-dark">Process</span>
               </div>
            </motion.div>
         </div>

         <div className="space-y-32">
            <SectionTitle title="Strategic <br/> Blueprint" subtitle="The Method" />
            <div className="space-y-20">
               {[
                 { t: "Friction Analysis", d: "We dissect your business architecture to find technical and strategic bottlenecks." },
                 { t: "Stack Injection", d: "We deploy the world's most powerful digital tools tailored to your brand identity." },
                 { t: "Channel Mastery", d: "We dominate the channels where your high-value clients are already spending their time." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1 }}
                   className="group border-b border-black/5 pb-12 cursor-pointer"
                 >
                    <h4 className="serif-title text-4xl font-normal text-text-primary uppercase tracking-tight group-hover:italic transition-all">{item.t}</h4>
                    <p className="mt-6 text-text-primary/40 font-medium text-xl max-w-md leading-relaxed">{item.d}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </div>
  </section>
);

const Inquiry = () => (
  <section id="inquiry" className="py-60 bg-white">
    <div className="max-w-[1200px] mx-auto px-12">
      <div className="text-center mb-40">
        <SectionTitle title="Open Inquiry" subtitle="New Chapters" align="center" />
        <p className="max-w-2xl mx-auto text-text-primary/50 text-2xl font-light mt-12 leading-relaxed">
          We only take a limited number of high-stakes projects per year. <br />
          Start the conversation below.
        </p>
      </div>

      <form className="space-y-24">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-4">
             <span className="text-[9px] font-black uppercase tracking-mega-widest text-black/20">Full Name</span>
             <input type="text" className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-3xl placeholder:text-black/5 uppercase tracking-tighter" placeholder="Lustom Client" />
          </div>
          <div className="space-y-4">
             <span className="text-[9px] font-black uppercase tracking-mega-widest text-black/20">Email Address</span>
             <input type="email" className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-3xl placeholder:text-black/5 uppercase tracking-tighter" placeholder="HELLO@MARK.COM" />
          </div>
        </div>
        
        <div className="space-y-4">
           <span className="text-[9px] font-black uppercase tracking-mega-widest text-black/20">Vision</span>
           <textarea className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-3xl h-40 resize-none placeholder:text-black/5 uppercase tracking-tighter" placeholder="DESCRIBE YOUR GOALS"></textarea>
        </div>

        <div className="flex justify-center pt-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-12 bg-text-primary text-white px-20 py-10 rounded-full font-black text-xs uppercase tracking-[0.6em] transition-all"
          >
            Submit Proposal
            <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
          </motion.button>
        </div>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-40 bg-bg-primary border-t border-black/5">
    <div className="max-w-[1800px] mx-auto px-12">
      <div className="grid lg:grid-cols-12 gap-24 items-start mb-40">
        <div className="lg:col-span-6 space-y-12">
           <div className="flex items-center gap-12">
              <img src={logo} alt="Lustom" className="w-24 h-24" />
              <div className="flex flex-col">
                 <span className="serif-title text-5xl font-black tracking-tightest uppercase italic">Lustom</span>
                 <span className="text-accent-dark font-black tracking-mega-widest text-[10px] uppercase mt-2">Digital Agency</span>
              </div>
           </div>
           <p className="max-w-sm text-text-primary/40 font-bold uppercase tracking-[0.4em] text-[11px] leading-loose">
              Technical Excellence. <br />
              Elite Design Standards. <br />
              Exponential Returns.
           </p>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-24">
          <div className="space-y-8 flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-mega-widest opacity-20">Studio</span>
            <a href="#expertise" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">Expertise</a>
            <a href="#themethod" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">Method</a>
          </div>
          <div className="space-y-8 flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-mega-widest opacity-20">Connect</span>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">Instagram</a>
          </div>
          <div className="space-y-8 flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-mega-widest opacity-20">Legal</span>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-accent-dark transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12">
        <p className="text-text-primary/20 text-[10px] font-black uppercase tracking-[0.6em]">© 2026 Lustom Digital Agency — Engineered for results.</p>
        <div className="flex gap-4 items-center opacity-20">
           <span className="w-12 h-[1px] bg-black"></span>
           <span className="text-[10px] font-black uppercase tracking-widest italic">Built for the future</span>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-bg-primary min-h-screen font-sans selection:bg-text-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TheMethod />
        <Inquiry />
      </main>
      <Footer />
    </div>
  );
}

export default App;
