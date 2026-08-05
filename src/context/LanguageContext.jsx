import React, { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  ar: {
    siteTitle: "التحقق من أصالة المنتج | شل",
    headerTitleMobile: "مكافأة شل أدفانتج",
    headerTitleDesktop: "التحقق من أصالة المنتج",
    breadcrumbRoot: "شل مصر",
    breadcrumbCurrent: "التحقق من المنتج",
    breadcrumbTerms: "الشروط والأحكام",
    breadcrumbPrivacy: "سياسة الخصوصية",
    breadcrumbCookie: "سياسة الكوكيز",
    productVerification: "التحقق من المنتج",
    enterCodePlaceholder: "أدخل كود رمزي متكون من 12 رقم...",
    verifyButton: "تحقق الآن",
    statusMessage: "منتج اصلي، شكرا لشراء منتجات شل الأصلية",
    codeValidNotice: "تم التحقق بنجاح من كود المنتج من شل مصر",
    connectWithUs: "تواصل معنا",
    siteInformation: "معلومات الموقع",
    termsConditions: "الشروط والأحكام",
    privacyPolicy: "سياسة الخصوصية",
    cookiePolicy: "سياسة الكوكيز",
    modifyCookiePreferences: "تعديل تفضيلات الكوكيز",
    languageButtonText: "English",
    cookieModalTitle: "تعديل تفضيلات الكوكيز",
    cookieModalDesc: "نحن نستخدم ملفات تعريف الارتباط لتحسين تجربة استخدام مواقع شل الإلكترونية. بعض ملفات الكوكيز ضرورية لعمل الموقع، بينما يساعدنا البعض الآخر في تحسين تجربتك وتقديم محتوى مخصص لك.",
    cookieNecessary: "ملفات كوكيز ضرورية أساسية",
    cookieAnalytics: "ملفات كوكيز تحليلية وأداء",
    cookieMarketing: "ملفات كوكيز تسويقية وإعلانات",
    savePreferences: "حفظ التفضيلات",
    notificationsTitle: "الإشعارات",
    noNotifications: "لا توجد إشعارات جديدة حالياً",
    alwaysActive: "نشط دائماً",

    // Product Verification Form Page
    requiredField: "حقل مطلوب",
    needHelpFinding: "هل تحتاج مساعدة في العثور على كود المنتج؟",
    clickHereToFindOut: "اضغط هنا لمعرفة المزيد",
    productCodeLabel: "كود المنتج / رمز SMS ",
    clearButton: "مسح",
    submitButton: "إرسال",
    tooltipText: "أدخل الكود المكون من 12 رقم الموجود على عبوة المنتج أو الذي تلقيته عبر رسالة SMS.",
    helpPopupText: "يمكنك العثور على كود المنتج على الملصق الموجود على العبوة. الكود مكون من 12 رقم ويمكن أن يحتوي على حروف وأرقام.",

    // Terms Page
    termsIntroTitle: "مقدمة",
    termsIntroText: "مرحباً بك في موقع شل للتحقق من أصالة المنتجات. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.",
    termsUseTitle: "استخدام الموقع",
    termsUseText: "هذا الموقع مخصص للتحقق من أصالة منتجات شل فقط. يُمنع استخدام الموقع لأي أغراض غير قانونية أو غير مصرح بها. لا يجوز لك محاولة الوصول غير المصرح به إلى أي جزء من الموقع أو أي أنظمة أو شبكات مرتبطة به.",
    termsIPTitle: "الملكية الفكرية",
    termsIPText: "جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور والبرامج، هي ملك لشركة شل أو مرخصيها وتخضع لحماية قوانين حقوق الملكية الفكرية المحلية والدولية.",
    termsLiabilityTitle: "حدود المسؤولية",
    termsLiabilityText: "يتم توفير هذا الموقع والمحتوى الموجود عليه 'كما هو' دون أي ضمانات صريحة أو ضمنية. لا تتحمل شل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الموقع أو عدم القدرة على استخدامه.",
    termsPrivacyTitle: "الخصوصية وحماية البيانات",
    termsPrivacyText: "نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. للمزيد من المعلومات حول كيفية جمع واستخدام وحماية معلوماتك الشخصية، يرجى مراجعة سياسة الخصوصية الخاصة بنا.",
    termsGoverningTitle: "القانون الحاكم",
    termsGoverningText: "تخضع هذه الشروط والأحكام لقوانين جمهورية مصر العربية وتفسر وفقاً لها. أي نزاع ينشأ عن أو يتعلق بهذه الشروط يخضع للاختصاص القضائي الحصري لمحاكم القاهرة.",
    termsChangesTitle: "التعديلات على الشروط",
    termsChangesText: "تحتفظ شل بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التعديلات موافقة منك على الشروط المعدلة.",
    lastUpdated: "آخر تحديث",

    // Cookie Policy Page
    cookieWhatTitle: "ما هي ملفات تعريف الارتباط؟",
    cookieWhatText: "ملفات تعريف الارتباط (الكوكيز) هي ملفات نصية صغيرة يتم تخزينها على جهاز الكمبيوتر أو الجهاز المحمول الخاص بك عند زيارة موقع إلكتروني. تُستخدم هذه الملفات على نطاق واسع لجعل المواقع تعمل بشكل أفضل وأكثر كفاءة، فضلاً عن تقديم معلومات لأصحاب الموقع.",
    cookieHowTitle: "كيف نستخدم ملفات تعريف الارتباط؟",
    cookieHowText: "نحن نستخدم ملفات تعريف الارتباط لعدة أغراض، منها: ضمان عمل الموقع بشكل صحيح، تحسين أداء الموقع وتجربة المستخدم، تذكر تفضيلاتك وإعداداتك، وتحليل كيفية استخدام الزوار لموقعنا لتحسين خدماتنا.",
    cookieTypesTitle: "أنواع ملفات تعريف الارتباط التي نستخدمها",
    cookieNecessaryDesc: "هذه الملفات ضرورية لعمل الموقع بشكل صحيح. تمكّنك من التنقل في الموقع واستخدام ميزاته. لا يمكن تعطيل هذه الملفات.",
    cookieAnalyticsDesc: "تساعدنا هذه الملفات في فهم كيفية تفاعل الزوار مع الموقع من خلال جمع معلومات مجهولة الهوية. تساعدنا هذه البيانات في تحسين أداء الموقع وتجربة المستخدم.",
    cookieMarketingDesc: "تُستخدم هذه الملفات لتقديم إعلانات ذات صلة بك وباهتماماتك. كما تُستخدم لتحديد عدد مرات مشاهدة الإعلان وقياس فعالية الحملات الإعلانية.",
    cookieManageTitle: "كيفية إدارة ملفات تعريف الارتباط",
    cookieManageText: "يمكنك التحكم في ملفات تعريف الارتباط وحذفها من خلال إعدادات المتصفح الخاص بك. يرجى ملاحظة أن حذف أو حظر بعض ملفات تعريف الارتباط قد يؤثر على تجربة استخدامك للموقع.",

    // Modify Cookies Page
    preferencesSaved: "تم حفظ التفضيلات بنجاح",
  },
  en: {
    siteTitle: "Check Product Authenticity | Shell",
    headerTitleMobile: "Shell Advantage Rewards",
    headerTitleDesktop: "Check Product Authenticity",
    breadcrumbRoot: "Shell Egypt",
    breadcrumbCurrent: "Product Verification",
    breadcrumbTerms: "Terms & Conditions",
    breadcrumbPrivacy: "Privacy Policy",
    breadcrumbCookie: "Cookie Policy",
    productVerification: "PRODUCT VERIFICATION",
    enterCodePlaceholder: "Enter 12-digit verification code...",
    verifyButton: "Verify Now",
    statusMessage: "Genuine product, thank you for buying original Shell products",
    codeValidNotice: "Successfully verified authentic code with Shell Egypt",
    connectWithUs: "Connect with us",
    siteInformation: "Site information",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    modifyCookiePreferences: "Modify Cookie Preferences",
    languageButtonText: "عربي",
    cookieModalTitle: "Modify Cookie Preferences",
    cookieModalDesc: "We use cookies to improve your browsing experience on Shell websites. Some cookies are essential for the website to function, while others help us improve your experience and deliver personalized content.",
    cookieNecessary: "Essential Strictly Necessary Cookies",
    cookieAnalytics: "Analytics & Performance Cookies",
    cookieMarketing: "Marketing & Advertising Cookies",
    savePreferences: "Save Preferences",
    notificationsTitle: "Notifications",
    noNotifications: "No new notifications at this time.",
    alwaysActive: "Always Active",

    // Product Verification Form Page
    requiredField: "Required Field",
    needHelpFinding: "Need help finding the Product Code?",
    clickHereToFindOut: "Click here to find out",
    productCodeLabel: "Product Code/SMS Code ",
    clearButton: "Clear",
    submitButton: "Submit",
    tooltipText: "Enter the 12-digit code found on your product packaging or received via SMS.",
    helpPopupText: "You can find the product code on the label of the packaging. The code consists of 12 digits and may contain letters and numbers.",

    // Terms Page
    termsIntroTitle: "Introduction",
    termsIntroText: "Welcome to the Shell Product Verification website. By using this website, you agree to be bound by the following terms and conditions. Please read these terms carefully before using the site. If you do not agree to any of these terms, please do not use the website.",
    termsUseTitle: "Use of the Website",
    termsUseText: "This website is intended solely for the verification of Shell product authenticity. The use of the website for any illegal or unauthorized purposes is prohibited. You may not attempt unauthorized access to any part of the website or any systems or networks connected to it.",
    termsIPTitle: "Intellectual Property",
    termsIPText: "All content published on this website, including text, graphics, logos, icons, images, and software, is the property of Shell or its licensors and is protected by local and international intellectual property laws.",
    termsLiabilityTitle: "Limitation of Liability",
    termsLiabilityText: "This website and its content are provided 'as is' without any express or implied warranties. Shell shall not be liable for any direct or indirect damages arising from the use of or inability to use the website.",
    termsPrivacyTitle: "Privacy and Data Protection",
    termsPrivacyText: "We respect your privacy and are committed to protecting your personal data. For more information about how we collect, use, and protect your personal information, please review our Privacy Policy.",
    termsGoverningTitle: "Governing Law",
    termsGoverningText: "These terms and conditions shall be governed by and construed in accordance with the laws of the Arab Republic of Egypt. Any dispute arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts of Cairo.",
    termsChangesTitle: "Changes to Terms",
    termsChangesText: "Shell reserves the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the website after the modifications are posted constitutes your acceptance of the revised terms.",
    lastUpdated: "Last Updated",

    // Cookie Policy Page
    cookieWhatTitle: "What are Cookies?",
    cookieWhatText: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.",
    cookieHowTitle: "How do we use Cookies?",
    cookieHowText: "We use cookies for several purposes, including: ensuring the website functions properly, improving website performance and user experience, remembering your preferences and settings, and analyzing how visitors use our website to improve our services.",
    cookieTypesTitle: "Types of Cookies we use",
    cookieNecessaryDesc: "These cookies are essential for the website to function properly. They enable you to navigate the site and use its features. These cookies cannot be disabled.",
    cookieAnalyticsDesc: "These cookies help us understand how visitors interact with the website by collecting anonymous information. This data helps us improve website performance and user experience.",
    cookieMarketingDesc: "These cookies are used to deliver advertisements relevant to you and your interests. They are also used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns.",
    cookieManageTitle: "How to manage Cookies",
    cookieManageText: "You can control and delete cookies through your browser settings. Please note that deleting or blocking certain cookies may affect your experience on the website.",

    // Modify Cookies Page
    preferencesSaved: "Preferences saved successfully",
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
