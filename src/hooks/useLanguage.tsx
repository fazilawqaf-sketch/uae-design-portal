import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About Awqaf",
    guidelines: "Employee Guidelines", 
    media: "Media Center",
    services: "E-Services",
    knowledge: "Knowledge Base",
    search: "Search",
    welcome: "Welcome",
    entry: "Entry",
    exit: "Exit",
    timeLeft: "Time Left",
    
    // Hero
    heroTitle: "A STRONG, COHESIVE, AND STABLE SOCIETY MEANS",
    heroSubtitle: "A NATION CAPABLE OF REALIZING ITS AMBITIONS, CONFRONTING ITS CHALLENGES, AND PLANNING WISELY FOR ITS FUTURE",
    
    // Dashboard
    myTasks: "My Tasks",
    quickLinks: "Quick Links", 
    employeeInitiatives: "Employee Initiatives",
    socialMedia: "Social Media",
    
    // Tasks
    unreadEmails: "Unread Emails",
    dailyTask: "My Daily Task",
    oneDrive: "OneDrive",
    bayanati: "Bayanati",
    
    // Quick Links
    discussionBoard: "Discussion Board",
    itSupport: "IT Support",
    committees: "Committees",
    nomination: "Nomination",
    sendGeoLocation: "Send Geo Location",
    corporateDirectory: "Corporate Directory",
    meetingRoom: "Meeting Room",
    reservation: "Reservation",
    
    // Employee Initiatives
    quranReadings: "Quran Readings",
    azkar: "Azkar",
    myReadings: "My Readings", 
    sharedBooks: "Shared Books",
    
    // Social Media
    twitter: "Twitter",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "Youtube",
    snapchat: "Snapchat",
    telegram: "Telegram",
    
    // Sections
    newEmployees: "New Employees",
    events: "Events",
    announcements: "Announcements",
    more: "More...",
    
    // News Update
    newsUpdate: "News Update",
    
    // Navigation
    navigation: "Navigation",
    
    // News and updates
    newsUpdates: "Latest News",
    readMore: "Read More",
    previous: "Previous",
    next: "Next",
    
    // User profile
    employeeId: "Employee ID",
    department: "Department",
    status: "Status",
    active: "Active",
    settings: "Settings",
    signOut: "Sign Out",
  },
  ar: {
    // Header
    home: "الرئيسية",
    about: "حول الأوقاف",
    guidelines: "إرشادات الموظفين",
    media: "المركز الإعلامي", 
    services: "الخدمات الإلكترونية",
    knowledge: "قاعدة المعرفة",
    search: "بحث",
    welcome: "مرحباً",
    entry: "دخول",
    exit: "خروج",
    timeLeft: "الوقت المتبقي",
    
    // Hero
    heroTitle: "المجتمع القوي والمتماسك والمستقر",
    heroSubtitle: "يعني وطناً قادراً على تحقيق طموحاته ومواجهة تحدياته والتخطيط السليم لمستقبله",
    
    // Dashboard
    myTasks: "مهامي",
    quickLinks: "روابط سريعة",
    employeeInitiatives: "مبادرات الموظفين", 
    socialMedia: "وسائل التواصل الاجتماعي",
    
    // Tasks
    unreadEmails: "رسائل غير مقروءة",
    dailyTask: "مهمتي اليومية",
    oneDrive: "ون درايف",
    bayanati: "بياناتي",
    
    // Quick Links
    discussionBoard: "لوحة النقاش",
    itSupport: "الدعم التقني",
    committees: "اللجان",
    nomination: "الترشيح",
    sendGeoLocation: "إرسال الموقع الجغرافي",
    corporateDirectory: "دليل الشركة",
    meetingRoom: "غرفة الاجتماعات",
    reservation: "الحجز",
    
    // Employee Initiatives
    quranReadings: "قراءات قرآنية",
    azkar: "أذكار",
    myReadings: "قراءاتي",
    sharedBooks: "الكتب المشتركة",
    
    // Social Media
    twitter: "تويتر",
    instagram: "إنستغرام", 
    facebook: "فيسبوك",
    youtube: "يوتيوب",
    snapchat: "سنابشات",
    telegram: "تيليغرام",
    
    // Sections
    newEmployees: "موظفون جدد",
    events: "الأحداث",
    announcements: "الإعلانات",
    more: "المزيد...",
    
    // News Update
    newsUpdate: "آخر الأخبار",
    
    // Navigation
    navigation: "التنقل",
    
    // News and updates
    newsUpdates: "آخر الأخبار",
    readMore: "اقرأ المزيد",
    previous: "السابق",
    next: "التالي",
    
    // User profile
    employeeId: "رقم الموظف",
    department: "القسم",
    status: "الحالة",
    active: "نشط",
    settings: "الإعدادات",
    signOut: "تسجيل الخروج",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "ar"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}