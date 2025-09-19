import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Plus, 
  Star, 
  Calendar,
  MapPin,
  Clock,
  Code,
  Palette,
  Music,
  Wrench,
  ChefHat,
  Camera,
  Briefcase,
  Heart
} from 'lucide-react';

const ParentSkillSharing = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Users },
    { id: 'tech', label: 'Technology', icon: Code },
    { id: 'arts', label: 'Arts & Crafts', icon: Palette },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'trades', label: 'Trades', icon: Wrench },
    { id: 'cooking', label: 'Cooking', icon: ChefHat },
    { id: 'other', label: 'Other', icon: Briefcase }
  ];

  const parentSkills = [
    {
      id: 1,
      parent: 'Sarah Mitchell',
      skill: 'Web Development & Coding',
      category: 'tech',
      experience: '8 years',
      rating: 4.9,
      availability: 'Weekends',
      sessions: 12,
      description: 'Professional software engineer willing to teach kids basic programming and web development concepts.',
      tags: ['JavaScript', 'HTML/CSS', 'Scratch', 'Python'],
      upcoming: 'Career Day - March 15th'
    },
    {
      id: 2,
      parent: 'Michael Chen',
      skill: 'Photography & Visual Arts',
      category: 'arts',
      experience: '12 years',
      rating: 4.8,
      availability: 'Flexible',
      sessions: 8,
      description: 'Award-winning photographer excited to share creative skills and teach digital photography basics.',
      tags: ['Digital Photography', 'Composition', 'Editing', 'Portrait'],
      upcoming: 'Photography Workshop - March 20th'
    },
    {
      id: 3,
      parent: 'Lisa Rodriguez',
      skill: 'Culinary Arts & Nutrition',
      category: 'cooking',
      experience: '15 years',
      rating: 5.0,
      availability: 'Afternoons',
      sessions: 15,
      description: 'Professional chef and nutritionist passionate about teaching healthy cooking and food science.',
      tags: ['Healthy Cooking', 'Nutrition', 'Food Science', 'Baking'],
      upcoming: 'Cooking Class - March 18th'
    },
    {
      id: 4,
      parent: 'David Park',
      skill: 'Music Production & Piano',
      category: 'music',
      experience: '10 years',
      rating: 4.7,
      availability: 'Evenings',
      sessions: 6,
      description: 'Music producer and piano teacher ready to introduce students to music theory and digital music creation.',
      tags: ['Piano', 'Music Theory', 'Digital Audio', 'Composition'],
      upcoming: 'Music Workshop - March 22nd'
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? parentSkills 
    : parentSkills.filter(skill => skill.category === selectedCategory);

  const getSkillIcon = (category: string) => {
    const categoryData = skillCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : Briefcase;
  };

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Community Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Parent <span className="text-primary">Skill Sharing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with talented parents in our community who share their professional skills and passions to enrich our students' learning experience.
          </p>
        </div>

        {/* Add Your Skills CTA */}
        <div className="bg-gradient-primary rounded-xl p-6 mb-8 text-center">
          <h3 className="text-xl font-semibold text-primary-foreground mb-2">
            Share Your Expertise with Our Community
          </h3>
          <p className="text-primary-foreground/90 mb-4">
            Have a skill, hobby, or profession you'd love to share with our students? Join our community of parent mentors!
          </p>
          <Button variant="secondary" size="lg" className="bg-card text-primary hover:bg-card/90">
            <Plus className="h-4 w-4 mr-2" />
            Register Your Skills
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {skillCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground border-border hover:text-primary hover:border-primary'
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => {
            const SkillIcon = getSkillIcon(skill.category);
            return (
              <div
                key={skill.id}
                className="bg-card rounded-xl p-6 shadow-card border border-border card-interactive"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary-light rounded-lg">
                      <SkillIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.parent}</h3>
                      <p className="text-sm text-muted-foreground">{skill.experience} experience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{skill.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">{skill.skill}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{skill.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{skill.sessions} sessions</span>
                    </div>
                  </div>

                  {skill.upcoming && (
                    <div className="p-3 bg-engagement-light rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-engagement" />
                        <span className="text-sm font-medium text-engagement">
                          Upcoming: {skill.upcoming}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-smooth"
                    >
                      Contact Parent
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-primary border-primary hover:bg-primary-light transition-smooth"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-primary border-primary hover:bg-primary-light transition-smooth"
          >
            <MapPin className="h-4 w-4 mr-2" />
            View All Community Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParentSkillSharing;