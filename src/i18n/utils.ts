import { ui, defaultLang } from './ui';
import type { SupportedLanguage } from '../types';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Detects the browser's preferred language
 * @param request - Astro Request object
 * @returns SupportedLanguage - Detected language or default language
 */
export function getBrowserLanguage(request?: Request): SupportedLanguage {
  if (!request) return defaultLang as SupportedLanguage;

  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLang as SupportedLanguage;

  // Parse the Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return {
        code: code.toLowerCase().split('-')[0], // Only the main code (es, en)
        quality: parseFloat(q)
      };
    })
    .sort((a, b) => b.quality - a.quality); // Sort by preference

  // Find the first supported language
  for (const lang of languages) {
    if (lang.code in ui) {
      return lang.code as SupportedLanguage;
    }
  }

  return defaultLang as SupportedLanguage;
}

/**
 * Resolves the final language considering URL parameters and browser
 * @param params - Astro parameters
 * @param request - Astro Request object
 * @returns SupportedLanguage - Final language to use
 */
export function resolveLanguage(params: any, request?: Request): SupportedLanguage {
  // 1. Priority: URL parameter
  if (params?.lang && params.lang in ui) {
    return params.lang as SupportedLanguage;
  }

  // 2. Fallback: browser language
  return getBrowserLanguage(request);
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}