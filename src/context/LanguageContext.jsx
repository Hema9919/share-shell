import React, { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  ar: {
    siteTitle: "التحقق من أصالة المنتج | شل",
    headerTitleMobile: "مكافأة شل أدفانتج",
    headerTitleDesktop: "التحقق من أصالة المنتج",
    breadcrumbRoot: "شل مصر",
    breadcrumbCurrent: "التحقق من المنتج",
    productVerification: "التحقق من المنتج",
    statusMessage: "منتج اصلي، شكرا لشراء منتجات شل الأصلية",
    connectWithUs: "تواصل معنا",
    siteInformation: "معلومات الموقع",
    termsConditions: "الشروط والأحكام",
    privacyPolicy: "سياسة الخصوصية",
    cookiePolicy: "سياسة الكوكيز",
    modifyCookiePreferences: "تعديل تفضيلات الكوكيز",
    languageButtonText: "English",
  },
  en: {
    siteTitle: "Check Product Authenticity | Shell",
    headerTitleMobile: "Shell Advantage Rewards",
    headerTitleDesktop: "Check Product Authenticity",
    breadcrumbRoot: "Shell Egypt",
    breadcrumbCurrent: "Product Verification",
    productVerification: "PRODUCT VERIFICATION",
    statusMessage: "Genuine product, thank you for buying original Shell products",
    connectWithUs: "Connect with us",
    siteInformation: "Site information",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    modifyCookiePreferences: "Modify Cookie Preferences",
    languageButtonText: "عربي",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ar");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = translations[lang].siteTitle;
  }, [lang]);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
