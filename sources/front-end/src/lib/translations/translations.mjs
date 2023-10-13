import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async() => (
        await import ('./en/about.json')
      ).default,
    },
    {
      locale: 'ru',
      key: 'about',
      routes: ['/about'],
      loader: async() => (
        await import ('./ru/about.json')
      ).default,
    }
  ],
}); 

export const {
  t,
  locale,
  locales,
  loading,
  loadTranslations
} = new i18n(config);
