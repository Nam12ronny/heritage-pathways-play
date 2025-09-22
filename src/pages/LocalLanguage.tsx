import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Globe, 
  MessageCircle, 
  Volume2, 
  Eye, 
  Users, 
  BookOpen,
  Heart,
  Star,
  Zap,
  Languages
} from 'lucide-react';

const LocalLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('luganda');

  const languages = [
    { code: 'luganda', name: 'Luganda', flag: '🇺🇬', speakers: '4M+' },
    { code: 'swahili', name: 'Kiswahili', flag: '🌍', speakers: '200M+' },
    { code: 'lango', name: 'Lango', flag: '🇺🇬', speakers: '1.5M+' },
    { code: 'acholi', name: 'Acholi', flag: '🇺🇬', speakers: '1.8M+' },
    { code: 'english', name: 'English', flag: '🇬🇧', speakers: 'Global' },
  ];

  const translatedContent = [
    {
      type: 'Classroom Moment',
      english: 'Great work on your math project today!',
      translated: 'Omulimu ogw\'eddiba omulungi nnyo ku pulojeekiti yo ey\'ebaliriddwa leero!',
      language: 'Luganda'
    },
    {
      type: 'Achievement Badge',
      english: 'Homework Hero - 10 sessions completed',
      translated: 'Muzira w\'emirimu - ebiseera 10 ebimaliriziddwa',
      language: 'Luganda'
    },
    {
      type: 'Parent Message',
      english: 'Your child showed excellent creativity in art class',
      translated: 'Omwana wo yalaga obuyiiya obw\'ekitalo mu kibiina ky\'emikono',
      language: 'Luganda'
    }
  ];

  const culturalFeatures = [
    {
      title: 'Cultural Expressions',
      description: 'Badges and achievements use local expressions and proverbs',
      icon: Heart,
      example: '"Enkima tezaala mpologoma" - Excellence takes time'
    },
    {
      title: 'Voice Messages',
      description: 'Teachers can send voice messages in local languages',
      icon: Volume2,
      example: 'Audio greetings in Luganda, Swahili, Lango'
    },
    {
      title: 'Cultural Context',
      description: 'Learning materials reference local culture and traditions',
      icon: Users,
      example: 'Math problems using local market scenarios'
    }
  ];

  const stats = [
    { label: 'Supported Languages', value: '12+', icon: Languages },
    { label: 'Translated Messages', value: '2,847', icon: MessageCircle },
    { label: 'Active Users', value: '15,623', icon: Users },
    { label: 'Cultural Expressions', value: '156', icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-wellness rounded-xl flex items-center justify-center">
              <Globe className="h-6 w-6 text-wellness-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Local Language Mode</h1>
              <p className="text-muted-foreground">Aurora.ai in Ugandan & African languages for complete inclusivity</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <Globe className="h-3 w-3 mr-1" />
              12+ Languages
            </Badge>
            <Badge variant="secondary" className="bg-wellness/10 text-wellness">
              <Zap className="h-3 w-3 mr-1" />
              AI Powered
            </Badge>
          </div>
        </div>

        {/* Language Selector */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Languages className="h-5 w-5 text-primary" />
              <span>Choose Your Language</span>
            </CardTitle>
            <CardDescription>Select your preferred language for the Aurora.ai experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <div 
                  key={lang.code}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover:shadow-md ${
                    selectedLanguage === lang.code 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{lang.flag}</div>
                    <h3 className="font-semibold text-sm">{lang.name}</h3>
                    <p className="text-xs text-muted-foreground">{lang.speakers}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Translation Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-engagement" />
                <span>Live Translation Examples</span>
              </CardTitle>
              <CardDescription>See how Aurora.ai translates content into local languages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {translatedContent.map((content, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{content.type}</Badge>
                    <Badge variant="secondary" className="bg-engagement/10 text-engagement text-xs">
                      {content.language}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-2 bg-card rounded border-l-4 border-l-muted">
                      <p className="text-sm text-muted-foreground mb-1">English:</p>
                      <p className="text-sm">{content.english}</p>
                    </div>
                    
                    <div className="p-2 bg-card rounded border-l-4 border-l-primary">
                      <p className="text-sm text-muted-foreground mb-1">{content.language}:</p>
                      <p className="text-sm font-medium">{content.translated}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Volume2 className="h-3 w-3 mr-1" />
                      Listen
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      View Original
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Cultural Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-wellness" />
                <span>Cultural Integration Features</span>
              </CardTitle>
              <CardDescription>How Aurora.ai embraces local culture and traditions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {culturalFeatures.map((feature, index) => (
                <div key={index} className="p-4 bg-muted/20 rounded-lg border-l-4 border-l-wellness">
                  <div className="flex items-start space-x-3">
                    <feature.icon className="h-6 w-6 text-wellness mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{feature.description}</p>
                      <div className="bg-wellness/10 p-2 rounded text-xs text-wellness">
                        <span className="font-medium">Example: </span>{feature.example}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button className="w-full bg-gradient-wellness hover:opacity-90 transition-smooth">
                  <Star className="h-4 w-4 mr-2" />
                  Enable Cultural Mode
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Language Preferences</CardTitle>
            <CardDescription>Customize your Aurora.ai language experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Primary Language</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Voice Messages</label>
                <Select defaultValue="auto">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-detect</SelectItem>
                    <SelectItem value="primary">Primary Language</SelectItem>
                    <SelectItem value="english">English Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Cultural Context</label>
                <Select defaultValue="full">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Integration</SelectItem>
                    <SelectItem value="partial">Basic Translation</SelectItem>
                    <SelectItem value="minimal">English Priority</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LocalLanguage;