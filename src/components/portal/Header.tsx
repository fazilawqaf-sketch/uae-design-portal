import { useState, useEffect } from "react";
import { Search, Globe, User, Clock, Calendar, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import UserProfilePopover from "./UserProfilePopover";

const ThemeButton = ({ color, theme }: { color: string; theme: string }) => {
  const { theme: currentTheme, setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(theme as any)}
      className={`w-6 h-6 rounded border-2 transition-all duration-200 hover:scale-110 ${
        currentTheme === theme ? "border-white shadow-lg" : "border-gray-300"
      }`}
      style={{ backgroundColor: color }}
      aria-label={`Switch to ${theme} theme`}
    />
  );
};

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(language === 'ar' ? 'ar-AE' : 'en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'ar' ? 'ar-AE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigationItems = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#' },
    { key: 'guidelines', href: '#' },
    { key: 'media', href: '#' },
    { key: 'services', href: '#' },
    { key: 'knowledge', href: '#' }
  ];

  const MobileMenu = () => (
    <div className="space-y-4 p-4">
      {/* Navigation */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          {t('navigation')}
        </h3>
        {navigationItems.map((item) => (
          <Button
            key={item.key}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t(item.key)}
          </Button>
        ))}
      </div>
      
      {/* Search */}
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
          {t('search')}
        </h3>
        <div className="relative">
          <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder={t('search')}
            className="pl-10 rtl:pl-3 rtl:pr-10"
          />
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Left side - UAE Coat of Arms */}
            <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-uae-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-uae-red rounded-full flex items-center justify-center text-white font-bold text-xs">
                  UAE
                </div>
              </div>
              
              {/* Theme Switcher - Hidden on small screens */}
              <div className="hidden sm:flex items-center space-x-2 rtl:space-x-reverse">
                <ThemeButton color="#2d7b7b" theme="teal" />
                <ThemeButton color="#2d7d32" theme="green" />
                <ThemeButton color="#8d6e63" theme="brown" />
                <ThemeButton color="#f57c00" theme="gold" />
              </div>
            </div>

            {/* Center - Organization Name */}
            <div className="text-center flex-1 mx-4">
              <h1 className="text-xs sm:text-sm md:text-base font-semibold leading-tight">
                {language === 'ar' ? 'الهيئة العامة للشؤون الإسلامية والأوقاف' : 'General Authority of Islamic Affairs and Endowments'}
              </h1>
            </div>

            {/* Right side - Logo and Time */}
            <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
              <div className="text-right rtl:text-left hidden sm:block">
                <div className="text-xs opacity-90">
                  {formatDate(currentTime)}
                </div>
                <div className="text-sm font-mono">
                  <Clock className="inline w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                  {formatTime(currentTime)}
                </div>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-uae-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Search and Language Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
            {/* Desktop Search - Hidden on mobile */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder={t('search')}
                className="pl-10 rtl:pl-3 rtl:pr-10 w-48 xl:w-64 h-9"
              />
            </div>

            {/* Mobile Search Button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Search className="w-4 h-4" />
            </Button>

            {/* Language Toggle */}
            <Button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">
                {language === 'en' ? 'عربي' : 'English'}
              </span>
            </Button>

            {/* User Menu with Popover */}
            <UserProfilePopover>
              <Button variant="outline" size="sm" className="flex items-center space-x-2 rtl:space-x-reverse">
                <User className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">EN</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
            </UserProfilePopover>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse text-sm">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>{t('welcome')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>{t('entry')}</span>
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>{t('exit')}</span>
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span>{t('timeLeft')}: 0:00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;