import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookHeart, 
  Sparkles, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  Compass,
  Star,
  Brain,
  Heart,
  Rocket,
  Crown
} from 'lucide-react';

const FutureJournal = () => {
  const [selectedDream, setSelectedDream] = useState(0);

  const dreams = [
    {
      title: 'Become a Doctor',
      description: 'I want to help people feel better and save lives',
      date: '2 weeks ago',
      matches: 4,
      progress: 15,
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      title: 'Build Amazing Apps',
      description: 'Create mobile apps that solve problems for people in Uganda',
      date: '1 month ago',
      matches: 6,
      progress: 25,
      icon: Brain,
      color: 'bg-blue-500'
    },
    {
      title: 'Become a Teacher',
      description: 'Help other children learn and grow like my favorite teacher does',
      date: '3 weeks ago',
      matches: 3,
      progress: 35,
      icon: Star,
      color: 'bg-green-500'
    }
  ];

  const aiMatches = [
    {
      type: 'Career Path',
      title: 'Software Engineering',
      description: 'Based on your interest in apps and problem-solving',
      relevance: 95,
      icon: Rocket
    },
    {
      type: 'Mentor',
      title: 'Sarah Nakato - App Developer',
      description: 'Local developer who built popular Ugandan apps',
      relevance: 88,
      icon: Users
    },
    {
      type: 'Program',
      title: 'Code Club at Makerere University',
      description: 'Weekend coding classes for young students',
      relevance: 92,
      icon: Target
    },
    {
      type: 'Scholarship',
      title: 'STEM Excellence Scholarship',
      description: 'Full sponsorship for technology-focused education',
      relevance: 85,
      icon: Award
    }
  ];

  const journalEntries = [
    {
      date: 'Today',
      entry: 'I learned about algorithms in computer science class and it was so cool! I want to create an app that helps farmers know when to plant crops.',
      mood: 'excited',
      tags: ['coding', 'agriculture', 'problem-solving']
    },
    {
      date: '3 days ago',
      entry: 'Met a software engineer at career day. She showed us an app she built and I realized I want to do the same thing!',
      mood: 'inspired',
      tags: ['career', 'inspiration', 'technology']
    },
    {
      date: '1 week ago',
      entry: 'Started learning basic HTML and CSS. It\'s like magic how you can create websites from code.',
      mood: 'curious',
      tags: ['learning', 'web development', 'skills']
    }
  ];

  const achievements = [
    { title: 'Dream Explorer', icon: Compass, description: 'Logged 5 dream entries' },
    { title: 'Future Vision', icon: Sparkles, description: 'Set specific career goals' },
    { title: 'Mentor Match', icon: Users, description: 'Connected with industry mentor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-engagement rounded-xl flex items-center justify-center">
              <BookHeart className="h-6 w-6 text-engagement-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Future Journal</h1>
              <p className="text-muted-foreground">AI-powered dream tracking and career pathway discovery</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Sparkles className="h-3 w-3 mr-1" />
              AI Insights
            </Badge>
            <Badge variant="secondary" className="bg-engagement/10 text-engagement">
              <Target className="h-3 w-3 mr-1" />
              3 Active Dreams
            </Badge>
            <Badge variant="secondary" className="bg-wellness/10 text-wellness">
              <Crown className="h-3 w-3 mr-1" />
              Dream Explorer
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Journal */}
          <div className="lg:col-span-2 space-y-6">
            {/* New Entry */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookHeart className="h-5 w-5 text-primary" />
                  <span>What are you dreaming about today?</span>
                </CardTitle>
                <CardDescription>Share your aspirations, goals, and thoughts about your future</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="I dream of becoming... I want to help... When I grow up, I will..."
                  className="min-h-[120px]"
                />
                <div className="flex space-x-2">
                  <Button className="bg-gradient-engagement hover:opacity-90 transition-smooth flex-1">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Add Dream
                  </Button>
                  <Button variant="outline">
                    <Brain className="h-4 w-4 mr-2" />
                    Get AI Insights
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dream Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-engagement" />
                  <span>Your Dream Journey</span>
                </CardTitle>
                <CardDescription>Track your aspirations and career interests over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dreams.map((dream, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedDream === index 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedDream(index)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 ${dream.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <dream.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-sm">{dream.title}</h3>
                            <span className="text-xs text-muted-foreground">{dream.date}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-3">{dream.description}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span>Career Path Progress</span>
                              <span>{dream.progress}%</span>
                            </div>
                            <Progress value={dream.progress} className="h-1.5" />
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">
                                {dream.matches} AI matches
                              </Badge>
                              <Button size="sm" variant="outline" className="text-xs h-6">
                                View Matches
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Entries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-wellness" />
                  <span>Recent Journal Entries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {journalEntries.map((entry, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{entry.date}</span>
                        <Badge variant="secondary" className={`text-xs ${
                          entry.mood === 'excited' ? 'bg-engagement/10 text-engagement' :
                          entry.mood === 'inspired' ? 'bg-wellness/10 text-wellness' :
                          'bg-primary/10 text-primary'
                        }`}>
                          {entry.mood}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{entry.entry}</p>
                      <div className="flex flex-wrap gap-1">
                        {entry.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Matches */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span>AI Career Matches</span>
                </CardTitle>
                <CardDescription>Personalized recommendations based on your dreams</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiMatches.map((match, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-start space-x-3">
                      <match.icon className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-sm">{match.title}</h4>
                          <Badge variant="secondary" className="text-xs">{match.relevance}%</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{match.description}</p>
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {match.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-engagement" />
                  <span>Dream Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-engagement rounded-lg flex items-center justify-center">
                      <achievement.icon className="h-4 w-4 text-engagement-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-wellness" />
                  <span>Dream Tools</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Compass className="h-4 w-4 mr-2" />
                  Career Explorer
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Mentors
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Dream Planner
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  View All Achievements
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureJournal;