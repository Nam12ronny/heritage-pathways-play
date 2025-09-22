import { Button } from '@/components/ui/button';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';
import heroImage from '@/assets/school-hero.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Award, label: 'Learning Sessions', value: '2,847', color: 'engagement', delay: '0s' },
    { icon: Users, label: 'Active Parents', value: '156', color: 'primary', delay: '0.1s' },
    { icon: Heart, label: 'Happy Students', value: '98%', color: 'wellness', delay: '0.2s' },
    { icon: TrendingUp, label: 'Growth This Month', value: '+23%', color: 'engagement', delay: '0.3s' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-mesh min-h-screen flex items-center">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-animated opacity-30" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-engagement/15 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-wellness/15 to-primary-glow/15 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-engagement/10 to-wellness/10 rounded-full blur-2xl float-animation" style={{animationDelay: '4s'}} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-engagement-light text-engagement text-sm font-medium micro-bounce hover:shadow-engagement">
                <Award className="h-4 w-4 mr-2" />
                Gamified Learning Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Engage, Track,{' '}
                <span className="text-gradient text-shimmer">
                  Grow Together
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transform your child's learning journey with our innovative parent engagement platform. 
                Track progress, share moments, and build stronger school-home connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-engagement hover:opacity-90 transition-spring shadow-engagement text-lg px-8 py-4 h-14 glow-on-hover"
              >
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary-light transition-spring text-lg px-8 py-4 h-14"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border card-interactive"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg ${
                      stat.color === 'engagement' ? 'bg-engagement-light' :
                      stat.color === 'wellness' ? 'bg-wellness-light' : 'bg-primary-light'
                    }`}>
                      <stat.icon className={`h-5 w-5 ${
                        stat.color === 'engagement' ? 'text-engagement' :
                        stat.color === 'wellness' ? 'text-wellness' : 'text-primary'
                      }`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in slide-in-from-right duration-1000 delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Students learning at Jerusalem Heritage School"
                className="w-full h-[600px] object-cover transition-spring hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card-hover border border-border float-animation">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-engagement-light rounded-xl">
                  <Award className="h-6 w-6 text-engagement" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Learning Streak!</p>
                  <p className="text-sm text-muted-foreground">7 days in a row</p>
                </div>
              </div>
            </div>

            {/* Floating Progress Card */}
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl p-6 shadow-card-hover border border-border float-animation" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-wellness-light rounded-xl">
                  <Heart className="h-6 w-6 text-wellness" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Happy Today</p>
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