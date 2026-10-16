import React from 'react';
import { growthBrandConfig } from '../data/growthProposalData';
import { Printer, ArrowUp, ShieldCheck } from 'lucide-react';

interface ProposalFooterProps {
  onPrint: () => void;
  onScrollToTop: () => void;
}

export const ProposalFooter: React.FC<ProposalFooterProps> = ({ onPrint, onScrollToTop }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-slate-800 gap-6">
          
          {/* Wordmark and Proposal Identifier */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-teal-400"></div>
              <span className="font-extrabold text-white text-lg tracking-wider font-display uppercase">
                {growthBrandConfig.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Strategic Digital Marketing & AI Video Content Engagement Proposal. 
              Designed to establish a consistent, authoritative presence in the ISO services market.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3 self-start md:self-auto no-print">
            <button
              onClick={onPrint}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onScrollToTop}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              <ArrowUp className="w-3.5 h-3.5 text-slate-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Commercial Framework Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 mb-8 border-b border-slate-800/60 text-xs">
          <div>
            <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">
              Monthly Service Retainer
            </span>
            <span className="text-white font-bold text-sm">₹10,000 / month</span>
            <span className="text-slate-400 block text-[11px]">Up to 6 static creatives + 4 AI videos</span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">
              Foundational Onboarding
            </span>
            <span className="text-white font-bold text-sm">One-Time Setup</span>
            <span className="text-slate-400 block text-[11px]">Quoted & approved separately</span>
          </div>

          <div>
            <span className="text-slate-500 uppercase tracking-wider block font-bold text-[10px]">
              Targeted Media Spend
            </span>
            <span className="text-white font-bold text-sm">Advertising Budget</span>
            <span className="text-slate-400 block text-[11px]">Paid separately by client via own accounts</span>
          </div>
        </div>

        {/* Bottom Integrity Disclaimer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} A V Quality Services Proposal Document. Content published approximately once every three days. Daily posting is not included.
          </p>
          <div className="flex items-center space-x-1 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Strict B2B Compliance & Document Integrity</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
