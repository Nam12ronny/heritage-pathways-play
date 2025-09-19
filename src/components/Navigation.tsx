import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  Calendar,
  Menu,
  X 
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Dashboard', icon: BookOpen, href: '#dashboard' },
    { label: 'Engagement', icon: Award, href: '#engagement' },
    { label: 'Classroom Moments', icon: Calendar, href: '#moments' },
    { label: 'Wellness', icon: Heart, href: '#wellness' },
    { label: 'Skills', icon: Users, href: '#skills' },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Jerusalem Heritage School
                </h1>
                <p className="text-xs text-muted-foreground">Parent Portal</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
                asChild
              >
                <a href={item.href} className="flex items-center space-x-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </Button>
            ))}
            
            <div className="ml-4 pl-4 border-l border-border">
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-engagement hover:opacity-90 transition-smooth"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth"
                  asChild
                >
                  <a href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </a>
                </Button>
              ))}
              <div className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-engagement hover:opacity-90 transition-smooth"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;