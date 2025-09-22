import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Palette, 
  Music, 
  Code, 
  Trophy, 
  Users, 
  Star,
  Target,
  Brain,
  Camera,
  Gamepad2,
  BookOpen,
  Zap
} from 'lucide-react';

const TalentTracker = () => {
  const talents = [
    { 
      name: 'Visual Arts', 
      icon: Palette, 
      level: 85, 
      activities: ['Drawing', 'Painting', 'Crafts'],
      mentor: 'Sarah Johnson',
      nextStep: 'Art Competition',
      color: 'bg-purple-500'
    },
    { 
      name: 'Music', 
      icon: Music, 
      level: 72, 
      activities: ['Piano', 'Singing', 'Rhythm'],
      mentor: 'David Music',
      nextStep: 'School Concert',
      color: 'bg-blue-500'
    },
    { 
      name: 'Technology', 
      icon: Code, 
      level: 68, 
      activities: ['Basic Coding', 'Problem Solving'],
      mentor: 'Available Soon',
      nextStep: 'Code Club',
      color: 'bg-green-500'
    },
    { 
      name: 'Sports', 
      icon: Trophy, 
      level: 91, 
      activities: ['Football', 'Athletics', 'Team Games'],
      mentor: 'Coach Peterson',
      nextStep: 'District Championship',
      color: 'bg-orange-500'
    },
  ];

  const achievements = [
    { title: 'Art Star', description: 'Won school art competition', date: '2 weeks ago', icon: Star },
    { title: 'Team Player', description: 'Excellent teamwork in sports', date: '1 month ago', icon: Users },
    { title: 'Creative Mind', description: 'Outstanding creative project', date: '1 month ago', icon: Brain },
  ];

  const recommendations = [
    {
      type: 'Competition',
      title: 'Regional Art Contest',
      description: 'Perfect match for visual arts talent',
      deadline: '2 weeks',
      icon: Trophy
    },
    {
      type: 'Mentor',
      title: 'Local Musician Mentorship',
      description: 'Connect with professional musician',
      deadline: 'Apply Now',
      icon: Music
    },
    {
      type: 'Program',
      title: 'Summer Coding Camp',
      description: 'Develop technology skills further',
      deadline: '1 month',
      icon: Code
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-engagement rounded-xl flex items-center justify-center">
              <Star className="h-6 w-6 text-engagement-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI-Powered Talent Tracker</h1>
              <p className="text-muted-foreground">Discover and nurture your child's unique abilities</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Brain className="h-3 w-3 mr-1" />
              AI Insights
            </Badge>
            <Badge variant="secondary" className="bg-engagement/10 text-engagement">
              <Target className="h-3 w-3 mr-1" />
              4 Talents Tracked
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Talent Overview */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Talent Development</span>
                </CardTitle>
                <CardDescription>Track progress across different skill areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {talents.map((talent, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg border">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 ${talent.color} rounded-lg flex items-center justify-center`}>
                          <talent.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{talent.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={talent.level} className="h-2 flex-1" />
                            <span className="text-xs text-muted-foreground">{talent.level}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium">Activities: </span>
                          <span className="text-muted-foreground">{talent.activities.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium">Mentor: </span>
                          <span className="text-muted-foreground">{talent.mentor}</span>
                        </div>
                        <div>
                          <span className="font-medium">Next Step: </span>
                          <Badge variant="secondary" className="text-xs">{talent.nextStep}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-engagement" />
                  <span>AI Recommendations</span>
                </CardTitle>
                <CardDescription>Personalized opportunities based on talent analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border-l-4 border-l-engagement">
                      <div className="flex items-center space-x-3">
                        <rec.icon className="h-8 w-8 text-engagement" />
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-sm">{rec.title}</h4>
                            <Badge variant="secondary" className="text-xs">{rec.type}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{rec.description}</p>
                          <p className="text-xs text-engagement mt-1">Deadline: {rec.deadline}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-primary mt-1">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-engagement" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Camera className="h-4 w-4 mr-2" />
                  Log Activity
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Mentor
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Full Report
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Explore Programs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentTracker;