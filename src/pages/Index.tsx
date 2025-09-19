import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EngagementDashboard from '@/components/EngagementDashboard';
import ClassroomMoments from '@/components/ClassroomMoments';
import WellnessTracker from '@/components/WellnessTracker';
import ParentSkillSharing from '@/components/ParentSkillSharing';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EngagementDashboard />
        <ClassroomMoments />
        <WellnessTracker />
        <ParentSkillSharing />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Jerusalem Heritage School
            </h3>
            <p className="text-muted-foreground mb-4">
              Building stronger connections between home and school through innovative engagement
            </p>
            <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 Jerusalem Heritage School</span>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-smooth">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;