import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { useLanguage } from "@/hooks/useLanguage";

interface UserProfilePopoverProps {
  children: React.ReactNode;
}

const UserProfilePopover = ({ children }: UserProfilePopoverProps) => {
  const { t, language } = useLanguage();

  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('User signed out');
  };

  const handleSettings = () => {
    // Handle settings navigation
    console.log('Navigate to settings');
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0" 
        align="end"
        side="bottom"
        sideOffset={8}
      >
        <div className="p-4">
          {/* User Info Header */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
            <Avatar className="w-16 h-16">
              <AvatarImage 
                src="/api/placeholder/64/64" 
                alt="User Avatar" 
              />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                EN
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg truncate">
                {language === 'ar' ? 'أحمد محمد السيد' : 'Ahmed Mohammed Al Sayed'}
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                {language === 'ar' 
                  ? 'مدير قسم التطوير الرقمي' 
                  : 'Digital Development Manager'
                }
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {language === 'ar' 
                  ? 'إدارة التقنية والمعلومات' 
                  : 'IT & Information Management'
                }
              </p>
            </div>
          </div>

          <Separator className="mb-4" />

          {/* Employee Details */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t('employeeId')}:</span>
              <span className="font-medium">EMP-2024-001</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t('department')}:</span>
              <span className="font-medium">
                {language === 'ar' ? 'التقنية' : 'IT'}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">{t('status')}:</span>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-600">
                  {t('active')}
                </span>
              </div>
            </div>
          </div>

          <Separator className="mb-4" />

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSettings}
              className="w-full justify-start"
            >
              <Settings className="w-4 h-4 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('settings')}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <LogOut className="w-4 h-4 mr-3 rtl:mr-0 rtl:ml-3" />
              {t('signOut')}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfilePopover;