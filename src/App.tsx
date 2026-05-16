import { useState, useEffect } from 'react';
import { 
  Menu, 
  X,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
    <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled ? 'py-4 nav-blur border-b border-black/5 shadow-sm' : 'py-12 bg-transparent'}`}>
      <div className="max-w-[1800px] mx-auto px-10 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-8 group cursor-pointer"
        >
          <img src={logo} alt="Lustom Digital Logo" className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-1000 group-hover:scale-105" />
          <div className="flex flex-col border-l border-black/10 pl-8">
            <span className="text-text-primary font-light serif-title text-3xl md:text-4xl leading-none">Lustom</span>
            <span className="text-accent-dark font-black tracking-mega-widest text-[9px] uppercase mt-2">Digital Agency</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-20">
          {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold text-text-primary/40 hover:text-text-primary transition-all uppercase tracking-mega-widest elegant-link">
              {item}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border-[0.5px] border-text-primary/20 text-text-primary px-12 py-4 rounded-full font-bold text-[10px] uppercase tracking-mega-widest hover:bg-text-primary hover:text-white transition-all duration-700"
          >
            Contacto
          </motion.button>
        </div>

        <button className="lg:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full h-screen bg-bg-primary p-20 flex flex-col gap-12 lg:hidden shadow-2xl"
          >
            {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="serif-title text-7xl font-light text-text-primary uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-60 pb-32 overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none grayscale">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-10 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="mb-20"
          >
            <span className="text-accent-dark font-black uppercase tracking-mega-widest text-[9px] mb-8 block">
              Redefining Digital Presence
            </span>
            <motion.h1 
              style={{ y: y1, opacity }}
              className="serif-title text-8xl md:text-[240px] font-extralight text-text-primary leading-[0.8] uppercase tracking-tighter"
            >
              Lustom <br />
              <span className="italic font-normal tracking-[-0.05em] lowercase ml-[-0.1em]">Digital</span>
            </motion.h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="max-w-2xl text-text-primary/50 text-xl md:text-2xl font-light mb-24 leading-relaxed tracking-tight"
          >
            Digitalizamos negocios de alto valor mediante arquitectura de sistemas sofisticada y una estética impecable.
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 w-full"
          >
            <button className="group relative w-full md:w-auto px-20 py-8 rounded-full bg-text-primary text-white font-bold text-[10px] uppercase tracking-mega-widest overflow-hidden transition-all hover:bg-accent-dark shadow-2xl">
              Iniciar Proyecto
            </button>
            <div className="hidden md:block w-px h-12 bg-black/10"></div>
            <button className="w-full md:w-auto text-text-primary font-bold text-[10px] uppercase tracking-mega-widest elegant-link py-4">
              Ver el Dossier
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-6">
         <span className="text-[8px] font-black uppercase tracking-mega-widest">Scroll</span>
         <div className="w-[0.5px] h-20 bg-text-primary/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 80] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-text-primary"
            />
         </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, category, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
    viewport={{ once: true }}
    className="group border-t border-black/10 py-16 flex flex-col md:flex-row justify-between items-start gap-12 cursor-pointer hover:bg-black/[0.01] transition-all px-4"
  >
    <div className="space-y-4">
      <span className="text-[9px] font-black text-accent-dark uppercase tracking-mega-widest">{category}</span>
      <h3 className="serif-title text-6xl font-light text-text-primary uppercase tracking-tighter group-hover:italic transition-all duration-700">
        {title}
      </h3>
    </div>
    <div className="max-w-md">
      <p className="text-text-primary/40 font-medium leading-relaxed text-lg mb-8">
        {desc}
      </p>
      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-text-primary group-hover:text-white transition-all duration-700">
        <Plus size={20} strokeWidth={1} />
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-60 bg-white relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-40 gap-20">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="serif-title text-8xl md:text-[140px] font-extralight text-text-primary uppercase tracking-tighter leading-[0.8]"
        >
          Expertise <br /> <span className="italic font-normal lowercase ml-[-0.05em]">Digital</span>
        </motion.h2>
        <p className="max-w-xs text-text-primary/40 font-medium uppercase tracking-[0.2em] text-[10px] leading-loose mb-4">
          Un enfoque holístico <br /> para la transformación <br /> de marcas líderes.
        </p>
      </div>

      <div className="space-y-0">
        <ServiceItem 
          category="Growth"
          title="Social & Contenido"
          desc="Estrategias virales que combinan estética de lujo con algoritmos de conversión de alta gama."
          delay={0.1}
        />
        <ServiceItem 
          category="Engineering"
          title="Web & Software"
          desc="Sistemas robustos con un rendimiento técnico impecable y una interfaz visualmente superior."
          delay={0.2}
        />
        <ServiceItem 
          category="Performance"
          title="Ads & Automatización"
          desc="Optimizamos el ROI mediante inteligencia de datos y automatización de procesos operativos."
          delay={0.3}
        />
        <div className="border-t border-black/10"></div>
      </div>
    </div>
  </section>
);

const Strategy = () => (
  <section id="estrategia" className="py-60 bg-bg-primary">
    <div className="max-w-[1400px] mx-auto px-10 grid lg:grid-cols-2 gap-40 items-start">
      <div className="sticky top-40 space-y-12">
        <span className="text-accent-dark font-black uppercase tracking-mega-widest text-[9px]">The Blueprint</span>
        <h2 className="serif-title text-7xl md:text-9xl font-light text-text-primary uppercase tracking-tighter leading-none">Visión <br /><span className="italic font-normal lowercase">Quirúrgica</span></h2>
        <div className="w-40 h-px bg-text-primary/20"></div>
        <p className="text-text-primary/50 text-2xl font-light leading-relaxed max-w-sm">
          No somos generalistas. Somos especialistas en el escalado de activos digitales.
        </p>
      </div>

      <div className="space-y-40 pt-20">
        {[
          { n: "01", t: "Diagnóstico", d: "Analizamos la arquitectura de tu negocio para identificar cada punto de fricción técnica y estratégica." },
          { n: "02", t: "Despliegue", d: "Implementamos stacks tecnológicos de vanguardia diseñados para la velocidad y el crecimiento autónomo." },
          { n: "03", t: "Domación", d: "Controlamos y optimizamos cada canal de captación para asegurar una dominancia absoluta en el mercado." }
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10 group"
          >
            <div className="serif-title text-[120px] font-extralight text-text-primary/5 leading-none transition-all duration-700 group-hover:text-accent-dark/20">{step.n}</div>
            <h4 className="serif-title text-4xl font-normal text-text-primary uppercase tracking-tight italic">{step.t}</h4>
            <p className="text-text-primary/40 font-medium leading-relaxed max-w-md text-xl">{step.d}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="py-60 bg-white">
    <div className="max-w-[1000px] mx-auto px-10">
      <div className="text-center mb-32">
        <h2 className="serif-title text-8xl md:text-[180px] font-extralight text-text-primary uppercase tracking-tighter leading-none mb-10">
           Conecta
        </h2>
        <div className="section-divider"></div>
      </div>

      <form className="space-y-24">
        <div className="grid md:grid-cols-2 gap-20">
          <input type="text" className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-2xl placeholder:text-black/20" placeholder="Nombre" />
          <input type="email" className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-2xl placeholder:text-black/20" placeholder="Email" />
        </div>
        <textarea className="w-full bg-transparent border-b border-black/10 py-6 text-text-primary outline-none focus:border-text-primary transition-all font-light text-2xl h-40 resize-none placeholder:text-black/20" placeholder="Tu Visión"></textarea>

        <div className="flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-text-primary text-white px-24 py-8 rounded-full font-bold text-[10px] uppercase tracking-mega-widest transition-all shadow-2xl shadow-black/20"
          >
            Solicitar Invitación
          </motion.button>
        </div>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 bg-bg-primary border-t border-black/5">
    <div className="max-w-[1400px] mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-32 mb-32">
        <div className="space-y-12">
          <div className="flex items-center gap-10">
            <img src={logo} alt="Lustom Digital" className="w-24 h-24" />
            <div className="flex flex-col border-l border-black/10 pl-10">
               <span className="text-text-primary font-light serif-title text-4xl leading-none uppercase">Lustom</span>
               <span className="text-accent-dark font-black uppercase tracking-mega-widest text-[9px] mt-2">Digital Agency</span>
            </div>
          </div>
          <p className="text-text-primary/40 font-medium uppercase tracking-[0.4em] text-[10px] max-w-xs leading-loose">
             Excelencia técnica. <br />
             Estética impecable. <br />
             Crecimiento exponencial.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-8">
            <span className="text-text-primary font-black uppercase text-[10px] tracking-mega-widest opacity-30">Studio</span>
            <a href="#servicios" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[9px] tracking-mega-widest transition-colors elegant-link w-fit">Servicios</a>
            <a href="#estrategia" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[9px] tracking-mega-widest transition-colors elegant-link w-fit">Blueprint</a>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-text-primary font-black uppercase text-[10px] tracking-mega-widest opacity-30">Social</span>
            <div className="flex gap-8">
               <a href="#" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[9px] transition-colors elegant-link">IG</a>
               <a href="#" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[9px] transition-colors elegant-link">LN</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-text-primary/20 text-[9px] font-bold uppercase tracking-mega-widest">© 2026 Lustom Digital Agency — Built for the 1%</p>
        <p className="text-text-primary/20 text-[9px] font-bold uppercase tracking-mega-widest italic">All rights reserved</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-bg-primary min-h-screen font-sans selection:bg-accent-dark selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Strategy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
