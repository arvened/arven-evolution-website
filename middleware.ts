import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'bg', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'es', 'sv'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
