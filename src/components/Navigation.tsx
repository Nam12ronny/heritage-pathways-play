import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  Calendar,
  Menu,
  X,
  Brain,
  BarChart3,
  Star,
  Globe,
  Wallet,
  PenTool,
  GraduationCap
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', icon: BookOpen, href: '/' },
    { label: 'AI Homework', icon: Brain, href: '/homework-assistant' },
    { label: 'Smart Dashboard', icon: BarChart3, href: '/smart-dashboard' },
    { label: 'Talent Tracker', icon: Star, href: '/talent-tracker' },
    { label: 'Languages', icon: Globe, href: '/local-language' },
    { label: 'School Wallet', icon: Wallet, href: '/school-wallet' },
    { label: 'Future Journal', icon: PenTool, href: '/future-journal' },
    { label: 'Student Portal', icon: GraduationCap, href: '/student-portal' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-card/80 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-card transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center micro-bounce">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground hover:text-primary transition-smooth">
                  Jerusalem Heritage School
                </h1>
                <p className="text-xs text-muted-foreground">Parent Portal</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className={`transition-smooth ${
                  isActive(item.href) 
                    ? 'text-primary bg-primary/10 shadow-primary' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105'
                }`}
                asChild
              >
                <Link to={item.href} className="flex items-center space-x-2 px-4 py-2 rounded-xl">
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              </Button>
            ))}
            
            <div className="ml-6 pl-6 border-l border-border">
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-engagement hover:opacity-90 transition-spring glow-on-hover"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-spring"
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
          <div className="lg:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`w-full justify-start transition-spring rounded-xl ${
                    isActive(item.href) 
                      ? 'text-primary bg-primary/10 shadow-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent hover:scale-105'
                  }`}
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              ))}
              <div className="pt-2">
                <Button 
                  variant="default" 
                  className="w-full bg-gradient-engagement hover:opacity-90 transition-spring"
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