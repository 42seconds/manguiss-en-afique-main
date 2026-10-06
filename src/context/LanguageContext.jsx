/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "manguissa-language";

// Remember the visitor's choice across reloads; storage can be unavailable (private mode), so never let it throw.
function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "fr" ? stored : "fr";
  } catch {
    return "fr";
  }
}

const pageTitles = {
  fr: "Manguissa en Afrique — Guide francophone en Afrique du Sud",
  en: "Manguissa en Afrique — French-speaking guide in South Africa",
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = pageTitles[language];
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore: the choice just won't survive a reload
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const t = (key) => {
    if (!key) return "";
    if (typeof key === "object") {
      return key[language] || key["fr"] || "";
    }
    // Simple sanitization for potential string spacing/newline differences
    const lookupKey = typeof key === "string" ? key.trim() : key;
    if (language === "fr") {
      return translations["fr"]?.[lookupKey] || lookupKey;
    }
    return translations[language]?.[lookupKey] || lookupKey;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
