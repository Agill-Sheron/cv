"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { Button } from "./ui/button";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const newLang = locale === 'en' ? 'fr' : 'en';

  const toggleLanguage = () => {
    console.log('toggleLanguage', newLang);
    setLocale(newLang);
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 print:hidden"
      style={{ zIndex: 100 }}
    >
      {locale === 'en' ? 'FR' : 'EN'}
    </Button>
  );
} 