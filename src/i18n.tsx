import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from "i18next-http-backend"; // *** added this ***


i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'ru',
    supportedLngs: ["en", "ru"], // *** added this ***
    ns: ['translation'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
})
export default i18n