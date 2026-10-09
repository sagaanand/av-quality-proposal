import React, { useState } from 'react';
import { packagesData } from './data/proposalData';
import { Package } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StandardsGrid } from './components/StandardsGrid';
import { ObjectivesSection } from './components/ObjectivesSection';
import { PricingSection } from './components/PricingSection';
import { BudgetCalculator } from './components/BudgetCalculator';
import { PackageDurationComparator } from './components/PackageDurationComparator';
import { MarketingSpendVisualizer } from './components/MarketingSpendVisualizer';
import { ExpectedOutputsSection } from './components/ExpectedOutputsSection';
import { ActionPlanTimeline } from './components/ActionPlanTimeline';
import { DeliverablesTable } from './components/DeliverablesTable';
import { MetricsGrid } from './components/MetricsGrid';
import { ClientChecklist } from './components/ClientChecklist';
import { FAQAccordion } from './components/FAQAccordion';
import { ProposalSummarySection } from './components/ProposalSummarySection';

export const App: React.FC = () => {
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
      {/* Sticky Luxury White Header — Digital Cake to A V Quality Services */}
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

        {/* 4. Evlo Spend (Part 1): Three Transparent Packages (Starting at ₹50,000 M1) */}
        <PricingSection 
          selectedPackageId={selectedPackage.id}
          onSelectPackage={handleSelectPackage}
          onCustomizeInCalculator={handleCustomizeInCalculator}
        />

        {/* 5. Evlo Spend (Part 2): Interactive Budget Calculator (Sliders + Exact Inputs) */}
        <BudgetCalculator />

        {/* 6. Evlo Spend (Part 3): Month-by-Month Projection Ledger & Real CSV Export */}
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

        {/* 14. Proposal Acceptance & Executive Sign-Off Document (Digital Cake -> A V Quality Services) */}
        <ProposalSummarySection />

      </main>

      {/* NOTE: Footer and contact forms removed completely as instructed by client */}
    </div>
  );
};

export default App;
