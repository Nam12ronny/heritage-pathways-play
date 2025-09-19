import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Smile, 
  Meh, 
  Frown, 
  Heart, 
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const WellnessTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { 
      id: 'happy', 
      icon: Smile, 
      label: 'Happy', 
      color: 'text-green-500',
      bgColor: 'bg-green-100 hover:bg-green-200',
      description: 'Feeling great and excited!'
    },
    { 
      id: 'okay', 
      icon: Meh, 
      label: 'Okay', 
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 hover:bg-yellow-200',
      description: 'Doing alright today'
    },
    { 
      id: 'sad', 
      icon: Frown, 
      label: 'Sad', 
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 hover:bg-blue-200',
      description: 'Not feeling my best'
    }
  ];

  const weeklyData = [
    { day: 'Mon', mood: 'happy', value: 85 },
    { day: 'Tue', mood: 'happy', value: 90 },
    { day: 'Wed', mood: 'okay', value: 70 },
    { day: 'Thu', mood: 'happy', value: 85 },
    { day: 'Fri', mood: 'okay', value: 75 },
    { day: 'Sat', mood: 'happy', value: 95 },
    { day: 'Sun', mood: 'happy', value: 88 }
  ];

  const insights = [
    {
      type: 'positive',
      icon: CheckCircle2,
      title: 'Great Week!',
      description: 'Your child has had 5 happy days this week',
      color: 'wellness'
    },
    {
      type: 'attention',
      icon: AlertCircle,
      title: 'Wednesday Dip',
      description: 'Consider checking in about mid-week activities',
      color: 'warning'
    }
  ];

  const averageWellness = Math.round(
    weeklyData.reduce((sum, day) => sum + day.value, 0) / weeklyData.length
  );

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
  };

  return (
    <section id="wellness" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-wellness-light text-wellness text-sm font-medium mb-4">
            <Heart className="h-4 w-4 mr-2" />
            Emotional Well-being
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Mood & <span className="text-wellness">Wellness</span> Tracker
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your child's emotional well-being and identify patterns to support their happiness and success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Check-in */}
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Today's Mood Check-in</h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-sm text-muted-foreground">How is your child feeling today?</p>
              
              <div className="grid grid-cols-1 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMood === mood.id
                        ? 'border-wellness bg-wellness-light scale-105'
                        : `border-border ${mood.bgColor}`
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <mood.icon className={`h-6 w-6 ${
                        selectedMood === mood.id ? 'text-wellness' : mood.color
                      }`} />
                      <div className="text-left">
                        <p className={`font-medium ${
                          selectedMood === mood.id ? 'text-wellness' : 'text-foreground'
                        }`}>
                          {mood.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{mood.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-wellness hover:opacity-90 transition-smooth"
              disabled={!selectedMood}
            >
              Submit Today's Mood
            </Button>
          </div>

          {/* Weekly Overview */}
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">This Week's Overview</h3>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Average Wellness</span>
                <span className="text-wellness font-semibold">{averageWellness}%</span>
              </div>
              <Progress value={averageWellness} className="h-2 bg-muted" />
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Daily Breakdown</h4>
              {weeklyData.map((day, index) => (
                <div key={day.day} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-muted-foreground w-8">
                      {day.day}
                    </span>
                    {day.mood === 'happy' && <Smile className="h-4 w-4 text-green-500" />}
                    {day.mood === 'okay' && <Meh className="h-4 w-4 text-yellow-500" />}
                    {day.mood === 'sad' && <Frown className="h-4 w-4 text-blue-500" />}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-wellness rounded-full transition-all"
                        style={{ width: `${day.value}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground w-8">
                      {day.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-4 text-wellness border-wellness hover:bg-wellness-light transition-smooth"
            >
              <Calendar className="h-4 w-4 mr-2" />
              View Full History
            </Button>
          </div>

          {/* Insights & Recommendations */}
          <div className="space-y-6">
            {/* Wellness Score Card */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border text-center">
              <div className="p-4 bg-wellness-light rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-wellness" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{averageWellness}%</h3>
              <p className="text-wellness font-medium mb-2">Excellent Well-being</p>
              <p className="text-sm text-muted-foreground">
                Your child is showing great emotional balance this week
              </p>
            </div>

            {/* AI Insights */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      insight.color === 'wellness' 
                        ? 'bg-wellness-light border-wellness' 
                        : 'bg-yellow-50 border-yellow-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <insight.icon className={`h-5 w-5 mt-0.5 ${
                        insight.color === 'wellness' ? 'text-wellness' : 'text-yellow-600'
                      }`} />
                      <div>
                        <p className={`font-medium ${
                          insight.color === 'wellness' ? 'text-wellness' : 'text-yellow-800'
                        }`}>
                          {insight.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessTracker;