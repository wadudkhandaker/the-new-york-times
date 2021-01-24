import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: { ...en.default }
      }
    },
    lng: "en",
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
