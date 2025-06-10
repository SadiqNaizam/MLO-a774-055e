import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import HeroBanner from '@/components/HeroBanner';
import { Button } from '@/components/ui/button';
import ServiceTeaserCard from '@/components/ServiceTeaserCard';
import ClientLogoCarousel from '@/components/ClientLogoCarousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Zap, Cloud, Brain, BarChartBig, Palette } from 'lucide-react'; // Example icons for services

const placeholderLogos = [
  { id: 1, alt: 'Client Logo 1', src: 'https://placehold.co/150x80/e2e8f0/a0aec0?text=Logo1&font=sans' },
  { id: 2, alt: 'Client Logo 2', src: 'https://placehold.co/150x80/e2e8f0/a0aec0?text=Logo2&font=sans' },
  { id: 3, alt: 'Client Logo 3', src: 'https://placehold.co/150x80/e2e8f0/a0aec0?text=Logo3&font=sans' },
  { id: 4, alt: 'Client Logo 4', src: 'https://placehold.co/150x80/e2e8f0/a0aec0?text=Logo4&font=sans' },
  { id: 5, alt: 'Client Logo 5', src: 'https://placehold.co/150x80/e2e8f0/a0aec0?text=Logo5&font=sans' },
];

const placeholderInsights = [
  { id: 1, title: 'The Future of AI in Business', description: 'Exploring how AI is reshaping industries and creating new opportunities.', link: '/insights/future-of-ai', category: 'AI & GenAI', imageUrl: 'https://placehold.co/600x400/0ea5e9/ffffff?text=AI+Insight' },
  { id: 2, title: 'Maximizing Cloud Efficiency', description: 'Strategies for optimizing your cloud infrastructure for cost and performance.', link: '/insights/cloud-efficiency', category: 'Cloud Engineering', imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Cloud+Insight' },
  { id: 3, title: 'Data-Driven Decision Making', description: 'Leverage your data to make smarter, faster business decisions.', link: '/insights/data-driven-decisions', category: 'Data & Analytics', imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Data+Insight' },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      <main className="flex-grow">
        <HeroBanner
          title="Innovate, Transform, Succeed"
          subtitle="We partner with businesses to unlock their potential through cutting-edge technology solutions and strategic insights."
          ctaText="Explore Our Services"
          ctaLink="/services"
          imageUrl="https://placehold.co/1920x1080/3b82f6/ffffff?text=Inspiring+Tech+Banner"
        />

        <section id="services" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Core Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceTeaserCard
                title="AI & GenAI Solutions"
                description="Harness the power of Artificial Intelligence and Generative AI to innovate and automate."
                linkTo="/services#ai-genai"
                icon={<Brain className="h-8 w-8" />}
              />
              <ServiceTeaserCard
                title="Cloud Engineering"
                description="Build, migrate, and manage scalable and resilient cloud infrastructures."
                linkTo="/services#cloud"
                icon={<Cloud className="h-8 w-8" />}
              />
              <ServiceTeaserCard
                title="Data & Analytics"
                description="Transform data into actionable insights for strategic decision-making."
                linkTo="/services#data"
                icon={<BarChartBig className="h-8 w-8" />}
              />
            </div>
          </div>
        </section>

        <ClientLogoCarousel logos={placeholderLogos} title="Trusted by Leading Companies" />

        <section id="insights" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-primary">Latest Insights</h2>
                <Button asChild variant="outline">
                    <Link to="/insights">View All Insights</Link>
                </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placeholderInsights.slice(0,3).map(insight => (
                <Card key={insight.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                  <CardHeader className="p-0">
                    <img src={insight.imageUrl} alt={insight.title} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl mb-2">{insight.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{insight.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link to={insight.link}>Read More &rarr;</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="cta-contact" className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Transformation?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">Let's discuss how our expertise can help you achieve your business goals. Get in touch with us today for a consultation.</p>
                <Button asChild size="lg" variant="secondary">
                    <Link to="/contact">Contact Us Now</Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;