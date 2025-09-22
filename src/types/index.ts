// Tipos compartidos para componentes

// Tipo para idiomas soportados
export type SupportedLanguage = "es" | "en";

// Interface base para componentes que requieren idioma
export interface ComponentProps {
  lang: SupportedLanguage;
}

// Interface para componentes con idioma opcional
export interface OptionalLanguageProps {
  lang?: SupportedLanguage;
}

// Interface específica para el Layout que puede tener propiedades adicionales
export interface LayoutProps {
  title?: string;
  description?: string;
  lang?: SupportedLanguage;
}