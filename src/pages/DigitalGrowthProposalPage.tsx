import React, { useState } from 'react';
import { GrowthNavbar } from '../components/growth/GrowthNavbar';
import { GrowthHeroSection } from '../components/growth/GrowthHeroSection';
import { CommercialModelSection } from '../components/CommercialModelSection';
import { VideoShowcaseSection } from '../components/VideoShowcaseSection';
import { ContentCalendarSection } from '../components/ContentCalendarSection';
import { MonthlyDeliverablesSection } from '../components/MonthlyDeliverablesSection';
import { StrategyAudienceSection } from '../components/StrategyAudienceSection';
import { WhatsAppJourneySection } from '../components/WhatsAppJourneySection';
import { ExecutionRoadmapSection } from '../components/ExecutionRoadmapSection';
import { ReportingMeasurementSection } from '../components/ReportingMeasurementSection';
import { ExclusionsSection } from '../components/ExclusionsSection';
import { TrustDistinctionsSection } from '../components/TrustDistinctionsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { ProposalFooter } from '../components/ProposalFooter';
import { DiscussionModal } from '../components/DiscussionModal';

interface DigitalGrowthProposalPageProps {
  onSwitchToOriginal: () => void;
}

export const DigitalGrowthProposalPage: React.FC<DigitalGrowthProposalPageProps> = ({
  onSwitchToOriginal,
}) => {
  const [discussionModalOpen, setDiscussionModalOpen] = useState(false);
  const [discussionTopic, setDiscussionTopic] = useState<string>('General Proposal Discussion');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDiscussion = (topic?: string) => {
    if (topic) {
      setDiscussionTopic(topic);
    }
    setDiscussionModalOpen(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-teal-700 selection:text-white">
      
      {/* 1. Header / Navigation with Switcher to Original Page */}
      <GrowthNavbar
        onOpenDiscussion={handleOpenDiscussion}
        onPrint={handlePrint}
        onSwitchToOriginal={onSwitchToOriginal}
      />

      {/* Main Proposal Body */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <GrowthHeroSection
          onExploreProposal={() => scrollToSection('commercial-model')}
          onViewDeliverables={() => scrollToSection('deliverables')}
        />

        {/* 3. Commercial Model Section */}
        <CommercialModelSection
          onOpenDiscussion={handleOpenDiscussion}
          onScrollToDeliverables={() => scrollToSection('deliverables')}
        />

        {/* 4. AI Video Content Showcase */}
        <VideoShowcaseSection />

        {/* 5. Monthly Content Calendar */}
        <ContentCalendarSection />

        {/* 6. Scope of Monthly Deliverables */}
        <MonthlyDeliverablesSection />

        {/* 7. Strategy & Target Audience */}
        <StrategyAudienceSection />

        {/* 8. WhatsApp Enquiry Journey */}
        <WhatsAppJourneySection />

        {/* 9. 30-Day Execution Roadmap */}
        <ExecutionRoadmapSection />

        {/* 10. Reporting & Measurement */}
        <ReportingMeasurementSection />

        {/* 11. Exclusions & Transparency */}
        <ExclusionsSection
          onOpenDiscussion={handleOpenDiscussion}
        />

        {/* 12. ISO Claims & Trust */}
        <TrustDistinctionsSection />

        {/* Optional Expandable FAQs */}
        <FAQSection />

        {/* 13. Final CTA */}
        <FinalCTASection
          onOpenDiscussion={handleOpenDiscussion}
          onPrint={handlePrint}
        />

      </main>

      {/* Footer */}
      <ProposalFooter
        onPrint={handlePrint}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* Discussion Modal */}
      <DiscussionModal
        isOpen={discussionModalOpen}
        onClose={() => setDiscussionModalOpen(false)}
        initialTopic={discussionTopic}
      />

    </div>
  );
};

export default DigitalGrowthProposalPage;
