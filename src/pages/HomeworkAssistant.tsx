import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  BookOpen, 
  Zap, 
  Download, 
  Upload, 
  MessageCircle,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const HomeworkAssistant = () => {
  const [selectedSubject, setSelectedSubject] = useState('math');

  const subjects = [
    { id: 'math', name: 'Mathematics', progress: 85, icon: Target },
    { id: 'english', name: 'English', progress: 72, icon: BookOpen },
    { id: 'science', name: 'Science', progress: 91, icon: Brain },
    { id: 'social', name: 'Social Studies', progress: 68, icon: MessageCircle },
  ];

  const recentSessions = [
    { subject: 'Mathematics', topic: 'Fractions', score: 88, time: '15 mins ago' },
    { subject: 'English', topic: 'Grammar', score: 92, time: '1 hour ago' },
    { subject: 'Science', topic: 'Plants', score: 85, time: '2 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">AI Homework Assistant</h1>
              <p className="text-muted-foreground">Smart, offline-first learning companion</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-engagement/10 text-engagement">
              <Zap className="h-3 w-3 mr-1" />
              Offline Ready
            </Badge>
            <Badge variant="secondary" className="bg-wellness/10 text-wellness">
              <Download className="h-3 w-3 mr-1" />
              Ugandan Curriculum
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject Progress */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span>Subject Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <subject.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{subject.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Offline Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-engagement" />
                  <span>Offline Mode</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm">Content Downloaded</span>
                  <Badge variant="secondary" className="bg-engagement/10 text-engagement">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Ready
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Sync When Online
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Assistant */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Ask Your AI Tutor</CardTitle>
                <CardDescription>
                  Get help with homework, explanations, and practice problems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  {subjects.map((subject) => (
                    <Button
                      key={subject.id}
                      variant={selectedSubject === subject.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSubject(subject.id)}
                      className="flex items-center space-x-1"
                    >
                      <subject.icon className="h-3 w-3" />
                      <span>{subject.name}</span>
                    </Button>
                  ))}
                </div>
                
                <Textarea 
                  placeholder="Ask me anything about your homework... For example: 'Explain how to add fractions' or 'Help me with this word problem'"
                  className="min-h-[120px]"
                />
                
                <div className="flex space-x-2">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-smooth flex-1">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Help
                  </Button>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Sessions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSessions.map((session, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-engagement rounded-lg flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-engagement-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{session.subject}</p>
                          <p className="text-xs text-muted-foreground">{session.topic}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-wellness/10 text-wellness">
                            {session.score}%
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{session.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkAssistant;