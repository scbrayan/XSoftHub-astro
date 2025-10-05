import funFactTranslations from './components/sections/FunFact.json';
import videoSectionTranslations from './components/sections/VideoSection.json';
import innovationTranslations from './components/sections/Innovation.json';
import heroTranslations from './components/sections/Hero.json';
import teamTranslations from './components/sections/Team.json';
import portfolioTranslations from './components/sections/Portfolio.json';
import footerTranslations from './components/sections/Footer.json';
import servicesTranslations from './components/sections/Services.json';
import saasServicesTranslations from './components/sections/SaasServices.json';
import ipInfoTranslations from './pages/saas/ip-info.json';
import contactTranslations from './components/sections/Contact.json';
import partnersTranslations from './components/sections/Partners.json';
import testimonialsTranslations from './components/sections/Testimonials.json';
import pricingTranslations from './components/sections/Pricing.json';
import headerTranslations from './components/Header.json';
import servicePageTranslations from './components/ServicePage.json';
import faqTranslations from './components/Faq.json';
import aiAgentsTranslations from './pages/services/ai-agents.json';
import devopsTranslations from './pages/services/devops.json';
import processAutomationTranslations from './pages/services/process-automation.json';
import customDevelopmentTranslations from './pages/services/custom-development.json';
import astroConfig from '../../astro.config.mjs';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type LanguageKey = keyof typeof languages;

// Obtener el idioma por defecto desde la configuración de Astro
export const defaultLang = astroConfig.i18n?.defaultLocale || 'en';

export const ui = {
  es: {
    ...funFactTranslations.es,
    ...videoSectionTranslations.es,
    ...innovationTranslations.es,
    ...heroTranslations.es,
    ...teamTranslations.es,
    ...portfolioTranslations.es,
    ...footerTranslations.es,
    ...servicesTranslations.es,
    ...saasServicesTranslations.es,
    ...ipInfoTranslations.es,
    ...contactTranslations.es,
    ...partnersTranslations.es,
    ...testimonialsTranslations.es,
    ...pricingTranslations.es,
    ...headerTranslations.es,
    ...aiAgentsTranslations.es,
    ...devopsTranslations.es,
    ...servicePageTranslations.es,
    ...processAutomationTranslations.es,
    ...customDevelopmentTranslations.es,
    ...faqTranslations.es,
    'site.title': 'XSoftHub - Desarrollo de Software',
    'site.description': 'Empresa líder en desarrollo de software, aplicaciones web y móviles. Transformamos ideas en soluciones digitales innovadoras.',
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',
    '404.title': 'Página no encontrada',
    '404.subtitle': 'Error 404',
    '404.description': 'Lo sentimos, la página que estás buscando no existe o ha sido movida.',
    '404.home.button': 'Volver al Inicio',
    '404.contact.button': 'Contactar',
  },
  en: {
    ...funFactTranslations.en,
    ...videoSectionTranslations.en,
    ...innovationTranslations.en,
    ...heroTranslations.en,
    ...teamTranslations.en,
    ...portfolioTranslations.en,
    ...footerTranslations.en,
    ...servicesTranslations.en,
    ...saasServicesTranslations.en,
    ...ipInfoTranslations.en,
    ...contactTranslations.en,
    ...partnersTranslations.en,
    ...testimonialsTranslations.en,
    ...pricingTranslations.en,
    ...headerTranslations.en,
    ...aiAgentsTranslations.en,
    ...devopsTranslations.en,
    ...servicePageTranslations.en,
    ...processAutomationTranslations.en,
    ...customDevelopmentTranslations.en,
    ...faqTranslations.en,
    'site.title': 'XSoftHub - Software Development',
    'site.description': 'Leading software development company, web and mobile applications. We transform ideas into innovative digital solutions.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    '404.title': 'Page not found',
    '404.subtitle': 'Error 404',
    '404.description': 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    '404.home.button': 'Back to Home',
    '404.contact.button': 'Contact',
  },
} as const;