import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const validLocales = ['en', 'bg', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'es', 'sv'];
  const validLocale = validLocales.includes(locale) ? locale : 'en';
  return {
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
