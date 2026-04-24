import {
  ArrowRight,
  Mail,
  Handshake,
  ShieldCheck,
  Zap,
  Sparkles,
  Compass,
  Users,
  Search,
  CheckCircle2,
} from "lucide-react";
import logo from "@/assets/logo-wemu.png";
import caro from "@/assets/caro.png";

const MAIL = "mailto:caro.aliaga@wemuhr.com";
const WHATSAPP =
  "https://wa.me/5493516288357?text=Hola%2C%20me%20vi%20la%20p%C3%A1gina%20de%20WeMu%20me%20interesa%20que%20me%20ayuden%20en%20mi%20empresa";

const valores = [
  {
    icon: Zap,
    title: "Compromiso que se hace acción",
    description:
      "No nos quedamos en la recomendación: nos involucramos, ejecutamos y nos hacemos responsables de los resultados.",
  },
  {
    icon: Handshake,
    title: "Cercanía que construye confianza",
    description:
      "Generamos relaciones reales, entendiendo el contexto, las personas y los desafíos de cada equipo.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia radical",
    description:
      "Decimos lo que pensamos, incluso cuando es incómodo, porque creemos que la honestidad es la base de cualquier relación de valor.",
  },
  {
    icon: Sparkles,
    title: "Estructura con foco en excelencia",
    description:
      "Ordenamos procesos y elevamos estándares para que el crecimiento no dependa del caos.",
  },
  {
    icon: Compass,
    title: "Mentalidad flexible y estratégica",
    description:
      "Nos adaptamos a cada etapa del negocio, combinando flexibilidad con mirada de largo plazo.",
  },
];

