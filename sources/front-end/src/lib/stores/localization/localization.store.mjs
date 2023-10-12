import {
  writable,
} from 'svelte/store';
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
} from '$lib/constants/languages.mjs';

console.log({
  DEFAULT_LANGUAGE,
  LANGUAGES,
})

const createLocalizationStore = () => {
  const {
    subscribe,
    set,
    // update,
  } = writable(DEFAULT_LANGUAGE);

  return {
    subscribe,
    setLanguage: (language) => set(language),
  };
}

export const LocalizationStore = createLocalizationStore();