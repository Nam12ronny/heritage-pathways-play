import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HomeworkAssistant from "./pages/HomeworkAssistant";
import SmartDashboard from "./pages/SmartDashboard";
import TalentTracker from "./pages/TalentTracker";
import LocalLanguage from "./pages/LocalLanguage";
import SchoolWallet from "./pages/SchoolWallet";
import FutureJournal from "./pages/FutureJournal";
import StudentPortal from "./pages/StudentPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/homework-assistant" element={<HomeworkAssistant />} />
          <Route path="/smart-dashboard" element={<SmartDashboard />} />
          <Route path="/talent-tracker" element={<TalentTracker />} />
          <Route path="/local-language" element={<LocalLanguage />} />
          <Route path="/school-wallet" element={<SchoolWallet />} />
          <Route path="/future-journal" element={<FutureJournal />} />
          <Route path="/student-portal" element={<StudentPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
