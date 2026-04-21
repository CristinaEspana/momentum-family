import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "es" | "en";

type Dict = (typeof translations)["es"];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
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
        { title: "Crianza consciente", text: "Espacios de reflexión y herramientas prácticas para el día a día con tus hijos." },
        { title: "Comunidad cercana", text: "Una red de familias hispanohablantes que comparten su camino en Canadá." },
        { title: "Mentoría individual", text: "Acompañamiento personalizado en español para los momentos que lo necesitas." },
      ],
      quote: "“Criar lejos de casa es posible cuando encuentras un refugio cálido donde tu idioma, tu historia y tu familia tienen lugar.”",
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
        { title: "Mentoría individual", desc: "Sesiones 1 a 1 en español para acompañarte en momentos clave de tu maternidad o paternidad." },
        { title: "Círculos de familias", desc: "Encuentros mensuales para compartir, escuchar y construir comunidad." },
        { title: "Talleres temáticos", desc: "Crianza respetuosa, bilingüismo, transiciones y vida en Canadá." },
        { title: "Acompañamiento emocional", desc: "Espacios seguros para procesar la migración, la maternidad y la identidad." },
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
    footer: {
      tagline: "Acompañamos a familias hispanohablantes en Canadá con apoyo cálido, cercano y profesional en cada etapa de su camino.",
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
        { title: "Conscious parenting", text: "Spaces for reflection and practical tools for everyday life with your children." },
        { title: "Close-knit community", text: "A network of Spanish-speaking families sharing their journey in Canada." },
        { title: "One-on-one mentorship", text: "Personalized guidance in Spanish for the moments when you need it most." },
      ],
      quote: "“Raising children far from home is possible when you find a warm shelter where your language, your story and your family have a place.”",
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
        { title: "One-on-one mentorship", desc: "1:1 sessions in Spanish to support you through key moments of motherhood or fatherhood." },
        { title: "Family circles", desc: "Monthly gatherings to share, listen and build community." },
        { title: "Thematic workshops", desc: "Respectful parenting, bilingualism, transitions and life in Canada." },
        { title: "Emotional support", desc: "Safe spaces to process migration, parenthood and identity." },
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
    footer: {
      tagline: "We support Spanish-speaking families in Canada with warm, close and professional care at every stage of their journey.",
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
    const stored = typeof window !== "undefined" ? (localStorage.getItem("mf_lang") as Lang | null) : null;
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
