"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the structure of your translations
type NestedTranslations = {
    [key: string]: string | NestedTranslations;
  };
  

type TranslationContextType = {
  t: (key: string) => string;
  locale: string;
  setLocale: (locale: string) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const [translations, setTranslations] = useState<NestedTranslations | {}>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const translations = await import(`@/translations/${locale}.json`);
      setTranslations(translations);
    };
    
    loadTranslations();
  }, [locale]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
      current = current?.[k];
    }
    
    return typeof current === 'string' ? current : key;
  };

  const handleSetLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    localStorage.setItem('locale', newLocale);
  };

  return (
    <TranslationContext.Provider value={{ t, locale, setLocale: handleSetLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}