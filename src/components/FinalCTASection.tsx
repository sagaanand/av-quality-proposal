import React from 'react';
import { growthBrandConfig } from '../data/growthProposalData';
import { Printer, MessageSquareQuote, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenDiscussion: (topic?: string) => void;
  onPrint: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenDiscussion,
  onPrint,
}) => {
  return (
    <section id="final-cta" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-subtle mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Next Steps & Proposal Confirmation
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Build a Consistent Digital Presence?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Start with a clearly defined setup, a ₹10,000 monthly service retainer and a separate advertising budget aligned with your business goals.
        </p>

        {/* Commercial Recap Box */}
        <div className="mt-10 max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-subtle">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Foundational Phase
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">
                One-Time Setup
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Quoted Separately
              </span>
            </div>

            <div className="p-3 bg-teal-50/70 rounded-xl border border-teal-300">
              <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                Recurring Service
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">
                Monthly Retainer
              </span>
              <span className="text-xs text-teal-800 font-extrabold">
                ₹10,000 / month
              </span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Paid Traffic
              </span>
              <span className="text-sm font-bold text-slate-900 block mt-0.5">
                Advertising Budget
              </span>
              <span className="text-xs text-slate-600 font-medium">
                Paid Directly by Client
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200/70 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>• Cadence: Approximately every 3 days (not daily)</span>
            <span>• Scope: Up to 6 static creatives & 4 AI-assisted videos</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onOpenDiscussion('Final Proposal Confirmation')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-slate-900 hover:bg-teal-700 rounded-xl shadow-md transition-all group"
          >
            <MessageSquareQuote className="w-4 h-4 mr-2 text-teal-400 group-hover:text-white transition-colors" />
            <span>Discuss the Proposal</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onPrint}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-subtle transition-all"
          >
            <Printer className="w-4 h-4 mr-2 text-slate-600" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* Print Note */}
        <p className="mt-4 text-xs text-slate-400">
          Clicking &ldquo;Print / Save as PDF&rdquo; opens your system print dialog with clean executive document formatting.
        </p>

      </div>
    </section>
  );
};
