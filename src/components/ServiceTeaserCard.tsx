import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceTeaserCardProps {
  title: string;
  description: string;
  linkTo: string;
  linkText?: string;
  icon?: React.ReactNode; // Optional icon
}

const ServiceTeaserCard: React.FC<ServiceTeaserCardProps> = ({
  title,
  description,
  linkTo,
  linkText = "Learn More",
  icon,
}) => {
  console.log("Rendering ServiceTeaserCard with title:", title);
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader className="flex-row items-start gap-4 space-y-0">
        {icon && <div className="text-primary mt-1">{icon}</div>}
        <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1 line-clamp-3">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can go here if needed */}
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
          <Link to={linkTo}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceTeaserCard;