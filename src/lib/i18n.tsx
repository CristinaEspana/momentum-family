import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = (typeof translations)["es"];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      events: "Eventos",
      shop: "Tienda",
      contact: "Contacto",
      cta: "Reservar consulta",
      openMenu: "Abrir menú",
    },
    home: {
      badge: "Familias hispanohablantes en Canadá",
      title1: "Un refugio cálido para tu",
      titleEm: "familia",
      title2: ".",
      lead: "En Momentum Family acompañamos a madres, padres y cuidadores con herramientas, comunidad y mentoría para criar con calma y propósito.",
      ctaPrimary: "Reservar consulta",
      ctaSecondary: "Ver servicios",
      pillarsKicker: "Lo que nos mueve",
      pillarsTitle: "Tres pilares para crecer en familia.",
      pillars: [
        {
          title: "Crianza consciente",
          text: "Espacios de reflexión y herramientas prácticas para el día a día con tus hijos.",
        },
        {
          title: "Comunidad cercana",
          text: "Una red de familias hispanohablantes que comparten su camino en Canadá.",
        },
        {
          title: "Mentoría individual",
          text: "Acompañamiento personalizado en español para los momentos que lo necesitas.",
        },
      ],
      quote:
        "“Criar lejos de casa es posible cuando encuentras un refugio cálido donde tu idioma, tu historia y tu familia tienen lugar.”",
      ctaTitle: "¿Lista para dar el siguiente paso?",
      ctaText: "Agenda una conversación inicial gratuita y descubre cómo podemos acompañarte.",
      ctaButton: "Empezar ahora",
    },
    services: {
      kicker: "Servicios",
      title: "Acompañamiento diseñado para familias como la tuya.",
      lead: "Cada propuesta nace de la escucha y de la experiencia compartida. Elige el formato que mejor se adapte a tu momento.",
      cta: "Hablemos de tu familia",
      items: [
        {
          title: "Mentoría individual",
          desc: "Sesiones 1 a 1 en español para acompañarte en momentos clave de tu maternidad o paternidad.",
        },
        {
          title: "Círculos de familias",
          desc: "Encuentros mensuales para compartir, escuchar y construir comunidad.",
        },
        {
          title: "Talleres temáticos",
          desc: "Crianza respetuosa, bilingüismo, transiciones y vida en Canadá.",
        },
        {
          title: "Acompañamiento emocional",
          desc: "Espacios seguros para procesar la migración, la maternidad y la identidad.",
        },
      ],
    },
    about: {
      kicker: "Nuestra historia",
      title: "Un proyecto nacido del corazón de una familia migrante.",
      p1: "Momentum Family surge para crear el espacio que nos hubiera gustado encontrar al llegar a Canadá: un lugar en español, cercano y honesto, donde las familias puedan sentirse acompañadas en cada paso.",
      p2: "Creemos en la crianza consciente, en la fuerza de la comunidad y en el valor de compartir el camino con quienes te entienden sin necesidad de traducir.",
      values: [
        { title: "Cercanía", text: "Hablamos tu idioma y conocemos tu contexto." },
        { title: "Profesionalismo", text: "Acompañamiento con base, ética y constancia." },
        { title: "Comunidad", text: "Tejemos red entre familias que se sostienen." },
      ],
    },
    events: {
      kicker: "Eventos",
      title: "Encuentros que fortalecen a tu familia.",
      lead: "Conferencias, talleres y campamentos pensados para acompañarte en cada etapa. Reserva tu cupo en los próximos eventos.",
      register: "Reservar cupo",
      seats: "cupos disponibles",
      from: "Desde",
      items: [
        {
          title: "Conferencia: Paternidad efectiva",
          date: "15 de junio, 2026",
          location: "Toronto, ON",
          price: "$45 CAD",
          tag: "Conferencia",
          desc: "Una tarde para descubrir herramientas prácticas que transforman la relación con tus hijos.",
        },
        {
          title: "Summer Camp Familias en Movimiento",
          date: "20 – 26 de julio, 2026",
          location: "Muskoka, ON",
          price: "$320 CAD",
          tag: "Campamento",
          desc: "Una semana de naturaleza, juego y conexión para familias hispanohablantes en Canadá.",
        },
        {
          title: "Taller: Bilingüismo en casa",
          date: "12 de septiembre, 2026",
          location: "En línea",
          price: "$25 CAD",
          tag: "Taller",
          desc: "Estrategias reales para sostener el español en familias multiculturales.",
        },
        {
          title: "Círculo de madres recién llegadas",
          date: "Cada último sábado del mes",
          location: "Mississauga, ON",
          price: "Gratis",
          tag: "Círculo",
          desc: "Un espacio cálido para compartir tu historia y tejer comunidad.",
        },
      ],
    },
    shop: {
      kicker: "Tienda",
      title: "Reserva eventos y cursos en un solo lugar.",
      lead: "Selecciona los eventos o cursos que quieres asegurar y completa tu compra de forma sencilla. Próximamente con pago en línea.",
      addToCart: "Añadir al carrito",
      added: "Añadido",
      cart: "Tu carrito",
      empty: "Tu carrito está vacío. Explora nuestros eventos y cursos.",
      total: "Total",
      checkout: "Ir al pago",
      remove: "Quitar",
      notice:
        "Pasarela de pago disponible muy pronto. Mientras tanto, escríbenos por WhatsApp para reservar.",
      categoryEvent: "Evento",
      categoryCourse: "Curso",
      courses: [
        {
          title: "Curso online: Crianza consciente",
          desc: "6 módulos en video con ejercicios prácticos para acompañar a tus hijos con calma.",
          price: "$120 CAD",
          tag: "Curso",
        },
        {
          title: "Curso online: Maternidad migrante",
          desc: "Acompañamiento en 4 sesiones para sostener tu maternidad en un país nuevo.",
          price: "$95 CAD",
          tag: "Curso",
        },
        {
          title: "Mentoría 1:1 (paquete x3)",
          desc: "Tres sesiones individuales en español para tu momento personal o familiar.",
          price: "$210 CAD",
          tag: "Mentoría",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "Cuéntanos en qué momento estás.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Correo",
      emailPh: "tu@correo.com",
      message: "Mensaje",
      messagePh: "Cuéntanos sobre tu familia...",
      send: "Enviar mensaje",
      writeUs: "Escríbenos",
      whereTitle: "Dónde estamos",
      whereText: "Canadá · Atendemos en español a familias en todo el país.",
    },
    whatsapp: {
      label: "Chatea con nosotros",
      message:
        "Hola Momentum Family 👋, me gustaría agendar una cita y resolver algunas inquietudes.",
    },
    footer: {
      tagline:
        "Acompañamos a familias hispanohablantes en Canadá con apoyo cálido, cercano y profesional en cada etapa de su camino.",
      navTitle: "Navegación",
      contactTitle: "Contacto",
      country: "Canadá",
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con cuidado para nuestras familias.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      events: "Events",
      shop: "Shop",
      contact: "Contact",
      cta: "Book a consult",
      openMenu: "Open menu",
    },
    home: {
      badge: "Spanish-speaking families in Canada",
      title1: "A warm shelter for your",
      titleEm: "family",
      title2: ".",
      lead: "At Momentum Family we support mothers, fathers and caregivers with tools, community and mentorship to raise children with calm and purpose.",
      ctaPrimary: "Book a consult",
      ctaSecondary: "See services",
      pillarsKicker: "What moves us",
      pillarsTitle: "Three pillars to grow as a family.",
      pillars: [
        {
          title: "Conscious parenting",
          text: "Spaces for reflection and practical tools for everyday life with your children.",
        },
        {
          title: "Close-knit community",
          text: "A network of Spanish-speaking families sharing their journey in Canada.",
        },
        {
          title: "One-on-one mentorship",
          text: "Personalized guidance in Spanish for the moments when you need it most.",
        },
      ],
      quote:
        "“Raising children far from home is possible when you find a warm shelter where your language, your story and your family have a place.”",
      ctaTitle: "Ready for the next step?",
      ctaText: "Schedule a free intro call and discover how we can support you.",
      ctaButton: "Get started",
    },
    services: {
      kicker: "Services",
      title: "Support designed for families like yours.",
      lead: "Every offering is born from listening and shared experience. Pick the format that best fits your moment.",
      cta: "Let's talk about your family",
      items: [
        {
          title: "One-on-one mentorship",
          desc: "1:1 sessions in Spanish to support you through key moments of motherhood or fatherhood.",
        },
        {
          title: "Family circles",
          desc: "Monthly gatherings to share, listen and build community.",
        },
        {
          title: "Thematic workshops",
          desc: "Respectful parenting, bilingualism, transitions and life in Canada.",
        },
        {
          title: "Emotional support",
          desc: "Safe spaces to process migration, parenthood and identity.",
        },
      ],
    },
    about: {
      kicker: "Our story",
      title: "A project born from the heart of a migrant family.",
      p1: "Momentum Family was created to be the space we wished we had found when we arrived in Canada: a place in Spanish, close and honest, where families feel accompanied every step of the way.",
      p2: "We believe in conscious parenting, in the strength of community, and in the value of walking the path with people who understand you without needing to translate.",
      values: [
        { title: "Closeness", text: "We speak your language and know your context." },
        { title: "Professionalism", text: "Grounded, ethical and consistent support." },
        { title: "Community", text: "We weave a network of families that hold each other." },
      ],
    },
    events: {
      kicker: "Events",
      title: "Gatherings that strengthen your family.",
      lead: "Conferences, workshops and camps designed to walk alongside you. Save your spot for the upcoming events.",
      register: "Reserve a spot",
      seats: "seats available",
      from: "From",
      items: [
        {
          title: "Conference: Effective Parenting",
          date: "June 15, 2026",
          location: "Toronto, ON",
          price: "$45 CAD",
          tag: "Conference",
          desc: "An afternoon of practical tools that transform the relationship with your children.",
        },
        {
          title: "Summer Camp Families in Motion",
          date: "July 20 – 26, 2026",
          location: "Muskoka, ON",
          price: "$320 CAD",
          tag: "Camp",
          desc: "A week of nature, play and connection for Spanish-speaking families in Canada.",
        },
        {
          title: "Workshop: Bilingualism at home",
          date: "September 12, 2026",
          location: "Online",
          price: "$25 CAD",
          tag: "Workshop",
          desc: "Real strategies to keep Spanish alive in multicultural families.",
        },
        {
          title: "Circle for new-arrival mothers",
          date: "Last Saturday of every month",
          location: "Mississauga, ON",
          price: "Free",
          tag: "Circle",
          desc: "A warm space to share your story and weave community.",
        },
      ],
    },
    shop: {
      kicker: "Shop",
      title: "Book events and courses in one place.",
      lead: "Pick the events or courses you want to secure and complete your purchase in a few clicks. Online payment coming soon.",
      addToCart: "Add to cart",
      added: "Added",
      cart: "Your cart",
      empty: "Your cart is empty. Explore our events and courses.",
      total: "Total",
      checkout: "Go to checkout",
      remove: "Remove",
      notice:
        "Online payments are coming soon. In the meantime, message us on WhatsApp to reserve.",
      categoryEvent: "Event",
      categoryCourse: "Course",
      courses: [
        {
          title: "Online course: Conscious parenting",
          desc: "6 video modules with practical exercises to support your children with calm.",
          price: "$120 CAD",
          tag: "Course",
        },
        {
          title: "Online course: Migrant motherhood",
          desc: "4-session program to support your motherhood in a new country.",
          price: "$95 CAD",
          tag: "Course",
        },
        {
          title: "1:1 Mentorship (3-pack)",
          desc: "Three personal sessions in Spanish for your personal or family moment.",
          price: "$210 CAD",
          tag: "Mentorship",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Tell us where you are right now.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      message: "Message",
      messagePh: "Tell us about your family...",
      send: "Send message",
      writeUs: "Write us",
      whereTitle: "Where we are",
      whereText: "Canada · We serve Spanish-speaking families across the country.",
    },
    whatsapp: {
      label: "Chat with us",
      message: "Hi Momentum Family 👋, I'd love to book a session and ask a few questions.",
    },
    footer: {
      tagline:
        "We support Spanish-speaking families in Canada with warm, close and professional care at every stage of their journey.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      country: "Canada",
      rights: "All rights reserved.",
      madeWith: "Made with care for our families.",
    },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? (localStorage.getItem("mf_lang") as Lang | null) : null;
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("mf_lang", l);
      document.documentElement.lang = l;
    }
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] as Dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
