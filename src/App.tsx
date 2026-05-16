import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X,
  Layers,
  Zap,
  ShieldCheck,
  ChevronRight
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 nav-blur border-b border-white/10' : 'py-10 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
            <img src={logo} alt="Lustom Digital Logo" className="relative w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3" />
          </div>
          <div className="flex flex-col">
            <span className="text-text-primary font-black tracking-tighter text-3xl md:text-5xl uppercase leading-none italic">Lustom<span className="text-accent">Digital</span></span>
            <span className="text-[10px] text-accent font-black tracking-[0.8em] uppercase mt-1">Digital Powerhouse</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-12">
          {['Servicios', 'Estrategia', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black text-text-primary/50 hover:text-accent transition-all uppercase tracking-[0.4em] relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-dark transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-accent to-accent-dark text-white px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            Empieza Ahora
          </motion.button>
        </div>

        <button className="lg:hidden text-text-primary p-3 bg-white/5 rounded-2xl border border-white/10" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-0 right-0 w-full h-screen bg-bg-primary/95 backdrop-blur-3xl p-12 flex flex-col items-center justify-center gap-12 lg:hidden"
          >
            <button className="absolute top-10 right-10 text-white" onClick={() => setIsOpen(false)}><X size={40} /></button>
            {['Servicios', 'Estrategia', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-6xl font-black text-white uppercase tracking-tighter italic" onClick={() => setIsOpen(false)}>{item}</a>
            ))}
            <button className="mt-12 bg-accent text-white px-12 py-6 rounded-2xl font-black text-lg uppercase italic tracking-widest shadow-2xl">
               Solicitar Llamada →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-bg-primary glow-mesh">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="mb-10"
          >
            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[9px] font-black uppercase tracking-[0.6em] backdrop-blur-md inline-flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Future-Ready Solutions
            </div>
          </motion.div>

          <motion.div style={{ y: y1, scale }}>
            <h1 className="text-6xl md:text-[180px] font-black text-white leading-[0.8] uppercase tracking-tighter italic mb-12">
              Lustom <br />
              <span className="text-gradient">Digital</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl text-text-primary/50 text-lg md:text-2xl font-medium mb-16 leading-tight tracking-wide"
          >
            Ingeniería digital de alto rendimiento. <br /> 
            Transformamos tu visión en un ecosistema de crecimiento exponencial.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 w-full"
          >
            <button className="group w-full md:w-auto bg-white text-bg-primary px-12 py-6 rounded-2xl font-black text-sm uppercase italic hover:bg-accent transition-all flex items-center justify-center gap-4 shadow-2xl">
              Escalar mi Negocio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full md:w-auto bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black text-sm uppercase italic hover:bg-white/10 transition-all">
              Nuestra Estrategia
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-[40px] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
    <div className="glass-card p-12 rounded-[40px] h-full relative overflow-hidden transition-all duration-500 group-hover:-translate-y-4">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-all"></div>
      
      <div className="mb-10 inline-flex w-16 h-16 bg-white/5 rounded-2xl items-center justify-center text-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-primary/40 font-medium leading-relaxed group-hover:text-text-primary/80 transition-colors">
        {desc}
      </p>

      <div className="mt-10 flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0">
        Detalles <ChevronRight size={14} />
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-48 bg-bg-primary relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-32">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4"
        >
          Agencia 360°
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.85]"
        >
          Infraestructura <br /> <span className="text-gradient">Digital</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <FeatureCard 
          icon={Layers}
          delay={0.1}
          title="Social Media & Content"
          desc="Estrategias virales y gestión de comunidades que elevan la autoridad de tu marca en todas las plataformas."
        />
        <FeatureCard 
          icon={Zap}
          delay={0.2}
          title="Web Performance"
          desc="Plataformas de alta gama diseñadas para cargar en milisegundos y convertir visitantes en activos."
        />
        <FeatureCard 
          icon={ShieldCheck}
          delay={0.3}
          title="Growth & Automation"
          desc="Sistemas autónomos de generación de demanda y automatización de procesos operativos críticos."
        />
      </div>
    </div>
  </section>
);

const Strategy = () => (
  <section id="estrategia" className="py-48 bg-black relative">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="aspect-square bg-gradient-to-tr from-accent/20 to-accent-dark/10 rounded-[60px] border border-white/5 flex items-center justify-center relative overflow-hidden shadow-[0_0_100px_rgba(6,182,212,0.1)]"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 border-[1px] border-accent/20 rounded-full flex items-center justify-center"
          >
            <div className="w-48 h-48 border-[1px] border-white/5 rounded-full"></div>
          </motion.div>
          <div className="absolute flex flex-col items-center">
            <span className="text-9xl font-black text-white italic tracking-tighter shadow-2xl">X10</span>
            <span className="text-[10px] text-accent font-black uppercase tracking-[0.5em] mt-4">Velocidad de Crecimiento</span>
          </div>
        </motion.div>
      </div>

      <div className="space-y-20">
        <div>
          <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">El Motor <br /><span className="text-gradient">Lustom</span></h2>
          <p className="text-text-primary/50 text-xl font-medium tracking-wide leading-relaxed">
            Nuestro proceso es una combinación de ingeniería técnica y psicología de ventas aplicada al entorno digital.
          </p>
        </div>

        <div className="space-y-12">
          {[
            { n: "01", t: "Análisis de Fricción", d: "Eliminamos los cuellos de botella que impiden que tu negocio escale de forma digital." },
            { n: "02", t: "Inyección de Stack", d: "Desplegamos las herramientas y plataformas más potentes del mercado bajo tu marca." },
            { n: "03", t: "Dominio de Canales", d: "Posicionamos tu mensaje donde tu cliente ideal ya está invirtiendo su atención." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group flex gap-8 p-8 rounded-3xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
            >
              <div className="text-5xl font-black text-white/5 group-hover:text-accent transition-colors duration-500 italic leading-none">{step.n}</div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">{step.t}</h4>
                <p className="text-text-primary/40 group-hover:text-text-primary/70 transition-colors font-medium text-lg leading-snug">{step.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="py-48 relative bg-bg-primary overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="glass-card p-12 md:p-24 rounded-[60px] md:rounded-[100px] border border-white/5 relative shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] group-hover:bg-accent/20 transition-all duration-1000"></div>
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-black text-white uppercase italic tracking-tighter leading-none mb-10"
          >
            Let's <br /> <span className="text-gradient">Upgrade</span>
          </motion.h2>
          <p className="text-accent font-black uppercase tracking-[0.6em] text-xs">Consulta de Transformación Digital</p>
        </div>

        <form className="space-y-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-7 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs tracking-widest" placeholder="TU NOMBRE" />
            </div>
            <div className="space-y-4">
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-7 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs tracking-widest" placeholder="EMAIL CORPORATIVO" />
            </div>
          </div>
          
          <div className="space-y-4">
            <textarea className="w-full bg-white/5 border border-white/10 rounded-[40px] px-8 py-8 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs tracking-widest h-48 resize-none" placeholder="REQUERIMIENTOS DEL PROYECTO..."></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-accent to-accent-dark text-white py-10 rounded-[30px] font-black text-2xl uppercase italic tracking-widest shadow-2xl"
          >
            Enviar Solicitud de Élite
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-24 mb-32">
        <div className="space-y-10">
          <div className="flex items-center gap-8 group">
            <img src={logo} alt="Lustom Digital" className="w-24 h-24 transition-transform duration-700 group-hover:rotate-12" />
            <div className="flex flex-col">
               <span className="text-white font-black text-4xl tracking-tighter uppercase italic leading-none">Lustom<span className="text-accent">Digital</span></span>
               <span className="text-[10px] text-accent font-black uppercase tracking-[0.8em] mt-2">Leveling Up Agencies</span>
            </div>
          </div>
          <p className="text-text-primary/30 font-bold uppercase tracking-[0.3em] text-[10px] max-w-sm leading-relaxed">
             Ingeniería y marketing digital para la vanguardia empresarial. <br />
             Ubicados en el epicentro de la innovación.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-24">
          <div className="flex flex-col gap-8">
            <span className="text-white font-black uppercase text-[12px] tracking-[0.4em]">Soluciones</span>
            <a href="#servicios" className="text-text-primary/40 hover:text-accent font-bold uppercase text-[11px] tracking-widest transition-all">Social Media</a>
            <a href="#servicios" className="text-text-primary/40 hover:text-accent font-bold uppercase text-[11px] tracking-widest transition-all">Web Tech</a>
            <a href="#servicios" className="text-text-primary/40 hover:text-accent font-bold uppercase text-[11px] tracking-widest transition-all">Automatización</a>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-white font-black uppercase text-[12px] tracking-[0.4em]">Legal</span>
            <a href="#" className="text-text-primary/40 hover:text-white font-bold uppercase text-[11px] tracking-widest transition-all">Privacidad</a>
            <a href="#" className="text-text-primary/40 hover:text-white font-bold uppercase text-[11px] tracking-widest transition-all">Términos</a>
          </div>
          <div className="flex flex-col gap-8">
            <span className="text-white font-black uppercase text-[12px] tracking-[0.4em]">Social</span>
            <div className="flex gap-10">
               <a href="#" className="text-accent hover:text-white font-black uppercase text-[11px] transition-all italic tracking-widest">IG</a>
               <a href="#" className="text-accent hover:text-white font-black uppercase text-[11px] transition-all italic tracking-widest">LN</a>
               <a href="#" className="text-accent hover:text-white font-black uppercase text-[11px] transition-all italic tracking-widest">TW</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-text-primary/20 text-[10px] font-black uppercase tracking-[0.6em]">© 2026 Lustom Digital Agency — Powered by Excellence</p>
        <p className="text-text-primary/20 text-[10px] font-black uppercase tracking-[0.6em] italic">Built for the future</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-bg-primary min-h-screen font-sans selection:bg-accent selection:text-white">
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
