import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import "./i18n.js";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)

  .init({
    supportedLngs: ["en", "fa"],

    fallbackLng: "fa",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
    },
    cache: ["cookie"],
    backend: {
      loadPath: "/locale/validation/{{lng}}.json",
    },
    react: { useSuspense: false },
  });
