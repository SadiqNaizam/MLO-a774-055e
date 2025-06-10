import React, { useState } from 'react';
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // For Sonner notifications
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  console.log('ContactUsPage loaded');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form data submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example: Use Sonner for feedback
    toast.success("Message Sent!", {
      description: "Thank you for reaching out. We'll get back to you soon.",
      duration: 5000,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    setIsSubmitting(false);
  };

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
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out to us through any of the following channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Our Office</h3>
                    <p className="text-muted-foreground">123 Innovation Drive, Tech Park, Suite 404, Anytown, CA 90210, USA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <a href="mailto:info@example.com" className="text-primary hover:underline">info@example.com</a>
                    <p className="text-sm text-muted-foreground">For general inquiries</p>
                    <a href="mailto:sales@example.com" className="text-primary hover:underline">sales@example.com</a>
                    <p className="text-sm text-muted-foreground">For sales and partnerships</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <a href="tel:+15551234567" className="text-primary hover:underline">(555) 123-4567</a>
                    <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 5pm PST</p>
                  </div>
                </div>
                 {/* Placeholder for map */}
                 <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">[Embedded Map Placeholder]</p>
                 </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                        id="name" 
                        type="text" 
                        placeholder="John Doe" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                        id="subject" 
                        type="text" 
                        placeholder="Inquiry about AI Solutions" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                        className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                        id="message" 
                        placeholder="Your detailed message..." 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows={5}
                        className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;