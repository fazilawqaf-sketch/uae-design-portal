import { useLanguage } from "@/hooks/useLanguage";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-hero min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* English Content */}
            <div className="text-left">
              <div className="mb-6">
                <div className="text-8xl font-bold text-primary-foreground/20 leading-none mb-2">"</div>
                <h1 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
                  {t('heroTitle')}
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  {t('heroSubtitle')}
                </p>
              </div>
            </div>

            {/* Arabic Content - Mirrored */}
            <div className="text-right rtl:text-left">
              <div className="mb-6">
                <div className="text-8xl font-bold text-primary-foreground/20 leading-none mb-2 text-right rtl:text-left">"</div>
                <h1 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4" dir="rtl">
                  المجتمع القوي والمتماسك والمستقر
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed" dir="rtl">
                  يعني وطناً قادراً على تحقيق طموحاته ومواجهة تحدياته والتخطيط السليم لمستقبله
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-x-12 translate-y-12"></div>
    </section>
  );
};

export default HeroSection;