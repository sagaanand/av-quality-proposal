import React, { useState } from 'react';
import { packagesData } from '../data/proposalData';
import { Package } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { StandardsGrid } from '../components/StandardsGrid';
import { ObjectivesSection } from '../components/ObjectivesSection';
import { PricingSection } from '../components/PricingSection';
import { BudgetCalculator } from '../components/BudgetCalculator';
import { PackageDurationComparator } from '../components/PackageDurationComparator';
import { MarketingSpendVisualizer } from '../components/MarketingSpendVisualizer';
import { ExpectedOutputsSection } from '../components/ExpectedOutputsSection';
import { ActionPlanTimeline } from '../components/ActionPlanTimeline';
import { DeliverablesTable } from '../components/DeliverablesTable';
import { MetricsGrid } from '../components/MetricsGrid';
import { ClientChecklist } from '../components/ClientChecklist';
import { FAQAccordion } from '../components/FAQAccordion';
import { ProposalSummarySection } from '../components/ProposalSummarySection';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OriginalComprehensiveProposalPageProps {
  onSwitchToGrowth: () => void;
}

export const OriginalComprehensiveProposalPage: React.FC<OriginalComprehensiveProposalPageProps> = ({
  onSwitchToGrowth,
}) => {
  // Default to recommended Package B (Growth Launch)
  const [selectedPackage, setSelectedPackage] = useState<Package>(
    packagesData.find((p) => p.id === 'growth') || packagesData[0]
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    scrollToSection('proposal-summary');
  };

  const handleSelectPackageId = (id: 'essential' | 'growth' | 'expansion') => {
    const found = packagesData.find((p) => p.id === id);
    if (found) {
      setSelectedPackage(found);
      scrollToSection('proposal-summary');
    }
  };

  const handleCustomizeInCalculator = (pkg: Package) => {
    setSelectedPackage(pkg);
    scrollToSection('calculator');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-luxury-text selection:bg-luxury-gold selection:text-white">
      {/* Top Banner Switching to New Proposal Page */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center flex items-center justify-center space-x-2 no-print border-b border-slate-800">
        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
        <span className="text-slate-300">New Service Offering Available:</span>
        <span className="font-bold text-white">Digital Marketing & AI Video Proposal (₹10,000/mo Retainer)</span>
        <button
          onClick={onSwitchToGrowth}
          className="ml-2 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-[11px] transition-colors shadow-xs"
        >
          <span>Open New Page</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Sticky Luxury White Header */}
      <Navbar onScrollToCalculator={() => scrollToSection('calculator')} />

      {/* Main Proposal Body */}
      <main className="flex-grow">
        
        {/* 1. Hero Section: Official Digital Marketing Proposal */}
        <HeroSection 
          onExplorePackages={() => scrollToSection('packages')}
          onCalculateBudget={() => scrollToSection('calculator')}
        />

        {/* 2. Enna Pannaporom (Part 1): Services & ISO Standards Portfolio */}
        <StandardsGrid />

        {/* 3. Enna Pannaporom (Part 2): Strategic Objectives & Acquisition Flow */}
        <ObjectivesSection />

        {/* 4. Evlo Spend (Part 1): Three Transparent Packages */}
        <PricingSection 
          selectedPackageId={selectedPackage.id}
          onSelectPackage={handleSelectPackage}
          onCustomizeInCalculator={handleCustomizeInCalculator}
        />

        {/* 5. Evlo Spend (Part 2): Interactive Budget Calculator */}
        <BudgetCalculator />

        {/* 6. Evlo Spend (Part 3): Month-by-Month Projection Ledger */}
        <PackageDurationComparator />

        {/* 7. Evlo Spend (Part 4): Channel Marketing Spend Allocation Visualizer */}
        <MarketingSpendVisualizer />

        {/* 8. Enna Output Expect Panlam: Tangible Inbound Leads, CPQL & 90-Day Deliverables */}
        <ExpectedOutputsSection />

        {/* 9. Visual 90-Day Implementation Timeline */}
        <ActionPlanTimeline />

        {/* 10. Deliverables & Scope Comparison Matrix */}
        <DeliverablesTable 
          onSelectPackageId={handleSelectPackageId}
        />

        {/* 11. KPI Section & Commercial Baseline Framework */}
        <MetricsGrid />

        {/* 12. Client Responsibilities & Operational Success Checklist */}
        <ClientChecklist />

        {/* 13. Frequently Asked Questions & Commercial Terms */}
        <FAQAccordion />

        {/* 14. Proposal Acceptance & Executive Sign-Off Document */}
        <ProposalSummarySection />

      </main>
    </div>
  );
};

export default OriginalComprehensiveProposalPage;