const situaciones = [
  "Tengo que contratar varias personas ya… y no sé por dónde empezar.",
  "El equipo creció, pero HR sigue sin estructura ni procesos.",
  "Necesito alguien de HR, pero no puedo sumar una posición full-time.",
  "Tenemos que lanzar performance… y no damos abasto.",
  "Estamos creciendo, pero el talento no escala al mismo ritmo.",
];

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center">
            <img src={logo} alt="WeMu — Connecting People & Strategy" className="h-9 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#nosotros" className="hover:text-foreground transition">Nosotros</a>
            <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
            <a href="#porque" className="hover:text-foreground transition">Por qué WeMu</a>
            <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white shadow-soft hover:opacity-95 transition"
          >
            Hablemos <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-brand opacity-15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
              Connecting People &amp; Strategy
            </p>
            <p className="mt-6 text-xl md:text-2xl font-medium text-foreground/85 max-w-2xl leading-relaxed">
              ¿Estás creciendo rápido y sin estructura de talento?
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05] text-foreground">
              Nos convertimos en tu{" "}
              <span className="text-gradient-brand">HR partner</span>{" "}
              para contratar mejor, ordenar procesos y escalar tu equipo.
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Fractional HR y Talent Acquisition para startups y empresas en crecimiento.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={MAIL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-medium text-white shadow-elegant hover:opacity-95 transition"
              >
                Hablemos <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-medium text-foreground hover:bg-muted transition"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="nosotros" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
              El área de HR que tu empresa necesita, sin contratar a nadie full-time.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Somos una consultora de HR especializada en Fractional HR y Talent Acquisition,
              enfocada en acompañar startups y empresas en crecimiento. Nos integramos a tu equipo,
              entendemos la etapa en la que están, tu cultura y urgencias — y ejecutamos. Sin curva
              de aprendizaje larga, sin overhead. Te ayudamos a ordenar, construir y potenciar tus
              procesos, equipos y cultura.
            </p>
          </div>
        </div>
      </section>

      {/* SITUACIONES */}
      <section className="bg-muted/40 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              ¿Te suena familiar alguna de estas situaciones?
            </h2>
          </div>
          <ul className="space-y-4">
            {situaciones.map((s) => (
              <li
                key={s}
                className="flex items-start gap-4 rounded-2xl bg-card p-5 md:p-6 border border-border/60 shadow-soft"
              >
                <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <span className="text-base md:text-lg text-foreground/85 leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-xl md:text-2xl font-semibold text-gradient-brand">
            Ahí es donde entramos nosotros.
          </p>
        </div>

        {/* Valores */}
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Nuestros valores
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
              Lo que nos guía todos los días
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group rounded-2xl bg-card p-6 border border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 font-semibold text-foreground">{v.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">Servicios</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-foreground">
            Dos formas de acompañarte
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fractional HR */}
          <article className="group relative rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Fractional HR</h3>
            <p className="mt-2 text-primary font-medium">
              Tu equipo de HR, cuando lo necesitás.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nos integramos a tu equipo como partner estratégico y operativo para ordenar, decidir
              y ejecutar todo lo relacionado a personas. Sin costos fijos, sin estructuras
              innecesarias.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">¿Dónde generamos impacto?</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Definición de estrategia de People alineada al negocio",
                  "Orden y optimización de procesos de HR: Talent Acquisition, Onboarding, Performance, Compensaciones",
                  "Cultura y experiencia del equipo",
                  "Soporte en el día a día (sin que tengas que apagar incendios)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-foreground/85 leading-relaxed">
                👉 Ideal para equipos en crecimiento o con picos de trabajo que necesitan
                estructura sin perder velocidad.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-sm font-semibold text-foreground">¿Cómo trabajamos?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/80">
                  Fee mensual: según paquete de horas acordadas
                </span>
                <span className="rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/80">
                  Por proyecto cerrado
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 mt-auto">
              <a
                href={MAIL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-soft hover:opacity-95 transition"
              >
                Necesito ayuda con HR <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Talent Acquisition */}
          <article className="group relative rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-soft hover:shadow-elegant transition-all duration-300 flex flex-col">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-foreground">Talent Acquisition</h3>
            <p className="mt-2 text-primary font-medium">
              El talento correcto, en el momento justo.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Encontramos el talento que realmente necesitás, combinando fit técnico y cultural. No
              solo buscamos: te ayudamos a tomar mejores decisiones de contratación.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">¿Cómo te ayudamos?</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "Definición clara del perfil (lo que realmente necesitás, no lo «ideal»)",
                  "Búsqueda y selección de candidatos",
                  "Acompañamiento en todo el proceso",
                  "Mejora de tu proceso de recruiting",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground/80">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-foreground/85 leading-relaxed">
                👉 Ideal si necesitás escalar tu equipo sin equivocarte en el hiring.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60">
              <p className="text-sm font-semibold text-foreground">¿Cómo trabajamos?</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/80">
                  A éxito por posición
                </span>
                <span className="rounded-full bg-muted px-4 py-1.5 text-sm text-foreground/80">
                  Fee mensual como partner de recruiting
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60 mt-auto">
              <a
                href={MAIL}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-soft hover:opacity-95 transition"
              >
                Necesito ayuda con Talent <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* POR QUÉ WEMU */}
      <section id="porque" className="bg-gradient-soft border-y border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-gradient-brand blur-2xl opacity-40"
                />
                <img
                  src={caro}
                  alt="Caro Aliaga, Founder & Lead Coordinator de WeMu"
                  className="relative h-56 w-56 rounded-full object-cover border-4 border-background shadow-elegant"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <p className="text-lg font-semibold text-foreground">Caro Aliaga</p>
                <p className="text-sm text-muted-foreground">Founder &amp; Lead Coordinator</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Por qué WeMu
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
                Porque crecer sin una buena estrategia de talento termina frenando el negocio.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                En WeMu combinamos experiencia en multinacionales y startups tech para meternos de
                lleno en tu realidad y resolver lo que hoy te está trabando: desde contratar mejor
                hasta ordenar procesos y tomar decisiones clave de personas.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/85">
                No nos quedamos en la recomendación. Nos integramos como parte del equipo,
                entendemos tu contexto y ejecutamos con foco, estructura y mentalidad de
                crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-20 text-center shadow-elegant">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 80%, white 0%, transparent 40%)",
            }}
          />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-semibold text-white">
              ¿Hablamos?
            </h2>
            <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Contanos qué te está trabando hoy y trabajamos juntos para resolverlo.
            </p>
            <a
              href={MAIL}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-medium text-foreground shadow-soft hover:bg-white/95 transition"
            >
              <Mail className="h-5 w-5" /> Contactanos
            </a>
            <p className="mt-6 text-sm text-white/80">caro.aliaga@wemuhr.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="WeMu" className="h-8 w-auto opacity-90" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WeMu — Connecting People &amp; Strategy.
          </p>
        </div>
      </footer>
    </div>
  );
}
