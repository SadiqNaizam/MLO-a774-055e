import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Target, Eye, Award, Building } from 'lucide-react'; // Example icons

const teamMembers = [
  { name: 'Dr. Evelyn Reed', role: 'Founder & CEO', imageUrl: 'https://placehold.co/400x400/6366f1/ffffff?text=ER', bio: 'Visionary leader with 20+ years in tech innovation, driving strategic growth and fostering a culture of excellence.' },
  { name: 'Marcus Chen', role: 'Chief Technology Officer', imageUrl: 'https://placehold.co/400x400/ec4899/ffffff?text=MC', bio: 'Expert in scalable architectures and emerging technologies, leading our engineering and R&D efforts.' },
  { name: 'Aisha Khan', role: 'VP of Client Solutions', imageUrl: 'https://placehold.co/400x400/f59e0b/ffffff?text=AK', bio: 'Dedicated to client success, Aisha ensures our solutions deliver maximum impact and value.' },
  { name: 'David Miller', role: 'Head of Innovation', imageUrl: 'https://placehold.co/400x400/10b981/ffffff?text=DM', bio: 'Passionate about exploring new frontiers, David spearheads our initiatives in AI, GenAI, and beyond.' },
];

const companyValues = [
    { id: "innovation", title: "Innovation", description: "We constantly seek new and better ways to solve problems and create value.", icon: <Target className="h-6 w-6 text-primary" /> },
    { id: "integrity", title: "Integrity", description: "We operate with honesty, transparency, and a strong sense of ethics in all our dealings.", icon: <ShieldCheck className="h-6 w-6 text-primary" /> },
    { id: "collaboration", title: "Collaboration", description: "We believe in the power of teamwork, both internally and with our clients, to achieve shared goals.", icon: <Users className="h-6 w-6 text-primary" /> },
    { id: "excellence", title: "Excellence", description: "We are committed to delivering high-quality solutions and services that exceed expectations.", icon: <Award className="h-6 w-6 text-primary" /> },
];

const AboutUsPage: React.FC = () => {
  console.log('AboutUsPage loaded');
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4">About Our Company</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team dedicated to leveraging technology to solve complex challenges and drive business success for our clients.
            </p>
          </header>

          <section id="mission-vision" className="mb-16 grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-3">
                    <Eye className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To empower businesses with innovative and tailored technology solutions that foster growth, efficiency, and lasting competitive advantage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center mb-3">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To be a globally recognized leader in technology consulting and solutions, known for our expertise, integrity, and commitment to client success.
                </CardDescription>
              </CardContent>
            </Card>
          </section>

          <section id="our-story" className="mb-16">
             <Card className="shadow-lg">
                <CardHeader className="bg-muted">
                    <div className="flex items-center">
                        <Building className="h-8 w-8 text-primary mr-3" />
                        <CardTitle className="text-3xl">Our Story & Values</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <Accordion type="single" collapsible defaultValue="story">
                        <AccordionItem value="story">
                            <AccordionTrigger className="text-xl font-semibold">Our Journey</AccordionTrigger>
                            <AccordionContent className="text-md text-muted-foreground">
                                Founded in [Year], our company began with a simple mission: to make advanced technology accessible and impactful for businesses of all sizes. Over the years, we've grown into a dynamic team of experts, consistently delivering cutting-edge solutions and building long-lasting partnerships with our clients. Our journey has been marked by continuous learning, adaptation to technological advancements, and an unwavering focus on delivering value.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="values">
                            <AccordionTrigger className="text-xl font-semibold">Our Core Values</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                                    {companyValues.map(value => (
                                        <div key={value.id} className="flex items-start space-x-3 p-3 bg-background rounded-md">
                                            {value.icon}
                                            <div>
                                                <h4 className="font-semibold">{value.title}</h4>
                                                <p className="text-sm text-muted-foreground">{value.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
             </Card>
          </section>
          
          <section id="team" className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Meet Our Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="text-center transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/20">
                      <AvatarImage src={member.imageUrl} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <CardDescription className="text-xs">{member.bio}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;