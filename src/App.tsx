import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X,
  Mail,
  Layers,
  Zap,
  ShieldCheck,
  ExternalLink
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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 bg-black/60 backdrop-blur-2xl border-b border-accent/20' : 'py-10 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 rounded-full blur-2xl group-hover:bg-accent/60 transition-all duration-700"></div>
            <img src={logo} alt="Lustom Digital Logo" className="relative w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tighter text-3xl md:text-4xl uppercase italic leading-none">Lustom<span className="text-accent">Digital</span></span>
            <span className="text-[10px] text-accent font-black tracking-[0.5em] uppercase mt-1 opacity-80">Premium Tech Agency</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-12">
          {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black text-zinc-300 hover:text-accent transition-all uppercase tracking-[0.3em] relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,87,34,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-black px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-accent/20"
          >
            Agenda una llamada
          </motion.button>
        </div>

        <button className="lg:hidden text-white p-3 bg-accent/10 rounded-2xl border border-accent/20" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 p-10 flex flex-col gap-8 md:hidden overflow-hidden"
          >
            {['Servicios', 'Estrategia', 'Agencia'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-4xl font-black text-white italic uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{item}</a>
            ))}
            <button className="bg-accent text-black px-6 py-5 rounded-2xl font-black text-sm uppercase italic">
              Empieza el cambio →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[9px] font-black uppercase tracking-[0.4em] backdrop-blur-xl">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span>
              Liderando la Nueva Era Digital
            </span>
          </motion.div>

          <motion.h1 
            style={{ y: y1, opacity }}
            className="text-7xl md:text-[200px] font-black text-white leading-[0.8] uppercase italic tracking-tighter mb-12"
          >
            Lustom <br />
            <span className="text-gradient">Digital</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute -top-20 md:-top-40 opacity-10 pointer-events-none"
          >
            <img src={logo} alt="Watermark" className="w-[500px] md:w-[800px] grayscale" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl text-zinc-400 text-lg md:text-2xl font-medium mb-16 leading-tight italic"
          >
            Transformamos negocios tradicionales en infraestructuras digitales de alto impacto. No construimos webs, creamos activos escalables.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 w-full"
          >
            <button className="group w-full md:w-auto bg-accent text-black px-12 py-6 rounded-full font-black text-sm uppercase italic hover:bg-white transition-all flex items-center justify-center gap-4 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.5)] transform hover:-translate-y-2">
              Transformar mi Negocio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full md:w-auto bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-full font-black text-sm uppercase italic hover:bg-white/10 transition-all">
              Ver el Dossier
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="absolute bottom-10 left-0 w-full px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-10 border-t border-white/5">
           {[
             { label: 'Proyectos Activos', value: '45+' },
             { label: 'ROI Promedio', value: '300%' },
             { label: 'Uptime Sistema', value: '99.9%' }
           ].map((stat, i) => (
             <div key={i} className="text-left">
               <div className="text-3xl font-black text-white italic">{stat.value}</div>
               <div className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
        </div>
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
    className="group relative p-1px bg-gradient-to-b from-white/10 to-transparent rounded-[40px]"
  >
    <div className="relative bg-zinc-950 p-12 rounded-[40px] h-full transition-all group-hover:bg-zinc-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-all"></div>
      
      <div className="mb-10 inline-flex w-16 h-16 bg-white/5 rounded-2xl items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
        <Icon size={32} />
      </div>
      
      <h3 className="text-3xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
        {desc}
      </p>

      <div className="mt-10 flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0">
        Saber Más <ExternalLink size={12} />
      </div>
    </div>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-40 bg-black relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-32">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-4"
        >
          Nuestras Soluciones
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter"
        >
          Ingeniería de <br /> <span className="text-gradient">Conversión</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Layers}
          delay={0.1}
          title="Funnels de Alta Precisión"
          desc="Diseñamos recorridos de usuario que transforman el tráfico frío en clientes recurrentes mediante arquitectura de persuasión."
        />
        <FeatureCard 
          icon={Zap}
          delay={0.2}
          title="Apps de Alto Rendimiento"
          desc="Desarrollamos ecosistemas digitales escalables con tiempos de carga milimétricos y UX premium de última generación."
        />
        <FeatureCard 
          icon={ShieldCheck}
          delay={0.3}
          title="Automatización AI"
          desc="Integramos modelos de inteligencia artificial personalizados para delegar la operativa y centrarte en el crecimiento."
        />
      </div>
    </div>
  </section>
);

const ProcessStep = ({ number, title, desc }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex gap-8 group"
  >
    <div className="text-6xl font-black text-white/5 group-hover:text-accent transition-colors italic leading-none">{number}</div>
    <div className="pt-2">
      <h4 className="text-2xl font-black text-white uppercase italic mb-4">{title}</h4>
      <p className="text-zinc-500 font-medium max-w-sm">{desc}</p>
    </div>
  </motion.div>
);

const Strategy = () => (
  <section id="estrategia" className="py-40 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="aspect-square bg-gradient-to-tr from-accent/20 to-transparent rounded-[80px] border border-white/5 flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-48 h-48 border-4 border-dashed border-accent/30 rounded-full"
          ></motion.div>
          <div className="absolute flex flex-col items-center">
            <span className="text-8xl font-black text-white italic">75%</span>
            <span className="text-[10px] text-accent font-black uppercase tracking-widest">Aumento Eficiencia</span>
          </div>
        </motion.div>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">El Método <br /><span className="text-accent">Lustom</span></h2>
          <p className="text-zinc-400 text-xl font-medium italic">Un proceso quirúrgico diseñado para el escalado agresivo.</p>
        </div>

        <div className="space-y-12">
          <ProcessStep number="01" title="Auditoría de Impacto" desc="Analizamos cada grieta de tu ecosistema digital para encontrar oportunidades de retorno inmediato." />
          <ProcessStep number="02" title="Despliegue Táctico" desc="Construimos la infraestructura técnica usando stacks de última generación para máxima velocidad." />
          <ProcessStep number="03" title="Escalado Autónomo" desc="Optimizamos cada proceso mediante automatización AI para que el sistema crezca sin tu presencia." />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-40 relative bg-black overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[180px] rounded-full"></div>
    </div>

    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="bg-zinc-950 p-12 md:p-24 rounded-[80px] border border-white/5 relative shadow-2xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Demos el <br /><span className="text-gradient">Salto</span></h2>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-xs">Transformación Digital • Consultoría • Élite</p>
        </div>

        <form className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-4">Nombre</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs" placeholder="¿Cómo te llamas?" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-4">Email Corporativo</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs" placeholder="tu@empresa.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-4">Descripción del Proyecto</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-[40px] px-8 py-8 text-white outline-none focus:border-accent focus:bg-white/10 transition-all font-bold uppercase text-xs h-40 resize-none" placeholder="Cuéntanos tus metas más ambiciosas..."></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-black py-8 rounded-[30px] font-black text-lg uppercase italic hover:bg-white transition-all shadow-2xl shadow-accent/20"
          >
            Iniciar Consultoría de Élite
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-20">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lustom Digital" className="w-10 h-10" />
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic">Lustom<span className="text-accent">Digital</span></span>
          </div>
          <p className="text-zinc-600 font-bold uppercase tracking-widest text-[10px]">Pioneros en la Digitalización de Élite</p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-white font-black uppercase text-[10px] tracking-widest">Contacto</span>
            <a href="mailto:hola@lustom.digital" className="text-zinc-500 hover:text-accent font-bold uppercase text-[10px] tracking-widest transition-colors flex items-center gap-2 italic">
              <Mail size={12} /> Email de Agencia
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-black uppercase text-[10px] tracking-widest">Social</span>
            <div className="flex gap-6">
               <a href="#" className="text-zinc-500 hover:text-accent font-black uppercase text-[10px] transition-colors italic">IG</a>
               <a href="#" className="text-zinc-500 hover:text-accent font-black uppercase text-[10px] transition-colors italic">LN</a>
               <a href="#" className="text-zinc-500 hover:text-accent font-black uppercase text-[10px] transition-colors italic">TW</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-700 text-[9px] font-bold uppercase tracking-[0.3em]">© 2026 Lustom Digital Agency — Built for Scale</p>
        <div className="flex gap-8 text-zinc-700 text-[9px] font-bold uppercase tracking-[0.3em]">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-accent selection:text-black">
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
