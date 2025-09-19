import { Button } from '@/components/ui/button';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/school-hero.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Award, label: 'Learning Sessions', value: '2,847', color: 'engagement' },
    { icon: Users, label: 'Active Parents', value: '156', color: 'primary' },
    { icon: Heart, label: 'Happy Students', value: '98%', color: 'wellness' },
    { icon: TrendingUp, label: 'Growth This Month', value: '+23%', color: 'engagement' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.primary.light)_0%,transparent_50%)] opacity-20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-engagement-light text-engagement text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Gamified Learning Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Engage, Track,{' '}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Grow Together
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Transform your child's learning journey with our innovative parent engagement platform. 
                Track progress, share moments, and build stronger school-home connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-engagement hover:opacity-90 transition-smooth shadow-engagement"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary-light transition-smooth"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-lg p-4 shadow-card border border-border hover:shadow-card-hover transition-smooth"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`p-2 rounded-lg ${
                      stat.color === 'engagement' ? 'bg-engagement-light' :
                      stat.color === 'wellness' ? 'bg-wellness-light' : 'bg-primary-light'
                    }`}>
                      <stat.icon className={`h-4 w-4 ${
                        stat.color === 'engagement' ? 'text-engagement' :
                        stat.color === 'wellness' ? 'text-wellness' : 'text-primary'
                      }`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Students learning at Jerusalem Heritage School"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-4 shadow-card-hover border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-engagement-light rounded-lg">
                  <Award className="h-6 w-6 text-engagement" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Learning Streak!</p>
                  <p className="text-sm text-muted-foreground">7 days in a row</p>
                </div>
              </div>
            </div>

            {/* Floating Progress Card */}
            <div className="absolute -top-4 -right-4 bg-card rounded-lg p-4 shadow-card-hover border border-border">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-wellness-light rounded-lg">
                  <Heart className="h-6 w-6 text-wellness" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Happy Today</p>
                  <p className="text-sm text-muted-foreground">Mood: Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;