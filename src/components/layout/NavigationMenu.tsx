import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean; // For a CTA button style
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact', isButton: true },
];

const NavigationMenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log("Rendering NavigationMenu, mobileMenuOpen:", mobileMenuOpen);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    console.log("Toggled mobile menu, new state:", !mobileMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              YourLogo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.isButton ? (
                <Button key={item.label} asChild variant="default" size="sm" className="ml-4">
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button key={item.label} variant="ghost" asChild>
                  <Link
                    to={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                </Button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-40 bg-background shadow-lg p-4">
          <div className="space-y-1">
            {navItems.map((item) =>
              item.isButton ? (
                <Button key={item.label} asChild variant="default" className="w-full justify-start">
                  <Link to={item.href} onClick={toggleMobileMenu}>{item.label}</Link>
                </Button>
              ) : (
                <Button key={item.label} variant="ghost" asChild className="w-full justify-start">
                  <Link
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;