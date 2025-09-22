import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Trophy, 
  Heart, 
  Star,
  Brain,
  Target,
  Users,
  Calendar,
  Award,
  Smile,
  Zap,
  Camera,
  MessageCircle,
  Gamepad2,
  PiggyBank
} from 'lucide-react';

const StudentPortal = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const studentData = {
    name: 'Samuel Okello',
    grade: 'Primary 6',
    avatar: '/api/placeholder/100/100',
    level: 'Learning Explorer',
    xp: 2847,
    nextLevel: 3000
  };

  const quickStats = [
    { label: 'Total XP', value: '2,847', icon: Star, color: 'text-primary' },
    { label: 'Homework Streak', value: '12 days', icon: Target, color: 'text-engagement' },
    { label: 'Mood Score', value: '8.5/10', icon: Heart, color: 'text-wellness' },
    { label: 'Dream Entries', value: '23', icon: Brain, color: 'text-purple-500' }
  ];

  const recentActivities = [
    { 
      type: 'homework', 
      title: 'Completed Math Assignment', 
      xp: 50, 
      time: '2 hours ago',
      icon: BookOpen 
    },
    { 
      type: 'mood', 
      title: 'Daily Mood Check-in', 
      xp: 10, 
      time: '5 hours ago',
      icon: Smile 
    },
    { 
      type: 'achievement', 
      title: 'Earned "Problem Solver" Badge', 
      xp: 100, 
      time: '1 day ago',
      icon: Trophy 
    },
    { 
      type: 'journal', 
      title: 'Added Dream Journal Entry', 
      xp: 25, 
      time: '2 days ago',
      icon: Brain 
    }
  ];

  const achievements = [
    { 
      name: 'Homework Hero', 
      description: 'Complete 10 assignments in a row', 
      earned: true,
      icon: Trophy,
      color: 'bg-yellow-500'
    },
    { 
      name: 'Mood Master', 
      description: 'Log mood for 30 consecutive days', 
      earned: true,
      icon: Heart,
      color: 'bg-pink-500'
    },
    { 
      name: 'Future Dreamer', 
      description: 'Write 20 dream journal entries', 
      earned: true,
      icon: Brain,
      color: 'bg-purple-500'
    },
    { 
      name: 'Class Star', 
      description: 'Top 3 in class performance', 
      earned: false,
      icon: Star,
      color: 'bg-gray-400'
    }
  ];

  const subjects = [
    { name: 'Mathematics', progress: 87, grade: 'A-', icon: Target },
    { name: 'English', progress: 92, grade: 'A', icon: BookOpen },
    { name: 'Science', progress: 78, grade: 'B+', icon: Brain },
    { name: 'Social Studies', progress: 85, grade: 'A-', icon: Users }
  ];

  const upcomingTasks = [
    { task: 'Science Project Due', date: 'Tomorrow', priority: 'high' },
    { task: 'Math Quiz', date: 'Friday', priority: 'medium' },
    { task: 'Art Assignment', date: 'Next Monday', priority: 'low' },
    { task: 'Book Report', date: 'Next Week', priority: 'medium' }
  ];

  const classroomMoments = [
    {
      title: 'Science Experiment Success!',
      description: 'Our volcano experiment was amazing today',
      time: '3 hours ago',
      likes: 12,
      image: true
    },
    {
      title: 'Group Project Presentation',
      description: 'Presented about Uganda\'s wildlife with my team',
      time: '1 day ago',
      likes: 8,
      image: false
    },
    {
      title: 'Art Class Creation',
      description: 'Made a beautiful painting of Lake Victoria',
      time: '2 days ago',
      likes: 15,
      image: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="w-16 h-16">
              <AvatarImage src={studentData.avatar} alt={studentData.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
                {studentData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">{studentData.name}</h1>
              <p className="text-muted-foreground">{studentData.grade} • {studentData.level}</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{studentData.xp} XP</span>
                </div>
                <div className="flex-1 max-w-48">
                  <Progress 
                    value={(studentData.xp / studentData.nextLevel) * 100} 
                    className="h-2" 
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {studentData.nextLevel - studentData.xp} XP to next level
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Gamepad2 className="h-3 w-3 mr-1" />
              Student Portal
            </Badge>
            <Badge variant="secondary" className="bg-engagement/10 text-engagement">
              <Trophy className="h-3 w-3 mr-1" />
              Level 12
            </Badge>
            <Badge variant="secondary" className="bg-wellness/10 text-wellness">
              <Zap className="h-3 w-3 mr-1" />
              12 Day Streak
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <div>
                    <p className="text-lg font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Subject Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span>My Subjects</span>
                </CardTitle>
                <CardDescription>Track your academic progress across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <subject.icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-sm">{subject.name}</h3>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {subject.grade}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{subject.progress}%</span>
                        </div>
                        <Progress value={subject.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Classroom Moments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-engagement" />
                  <span>My Classroom Moments</span>
                </CardTitle>
                <CardDescription>Share and celebrate your learning journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {classroomMoments.map((moment, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-engagement rounded-lg flex items-center justify-center">
                        <Camera className="h-5 w-5 text-engagement-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{moment.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{moment.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{moment.time}</span>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3 text-wellness" />
                            <span className="text-xs text-wellness">{moment.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-wellness" />
                  <span>Recent Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <activity.icon className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-wellness/10 text-wellness">
                        +{activity.xp} XP
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {upcomingTasks.map((task, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded text-sm border-l-4 ${
                      task.priority === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-950/20' :
                      task.priority === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' :
                      'border-l-green-500 bg-green-50 dark:bg-green-950/20'
                    }`}
                  >
                    <p className="font-medium">{task.task}</p>
                    <p className="text-xs text-muted-foreground">{task.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-engagement" />
                  <span>My Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2">
                    <div className={`w-8 h-8 ${achievement.color} rounded-lg flex items-center justify-center`}>
                      <achievement.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold text-xs ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {achievement.name}
                      </h4>
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
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Homework Help
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Mood Check-in
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Dream Journal
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Savings Goals
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;