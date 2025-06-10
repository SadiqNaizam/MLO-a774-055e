import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react'; // Example social icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand/Logo */}
          <div>
            <h3 className="text-xl font-semibold mb-4">YourLogo</h3>
            <p className="text-sm text-secondary-foreground/80">
              Brief company mission or tagline.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>123 Main Street, Anytown, USA</li>
              <li>info@example.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} YourLogo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;