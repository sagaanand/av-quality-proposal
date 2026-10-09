import React, { useState } from 'react';
import { actionPlanStages } from '../data/proposalData';
import { 
  CheckCircle, 
  Clock, 
  Flag, 
  ChevronRight, 
  Milestone
} from 'lucide-react';

export const ActionPlanTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <section id="action-plan" className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Milestone className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Implementation Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Visual 90-Day Action Plan
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            A milestone-driven execution cadence structured into four discrete stages to rapidly validate demand prior to scaling capital investments.
          </p>
        </div>

        {/* Desktop Connected Progress Bar */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="min-w-[640px] grid grid-cols-4 gap-4 relative">
            
            {/* Connecting Track */}
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-luxury-border -translate-y-1/2 z-0 hidden sm:block" />

            {actionPlanStages.map((stage) => {
              const isSelected = activeStage === stage.stage;

              return (
                <button
                  key={stage.stage}
                  onClick={() => setActiveStage(stage.stage)}
                  className={`relative z-10 text-left p-5 rounded-2xl transition-all duration-300 border ${
                    isSelected
                      ? 'bg-luxury-secondary border-luxury-gold shadow-luxury ring-1 ring-luxury-gold/50'
                      : 'bg-white border-luxury-border hover:border-luxury-goldLight shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-luxury-goldSubtle text-luxury-gold border border-luxury-goldLight">
                      {stage.days}
                    </span>
                    <span className="text-xs font-mono text-luxury-secondaryText">
                      Stage 0{stage.stage}
                    </span>
                  </div>

                  <h3 className="text-sm font-serif font-bold text-luxury-text truncate">
                    {stage.title}
                  </h3>

                  <p className="text-[11px] text-luxury-secondaryText mt-1 truncate font-light">
                    {stage.keyMilestone}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Four Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actionPlanStages.map((stage) => {
            const isCurrent = activeStage === stage.stage;

            return (
              <div
                key={stage.stage}
                onClick={() => setActiveStage(stage.stage)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isCurrent
                    ? 'bg-luxury-ivoryLight border-luxury-gold shadow-luxury'
                    : 'bg-white border-luxury-border hover:border-luxury-borderLight shadow-xs'
                }`}
              >
                <div>
                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-luxury-borderLight">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-luxury-secondary border border-luxury-border flex items-center justify-center font-mono font-bold text-xs text-luxury-gold">
                        0{stage.stage}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-luxury-secondaryText block uppercase tracking-wider">
                          STAGE {stage.stage}
                        </span>
                        <span className="text-xs font-bold text-luxury-text">
                          {stage.days}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-serif font-bold text-luxury-dark mb-4">
                    {stage.title}
                  </h3>

                  {/* Tasks List */}
                  <ul className="space-y-2.5">
                    {stage.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-luxury-secondaryText leading-relaxed font-light">
                        <CheckCircle className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Milestone Deliverable Box */}
                <div className="mt-6 pt-4 border-t border-luxury-borderLight p-3.5 rounded-2xl bg-white border border-luxury-borderLight">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-luxury-secondaryText mb-1">
                    <Flag className="w-3 h-3 text-luxury-gold" />
                    <span>Primary Milestone</span>
                  </div>
                  <p className="text-xs font-serif font-medium text-luxury-text leading-snug">
                    {stage.keyMilestone}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast-Track Launch Note */}
        <div className="mt-12 p-5 rounded-2xl bg-luxury-secondary border border-luxury-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-luxury-border flex items-center justify-center text-luxury-gold flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-luxury-secondaryText">
              <strong className="text-luxury-text">Rapid 14-Day Launch Condition:</strong> Stage 1 deployment is achieved within 14 calendar days given timely client sign-offs on trainer profiles, pricing tiers, and Google Ads billing verification.
            </div>
          </div>
          <a
            href="#checklist"
            className="text-xs font-medium text-luxury-gold hover:underline whitespace-nowrap flex items-center gap-1"
          >
            <span>Client Responsibilities</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
