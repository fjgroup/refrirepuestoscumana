import { reactive, computed } from 'vue'

export type Locale = 'en' | 'es'

const STORAGE_KEY = 'rrc_locale'

function getInitialLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'en' || saved === 'es') return saved
  const nav = navigator.language?.toLowerCase() || 'en'
  return nav.startsWith('es') ? 'es' : 'en'
}

const state = reactive({
  locale: getInitialLocale() as Locale,
})

export function setLocale(l: Locale) {
  state.locale = l
  localStorage.setItem(STORAGE_KEY, l)
}

export const currentLocale = computed(() => state.locale)

// UI copy
const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products & Services',
      encyclopedia: 'Encyclopedia',
      contact: 'Contact',
    },
    hero: {
      title: 'Refrigeration Parts & Technical Solutions',
      subtitle: 'Fast, reliable service for air conditioners and refrigerators. We help you save with modern refrigerant options (like efficient 410 blends) that deliver the cooling you expect. Clear prices, quick diagnostics, and quality parts for residential and commercial repairs.',
      cta: 'Explore Services',
    },
    about: {
      title: 'Who We Are',
      blurb: 'We are a refrigeration parts and solutions company serving technicians, facilities, and homeowners with reliable components and practical expertise.',
      readMore: 'Read more',
      missionTitle: 'Mission',
      mission: 'Our mission is to help technicians, facilities and homeowners keep their cooling equipment working safely and efficiently. We do this by offering quality components from trusted brands, fast and honest guidance, and practical education that avoids jargon. We prioritize safety and cost-effectiveness: we explain options based on the real condition of the system, recommend only the parts that are truly needed, and back our advice with clear reasoning. For technicians and companies, we aim to be a reliable parts partner with on-hand inventory and prompt support. For homes and small businesses, we focus on quick diagnostics, transparent estimates and smart replacements that improve comfort and reduce energy waste. Everything we do is built on service, integrity and care for the people who rely on refrigeration every day.',
      visionTitle: 'Vision',
      vision: 'Our vision is to become the preferred partner for HVAC/R professionals and homeowners in Florida. We want to be recognized as a practical, trustworthy team that solves problems quickly while raising the technical quality of the local market. We believe in knowledge as a service: a store that not only sells parts but also teaches good practices, safe handling of refrigerants, and the value of preventive maintenance. We will expand our catalog with modern, efficient components and develop a simple digital experience so customers can find parts, read tips and get help in minutes. We will serve both English and Spanish speakers with the same level of clarity and respect.',
      valuesTitle: 'Values',
      values: 'Integrity and honesty in every recommendation; safety as a non‑negotiable standard; service that respects our customers’ time; education to empower technicians and users; and community commitment through fair prices and dependable support. We believe that long‑term relationships are built when our advice saves money and prevents failures. Our daily decisions reflect this: suggest only what is needed, explain alternatives, and deliver parts that we would confidently install in our own systems.',
    },
    products: {
      title: 'Products & Services',
      search: 'Search products…',
      categories: 'Categories',
      cats: {
        compressors: 'Compressors',
        electrical: 'Electrical & Controls',
        refrigerants: 'Refrigerants',
        valves: 'Valves & Flow',
        motors: 'Motors & Fans',
        driers: 'Filter Driers',
        tools: 'Tools & Accessories',
      },
      catalogNote: 'Catalog preview only. Contact us for availability and support.',
    },
    encyclopedia: {
      title: 'Refrigeration Encyclopedia',
      search: 'Search articles…',
      categories: 'Categories',
      readMore: 'Read more',
      cat: {
        compressors: 'Compressors',
        fundamentals: 'Fundamentals',
        maintenance: 'Maintenance',
        components: 'Components',
        controls: 'Controls',
        airflow: 'Airflow',
        tools: 'Tools',
        refrigerants: 'Refrigerants',
        safety: 'Safety',
      }
    },
    contact: {
      title: 'Contact',
      address: 'Address',
      phone: 'Phone',
      hours: 'Hours',
      hoursValue: 'Mon–Fri 9:00–17:00',
    },
    footer: {
      rights: 'All rights reserved.',
      follow: 'Follow us',
    },
    home: {
      featuredTitle: 'Encyclopedia Tip',
      tipReadMore: 'Read more'
    },
    seo: {
      home: 'REFRIREPUESTOSCUMANÁ | Refrigeration Parts & Solutions',
      about: 'About | REFRIREPUESTOSCUMANÁ',
      products: 'Products & Services | REFRIREPUESTOSCUMANÁ',
      encyclopedia: 'Encyclopedia | REFRIREPUESTOSCUMANÁ',
      contact: 'Contact | REFRIREPUESTOSCUMANÁ',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre nosotros',
      products: 'Productos y servicios',
      encyclopedia: 'Enciclopedia',
      contact: 'Contacto',
    },
    hero: {
      title: 'Repuestos de Refrigeración y Soluciones Técnicas',
      subtitle: 'Servicio rápido y confiable para aires acondicionados y refrigeradores. Te ayudamos a ahorrar con opciones modernas de gas (como mezclas 410 eficientes) que brindan el frío que esperas. Precios claros, diagnóstico ágil y repuestos de calidad para reparaciones residenciales e industriales.',
      cta: 'Ver servicios',
    },
    about: {
      title: 'Sobre nosotros',
      blurb: 'Somos una empresa de repuestos y soluciones de refrigeración que atiende a técnicos, empresas y hogares con componentes confiables y asesoría práctica.',
      readMore: 'Leer más',
      missionTitle: 'Misión',
      mission: 'Nuestra misión es ayudar a técnicos, empresas y hogares a mantener sus equipos de frío funcionando de forma segura y eficiente. Lo logramos ofreciendo repuestos de calidad de marcas confiables, asesoría rápida y honesta, y educación práctica sin tecnicismos. Priorizamos la seguridad y el ahorro: explicamos opciones según el estado real del equipo, recomendamos solo lo necesario y fundamentamos cada decisión con argumentos claros. Para técnicos y compañías, buscamos ser un aliado confiable con inventario oportuno y soporte ágil. Para hogares y pequeños comercios, brindamos diagnóstico rápido, presupuestos transparentes y reemplazos inteligentes que mejoran el confort y reducen el consumo. Todo lo que hacemos se basa en el servicio, la integridad y el cuidado por las personas que dependen de la refrigeración todos los días.',
      visionTitle: 'Visión',
      vision: 'Queremos ser el aliado preferido de los profesionales y hogares de Florida. Aspiramos a ser un equipo práctico y confiable que resuelve rápido, elevando la calidad técnica del mercado local. Creemos en el conocimiento como servicio: una tienda que no solo vende repuestos, sino que enseña buenas prácticas, manejo seguro de refrigerantes y el valor del mantenimiento preventivo. Ampliaremos el catálogo con componentes eficientes y construiremos una experiencia digital sencilla para que los clientes encuentren piezas, lean consejos y reciban ayuda en minutos. Atenderemos con el mismo respeto y claridad tanto en español como en inglés.',
      valuesTitle: 'Valores',
      values: 'Integridad y honestidad en cada recomendación; seguridad como estándar innegociable; servicio que respeta el tiempo del cliente; educación para empoderar a técnicos y usuarios; y compromiso con la comunidad a través de precios justos y soporte confiable. Creemos que las relaciones duraderas se construyen cuando nuestro consejo ahorra dinero y previene fallas. Esto guía nuestras decisiones diarias: sugerir solo lo necesario, explicar alternativas y entregar repuestos que instalaríamos en nuestros propios sistemas.',
    },
    products: {
      title: 'Productos y servicios',
      search: 'Buscar productos…',
      categories: 'Categorías',
      cats: {
        compressors: 'Compresores',
        electrical: 'Eléctrico y controles',
        refrigerants: 'Refrigerantes',
        valves: 'Válvulas y flujo',
        motors: 'Motores y ventiladores',
        driers: 'Secadores de filtro',
        tools: 'Herramientas y accesorios',
      },
      catalogNote: 'Vista previa del catálogo. Contáctanos para disponibilidad y soporte.',
    },
    encyclopedia: {
      title: 'Enciclopedia de Refrigeración',
      search: 'Buscar artículos…',
      categories: 'Categorías',
      readMore: 'Leer más',
      cat: {
        compressors: 'Compresores',
        fundamentals: 'Fundamentos',
        maintenance: 'Mantenimiento',
        components: 'Componentes',
        controls: 'Controles',
        airflow: 'Aire y ventilación',
        tools: 'Herramientas',
        refrigerants: 'Refrigerantes',
        safety: 'Seguridad',
      }
    },
    contact: {
      title: 'Contacto',
      address: 'Dirección',
      phone: 'Teléfono',
      hours: 'Horario',
      hoursValue: 'Lun–Vie 9:00–17:00',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      follow: 'Síguenos',
    },
    home: {
      featuredTitle: 'Tip de la enciclopedia',
      tipReadMore: 'Leer más'
    },
    seo: {
      home: 'REFRIREPUESTOSCUMANÁ | Repuestos y Soluciones de Refrigeración',
      about: 'Sobre nosotros | REFRIREPUESTOSCUMANÁ',
      products: 'Productos y servicios | REFRIREPUESTOSCUMANÁ',
      encyclopedia: 'Enciclopedia | REFRIREPUESTOSCUMANÁ',
      contact: 'Contacto | REFRIREPUESTOSCUMANÁ',
    },
  },
} as const

export function t(path: string): string {
  const parts = path.split('.')
  // Walk nested keys safely
  let cur: any = (messages as any)[state.locale]
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) cur = cur[p]
    else return path
  }
  return typeof cur === 'string' ? cur : path
}

export const i18n = { messages, currentLocale, setLocale, t }

