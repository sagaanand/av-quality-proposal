import React, { useState } from 'react';
import { growthWhatsappJourneySteps, growthWhatsappQualificationQuestions } from '../data/growthProposalData';
import { 
  Megaphone, 
  MessageSquare, 
  Smartphone, 
  CheckSquare, 
  Clock, 
  Users, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';

const stepIcons = [
  <Megaphone key="1" className="w-5 h-5 text-teal-700" />,
  <MessageSquare key="2" className="w-5 h-5 text-teal-700" />,
  <Smartphone key="3" className="w-5 h-5 text-teal-700" />,
  <CheckSquare key="4" className="w-5 h-5 text-teal-700" />,
  <Clock key="5" className="w-5 h-5 text-teal-700" />,
  <Users key="6" className="w-5 h-5 text-teal-700" />,
];

export const WhatsAppJourneySection: React.FC = () => {
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);

  const selectedQuestion =
    growthWhatsappQualificationQuestions.find((q) => q.id === selectedQuestionId) ||
    growthWhatsappQualificationQuestions[0];

  return (
    <section id="whatsapp-journey" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Smartphone className="w-3.5 h-3.5 text-teal-600" />
            <span>Enquiry Routing & Lead Qualification</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WhatsApp Enquiry Journey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            A structured, semi-guided conversation flow designed to qualify incoming inbound prospects before passing warm opportunities to your sales team.
          </p>
        </div>

        {/* 6-Step Visual Flow Cards */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {growthWhatsappJourneySteps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-subtle flex flex-col justify-between hover:border-teal-500/50 hover:bg-white transition-all relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-900 shadow-xs">
                      {step.stepNumber}
                    </span>
                    {stepIcons[idx]}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Qualification Questions Interactive Deep-Dive */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left: 5 Qualification Questions Selector */}
            <div className="flex-1 w-full space-y-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  5 Proposed Qualification Questions
                </span>
                <span className="text-xs text-slate-500">
                  Click to inspect rationale
                </span>
              </div>

              {growthWhatsappQualificationQuestions.map((q) => {
                const isSelected = q.id === selectedQuestionId;
                return (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-white border-teal-600 shadow-sm'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      Q{q.id}
                    </span>
                    <div className="flex-1">
                      <div className={`text-xs sm:text-sm font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                        {q.question}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Question Inspector & Sample Flow */}
            <div className="lg:w-96 w-full bg-white border border-slate-300 rounded-xl p-5 shadow-card">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Question Detail — Q{selectedQuestion.id}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">WhatsApp Script</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 mb-2">
                &ldquo;{selectedQuestion.question}&rdquo;
              </h4>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 text-xs text-teal-900 mb-4">
                <span className="font-bold block mb-0.5">Qualification Purpose:</span>
                {selectedQuestion.purpose}
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Sample Multi-Choice Prompt Options:
                </span>
                <div className="space-y-1.5">
                  {selectedQuestion.sampleOptions.map((opt, i) => (
                    <div key={i} className="text-xs bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md text-slate-700 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-snug">
                Designed for swift mobile tapping so corporate prospects reply in under 15 seconds.
              </div>
            </div>

          </div>
        </div>

        {/* Clear WhatsApp Scope Boundary & Disclaimer */}
        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-slate-600">
          <ShieldAlert className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p>
              <strong className="text-slate-900">Technical Scope Boundary & Disclaimer:</strong>{' '}
              These qualification questions and message sequences are proposed templates and will be reviewed and finalized collaboratively with your team during setup.
            </p>
            <p className="text-slate-600">
              This scope covers enquiry message copywriting, link-to-chat generation, and manual follow-up response templates. 
              <strong>WhatsApp Cloud API developer integration, webhook programming, or automated AI chatbots are not included</strong> in the ₹10,000 monthly retainer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
