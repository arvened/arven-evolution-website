import {getRequestConfig} from 'next-intl/server';

function deepMerge(base: any, override: any): any {
  const result = {...base};
  for (const key in override) {
    if (
      typeof override[key] === 'object' &&
      override[key] !== null &&
      !Array.isArray(override[key]) &&
      typeof base[key] === 'object'
    ) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

export default getRequestConfig(async ({locale}) => {
  const validLocales = ['en', 'bg', 'hr', 'cs', 'da', 'nl', 'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'es', 'sv'];
  const validLocale = validLocales.includes(locale) ? locale : 'en';

  const enMessages = (await import('./messages/en.json')).default;

  if (validLocale === 'en') {
    return { messages: enMessages };
  }

  const localeMessages = (await import(`./messages/${validLocale}.json`)).default;
  const mergedMessages = deepMerge(enMessages, localeMessages);

  return {
    messages: mergedMessages
  };
});
