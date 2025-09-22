import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Wallet, 
  Users, 
  Target, 
  TrendingUp, 
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  PiggyBank,
  BookOpen,
  Camera,
  Bus,
  Trophy
} from 'lucide-react';

const SchoolWallet = () => {
  const [activeTab, setActiveTab] = useState('wallet');

  const walletBalance = 450000; // UGX
  const monthlyContribution = 50000;
  const savingsGroups = [
    {
      name: 'New Library Fund',
      goal: 5000000,
      raised: 3200000,
      members: 45,
      contribution: 25000,
      deadline: '6 months',
      category: 'Infrastructure'
    },
    {
      name: 'Science Lab Equipment',
      goal: 2500000,
      raised: 1800000,
      members: 32,
      contribution: 15000,
      deadline: '3 months',
      category: 'Equipment'
    },
    {
      name: 'Sports Field Trip',
      goal: 1200000,
      raised: 900000,
      members: 28,
      contribution: 10000,
      deadline: '2 months',
      category: 'Activities'
    }
  ];

  const recentTransactions = [
    { type: 'contribution', amount: 25000, description: 'Library Fund Monthly', date: '2 days ago', icon: ArrowUpRight },
    { type: 'withdrawal', amount: 120000, description: 'School Fees Payment', date: '5 days ago', icon: ArrowDownLeft },
    { type: 'contribution', amount: 15000, description: 'Science Lab Fund', date: '1 week ago', icon: ArrowUpRight },
    { type: 'deposit', amount: 200000, description: 'Monthly Allowance', date: '2 weeks ago', icon: Plus },
  ];

  const upcomingProjects = [
    { title: 'Computer Lab Upgrade', target: 8000000, category: 'Technology', icon: Target },
    { title: 'School Bus Fund', target: 15000000, category: 'Transport', icon: Bus },
    { title: 'Art Studio Setup', target: 3000000, category: 'Creative', icon: Camera },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Wallet className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">School Wallet & Group Savings</h1>
              <p className="text-muted-foreground">Collaborative funding for educational excellence</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              <PiggyBank className="h-3 w-3 mr-1" />
              SACCO-Style Savings
            </Badge>
            <Badge variant="secondary" className="bg-engagement/10 text-engagement">
              <Users className="h-3 w-3 mr-1" />
              Community Driven
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Wallet Balance</p>
                  <p className="text-xl font-bold text-primary">{formatCurrency(walletBalance)}</p>
                </div>
                <Wallet className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Monthly Savings</p>
                  <p className="text-xl font-bold text-engagement">{formatCurrency(monthlyContribution)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-engagement" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Groups</p>
                  <p className="text-xl font-bold text-wellness">3</p>
                </div>
                <Users className="h-8 w-8 text-wellness" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Contributed</p>
                  <p className="text-xl font-bold text-primary">{formatCurrency(5900000)}</p>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Savings Groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PiggyBank className="h-5 w-5 text-primary" />
                  <span>Active Savings Groups</span>
                </CardTitle>
                <CardDescription>Collaborative funding for school improvement projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {savingsGroups.map((group, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{group.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">{group.category}</Badge>
                          <span className="text-xs text-muted-foreground">{group.members} members</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{formatCurrency(group.contribution)}/month</p>
                        <p className="text-xs text-muted-foreground">Your contribution</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{formatCurrency(group.raised)} / {formatCurrency(group.goal)}</span>
                      </div>
                      <Progress value={getProgressPercentage(group.raised, group.goal)} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{getProgressPercentage(group.raised, group.goal)}% complete</span>
                        <span>{group.deadline} remaining</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth">
                        Contribute Extra
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-engagement" />
                  <span>Recent Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          transaction.type === 'contribution' || transaction.type === 'deposit' 
                            ? 'bg-wellness/10 text-wellness' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <transaction.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{transaction.description}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium text-sm ${
                          transaction.type === 'contribution' || transaction.type === 'deposit' 
                            ? 'text-wellness' 
                            : 'text-muted-foreground'
                        }`}>
                          {transaction.type === 'withdrawal' ? '-' : '+'}{formatCurrency(transaction.amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="h-5 w-5 text-primary" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Money
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <PiggyBank className="h-4 w-4 mr-2" />
                  Join New Group
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Create Project
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Transaction History
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Projects */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-engagement" />
                  <span>Upcoming Projects</span>
                </CardTitle>
                <CardDescription>Future investment opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingProjects.map((project, index) => (
                  <div key={index} className="p-3 bg-muted/20 rounded-lg border-l-4 border-l-engagement">
                    <div className="flex items-start space-x-3">
                      <project.icon className="h-5 w-5 text-engagement mt-1" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{project.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{project.category}</p>
                        <p className="text-xs text-engagement">Target: {formatCurrency(project.target)}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2 text-xs">
                      Get Notified
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolWallet;