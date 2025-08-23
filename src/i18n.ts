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
      missionTitle: 'Mission',
      mission: 'Provide quality components and trustworthy support.',
      visionTitle: 'Vision',
      vision: 'Be the preferred partner for HVAC/R professionals in our community.',
      valuesTitle: 'Values',
      values: 'Integrity, safety, service, and education.',
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
      featuredTitle: 'Featured Products',
      f1: 'Hermetic compressors',
      f2: 'Filter driers and sight glasses',
      f3: 'Thermostats and controllers',
      f4: 'Refrigerant gases (R-134a, R-410A, R-404A)',
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
      missionTitle: 'Misión',
      mission: 'Proveer componentes de calidad y soporte confiable.',
      visionTitle: 'Visión',
      vision: 'Ser el aliado preferido de los profesionales HVAC/R de nuestra comunidad.',
      valuesTitle: 'Valores',
      values: 'Integridad, seguridad, servicio y educación.',
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
      featuredTitle: 'Productos destacados',
      f1: 'Compresores herméticos',
      f2: 'Secadores de filtro y mirillas',
      f3: 'Termostatos y controladores',
      f4: 'Gases refrigerantes (R-134a, R-410A, R-404A)',
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

