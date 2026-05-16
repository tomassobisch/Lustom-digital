import { useState } from 'react';
import { 
  Globe, 
  Rocket, 
  Cpu, 
  ArrowRight, 
  Menu, 
  X,
  Mail
} from 'lucide-react';
import { motion } from 'framer-motion';

import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Lustom Digital Logo" className="w-10 h-10 object-contain" />
          <span className="text-white font-black tracking-tighter text-xl uppercase italic">Lustom<span className="text-accent">Digital</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Servicios', 'Nosotros', 'Proyectos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-zinc-400 hover:text-accent transition-colors uppercase tracking-widest">{item}</a>
          ))}
          <button className="bg-accent text-black px-6 py-2 rounded-full font-black text-xs uppercase hover:bg-white transition-all transform hover:scale-105 active:scale-95">
            Agendar Llamada
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-black border-b border-white/5 p-8 flex flex-col gap-6 md:hidden"
        >
          {['Servicios', 'Nosotros', 'Proyectos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-black text-white uppercase" onClick={() => setIsOpen(false)}>{item}</a>
          ))}
          <button className="bg-accent text-black px-6 py-4 rounded-xl font-black text-sm uppercase">
            Agendar Llamada
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    {/* Animated background blobs */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-zinc-900 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
          TS Digital Agency
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white italic leading-tight mb-8 uppercase tracking-tighter">
          Digitalizamos <br />
          <span className="text-gradient">Tu Potencial</span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-medium mb-12">
          Transformamos negocios tradicionales en potencias digitales de alto rendimiento mediante plataformas escalables y automatización estratégica.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto bg-accent text-black px-10 py-5 rounded-full font-black text-sm uppercase hover:bg-white transition-all shadow-[0_0_30px_rgba(255,87,34,0.3)]">
            Empieza Ahora
          </button>
          <button className="w-full md:w-auto bg-transparent border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            Ver Proyectos <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card p-10 rounded-[40px] border border-white/5 group hover:border-accent/30 transition-all"
  >
    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-all">
      <Icon className="text-accent group-hover:text-black transition-all" size={32} />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 uppercase italic">{title}</h3>
    <p className="text-zinc-400 font-medium leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-32 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">Servicios de <br /><span className="text-accent">Élite Digital</span></h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Estrategia • Diseño • Desarrollo</p>
        </div>
        <p className="max-w-md text-zinc-400 font-medium italic">
          No creamos simples webs. Construimos ecosistemas que capturan valor y escalan tus operaciones de forma autónoma.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Globe} 
          title="Webs de Alto Rendimiento" 
          description="Plataformas ultra-rápidas optimizadas para SEO y experiencia de usuario premium, centradas en la identidad de tu marca."
        />
        <ServiceCard 
          icon={Rocket} 
          title="Funnels de Conversión" 
          description="Estrategias de captación de leads diseñadas para convertir visitas en clientes reales de forma predecible."
        />
        <ServiceCard 
          icon={Cpu} 
          title="Automatización AI" 
          description="Integramos procesos inteligentes que ahorran tiempo y eliminan la fricción operativa de tu negocio."
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-32 relative">
    <div className="max-w-4xl mx-auto px-6 bg-zinc-900/50 p-12 md:p-20 rounded-[60px] border border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white uppercase italic mb-4">¿Listo para el <span className="text-accent">Siguiente Nivel?</span></h2>
        <p className="text-zinc-400 font-medium">Cuéntanos sobre tu proyecto y digitalicemos tu visión.</p>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" placeholder="Nombre Completo" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent transition-all font-bold uppercase text-xs" />
          <input type="email" placeholder="Email Corporativo" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent transition-all font-bold uppercase text-xs" />
        </div>
        <input type="text" placeholder="Tu Negocio / Industria" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent transition-all font-bold uppercase text-xs" />
        <textarea placeholder="¿Cómo podemos ayudarte?" rows={4} className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-accent transition-all font-bold uppercase text-xs resize-none"></textarea>
        <button className="w-full bg-accent text-black py-5 rounded-2xl font-black text-sm uppercase hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-accent/20">
          Enviar Propuesta
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center font-black text-black text-xs">L</div>
            <span className="text-white font-black tracking-tighter text-lg uppercase italic">Lustom<span className="text-accent">Digital</span></span>
          </div>
          <p className="text-zinc-500 text-sm font-medium">© 2026 Lustom Digital Agency. <br className="md:hidden" /> Todos los derechos reservados.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-zinc-500 hover:text-accent transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
