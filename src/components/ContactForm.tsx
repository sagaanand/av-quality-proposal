import React, { useState, useEffect } from 'react';
import { packagesData, contactConfig } from '../data/proposalData';
import { Package } from '../types';
import { 
  Send, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  RotateCcw,
  Clock,
  Calculator
} from 'lucide-react';

interface ContactFormProps {
  selectedPackage: Package;
  selectedDuration?: number;
  customBudgetEstimate?: number;
  onSelectPackageId: (id: 'essential' | 'growth' | 'expansion') => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedPackage,
  selectedDuration = 3,
  customBudgetEstimate,
  onSelectPackageId,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    packageId: selectedPackage.id,
    duration: selectedDuration,
    estimatedBudget: customBudgetEstimate || selectedPackage.month1Total,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<typeof formData | null>(null);

  // Sync when parent updates selectedPackage or custom estimate
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      packageId: selectedPackage.id,
      duration: selectedDuration,
      estimatedBudget: customBudgetEstimate || selectedPackage.month1Total,
    }));
  }, [selectedPackage.id, selectedDuration, customBudgetEstimate]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / organization name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid professional email format.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid telephone number (at least 8 digits).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmissionData(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      packageId: selectedPackage.id,
      duration: selectedDuration,
      estimatedBudget: selectedPackage.month1Total,
      message: '',
    });
    setErrors({});
  };

  const activePkg = packagesData.find((p) => p.id === formData.packageId) || selectedPackage;

  // Direct WhatsApp and Mailto triggers
  const buildWhatsAppUrl = () => {
    const text = `Hello A V Quality Services,\n\nI would like to discuss the digital marketing proposal.\n\nPackage: ${activePkg.letterCode} — ${activePkg.name}\nDuration: ${formData.duration} Months\nEstimated Budget: ${formatINR(formData.estimatedBudget)}\n\nName: ${formData.fullName || '[Your Name]'}\nCompany: ${formData.companyName || '[Your Company]'}\nEmail: ${formData.email || '[Your Email]'}\nPhone: ${formData.phone || '[Your Phone]'}\n\nNote: ${formData.message || 'I would like to schedule a proposal review.'}`;
    return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Proposal Discussion Request: ${activePkg.name} (${activePkg.letterCode}) — A V Quality Services`;
    const body = `Hello Team,\n\nI would like to review the digital marketing proposal.\n\nPackage: ${activePkg.name} (${activePkg.letterCode})\nDuration: ${formData.duration} Months\nEstimated Budget: ${formatINR(formData.estimatedBudget)}\nName: ${formData.fullName}\nCompany: ${formData.companyName}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    return `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-luxury-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Next Steps & Implementation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Schedule a Proposal Discussion
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed font-light">
            Select your preferred package, fine-tune the engagement timeline, and submit your commercial parameters for an executive scoping review.
          </p>
        </div>

        {/* Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Selected Package Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl p-7 sm:p-8 bg-luxury-secondary border border-luxury-border shadow-luxury space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-luxury-gold uppercase tracking-widest block mb-1">
                  Active Proposal Configuration
                </span>
                <h3 className="text-2xl font-serif font-bold text-luxury-dark">
                  {activePkg.letterCode}: {activePkg.name}
                </h3>
                <p className="text-xs text-luxury-secondaryText mt-1 font-light">
                  {activePkg.positioning}
                </p>
              </div>

              {/* Financial Summary Box */}
              <div className="p-5 rounded-2xl bg-white border border-luxury-borderLight space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-xs text-luxury-secondaryText">
                  <span>First-Month Outlay:</span>
                  <span className="text-base font-bold font-mono text-luxury-dark">
                    {formatINR(activePkg.month1Total)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-luxury-secondaryText">
                  <span>Selected Duration:</span>
                  <span className="font-mono text-luxury-text">{formData.duration} Months</span>
                </div>
                <div className="pt-2 border-t border-luxury-borderLight flex items-center justify-between text-xs text-luxury-secondaryText">
                  <span className="font-semibold text-luxury-text">Estimated Budget Scope:</span>
                  <span className="font-mono font-bold text-luxury-gold text-sm">
                    {formatINR(formData.estimatedBudget)}
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-semibold text-luxury-secondaryText uppercase tracking-wider block">
                  Direct Immediate Channels:
                </span>
                
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-luxury-dark hover:bg-luxury-text text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-luxury-gold" />
                  <span>Discuss On WhatsApp Now</span>
                </a>

                <a
                  href={buildMailtoUrl()}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-luxury-ivoryLight text-luxury-text border border-luxury-border font-medium text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-luxury-secondaryText" />
                  <span>Send Direct Email Enquiry</span>
                </a>
              </div>
            </div>

            {/* Official Contact Info */}
            <div className="p-6 rounded-3xl bg-luxury-ivoryLight border border-luxury-border shadow-xs space-y-2.5 text-xs text-luxury-secondaryText font-light">
              <div className="font-serif font-bold text-luxury-text text-sm">Official Proposal Communications</div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{contactConfig.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-luxury-gold" />
                <span>{contactConfig.phoneDisplay} (Mon–Fri, 9:30 AM – 6:30 PM IST)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-9 bg-white border border-luxury-border shadow-luxury">
              
              {/* Demo Notice */}
              <div className="mb-6 p-4 rounded-2xl bg-luxury-secondary border border-luxury-border flex items-start gap-3 text-xs text-luxury-secondaryText">
                <AlertCircle className="w-4 h-4 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-luxury-text">Proposal Client-Side Prototype:</strong> This enquiry module demonstrates front-end data validation and custom parameter prefill. In demo mode, it displays the verified submission snapshot and provides 1-click WhatsApp and email integration.
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Package Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-luxury-text uppercase tracking-wider mb-2">
                      Proposal Package *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {packagesData.map((pkg) => {
                        const isChosen = formData.packageId === pkg.id;
                        return (
                          <button
                            type="button"
                            key={pkg.id}
                            onClick={() => {
                              setFormData({ ...formData, packageId: pkg.id });
                              onSelectPackageId(pkg.id);
                            }}
                            className={`p-3 rounded-xl text-left border text-xs transition-all ${
                              isChosen
                                ? 'bg-luxury-goldSubtle border-luxury-gold shadow-xs font-semibold'
                                : 'bg-luxury-secondary border-luxury-border hover:border-luxury-borderLight'
                            }`}
                          >
                            <span className="block font-mono text-[10px] text-luxury-gold uppercase">{pkg.letterCode}</span>
                            <span className="block font-bold text-luxury-text">{pkg.name}</span>
                            <span className="block text-[11px] font-mono text-luxury-secondaryText mt-0.5">{formatINR(pkg.month1Total)} M1</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Duration and Estimated Budget Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-luxury-text mb-1">
                        Engagement Duration (Months)
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-luxury-border bg-luxury-secondary focus:bg-white focus:outline-none focus:border-luxury-gold"
                      >
                        <option value={1}>1 Month (Initial Launch Pilot)</option>
                        <option value={3}>3 Months (Recommended 90-Day Validation)</option>
                        <option value={6}>6 Months (Strategic Growth Horizon)</option>
                        <option value={12}>12 Months (Annual Scale Program)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs font-semibold text-luxury-text mb-1">
                        Estimated Budget Scope (INR)
                      </label>
                      <input
                        id="estimatedBudget"
                        type="number"
                        min={0}
                        step={5000}
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: Number(e.target.value) || 0 })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-mono border border-luxury-border bg-luxury-secondary focus:bg-white focus:outline-none focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  {/* Name and Company Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-luxury-text mb-1">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Varma"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-luxury-secondary focus:bg-white focus:outline-none transition-all ${
                          errors.fullName ? 'border-rose-400' : 'border-luxury-border focus:border-luxury-gold'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold text-luxury-text mb-1">
                        Company / Organization *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. A V Quality Services"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-luxury-secondary focus:bg-white focus:outline-none transition-all ${
                          errors.companyName ? 'border-rose-400' : 'border-luxury-border focus:border-luxury-gold'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-luxury-text mb-1">
                        Professional Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-luxury-secondary focus:bg-white focus:outline-none transition-all ${
                          errors.email ? 'border-rose-400' : 'border-luxury-border focus:border-luxury-gold'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-luxury-text mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border bg-luxury-secondary focus:bg-white focus:outline-none transition-all ${
                          errors.phone ? 'border-rose-400' : 'border-luxury-border focus:border-luxury-gold'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-luxury-text mb-1">
                      Target Launch Timelines & Specific Notes (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding priority ISO standards (e.g. ISO 9001 vs ISO 27001), corporate batch dates, or specific international target regions..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border border-luxury-border bg-luxury-secondary focus:bg-white focus:outline-none focus:border-luxury-gold transition-all resize-none font-light"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-medium text-xs uppercase tracking-wider text-white bg-luxury-dark hover:bg-luxury-text shadow-luxury transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-luxury-gold" />
                    <span>Submit Proposal Parameters</span>
                  </button>
                </form>
              ) : (
                /* Submission Confirmation State */
                <div className="py-6 space-y-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-greenLight text-luxury-green flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-luxury-greenLight text-luxury-green text-xs font-bold uppercase tracking-wider">
                      Proposal Parameters Confirmed
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-luxury-dark mt-2">
                      Thank You, {submissionData?.fullName}
                    </h3>
                    <p className="text-xs sm:text-sm text-luxury-secondaryText max-w-md mx-auto mt-2 font-light">
                      Your discussion parameters for <strong>{activePkg.letterCode}: {activePkg.name}</strong> ({submissionData?.duration} Months • {formatINR(submissionData?.estimatedBudget || 0)}) have been prepared.
                    </p>
                  </div>

                  {/* Snapshot Box */}
                  <div className="p-4 rounded-2xl bg-luxury-secondary border border-luxury-border text-left text-xs space-y-2 max-w-md mx-auto font-light">
                    <div className="flex justify-between">
                      <span className="text-luxury-secondaryText">Company:</span>
                      <span className="font-semibold text-luxury-text">{submissionData?.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-secondaryText">Contact Email:</span>
                      <span className="font-mono text-luxury-text">{submissionData?.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-secondaryText">Telephone:</span>
                      <span className="font-mono text-luxury-text">{submissionData?.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-luxury-secondaryText">Package Tier:</span>
                      <span className="font-semibold text-luxury-gold">{activePkg.letterCode} — {activePkg.name}</span>
                    </div>
                  </div>

                  {/* Forward Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-luxury-dark hover:bg-luxury-text text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-luxury-gold" />
                      <span>Forward Directly to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-3 rounded-xl bg-luxury-secondary hover:bg-luxury-ivoryLight text-luxury-text font-medium text-xs flex items-center justify-center gap-2 border border-luxury-border"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Submit Another Estimate</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
