import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationUK from "./locales/uk/translation.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      uk: {
        translation: translationUK,
      },
      en: {
        translation: translationEN,
      },
    },
    ns: ["translation"],
    defaultNS: "translation",
  });
