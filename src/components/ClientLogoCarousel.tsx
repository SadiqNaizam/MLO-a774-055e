import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ClientLogo {
  id: string | number;
  alt: string;
  src: string;
  href?: string; // Optional link for each logo
}

interface ClientLogoCarouselProps {
  logos: ClientLogo[];
  title?: string;
}

const ClientLogoCarousel: React.FC<ClientLogoCarouselProps> = ({ logos, title }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  console.log("Rendering ClientLogoCarousel with logos:", logos.length);

  if (!logos || logos.length === 0) {
    console.warn("ClientLogoCarousel: No logos provided.");
    return null;
  }

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {logos.map((logo) => (
              <div
                className="embla__slide flex-[0_0_50%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 px-4"
                key={logo.id}
              >
                <AspectRatio ratio={3 / 2} className="bg-transparent flex items-center justify-center">
                  {logo.href ? (
                     <a href={logo.href} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                        <img src={logo.src} alt={logo.alt} className="max-h-16 w-auto object-contain" />
                     </a>
                  ) : (
                    <img src={logo.src} alt={logo.alt} className="max-h-16 w-auto object-contain opacity-70" />
                  )}
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoCarousel;