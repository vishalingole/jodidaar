import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let lng = "en";
const queryParams = new URLSearchParams(window.location.search);
const lang = queryParams.get("lng");

if (lang && i18n.language != "lang") {
  lng = lang;
}

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: lng,
  resources: {
    en: {
      translations: require("./locales/en/translations.json"),
    },
    ma: {
      translations: require("./locales/ma/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  debug: true,
});

i18n.languages = ["en", "ma"];

export default i18n;
