import React from 'react';
import { growthTrustDistinctionsData } from '../data/growthProposalData';
import { ShieldCheck, Award, FileCheck, CheckCircle2, AlertOctagon } from 'lucide-react';

export const TrustDistinctionsSection: React.FC = () => {
  return (
    <section id="iso-trust" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Integrity, Compliance & Institutional Boundaries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ISO Claims & Trust Architecture
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Protecting A V Quality Services’ professional reputation by maintaining strict regulatory accuracy and clear distinctions in all marketing communication.
          </p>
        </div>

        {/* 4 Crucial Distinctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {growthTrustDistinctionsData.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:border-teal-500/50 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Standard Definition
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {item.definition}
                </p>

                <div className="bg-white border border-slate-200 rounded-xl p-3.5 mb-3 text-xs">
                  <span className="font-bold text-slate-900 block mb-1">
                    Role of A V Quality Services:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {item.responsibility}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Compliance Guideline:</span>{' '}
                {item.complianceNote}
              </div>
            </div>
          ))}
        </div>

        {/* Explicit Credential & Accreditation Policy Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-card">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-12 h-12 rounded-xl bg-teal-800/80 border border-teal-700 flex items-center justify-center flex-shrink-0">
              <AlertOctagon className="w-6 h-6 text-teal-300" />
            </div>

            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Institutional Independence & Certification Integrity Principle
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                Marketing materials produced under this proposal will <strong>never imply that A V Quality Services is itself an accredited certification body</strong> unless independently documented and confirmed. 
                We do not use unverified partner logos, fictitious registration seals, or unsubstantiated international accreditation claims. 
                When verified partnership agreements or accredited body credentials are provided by the client, they will be incorporated with full compliance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
