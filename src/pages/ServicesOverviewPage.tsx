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
import ServiceTeaserCard from '@/components/ServiceTeaserCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Cloud, BarChartBig, Palette, Zap, ShieldCheck } from 'lucide-react'; // Example icons

const services = [
  {
    id: "ai-genai",
    title: "AI & GenAI Solutions",
    icon: <Brain className="h-10 w-10 text-primary mb-4" />,
    description: "Leverage the transformative power of Artificial Intelligence and Generative AI to drive innovation, automate processes, and create intelligent products. We help you from strategy to implementation.",
    offerings: [
      { title: "Custom AI Model Development", description: "Tailored AI solutions for your specific business needs.", linkTo: "/services/ai-genai/custom-models" },
      { title: "Generative AI Integration", description: "Implement GenAI for content creation, code generation, and more.", linkTo: "/services/ai-genai/genai-integration" },
      { title: "AI-Powered Automation", description: "Automate complex workflows with intelligent systems.", linkTo: "/services/ai-genai/automation" },
    ]
  },
  {
    id: "cloud",
    title: "Cloud Engineering",
    icon: <Cloud className="h-10 w-10 text-primary mb-4" />,
    description: "Design, build, and manage robust, scalable, and secure cloud infrastructures. We specialize in multi-cloud and hybrid cloud environments to optimize your IT landscape.",
    offerings: [
      { title: "Cloud Migration & Modernization", description: "Seamlessly move and modernize your applications on the cloud.", linkTo: "/services/cloud/migration" },
      { title: "DevOps & Cloud Native Development", description: "Adopt cloud-native practices for agility and speed.", linkTo: "/services/cloud/devops" },
      { title: "Cloud Security & Governance", description: "Ensure your cloud environment is secure and compliant.", linkTo: "/services/cloud/security" },
    ]
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <BarChartBig className="h-10 w-10 text-primary mb-4" />,
    description: "Unlock the value of your data with our comprehensive data and analytics services. From data strategy to advanced analytics, we help you make informed decisions.",
    offerings: [
      { title: "Data Strategy & Architecture", description: "Develop a roadmap for your data-driven future.", linkTo: "/services/data/strategy" },
      { title: "Business Intelligence & Visualization", description: "Create impactful dashboards and reports.", linkTo: "/services/data/bi" },
      { title: "Advanced Analytics & Machine Learning", description: "Predict outcomes and discover hidden patterns.", linkTo: "/services/data/ml" },
    ]
  },
  {
    id: "digital-experience",
    title: "Digital Experience Platforms",
    icon: <Palette className="h-10 w-10 text-primary mb-4" />,
    description: "Craft exceptional digital experiences that engage customers and drive growth. We design and develop user-centric platforms and applications.",
    offerings: [
      { title: "Web & Mobile App Development", description: "Build high-performance applications for all devices.", linkTo: "/services/digital-experience/apps" },
      { title: "UX/UI Design & Strategy", description: "Create intuitive and engaging user interfaces.", linkTo: "/services/digital-experience/ux-ui" },
      { title: "CMS & DXP Implementation", description: "Manage your digital content effectively.", linkTo: "/services/digital-experience/cms" },
    ]
  }
];

const faqItems = [
    {
        value: "item-1",
        question: "How do you approach a new project?",
        answer: "We start with a discovery phase to understand your goals, challenges, and requirements. This is followed by strategic planning, design, development, testing, and deployment, with continuous communication throughout."
    },
    {
        value: "item-2",
        question: "What industries do you specialize in?",
        answer: "While our solutions are adaptable across various sectors, we have deep expertise in finance, healthcare, retail, and technology industries, delivering tailored solutions that meet specific industry regulations and demands."
    },
    {
        value: "item-3",
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A small project might take a few weeks, while larger, more complex implementations can span several months. We provide a detailed timeline after the initial assessment."
    }
];

const ServicesOverviewPage: React.FC = () => {
  console.log('ServicesOverviewPage loaded');
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
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Card className="mb-12 shadow-lg">
            <CardHeader className="bg-muted p-8">
              <CardTitle className="text-4xl font-bold text-primary">Our Comprehensive Services</CardTitle>
              <CardDescription className="text-lg mt-2">
                We offer a wide range of technology solutions designed to help your business thrive in the digital age. Explore our key service areas below.
              </CardDescription>
            </CardHeader>
          </Card>

          {services.map(service => (
            <section key={service.id} id={service.id} className="mb-16 scroll-mt-20">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-muted to-background">
                  {service.icon}
                  <CardTitle className="text-3xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="mt-2 max-w-2xl">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Key Offerings:</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.offerings.map(offering => (
                      <ServiceTeaserCard
                        key={offering.title}
                        title={offering.title}
                        description={offering.description}
                        linkTo={offering.linkTo} 
                        linkText="Learn More"
                        icon={<Zap className="h-5 w-5" />}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          ))}
          
          <section id="faq" className="py-12 bg-muted rounded-lg">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {faqItems.map(item => (
                        <AccordionItem value={item.value} key={item.value}>
                            <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesOverviewPage;