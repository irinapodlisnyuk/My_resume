import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU }
};

i18n
  .use(LanguageDetector) // Автоопределение языка
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false 
    }
  });

// Автоматически меняем атрибут lang в теге <html> для SEO и скринридеров
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;