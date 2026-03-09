import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { VideoTabs } from '../components/VideoTabs';
import { DiagnosticQuiz } from '../components/DiagnosticQuiz';
import { ActionPlan } from '../components/ActionPlan';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-serene-200 selection:text-serene-900">
      <HeroSection />
      <VideoTabs />
      <DiagnosticQuiz />
      <ActionPlan />
      <Footer />
    </div>);

}