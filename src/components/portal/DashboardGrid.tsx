import { useState, useEffect } from "react";
import { 
  Mail, 
  CheckSquare, 
  HardDrive, 
  Database,
  MessageSquare,
  Headphones,
  Users,
  Award,
  MapPin,
  Building,
  Calendar,
  Bookmark,
  BookOpen,
  Eye,
  Share2,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Camera,
  Send,
  User,
  CalendarDays,
  Megaphone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const DashboardCard = ({ 
  title, 
  icon: Icon, 
  children, 
  className = "" 
}: { 
  title: string; 
  icon: any; 
  children: React.ReactNode; 
  className?: string 
}) => (
  <Card className={`h-full shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}>
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center space-x-3 rtl:space-x-reverse text-lg">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const DashboardGrid = () => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const taskItems = [
    { key: 'unreadEmails', icon: Mail, count: 5 },
    { key: 'dailyTask', icon: CheckSquare, count: 3 },
    { key: 'oneDrive', icon: HardDrive, count: 12 },
    { key: 'bayanati', icon: Database, count: 2 }
  ];

  const quickLinkItems = [
    { key: 'discussionBoard', icon: MessageSquare },
    { key: 'itSupport', icon: Headphones },
    { key: 'committees', icon: Users },
    { key: 'nomination', icon: Award },
    { key: 'sendGeoLocation', icon: MapPin },
    { key: 'corporateDirectory', icon: Building },
    { key: 'meetingRoom', icon: Calendar },
    { key: 'reservation', icon: Bookmark }
  ];

  const initiativeItems = [
    { key: 'quranReadings', icon: BookOpen },
    { key: 'azkar', icon: Eye },
    { key: 'myReadings', icon: BookOpen },
    { key: 'sharedBooks', icon: Share2 }
  ];

  const socialMediaItems = [
    { key: 'twitter', icon: Twitter, color: 'text-blue-400' },
    { key: 'instagram', icon: Instagram, color: 'text-pink-500' },
    { key: 'facebook', icon: Facebook, color: 'text-blue-600' },
    { key: 'youtube', icon: Youtube, color: 'text-red-500' },
    { key: 'snapchat', icon: Camera, color: 'text-yellow-400' },
    { key: 'telegram', icon: Send, color: 'text-blue-500' }
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      {/* Top Dashboard Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* My Tasks */}
        <DashboardCard title={t('myTasks')} icon={CheckSquare}>
          <ul className="space-y-3">
            {taskItems.map((item) => (
              <li key={item.key} className="flex items-center justify-between">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{t(item.key)}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {item.count}
                </Badge>
              </li>
            ))}
          </ul>
        </DashboardCard>

        {/* Quick Links */}
        <DashboardCard title={t('quickLinks')} icon={MessageSquare}>
          <div className="grid grid-cols-2 gap-2">
            {quickLinkItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                size="sm"
                className="h-auto p-2 flex flex-col items-center space-y-1 text-xs hover:bg-accent"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-center leading-tight">{t(item.key)}</span>
              </Button>
            ))}
          </div>
          <Button variant="link" size="sm" className="mt-3 p-0 h-auto text-primary">
            {t('more')}
          </Button>
        </DashboardCard>

        {/* Employee Initiatives */}
        <DashboardCard title={t('employeeInitiatives')} icon={Award}>
          <ul className="space-y-3">
            {initiativeItems.map((item) => (
              <li key={item.key} className="flex items-center space-x-2 rtl:space-x-reverse">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{t(item.key)}</span>
              </li>
            ))}
          </ul>
        </DashboardCard>

        {/* Social Media */}
        <DashboardCard title={t('socialMedia')} icon={Share2}>
          <div className="grid grid-cols-3 gap-3">
            {socialMediaItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                size="sm"
                className="h-auto p-2 flex flex-col items-center space-y-1"
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-xs">{t(item.key)}</span>
              </Button>
            ))}
          </div>
        </DashboardCard>
      </div>

      {/* Bottom Content Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* New Employees */}
        <DashboardCard title={t('newEmployees')} icon={User} className="md:col-span-1 lg:col-span-1">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">SAEED AYED SAEED ALKETBI</h3>
            <p className="text-sm text-muted-foreground mb-1">Head of Sharia Research and Studies Section</p>
            <p className="text-xs text-muted-foreground">Sharia research and studies Section</p>
            <div className="flex justify-center space-x-1 rtl:space-x-reverse mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-primary' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </DashboardCard>

        {/* Events */}
        <DashboardCard title={t('events')} icon={CalendarDays} className="md:col-span-1 lg:col-span-1">
          <div className="space-y-4">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-sm">September 2025</h4>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    ←
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    →
                  </Button>
                </div>
              </div>
              <div className="h-32 bg-gradient-primary rounded flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <CalendarDays className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">UAE National Day Events</p>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Announcements */}
        <DashboardCard title={t('announcements')} icon={Megaphone} className="md:col-span-2 lg:col-span-1">
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-primary font-semibold">22 September 2025</span>
              </div>
              <h4 className="font-semibold text-sm mb-2">Zakat Calculation</h4>
              <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                {t('more')}
              </Button>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-primary font-semibold">22 September 2025</span>
              </div>
              <h4 className="font-semibold text-sm mb-2">Endowment Donations</h4>
              <Button variant="link" size="sm" className="p-0 h-auto text-xs">
                {t('more')}
              </Button>
            </div>
          </div>
        </DashboardCard>
      </div>

    </div>
  );
};

export default DashboardGrid;