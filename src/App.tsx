import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X,
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
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4 nav-blur border-b border-black/5' : 'py-10 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-6 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
            <img src={logo} alt="Lustom Digital Logo" className="relative w-24 h-24 md:w-32 md:h-32 object-contain transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="flex flex-col">
            <span className="text-text-primary font-black tracking-tighter text-4xl md:text-5xl uppercase leading-none">Lustom<span className="text-accent-dark italic font-light">Digital</span></span>
            <span className="text-[11px] text-accent-dark font-black tracking-[0.6em] uppercase mt-2">Boutique Agency</span>
          </div>
        </motion.div>

        <div className="hidden lg:flex items-center gap-16">
          {['Servicios', 'Método', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] font-black text-text-primary/60 hover:text-text-primary transition-all uppercase tracking-[0.4em] relative group">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-text-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-text-primary text-white px-10 py-5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-accent-dark transition-all shadow-xl shadow-black/5"
          >
            Comenzar proyecto
          </motion.button>
        </div>

        <button className="lg:hidden text-text-primary p-3 bg-black/5 rounded-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-primary border-b border-black/5 p-12 flex flex-col gap-10 lg:hidden shadow-2xl"
          >
            {['Servicios', 'Método', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-5xl font-black text-text-primary uppercase tracking-tighter" onClick={() => setIsOpen(false)}>{item}</a>
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
    <section className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-bg-primary">
      {/* Subtle Texture/Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mb-12"
          >
            <span className="text-accent-dark text-[10px] font-black uppercase tracking-[0.8em]">
              Innovación • Diseño • Estrategia
            </span>
          </motion.div>

          <motion.div
            style={{ y: y1, opacity }}
            className="relative mb-16"
          >
            <h1 className="text-7xl md:text-[220px] font-black text-text-primary leading-[0.8] uppercase tracking-tighter">
              Lustom <br />
              <span className="text-gradient">Digital</span>
            </h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
              className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] pointer-events-none"
            >
              <img src={logo} alt="Watermark" className="w-full grayscale" />
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-3xl text-text-primary/60 text-xl md:text-3xl font-light mb-20 leading-snug tracking-tight"
          >
            Elevamos la presencia de negocios tradicionales mediante <br className="hidden md:block" /> 
            arquitectura digital sofisticada y sistemas de conversión de élite.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-10 w-full"
          >
            <button className="group relative w-full md:w-auto px-16 py-7 rounded-full bg-text-primary text-white font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-accent-dark shadow-2xl shadow-black/10">
              <span className="relative z-10 flex items-center gap-4">Iniciar Transformación <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
            </button>
            <button className="w-full md:w-auto px-16 py-7 rounded-full border border-black/10 text-text-primary font-black text-sm uppercase tracking-widest hover:bg-black/5 transition-all">
              Explorar Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1 }}
    viewport={{ once: true }}
    className="group bg-white p-14 rounded-[50px] border border-black/5 hover:border-accent-dark/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-black/[0.02]"
  >
    <div className="mb-12 inline-flex w-20 h-20 bg-bg-primary rounded-3xl items-center justify-center text-text-primary group-hover:bg-accent-dark group-hover:text-white transition-all duration-500">
      <Icon size={36} strokeWidth={1.5} />
    </div>
    
    <h3 className="text-3xl font-black text-text-primary mb-8 uppercase tracking-tighter leading-none group-hover:text-accent-dark transition-colors">
      {title}
    </h3>
    <p className="text-text-primary/50 font-medium leading-relaxed group-hover:text-text-primary/80 transition-colors text-lg">
      {desc}
    </p>

    <div className="mt-12 flex items-center gap-3 text-accent-dark text-[11px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 duration-500">
      Ver Detalle <ExternalLink size={14} />
    </div>
  </motion.div>
);

const Services = () => (
  <section id="servicios" className="py-48 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-40">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-dark text-[11px] font-black uppercase tracking-[1em] mb-8"
        >
          Nuestro Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-9xl font-black text-text-primary uppercase tracking-tighter leading-[0.9]"
        >
          Ecosistemas <br /> <span className="text-accent-dark italic font-light">Digitales</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <FeatureCard 
          icon={Layers}
          delay={0.1}
          title="Funnels de Conversión"
          desc="Optimizamos el viaje del cliente mediante embudos de venta persuasivos que maximizan el retorno de cada visita."
        />
        <FeatureCard 
          icon={Zap}
          delay={0.2}
          title="Plataformas High-End"
          desc="Desarrollamos soluciones web robustas y elegantes, equilibrando rendimiento técnico con diseño minimalista de vanguardia."
        />
        <FeatureCard 
          icon={ShieldCheck}
          delay={0.3}
          title="Automatización Inteligente"
          desc="Liberamos tu tiempo integrando sistemas autónomos y flujos de trabajo inteligentes que escalan tu negocio sin fricción."
        />
      </div>
    </div>
  </section>
);

const Strategy = () => (
  <section id="método" className="py-48 bg-bg-primary">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="aspect-[4/5] bg-white rounded-[100px] border border-black/5 flex items-center justify-center relative overflow-hidden shadow-2xl"
        >
          <img src={logo} alt="Lustom Concept" className="w-2/3 opacity-[0.05] absolute grayscale" />
          <div className="relative z-10 text-center space-y-4">
             <div className="text-[120px] font-black text-text-primary/10 italic leading-none">LU</div>
             <div className="text-[11px] text-accent-dark font-black uppercase tracking-[1em]">Metodología Premium</div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-20">
        <div className="space-y-8">
          <h2 className="text-6xl font-black text-text-primary uppercase tracking-tighter leading-none">Visión <br /><span className="text-accent-dark italic font-light">Estratégica</span></h2>
          <p className="text-text-primary/60 text-2xl font-light">Un enfoque minimalista para problemas complejos.</p>
        </div>

        <div className="space-y-16">
          {[
            { n: "01", t: "Diagnóstico de Valor", d: "Identificamos los puntos de apalancamiento donde la digitalización generará el mayor impacto financiero." },
            { n: "02", t: "Desarrollo Boutique", d: "Creamos cada pieza de software con atención quirúrgica al detalle y al rendimiento." },
            { n: "03", t: "Optimización Continua", d: "Ajustamos los sistemas en tiempo real basados en datos para asegurar un crecimiento constante." }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group flex gap-10"
            >
              <div className="text-4xl font-black text-accent-dark/30 group-hover:text-accent-dark transition-colors duration-500 italic leading-none">{step.n}</div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-text-primary uppercase tracking-tight">{step.t}</h4>
                <p className="text-text-primary/50 font-medium leading-relaxed max-w-md text-lg">{step.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contacto" className="py-48 relative bg-white overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-6xl md:text-9xl font-black text-text-primary uppercase tracking-tighter leading-none mb-10 italic font-light text-gradient">Conectemos</h2>
        <p className="text-accent-dark font-black uppercase tracking-[0.6em] text-[11px]">Transformación Digital de Élite</p>
      </div>

      <div className="bg-bg-primary p-12 md:p-24 rounded-[80px] border border-black/5 shadow-2xl">
        <form className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <label className="text-[11px] font-black text-text-primary/30 uppercase tracking-[0.4em] px-2">Identidad</label>
              <input type="text" className="w-full bg-white border border-black/5 rounded-3xl px-8 py-7 text-text-primary outline-none focus:border-accent-dark transition-all font-bold uppercase text-xs" placeholder="TU NOMBRE O AGENCIA" />
            </div>
            <div className="space-y-4">
              <label className="text-[11px] font-black text-text-primary/30 uppercase tracking-[0.4em] px-2">Contacto</label>
              <input type="email" className="w-full bg-white border border-black/5 rounded-3xl px-8 py-7 text-text-primary outline-none focus:border-accent-dark transition-all font-bold uppercase text-xs" placeholder="EMAIL@EMPRESA.COM" />
            </div>
          </div>
          
          <div className="space-y-4">
            <label className="text-[11px] font-black text-text-primary/30 uppercase tracking-[0.4em] px-2">Propuesta</label>
            <textarea className="w-full bg-white border border-black/5 rounded-[40px] px-8 py-8 text-text-primary outline-none focus:border-accent-dark transition-all font-bold uppercase text-xs h-40 resize-none" placeholder="DESCRIBE TU VISIÓN..."></textarea>
          </div>

          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-text-primary text-white py-8 rounded-[30px] font-black text-xl uppercase tracking-widest hover:bg-accent-dark transition-all shadow-2xl shadow-black/10"
          >
            Enviar Solicitud
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 border-t border-black/5 bg-bg-primary">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Lustom Digital" className="w-20 h-20 md:w-24 md:h-24" />
            <div className="flex flex-col">
               <span className="text-text-primary font-black text-3xl tracking-tighter uppercase">Lustom<span className="text-accent-dark italic font-light">Digital</span></span>
               <span className="text-[10px] text-accent-dark font-black uppercase tracking-[0.6em]">Premium Studio</span>
            </div>
          </div>
          <p className="text-text-primary/40 font-bold uppercase tracking-[0.4em] text-[10px] max-w-xs leading-relaxed">Redefiniendo el estándar digital para negocios de alta gama.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-6">
            <span className="text-text-primary font-black uppercase text-[11px] tracking-widest">Estudio</span>
            <a href="#servicios" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[10px] tracking-widest transition-colors">Servicios</a>
            <a href="#método" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[10px] tracking-widest transition-colors">Estrategia</a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-text-primary font-black uppercase text-[11px] tracking-widest">Legal</span>
            <a href="#" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[10px] tracking-widest transition-colors">Privacidad</a>
            <a href="#" className="text-text-primary/50 hover:text-text-primary font-bold uppercase text-[10px] tracking-widest transition-colors">Términos</a>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-text-primary font-black uppercase text-[11px] tracking-widest">Connect</span>
            <div className="flex gap-6">
               <a href="#" className="text-text-primary/50 hover:text-text-primary font-black uppercase text-[10px] transition-colors italic tracking-widest">IG</a>
               <a href="#" className="text-text-primary/50 hover:text-text-primary font-black uppercase text-[10px] transition-colors italic tracking-widest">LN</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-text-primary/30 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 Lustom Digital Agency — All rights reserved.</p>
        <p className="text-text-primary/30 text-[10px] font-black uppercase tracking-[0.5em] italic">Built with Precision</p>
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
