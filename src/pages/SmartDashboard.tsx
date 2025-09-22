import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Heart, 
  TrendingUp, 
  Users, 
  AlertTriangle,
  Smile,
  Frown,
  Meh,
  Star,
  Activity
} from 'lucide-react';

const SmartDashboard = () => {
  const moodData = [
    { day: 'Mon', mood: 'happy', score: 85, color: 'text-wellness' },
    { day: 'Tue', mood: 'neutral', score: 72, color: 'text-amber-500' },
    { day: 'Wed', mood: 'happy', score: 90, color: 'text-wellness' },
    { day: 'Thu', mood: 'sad', score: 45, color: 'text-destructive' },
    { day: 'Fri', mood: 'happy', score: 88, color: 'text-wellness' },
  ];

  const performanceMetrics = [
    { subject: 'Mathematics', score: 87, trend: 'up', improvement: '+12%' },
    { subject: 'English', score: 92, trend: 'up', improvement: '+8%' },
    { subject: 'Science', score: 78, trend: 'down', improvement: '-5%' },
    { subject: 'Social Studies', score: 85, trend: 'up', improvement: '+15%' },
  ];

  const alerts = [
    { type: 'mood', message: 'Low mood detected on Thursday', priority: 'high' },
    { type: 'performance', message: 'Science scores declining', priority: 'medium' },
    { type: 'engagement', message: 'Great parent engagement this week!', priority: 'positive' },
  ];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return <Smile className="h-4 w-4 text-wellness" />;
      case 'sad': return <Frown className="h-4 w-4 text-destructive" />;
      default: return <Meh className="h-4 w-4 text-amber-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-wellness rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-wellness-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Smart Learning & Mood Dashboard</h1>
              <p className="text-muted-foreground">Comprehensive insights into your child's wellbeing and performance</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overall Mood</p>
                  <p className="text-2xl font-bold text-wellness">Good</p>
                </div>
                <Heart className="h-8 w-8 text-wellness" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Performance</p>
                  <p className="text-2xl font-bold text-engagement">85%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-engagement" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Parent Engagement</p>
                  <p className="text-2xl font-bold text-primary">92%</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Alerts</p>
                  <p className="text-2xl font-bold text-amber-500">2</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mood Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-wellness" />
                <span>Weekly Mood Tracking</span>
              </CardTitle>
              <CardDescription>Daily emotional wellbeing monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moodData.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium w-8">{day.day}</div>
                      {getMoodIcon(day.mood)}
                      <div className="flex-1">
                        <Progress value={day.score} className="h-2" />
                      </div>
                    </div>
                    <span className={`text-sm font-medium ${day.color}`}>{day.score}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Trends */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-engagement" />
                <span>Performance Trends</span>
              </CardTitle>
              <CardDescription>Subject-wise academic progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-engagement rounded-lg flex items-center justify-center">
                        <Star className="h-4 w-4 text-engagement-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{metric.subject}</p>
                        <p className="text-xs text-muted-foreground">Score: {metric.score}%</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant="secondary" 
                        className={metric.trend === 'up' ? 'bg-wellness/10 text-wellness' : 'bg-destructive/10 text-destructive'}
                      >
                        {metric.improvement}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Alerts & Insights */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Smart Insights & Alerts</span>
              </CardTitle>
              <CardDescription>AI-powered recommendations and early warning system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {alerts.map((alert, index) => (
                  <div key={index} className="p-4 bg-muted/20 rounded-lg border-l-4 border-l-primary">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                        alert.priority === 'high' ? 'text-destructive' : 
                        alert.priority === 'positive' ? 'text-wellness' : 'text-amber-500'
                      }`} />
                      <div>
                        <p className="text-sm font-medium capitalize">{alert.type} Alert</p>
                        <p className="text-xs text-muted-foreground mt-1">{alert.message}</p>
                        <Badge 
                          variant="secondary" 
                          className={`mt-2 text-xs ${
                            alert.priority === 'high' ? 'bg-destructive/10 text-destructive' : 
                            alert.priority === 'positive' ? 'bg-wellness/10 text-wellness' : 'bg-amber-500/10 text-amber-500'
                          }`}
                        >
                          {alert.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;