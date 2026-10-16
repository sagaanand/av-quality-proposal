import React, { useState, useEffect } from 'react';
import { DigitalGrowthProposalPage } from './pages/DigitalGrowthProposalPage';
import { OriginalComprehensiveProposalPage } from './pages/OriginalComprehensiveProposalPage';

export const App: React.FC = () => {
  // Determine initial page from URL path, hash, or query parameter
  const getInitialPage = (): 'growth' | 'original' => {
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();
    const path = window.location.pathname.toLowerCase();

    if (
      hash.includes('growth') ||
      hash.includes('proposal-v2') ||
      search.includes('page=growth') ||
      path.includes('growth') ||
      path.includes('new-proposal')
    ) {
      return 'growth';
    }

    if (
      hash.includes('original') ||
      hash.includes('comprehensive') ||
      search.includes('page=original')
    ) {
      return 'original';
    }

    // Default to the new growth proposal page as requested in prompt, with 1-click access to original
    return 'growth';
  };

  const [activePage, setActivePage] = useState<'growth' | 'original'>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('growth')) {
        setActivePage('growth');
      } else if (hash.includes('original') || hash.includes('comprehensive')) {
        setActivePage('original');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchToGrowth = () => {
    window.location.hash = '#growth-proposal';
    setActivePage('growth');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchToOriginal = () => {
    window.location.hash = '#comprehensive';
    setActivePage('original');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {activePage === 'growth' ? (
        <DigitalGrowthProposalPage onSwitchToOriginal={switchToOriginal} />
      ) : (
        <OriginalComprehensiveProposalPage onSwitchToGrowth={switchToGrowth} />
      )}
    </div>
  );
};

export default App;
