import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Star, 
  Trophy, 
  Target, 
  TrendingUp,
  Calendar,
  Clock,
  Plus
} from 'lucide-react';

const EngagementDashboard = () => {
  const parentLevel = {
    current: 7,
    name: "Learning Champion",
    nextLevel: "Education Hero",
    progress: 65,
    pointsToNext: 350,
    totalPoints: 1850
  };

  const badges = [
    { name: "First Week", icon: Star, earned: true, color: "engagement" },
    { name: "Study Buddy", icon: Award, earned: true, color: "primary" },
    { name: "Homework Hero", icon: Trophy, earned: true, color: "engagement" },
    { name: "Monthly Master", icon: Target, earned: false, color: "muted" },
  ];

  const recentSessions = [
    { subject: "Mathematics", duration: "45 min", points: 25, date: "Today" },
    { subject: "Reading", duration: "30 min", points: 20, date: "Yesterday" },
    { subject: "Science", duration: "60 min", points: 35, date: "2 days ago" },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah M.", points: 2340, avatar: "S" },
    { rank: 2, name: "You", points: 1850, avatar: "Y", isUser: true },
    { rank: 3, name: "David K.", points: 1720, avatar: "D" },
    { rank: 4, name: "Lisa R.", points: 1650, avatar: "L" },
  ];

  return (
    <section id="engagement" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Your Learning <span className="text-engagement">Engagement</span> Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your progress, earn rewards, and celebrate every milestone in your child's education.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-6">
            {/* Level Progress Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border card-interactive">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Level {parentLevel.current}</h3>
                  <p className="text-engagement font-semibold text-lg">{parentLevel.name}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-foreground">{parentLevel.totalPoints}</p>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to {parentLevel.nextLevel}</span>
                  <span className="text-engagement font-semibold">{parentLevel.pointsToNext} points to go</span>
                </div>
                <Progress value={parentLevel.progress} className="h-4 bg-muted" />
              </div>

              <Button className="w-full mt-8 bg-gradient-engagement hover:opacity-90 transition-spring text-lg h-12 glow-on-hover">
                <Plus className="h-4 w-4 mr-2" />
                Log New Study Session
              </Button>
            </div>

            {/* Achievement Badges */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Achievement Badges</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {badges.map((badge, index) => (
                  <div
                    key={badge.name}
                    className={`p-6 rounded-2xl border text-center transition-spring hover:scale-105 ${
                      badge.earned 
                        ? 'bg-gradient-engagement border-engagement-light shadow-engagement glow-on-hover' 
                        : 'bg-muted/50 border-border hover:bg-muted/70'
                    }`}
                  >
                    <badge.icon className={`h-10 w-10 mx-auto mb-3 ${
                      badge.earned ? 'text-engagement-foreground' : 'text-muted-foreground'
                    }`} />
                    <p className={`text-sm font-semibold ${
                      badge.earned ? 'text-engagement-foreground' : 'text-muted-foreground'
                    }`}>
                      {badge.name}
                    </p>
                    {badge.earned && (
                      <Badge variant="secondary" className="mt-3 text-xs">
                        Earned!
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Sessions */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Study Sessions</h3>
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-accent/50 border border-border hover:bg-accent/70 transition-spring card-interactive"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary-light rounded-xl">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{session.subject}</p>
                        <p className="text-sm text-muted-foreground">{session.duration} • {session.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-engagement text-lg">+{session.points}</p>
                      <p className="text-xs text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Monthly Challenge */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Monthly Challenge</h3>
              <div className="text-center">
                <div className="p-6 bg-wellness-light rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center micro-bounce">
                  <Calendar className="h-10 w-10 text-wellness" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Study Streak Master</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Complete 20 study sessions this month
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="text-wellness font-semibold">14/20</span>
                  </div>
                  <Progress value={70} className="h-3 bg-muted" />
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Parent Leaderboard</h3>
              <div className="space-y-4">
                {leaderboard.map((parent) => (
                  <div
                    key={parent.rank}
                    className={`flex items-center space-x-3 p-4 rounded-xl transition-spring hover:scale-105 ${
                      parent.isUser 
                        ? 'bg-engagement-light border border-engagement shadow-engagement' 
                        : 'bg-accent/50 hover:bg-accent/70'
                    }`}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        parent.rank === 1 ? 'bg-yellow-500 text-white' :
                        parent.rank === 2 ? 'bg-gray-400 text-white' :
                        parent.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {parent.rank}
                      </div>
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {parent.avatar}
                      </div>
                      <span className={`font-semibold ${
                        parent.isUser ? 'text-engagement' : 'text-foreground'
                      }`}>
                        {parent.name}
                      </span>
                    </div>
                    <span className="font-bold text-engagement text-lg">{parent.points}</span>
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

export default EngagementDashboard;