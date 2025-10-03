import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

interface NavigationProps {
  onSectionClick: (section: string) => void;
}

export default function Navigation({ onSectionClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    onSectionClick(sectionId);
  };

  const navigationItems = [
    { id: 'story', label: 'Наша история' },
    { id: 'details', label: 'Детали' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'rsvp', label: 'Подтвердить участие' },
    { id: 'info', label: 'Информация' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            data-testid="nav-logo"
          >
            <Heart className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-script text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              В
            </span>
            <span className={` text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              &
            </span>
            <span className={`font-script text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              И
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-foreground hover:text-primary"
                  data-testid={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}