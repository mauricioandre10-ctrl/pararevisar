'use client';

import Image from 'next/image';

export function ScrollingBanner() {
  const bannerText = "La IA no viene a Reemplazarte, viene a Potenciarte.";
  
  const BannerContent = () => (
    <div className="flex w-full shrink-0">
      {[...Array(6)].map((_, i) => (
        <span key={i} className="mx-1 text-sm font-semibold flex items-center h-8">
          {bannerText}
          <Image 
            src="/image/logo/logo_ia_negro.png" 
            alt=""
            aria-hidden="true"
            width={16} 
            height={16} 
            className="inline-block align-middle mx-5 h-5 w-auto"
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="relative flex w-full overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          <BannerContent />
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex" aria-hidden="true">
           <BannerContent />
        </div>
      </div>
    </div>
  );
}
