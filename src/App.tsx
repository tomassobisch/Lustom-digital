import { useState, useEffect } from 'react';
import { 
  Menu, 
  X,
  ArrowRight,
  PenTool,
  Monitor,
  Settings,
  BarChart3,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from './assets/logo.png';
import corpImage from './assets/corp_image.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'PROYECTOS', href: '#proyectos' },
    { name: 'SOBRE NOSOTROS', href: '#' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-bgPrimary/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Lustom Digital" className="w-10 h-10 object-contain" />
          <span className="text-white font-black text-xl tracking-tighter uppercase">Lustom<span className="font-light text-textSecondary ml-1">Digital</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-bold text-textSecondary hover:text-white transition-colors tracking-widest">
              {link.name}
            </a>
          ))}
          <button className="bg-white/5 border border-white/10 text-white px-8 py-3 rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-accent hover:border-accent transition-all">
            HABLEMOS
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-bgPrimary border-b border-white/5 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold text-white uppercase tracking-widest" onClick={() => setIsOpen(false)}>{link.name}</a>
            ))}
            <button className="bg-accent text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest">
              HABLEMOS
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center bg-bgPrimary pt-20 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">LUSTOM DIGITAL</span>
        <h1 className="text-6xl md:text-[84px] font-bold text-white mb-8 leading-[1.1] tracking-tight">
          Digitalizamos <br /> negocios.
        </h1>
        <p className="max-w-md text-textSecondary text-lg md:text-xl font-medium mb-12 leading-relaxed">
          Ayudamos a marcas a construir una presencia digital sólida, atractiva y rentable.
        </p>
        <button className="btn-accent flex items-center gap-3">
          HABLEMOS DE TU PROYECTO <ArrowRight size={18} />
        </button>
      </motion.div>
      
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="rounded-[20px] overflow-hidden shadow-2xl"
        >
          {/* Official Corporate Image */}
          <img 
            src={corpImage} 
            alt="Lustom Digital Corporate" 
            className="w-full h-full object-cover min-h-[600px]"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-[#151515] p-12 rounded-2xl border border-white/5 group hover:border-accent/30 transition-all duration-500"
  >
    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-10 group-hover:bg-accent transition-all">
      <Icon className="text-accent group-hover:text-white transition-all" size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-sm font-black text-white mb-6 uppercase tracking-[0.2em]">{title}</h3>
    <p className="text-textSecondary text-sm leading-relaxed mb-10">
      {desc}
    </p>
    <a href="#" className="flex items-center gap-2 text-[11px] font-bold text-white uppercase tracking-widest group-hover:text-accent transition-colors">
      VER MÁS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-32 bg-[#0D0D0D]">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <span className="section-label">SERVICIOS</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Soluciones digitales <br /> que impulsan tu marca.
          </h2>
        </div>
        <p className="max-w-xs text-textSecondary font-medium leading-relaxed">
          Ofrecemos soluciones estratégicas y creativas para llevar tu negocio al siguiente nivel.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ServiceCard 
          icon={PenTool}
          title="BRANDING"
          desc="Creamos marcas memorables que conectan con tu audiencia y destacan en el mercado."
        />
        <ServiceCard 
          icon={Monitor}
          title="PÁGINAS WEB"
          desc="Diseñamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes."
        />
        <ServiceCard 
          icon={Settings}
          title="SISTEMAS & AUTOMATIZACIÓN"
          desc="Automatizamos procesos para que tu negocio sea más eficiente y escalable."
        />
        <ServiceCard 
          icon={BarChart3}
          title="PRESENCIA DIGITAL"
          desc="Estrategias digitales que aumentan tu visibilidad y posicionan tu marca online."
        />
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="proyectos" className="py-32 bg-[#0A0A0A]">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex justify-between items-end mb-20 gap-8">
        <div>
          <span className="section-label">PROYECTOS</span>
          <h2 className="text-5xl font-bold text-white tracking-tight">
            Resultados que <br /> hablan por sí solos.
          </h2>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-[11px] font-black text-textSecondary hover:text-white uppercase tracking-[0.2em] pb-2 border-b border-textSecondary/20 transition-all">
          VER TODOS LOS PROYECTOS <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: 'NOIR LUXURY', cat: 'Branding & Web Design', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop' },
          { name: 'ALMA ESTUDIO', cat: 'Web Design', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop' },
          { name: 'VERTICE CAPITAL', cat: 'Branding & Estrategia', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
          { name: 'BOSQUE INTERIOR', cat: 'Web Design & Desarrollo', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop' }
        ].map((proj, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="group">
            <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-6">
              <img src={proj.img} alt={proj.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">{proj.name}</h4>
            <p className="text-textSecondary text-[10px] font-bold uppercase tracking-widest">{proj.cat}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessStep = ({ num, title, desc, icon: Icon }: any) => (
  <div className="flex flex-col items-center text-center px-4 relative z-10">
    <div className="w-16 h-16 bg-[#1A1A1B] rounded-full border border-white/5 flex items-center justify-center mb-8 group transition-all hover:border-accent">
      <Icon className="text-textSecondary group-hover:text-accent transition-colors" size={24} strokeWidth={1.5} />
    </div>
    <span className="text-[10px] font-black text-accent mb-4 uppercase tracking-[0.2em]">{num}. {title}</span>
    <p className="text-textSecondary text-xs leading-relaxed max-w-[200px]">
      {desc}
    </p>
  </div>
);

const Process = () => (
  <section className="py-32 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-2xl">
          <span className="section-label">NUESTRO PROCESO</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Estrategia. Diseño. <br /> Ejecución. Crecimiento.
          </h2>
        </div>
        <p className="max-w-xs text-textSecondary font-medium leading-relaxed">
          Un proceso claro y probado para transformar tu negocio en una marca digital sólida.
        </p>
      </div>

      <div className="relative pt-10">
        <div className="absolute top-[42px] left-0 w-full h-px bg-white/5 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <ProcessStep 
            num="01" 
            title="DESCUBRIMIENTO" 
            desc="Analizamos tu negocio, tu mercado y tus objetivos."
            icon={BarChart3}
          />
          <ProcessStep 
            num="02" 
            title="ESTRATEGIA" 
            desc="Diseñamos una estrategia digital personalizada para ti."
            icon={PenTool}
          />
          <ProcessStep 
            num="03" 
            title="DISEÑO & DESARROLLO" 
            desc="Creamos soluciones atractivas, funcionales y orientadas a resultados."
            icon={Monitor}
          />
          <ProcessStep 
            num="04" 
            title="CRECIMIENTO" 
            desc="Optimizamos y escalamos tu presencia digital para generar más resultados."
            icon={Settings}
          />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-12 bg-[#0A0A0B]">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
        <div className="lg:col-span-4 space-y-10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lustom" className="w-12 h-12 object-contain" />
            <span className="text-white font-black text-2xl tracking-tighter uppercase italic">Lustom<span className="text-textSecondary ml-1">Digital</span></span>
          </div>
          <p className="text-textSecondary text-sm leading-relaxed max-w-sm">
            En Lustom Digital transformamos ideas en experiencias digitales que impulsan marcas y generan resultados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textSecondary hover:bg-accent hover:text-white transition-all"><Mail size={18} /></a>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h5 className="text-white font-bold text-xs uppercase tracking-widest">NAVEGACIÓN</h5>
          <div className="flex flex-col gap-4">
            {['Inicio', 'Servicios', 'Proyectos', 'Sobre nosotros', 'Contacto'].map(item => (
              <a key={item} href="#" className="text-textSecondary hover:text-white text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h5 className="text-white font-bold text-xs uppercase tracking-widest">SERVICIOS</h5>
          <div className="flex flex-col gap-4">
            {['Branding', 'Páginas Web', 'Sistemas & Automatización', 'Presencia Digital'].map(item => (
              <a key={item} href="#" className="text-textSecondary hover:text-white text-sm transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 bg-[#151516] p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
           <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">HABLEMOS</h5>
           <p className="text-textSecondary text-sm mb-10 leading-relaxed">
             Cuéntanos tu proyecto y te ayudaremos a hacerlo realidad.
           </p>
           <button className="w-full bg-accent text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-4">
             ESCRÍBENOS <ArrowRight size={18} />
           </button>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-textSecondary uppercase tracking-widest">
        <p>© 2026 LUSTOM DIGITAL. Todos los derechos reservados.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos y condiciones</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-bgPrimary min-h-screen font-sans selection:bg-accent selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;
