import {
  LocalizationStore,
} from '$lib/stores/localization/localization.store.mjs';
import {
  loadTranslations,
} from '$lib/translations/translations.mjs';

let loc;

LocalizationStore.subscribe((currentLocalization) => {
  loc = currentLocalization;
})

/** @type {import('@sveltejs/kit').Load} */
export const load = async({ url }) => {
  const {
    pathname,
  } = url;

  const initLocale = loc || 'en'; 
  
  await loadTranslations(initLocale, pathname);

  return {};
};