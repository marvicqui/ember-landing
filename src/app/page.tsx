import Image from "next/image";
import { 
  HardHat, Laptop, Truck, Globe, 
  Building2, Server, PackageSearch, Shuffle, 
  ShieldCheck, Banknote, Clock, 
  MapPin, Phone, Mail, ChevronRight, CheckCircle2, Factory, Network 
} from "lucide-react";

export default function Home() {
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
              <p className="text-[#33A3FF] text-[10px] font-medium tracking-widest uppercase">Infraestructura & Logística</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#perfil" className="hover:text-white transition-colors">Quiénes Somos</a>
            <a href="#servicios" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#propuesta" className="hover:text-white transition-colors">Valor Añadido</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodología</a>
          </nav>
          <a href="#contacto" className="bg-gradient-to-r from-[#0088FF] to-[#33A3FF] text-white px-5 py-2.5 rounded-lg font-medium text-sm shadow-lg shadow-[#0088FF]/30 hover:shadow-[#0088FF]/50 transition-all transform hover:-translate-y-0.5">
            Contactar
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
              Alianza Estratégica Integral
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Infraestructura Industrial & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088FF] to-[#33A3FF]">Equipamiento Corporativo</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Potenciamos la capacidad de empresas e industrias mediante montajes de acero, tecnología bajo arrendamiento y soluciones logísticas de precisión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#0088FF] to-[#33A3FF] text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#0088FF]/25 hover:shadow-xl hover:shadow-[#0088FF]/40 transition-all hover:-translate-y-1">
                Explorar Portafolio
                <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#contacto" className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold backdrop-blur transition-all">
                Cotizar Proyecto
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0088FF] to-[#001A54] rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "Acero", label: "Montajes Prefabricados", icon: <Factory className="text-[#33A3FF] w-6 h-6 mb-2" /> },
                  { value: "TI", label: "Equipamiento y Rentas", icon: <Server className="text-[#33A3FF] w-6 h-6 mb-2" /> },
                  { value: "Logística", label: "Última Milla", icon: <Truck className="text-[#33A3FF] w-6 h-6 mb-2" /> },
                  { value: "Global", label: "Comercialización", icon: <Globe className="text-[#33A3FF] w-6 h-6 mb-2" /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors flex flex-col items-center">
                    {stat.icon}
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Corporativo */}
      <section id="perfil" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Quiénes Somos</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#001147] mb-8">Perfil Corporativo</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Somos una firma especializada en el desarrollo de <strong>infraestructura operativa</strong>, <strong>suministro de equipamiento comercial</strong> y <strong>soluciones logísticas de precisión</strong>. Nos dedicamos a potenciar la capacidad de empresas e industrias mediante el montaje especializado de estructuras de acero prefabricadas, el equipamiento tecnológico y de oficina bajo esquemas de comercio y arrendamiento, y el soporte de distribución mediante mensajería local.
          </p>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mt-6">
            Actuamos como un aliado estratégico integral para la habilitación física, tecnológica y logística de proyectos comerciales e industriales de gran escala.
          </p>
        </div>
      </section>

      {/* Portafolio de Servicios Corporativos */}
      <section id="servicios" className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Qué Hacemos</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001147] mb-6">Portafolio de Servicios Corporativos</h2>
            <p className="text-slate-600 text-lg">
              Dividimos nuestro portafolio en áreas clave diseñadas para presentar soluciones lógicas y atractivas ante gerentes de operaciones, compras y directores de proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Servicio 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0088FF]/10 transition-colors">
                <HardHat className="w-7 h-7 text-[#0088FF]" />
              </div>
              <h4 className="text-2xl font-bold text-[#001A54] mb-4">Infraestructura y Montaje Industrial</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Estructuras de Acero Prefabricadas:</strong> Ingeniería de montaje e instalación para naves industriales, almacenes, bodegas y plantas corporativas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Supervisión y Ejecución:</strong> Operación bajo estrictas normas de seguridad industrial, asegurando tiempos de entrega óptimos y precisión técnica en campo.</span>
                </li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0088FF]/10 transition-colors">
                <Laptop className="w-7 h-7 text-[#0088FF]" />
              </div>
              <h4 className="text-2xl font-bold text-[#001A54] mb-4">Equipamiento Tecnológico y Mobiliario</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Infraestructura TI:</strong> Venta y arrendamiento estratégico de cómputo, servidores, periféricos y maquinaria esencial para la operación corporativa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Habilitación de Espacios:</strong> Suministro y renta de mobiliario ejecutivo que facilita la expansión inmediata sin grandes inversiones de capital (Capex).</span>
                </li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0088FF]/10 transition-colors">
                <Truck className="w-7 h-7 text-[#0088FF]" />
              </div>
              <h4 className="text-2xl font-bold text-[#001A54] mb-4">Soluciones Logísticas y Mensajería</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Distribución de Precisión (Última Milla):</strong> Mensajería local dedicada para el traslado eficiente de suministros, refacciones y documentos críticos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Gestión de Rutas:</strong> Logística urbana e inter-operativa diseñada para optimizar de punta a punta la cadena de suministro interna.</span>
                </li>
              </ul>
            </div>

            {/* Servicio 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0088FF]/10 transition-colors">
                <Globe className="w-7 h-7 text-[#0088FF]" />
              </div>
              <h4 className="text-2xl font-bold text-[#001A54] mb-4">Comercialización al Por Mayor</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Abastecimiento Integral:</strong> Capacidad probada de proveeduría de insumos diversos para el comercio y la industria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#33A3FF] mt-1 shrink-0" />
                  <span className="text-slate-600"><strong>Intermediación Global:</strong> Actuamos como su brazo de comercialización simplificando radicalmente los procesos de adquisición corporativa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section id="propuesta" className="py-24 bg-[#001147] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#33A3FF] font-bold tracking-wider uppercase text-sm mb-3">Por Qué Elegirnos</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Nuestra Propuesta de Valor</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <Network className="w-10 h-10 text-[#33A3FF] mb-6" />
              <h4 className="text-xl font-bold mb-4">Convergencia Física y Tecnológica</h4>
              <p className="text-slate-300">
                Somos de los pocos proveedores capaces de levantar la estructura física de un proyecto (obra de acero) y, al mismo tiempo, equiparla por completo con su infraestructura tecnológica y de mobiliario.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <Banknote className="w-10 h-10 text-[#33A3FF] mb-6" />
              <h4 className="text-xl font-bold mb-4">Eficiencia en Costos (OpEx vs. Capex)</h4>
              <p className="text-slate-300">
                Facilitamos el crecimiento de su empresa mediante modelos flexibles de arrendamiento de equipos y maquinaria que protegen activamente el flujo de efectivo de su organización.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <Clock className="w-10 h-10 text-[#33A3FF] mb-6" />
              <h4 className="text-xl font-bold mb-4">Agilidad de Respuesta Logística</h4>
              <p className="text-slate-300">
                Contamos con la flexibilidad operativa para resolver el abasto masivo de componentes y asegurar su distribución local inmediata a través de nuestro propio brazo de mensajería.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia y Metodología */}
      <section id="metodologia" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Líneas de Trabajo Comunes */}
          <div>
            <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Experiencia Destacada</h3>
            <h2 className="text-3xl font-extrabold text-[#001147] mb-8">Casos de Uso Comunes</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 shrink-0"><Building2 className="w-6 h-6 text-[#0088FF]" /></div>
                <div>
                  <h4 className="text-lg font-bold text-[#001A54] mb-2">Habilitación Integral de Centros de Operación</h4>
                  <p className="text-slate-600">Montaje de estructuras metálicas de almacenamiento, equipamiento de áreas administrativas con esquema de arrendamiento y activación de la distribución local.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0"><Laptop className="w-6 h-6 text-[#0088FF]" /></div>
                <div>
                  <h4 className="text-lg font-bold text-[#001A54] mb-2">Proyectos de Expansión Corporativa</h4>
                  <p className="text-slate-600">Suministro a gran escala de estaciones de trabajo y mobiliario de oficina para corporativos en fase de crecimiento, garantizando instalaciones llave en mano.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 shrink-0"><Shuffle className="w-6 h-6 text-[#0088FF]" /></div>
                <div>
                  <h4 className="text-lg font-bold text-[#001A54] mb-2">Soporte Logístico e Industrial Continuo</h4>
                  <p className="text-slate-600">Contratos de proveeduría de refacciones y maquinaria menor, combinados con mensajería express para el movimiento de materiales críticos entre plantas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Metodología */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
            <h3 className="text-[#0088FF] font-bold tracking-wider uppercase text-sm mb-3">Paso a Paso</h3>
            <h2 className="text-3xl font-extrabold text-[#001147] mb-8">Metodología de Operación</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#0088FF] before:to-transparent">
              {[
                { title: "Ingeniería y Diagnóstico", desc: "Analizamos los planos de montaje o las necesidades de volumen tecnológico y distribución logística del cliente." },
                { title: "Planificación y Suministro", desc: "Coordinamos el abasto de las estructuras de acero o la configuración del equipamiento informático solicitado." },
                { title: "Ejecución y Montaje en Sitio", desc: "Desplegamos equipos técnicos certificados para el montaje seguro o la instalación y puesta a punto tecnológica." },
                { title: "Operación y Soporte Sostenido", desc: "Activamos flujos logísticos y esquemas de mantenimiento para garantizar la continuidad ininterrumpida de su negocio." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#0088FF] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-[#001A54] mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
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

            <a href="tel:+529221534260" className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#0088FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-[#33A3FF]" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Teléfono de Contacto</h4>
              <p className="text-[#33A3FF] font-medium">+52 922 153 4260</p>
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
