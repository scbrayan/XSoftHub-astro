import type { APIRoute } from 'astro';

// Configuración de idiomas
const languages = ['es', 'en'];
const defaultLang = 'es';

// Páginas disponibles (agregar más según tu sitio)
const pages = [
  '', // página principal
  // Agregar más rutas aquí cuando las tengas
  // 'about',
  // 'services',
  // 'contact',
];

export const GET: APIRoute = () => {
  const baseUrl = 'https://xsofthub.com';
  
  // Generar URLs para cada página en cada idioma
  const urls = pages.flatMap(page => {
    return languages.map(lang => {
      const url = page === '' ? `${baseUrl}/${lang}/` : `${baseUrl}/${lang}/${page}`;
      const alternates = languages
        .filter(altLang => altLang !== lang)
        .map(altLang => {
          const altUrl = page === '' ? `${baseUrl}/${altLang}/` : `${baseUrl}/${altLang}/${page}`;
          return `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>`;
        })
        .join('\n');
      
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === defaultLang ? '1.0' : '0.8'}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${defaultLang}/${page === '' ? '' : page}"/>
  </url>`;
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};