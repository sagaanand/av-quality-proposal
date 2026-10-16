import React, { useState } from 'react';
import { growthBrandConfig } from '../data/growthProposalData';
import { X, Check, Copy, Send, MessageSquare, ShieldCheck, Mail } from 'lucide-react';

interface DiscussionModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const DiscussionModal: React.FC<DiscussionModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Proposal Discussion',
}) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(initialTopic);
  const [clientNote, setClientNote] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const discussionTopics = [
    'Discuss Setup Scope & Quotation',
    'Confirm ₹10,000 / Month Retainer',
    'Align on Separate Advertising Budget',
    'Review Content Calendar Topics',
    'Custom Scope or Strategic Alignment',
  ];

  const proposalSummaryText = `
A V QUALITY SERVICES — DIGITAL MARKETING PROPOSAL SUMMARY
---------------------------------------------------------
• Core Service: Monthly Digital Marketing Retainer @ ₹10,000 / month
• Deliverables: Up to 6 static creatives & 4 AI-assisted short videos per month
• Publishing Cadence: Approximately once every three days (~10 slots/month, not daily)
• One-Time Setup: Quoted separately (positioning, messaging, enquiry templates)
• Advertising Spend: Paid separately by client directly through own ad accounts
• Selected Topic: ${selectedTopic}
${clientNote ? `• Discussion Note: ${clientNote}` : ''}
---------------------------------------------------------
Generated for A V Quality Services Digital Growth Planning.
  `.trim();

  const handleCopySummary = () => {
    navigator.clipboard.writeText(proposalSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`Discussion: A V Quality Services Digital Marketing Proposal - ${selectedTopic}`);
    const body = encodeURIComponent(proposalSummaryText);
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Discuss Proposal Scope
              </h3>
              <p className="text-xs text-slate-500">
                A V Quality Services Digital Marketing Engagement
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Discussion Agenda Prepared
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Your discussion topics have been recorded. You can copy the structured agenda or launch your email application to share with the team.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center space-x-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={handleOpenEmailClient}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-teal-700 rounded-lg flex items-center justify-center space-x-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Email Draft</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Select Discussion Topic */}
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Select Priority Discussion Focus:
                </label>
                <div className="space-y-1.5">
                  {discussionTopics.map((topic) => (
                    <label
                      key={topic}
                      onClick={() => setSelectedTopic(topic)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        selectedTopic === topic
                          ? 'bg-teal-50/70 border-teal-600 text-teal-900'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{topic}</span>
                      <input
                        type="radio"
                        name="discussionTopic"
                        checked={selectedTopic === topic}
                        onChange={() => setSelectedTopic(topic)}
                        className="text-teal-600 focus:ring-teal-500 h-3.5 w-3.5"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Specific Notes or Requirements */}
              <div>
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                  Specific Questions or Notes (Optional):
                </label>
                <textarea
                  value={clientNote}
                  onChange={(e) => setClientNote(e.target.value)}
                  placeholder="e.g., Preferred launch date, priority ISO standards (ISO 9001, ISO 27001), or initial media spend range..."
                  rows={3}
                  className="w-full p-3 text-xs border border-slate-300 rounded-xl focus:ring-1 focus:ring-teal-600 focus:border-teal-600 outline-none text-slate-800"
                />
              </div>

              {/* Commercial Clarity Check */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-[11px] text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">Commercial Summary:</span>
                <div>• Monthly Retainer: ₹10,000 / month (Content & AI Videos)</div>
                <div>• Setup Fee: Quoted separately upon mutual review</div>
                <div>• Advertising Budget: Paid directly through client ad accounts</div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-teal-700 flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Prepare Discussion Summary</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center space-x-1.5 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </>
          )}

          {/* Privacy & Scope Disclaimer */}
          <p className="text-[10px] text-slate-400 text-center leading-normal">
            No contact details are stored without explicit client submission. Formal engagement commences upon signed letter of agreement.
          </p>

        </div>
      </div>
    </div>
  );
};
