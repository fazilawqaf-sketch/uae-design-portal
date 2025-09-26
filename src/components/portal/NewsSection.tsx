import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const NewsSection = () => {
  const { t, language } = useLanguage();
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: language === 'ar' 
        ? 'معالي الدكتور عمر حبتور الدرعي يستقبل سمو الأمير أمير ناصر إبراهيم'
        : 'H.E. Dr. Omar Habtoor Al Darei receives H.H. Prince Amir Nasser Ibrahim',
      summary: language === 'ar'
        ? 'استقبل معالي الدكتور عمر حبتور الدرعي رئيس الهيئة العامة للشؤون الإسلامية والأوقاف في مقر الهيئة بأبوظبي سمو الأمير أمير ناصر إبراهيم...'
        : 'H.E. Dr. Omar Habtoor Al Darei, Chairman of the General Authority of Islamic Affairs, Endowments, and Zakah received at the Authority\'s headquarters in Abu Dhabi H.H. Prince Amir Nasser Ibrahim...',
      date: '2025-09-26',
      time: '14:30',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: language === 'ar'
        ? 'إطلاق مبادرة جديدة لحساب الزكاة الإلكترونية'
        : 'Launch of New Electronic Zakat Calculation Initiative',
      summary: language === 'ar'
        ? 'أطلقت الهيئة العامة للشؤون الإسلامية والأوقاف مبادرة جديدة لتسهيل حساب الزكاة إلكترونياً للمواطنين والمقيمين...'
        : 'The General Authority of Islamic Affairs and Endowments launched a new initiative to facilitate electronic Zakat calculation for citizens and residents...',
      date: '2025-09-25',
      time: '10:15',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: language === 'ar'
        ? 'توقيع اتفاقية تعاون مع الجامعات الإسلامية العالمية'
        : 'Signing Cooperation Agreement with International Islamic Universities',
      summary: language === 'ar'
        ? 'وقعت الهيئة اتفاقية تعاون استراتيجي مع عدد من الجامعات الإسلامية العالمية لتعزيز البحث العلمي والتبادل الأكاديمي...'
        : 'The Authority signed a strategic cooperation agreement with several international Islamic universities to enhance scientific research and academic exchange...',
      date: '2025-09-24',
      time: '16:45',
      image: '/api/placeholder/300/200'
    }
  ];

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="bg-gradient-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            {t('newsUpdates')}
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* News Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-video rounded-lg bg-primary-foreground/20 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-foreground/20 to-primary-foreground/5 flex items-center justify-center">
                      <Calendar className="w-12 h-12 text-primary-foreground/60" />
                    </div>
                  </div>
                </div>

                {/* News Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                      {newsItems[currentNews].title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                      {newsItems[currentNews].summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Calendar className="w-4 h-4" />
                        <span>{newsItems[currentNews].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Clock className="w-4 h-4" />
                        <span>{newsItems[currentNews].time}</span>
                      </div>
                    </div>

                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      {t('readMore')}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-primary-foreground/20">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevNews}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <ChevronLeft className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t('previous')}
                </Button>

                <div className="flex space-x-2 rtl:space-x-reverse">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNews(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentNews 
                          ? 'bg-primary-foreground scale-125' 
                          : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
                      }`}
                      aria-label={`Go to news ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextNews}
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {t('next')}
                  <ChevronRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;