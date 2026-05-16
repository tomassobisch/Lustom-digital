import { useState, useEffect } from 'react';
import { 
  Menu, 
  X,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-border-light py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img src={logo} alt="Lustom Digital" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
          <div className="flex flex-col">
            <span className="text-text-primary font-extrabold text-xl tracking-tight leading-none uppercase">Lustom<span className="font-normal text-muted">Digital</span></span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-10">
          {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[12px] font-bold text-muted hover:text-text-primary transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="optimo-button">
            Hablemos
          </button>
        </div>

        <button className="lg:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-border-light p-8 flex flex-col gap-6 lg:hidden"
          >
            {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-bold text-text-primary uppercase" onClick={() => setIsOpen(false)}>{item}</a>
            ))}
            <button className="optimo-button w-full">
              Contacto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 bg-bg-primary overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block text-text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-6 px-3 py-1 bg-black/5 rounded">
          Performance Digital Agency
        </span>
        <h1 className="optimo-title text-6xl md:text-[84px] text-text-primary mb-8">
          Escalamos tu <br /> negocio con <br /> <span className="text-muted">estrategia e IA</span>
        </h1>
        <p className="max-w-lg text-muted text-lg md:text-xl font-medium mb-10 leading-relaxed">
          Transformamos la presencia digital de empresas tradicionales en máquinas de generación de demanda de alto rendimiento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="optimo-button px-10 py-5 text-sm flex items-center justify-center gap-3">
            Empezar ahora <ArrowUpRight size={18} />
          </button>
          <button className="border border-border-light hover:border-text-primary text-text-primary px-10 py-5 rounded-sm font-bold text-[13px] uppercase tracking-widest transition-all">
            Casos de éxito
          </button>
        </div>
      </motion.div>
      
      <div className="relative hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="aspect-square bg-black/5 rounded-full flex items-center justify-center relative overflow-hidden"
        >
          <img src={logo} alt="Lustom Concept" className="w-2/3 opacity-20 grayscale" />
          <div className="absolute inset-0 border-[40px] border-white/50 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicios" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="optimo-title text-5xl md:text-7xl text-text-primary uppercase tracking-tighter">
            Servicios <br /> <span className="text-muted">Optimizados</span>
          </h2>
        </div>
        <p className="max-w-sm text-muted font-medium border-l-2 border-black pl-8 italic">
          No somos una agencia creativa. Somos una agencia de resultados financieros.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border border-border-light divide-x divide-border-light">
        <div className="p-12 hover:bg-black group transition-all duration-500 cursor-pointer">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted mb-8 group-hover:text-white/40">Presencia</h4>
           <h3 className="text-3xl font-bold uppercase mb-6 group-hover:text-white transition-colors">Social Media & <br />Contenido</h3>
           <p className="text-muted group-hover:text-white/60 font-medium transition-colors">Estrategias de alto impacto para dominar la atención de tu mercado.</p>
           <div className="mt-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-white" size={32} />
           </div>
        </div>
        <div className="p-12 hover:bg-black group transition-all duration-500 cursor-pointer">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted mb-8 group-hover:text-white/40">Tecnología</h4>
           <h3 className="text-3xl font-bold uppercase mb-6 group-hover:text-white transition-colors">Webs de Alto <br />Rendimiento</h3>
           <p className="text-muted group-hover:text-white/60 font-medium transition-colors">Ingeniería enfocada 100% en la experiencia de usuario y conversión.</p>
           <div className="mt-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-white" size={32} />
           </div>
        </div>
        <div className="p-12 hover:bg-black group transition-all duration-500 cursor-pointer">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted mb-8 group-hover:text-white/40">Resultados</h4>
           <h3 className="text-3xl font-bold uppercase mb-6 group-hover:text-white transition-colors">Publicidad & <br />Ads</h3>
           <p className="text-muted group-hover:text-white/60 font-medium transition-colors">Maximizamos el ROI mediante campañas basadas en datos y algoritmos.</p>
           <div className="mt-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-white" size={32} />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Strategy = () => (
  <section id="estrategia" className="section-padding bg-bg-primary border-y border-border-light">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-12">
        <h2 className="optimo-title text-6xl text-text-primary uppercase tracking-tighter">Nuestra <br /><span className="text-muted">Metodología</span></h2>
        <div className="space-y-12">
          {[
            { n: "01", t: "Diagnóstico", d: "Auditoría profunda de tus canales digitales actuales." },
            { n: "02", t: "Optimización", d: "Implementación de mejoras técnicas y estratégicas." },
            { n: "03", t: "Escalado", d: "Crecimiento predecible mediante sistemas automatizados." }
          ].map((step, i) => (
            <div key={i} className="flex gap-8 group cursor-pointer">
              <div className="text-xl font-black text-text-primary w-8 h-8 flex items-center justify-center border-2 border-black group-hover:bg-black group-hover:text-white transition-all">{step.n}</div>
              <div>
                <h4 className="text-2xl font-bold text-text-primary uppercase tracking-tight mb-2">{step.t}</h4>
                <p className="text-muted font-medium max-w-sm">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-black p-20 rounded-sm text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <h3 className="text-white text-4xl font-extrabold uppercase italic mb-8 relative z-10 leading-none">¿Hablamos de <br /> resultados?</h3>
        <p className="text-white/60 font-medium mb-12 relative z-10">Agenda una sesión estratégica gratuita de 15 minutos.</p>
        <button className="bg-white text-black px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-muted hover:text-white transition-all relative z-10">
          Reservar sesión
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Lustom Digital" className="w-12 h-12" />
          <span className="text-text-primary font-black text-xl uppercase tracking-tighter leading-none">Lustom<span className="font-normal text-muted">Digital</span></span>
        </div>
        
        <div className="flex gap-12 text-[11px] font-bold text-muted uppercase tracking-widest">
           <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-black transition-colors">Instagram</a>
           <a href="#" className="hover:text-black transition-colors">Twitter</a>
        </div>
      </div>
      
      <div className="pt-10 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-muted text-[10px] font-bold uppercase tracking-widest">© 2026 Lustom Digital Agency — Business first.</p>
        <p className="text-muted text-[10px] font-bold uppercase tracking-widest italic">Optimization as a service.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Strategy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
