import Image from "next/image";
import { HardHat, Laptop, Package, TrendingUp, Truck, Mail, Phone, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <TrendingUp className="w-10 h-10 text-[#0088FF]" />,
      title: "Intermediarios de Comercio",
      description: "Conectamos oportunidades de negocio a nivel mayorista con eficiencia y seguridad.",
    },
    {
      icon: <HardHat className="w-10 h-10 text-[#0088FF]" />,
      title: "Maquinaria y Equipo",
      description: "Comercio al por mayor de maquinaria pesada y equipos industriales de alto rendimiento.",
    },
    {
      icon: <Laptop className="w-10 h-10 text-[#0088FF]" />,
      title: "Cómputo y Oficina",
      description: "Alquiler y venta de equipo de cómputo, máquinas y mobiliario para modernizar tu espacio.",
    },
    {
      icon: <Truck className="w-10 h-10 text-[#0088FF]" />,
      title: "Mensajería Local",
      description: "Servicios de mensajería y paquetería local confiables, rápidos y seguros.",
    },
    {
      icon: <Package className="w-10 h-10 text-[#0088FF]" />,
      title: "Estructuras de Acero",
      description: "Montaje especializado de estructuras de acero prefabricadas para grandes proyectos.",
    },
  ];

  return (
    <main className="flex-1 w-full font-sans">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-[#001A54]/95 backdrop-blur border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg p-2 overflow-hidden">
              <Image 
                src="/ember_logo.png" 
                alt="EMBER Logo" 
                width={48} 
                height={48} 
                className="object-contain" 
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-wide">EMBER</h1>
              <p className="text-[#33A3FF] text-xs font-medium tracking-widest">COMERCIALIZADORA</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>
          <a href="#contacto" className="bg-gradient-to-r from-[#0088FF] to-[#33A3FF] text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-lg shadow-[#0088FF]/30 hover:shadow-[#0088FF]/50 transition-all transform hover:-translate-y-0.5">
            Cotizar Solución
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#001147] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#001147] via-[#001A54] to-[#000d36]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0088FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#33A3FF] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#33A3FF] animate-pulse"></span>
              Aliado Estratégico en México
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Soluciones Integrales para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088FF] to-[#33A3FF]">Proyectos de Clase Mundial</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Desde comercialización de equipo especializado y montajes de acero, hasta la modernización tecnológica de tus espacios operativos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#0088FF] to-[#33A3FF] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#0088FF]/25 hover:shadow-xl hover:shadow-[#0088FF]/40 transition-all hover:-translate-y-1">
                Conoce Nuestros Servicios
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contacto" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur transition-all">
                Contáctanos
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF] to-[#001A54] rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5+", label: "Líneas de Negocio" },
                  { value: "100%", label: "Compromiso" },
                  { value: "2022", label: "Año de Fundación" },
                  { value: "MX", label: "Cobertura Nacional" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-[#33A3FF] font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Nuestra Oferta</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001147] mb-6">Módulos de Servicios Integrados</h2>
            <p className="text-slate-600 text-lg">
              Ofrecemos un portafolio diversificado para cubrir las necesidades operativas, logísticas y de infraestructura de tu empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#001147]/5 transition-all border border-slate-100 group">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0088FF]/10 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[#001A54] mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-[#F8FAFC] skew-x-12 origin-top-left -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Trayectoria Institucional</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001147] mb-6">Aliados Estratégicos desde 2022</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Fundada el <strong>12 de Mayo de 2022</strong>, EMBER COMERCIALIZADORA Y SERVICIOS ESPECIALIZADOS S.A DE C.V nació con la visión de convertirse en un pilar fundamental para el desarrollo comercial e industrial en el sureste y todo México.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nos distinguimos por nuestra solidez estructural, enfoque tecnológico y una capacidad logística que asegura la entrega puntual y eficiente de resultados para cada uno de nuestros clientes.
            </p>
            <ul className="space-y-4">
              {[
                "Atención especializada y profesional",
                "Cobertura en Coatzacoalcos y a nivel nacional",
                "Garantía de calidad en equipos y montajes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#001A54] font-medium">
                  <CheckCircle2 className="w-6 h-6 text-[#0088FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#001A54] to-[#0088FF] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#001147] via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <div className="text-2xl font-bold mb-2">Construyendo el Futuro</div>
                  <div className="text-sm text-slate-300">Infraestructura y Tecnología de la más alta calidad.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[#001147] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Conecta con Nosotros</h2>
            <p className="text-slate-300 text-lg">
              Estamos listos para ser parte de tu próximo gran proyecto. Contáctanos a través de nuestros canales oficiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:embercse@gmail.com" className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#0088FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-[#33A3FF]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Correo Electrónico</h4>
              <p className="text-[#33A3FF] font-medium">embercse@gmail.com</p>
            </a>

            <a href="tel:+522293061826" className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#0088FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#33A3FF]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Teléfono de Contacto</h4>
              <p className="text-[#33A3FF] font-medium">+52 229 306 1826</p>
            </a>

            <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#0088FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-[#33A3FF]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sede Principal</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Avenida Juventino Rosas 316, Int. B,<br/>
                Colonia Coatzacoalcos Centro,<br/>
                Coatzacoalcos, Veracruz, C.P. 96400, México.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000d36] border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-4">
              <Image src="/ember_logo.png" alt="EMBER Logo" width={40} height={40} className="brightness-0 invert opacity-80" />
              <div>
                <div className="text-white font-bold text-lg tracking-wider">EMBER</div>
                <div className="text-slate-400 text-[10px] tracking-widest uppercase">Comercializadora y Servicios Especializados</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm border-t border-white/10 pt-8">
            &copy; {new Date().getFullYear()} EMBER COMERCIALIZADORA Y SERVICIOS ESPECIALIZADOS S.A DE C.V. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
