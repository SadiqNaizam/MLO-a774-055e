import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  imageUrl?: string; // Optional background image
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl,
}) => {
  console.log("Rendering HeroBanner with title:", title);
  const backgroundStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

  return (
    <section
      className={`py-20 md:py-32 bg-cover bg-center text-center ${imageUrl ? 'text-white' : 'bg-muted text-foreground'}`}
      style={backgroundStyle}
    >
      <div className={`container mx-auto px-4 ${imageUrl ? 'bg-black/50 p-8 rounded-lg' : ''}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <Button asChild size="lg">
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;