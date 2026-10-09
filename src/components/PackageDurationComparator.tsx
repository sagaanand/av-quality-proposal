import React, { useState } from 'react';
import { packagesData } from '../data/proposalData';
import { Package } from '../types';
import { 
  Download, 
  CheckCircle2, 
  Clock
} from 'lucide-react';

export const PackageDurationComparator: React.FC = () => {
  const [selectedPackageId, setSelectedPackageId] = useState<'essential' | 'growth' | 'expansion'>('growth');
  const [duration, setDuration] = useState<1 | 3 | 6 | 12>(3);
  const [additionalMonthlyAd, setAdditionalMonthlyAd] = useState<number>(0);
  const [additionalSetupFee, setAdditionalSetupFee] = useState<number>(0);
  const [includeGst, setIncludeGst] = useState<boolean>(true);

  const selectedPkg = packagesData.find((p) => p.id === selectedPackageId) || packagesData[1];

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.round(val));
  };

  // Base values
  const baseSetup = selectedPkg.setupFee;
  const baseRetainer = selectedPkg.monthlyRetainer;
  const baseAd = selectedPkg.monthlyAdBudget;

  const totalSetupMonth1 = baseSetup + additionalSetupFee;
  const effectiveMonthlyAd = baseAd + additionalMonthlyAd;

  // Month-by-month rows generator
  const monthsData = Array.from({ length: duration }, (_, i) => {
    const monthNum = i + 1;
    const isFirstMonth = monthNum === 1;
    const setupFee = isFirstMonth ? totalSetupMonth1 : 0;
    const agencyFee = baseRetainer;
    const adSpend = effectiveMonthlyAd;
    const total = setupFee + agencyFee + adSpend;

    return {
      month: monthNum,
      setupFee,
      agencyFee,
      adSpend,
      total,
    };
  });

  // Aggregated totals
  const totalSetupCost = totalSetupMonth1;
  const totalAgencyFees = baseRetainer * duration;
  const totalMediaSpend = effectiveMonthlyAd * duration;
  const totalPreTaxInvestment = totalSetupCost + totalAgencyFees + totalMediaSpend;
  const estimatedTax = includeGst ? totalPreTaxInvestment * 0.18 : 0;
  const finalTotal = totalPreTaxInvestment + estimatedTax;
  const averageMonthly = totalPreTaxInvestment / duration;

  // Real CSV Export Generator
  const handleDownloadCSV = () => {
    const csvRows: string[] = [];

    // Header info
    csvRows.push(`"A V Quality Services — Digital Marketing Proposal Budget Estimate"`);
    csvRows.push(`"Generated On","${new Date().toLocaleDateString('en-IN')}"`);
    csvRows.push(`"Selected Package","${selectedPkg.name} (${selectedPkg.letterCode})"`);
    csvRows.push(`"Engagement Duration","${duration} Months"`);
    csvRows.push(`"Standard Setup Fee","INR ${baseSetup}"`);
    csvRows.push(`"Additional Setup Expense","INR ${additionalSetupFee}"`);
    csvRows.push(`"Monthly Agency Retainer","INR ${baseRetainer}"`);
    csvRows.push(`"Base Monthly Ad Budget","INR ${baseAd}"`);
    csvRows.push(`"Additional Monthly Ad Spend","INR ${additionalMonthlyAd}"`);
    csvRows.push(`"Effective Monthly Ad Spend","INR ${effectiveMonthlyAd}"`);
    csvRows.push(``);

    // Month-by-month table header
    csvRows.push(`"Month","One-Time Setup Fee (INR)","Agency Management Retainer (INR)","Direct Advertising Media Spend (INR)","Monthly Total Pre-Tax (INR)"`);

    // Month-by-month rows
    monthsData.forEach((row) => {
      csvRows.push(`"Month ${row.month}","${row.setupFee}","${row.agencyFee}","${row.adSpend}","${row.total}"`);
    });

    // Summary lines
    csvRows.push(``);
    csvRows.push(`"Total Setup Expenses","","","","${totalSetupCost}"`);
    csvRows.push(`"Total Agency Retainers","","","","${totalAgencyFees}"`);
    csvRows.push(`"Total Media Advertising Spend","","","","${totalMediaSpend}"`);
    csvRows.push(`"Total Pre-Tax Investment","","","","${totalPreTaxInvestment}"`);
    if (includeGst) {
      csvRows.push(`"Estimated GST (18%)","","","","${estimatedTax}"`);
      csvRows.push(`"Grand Total (Including GST)","","","","${finalTotal}"`);
    }
    csvRows.push(`"Average Monthly Investment (Pre-Tax)","","","","${averageMonthly}"`);

    const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csvRows.join("\n"));
    const link = document.createElement("a");
    link.setAttribute("href", csvContent);
    link.setAttribute("download", `av_quality_services_${selectedPkg.id}_${duration}_month_estimate.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-white border-b border-luxury-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-secondary border border-luxury-border text-luxury-secondaryText font-medium text-xs tracking-wider uppercase">
            <Clock className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Multi-Month Projection Modeling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-luxury-text font-normal tracking-tight">
            Compare Packages Over Time
          </h2>

          <p className="text-base text-luxury-secondaryText leading-relaxed">
            Examine the exact month-by-month cashflow breakdown for each proposal tier across 1, 3, 6, or 12 months. One-time setup is strictly billed in Month 1 and never repeated.
          </p>
        </div>

        {/* Input Configuration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          {/* Package Selector */}
          <div className="p-5 rounded-2xl bg-luxury-secondary border border-luxury-border space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              1. Select Proposal Package
            </label>
            <div className="space-y-2">
              {packagesData.map((pkg) => (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={`w-full p-2.5 rounded-xl text-left border text-xs transition-all flex items-center justify-between ${
                    selectedPackageId === pkg.id
                      ? 'bg-white border-luxury-gold shadow-sm font-semibold text-luxury-text'
                      : 'bg-white/60 border-luxury-borderLight hover:border-luxury-border text-luxury-secondaryText'
                  }`}
                >
                  <div>
                    <span className="block font-medium">{pkg.letterCode} — {pkg.name}</span>
                    <span className="text-[10px] text-luxury-secondaryText font-mono">Setup: {formatINR(pkg.setupFee)}</span>
                  </div>
                  {selectedPackageId === pkg.id && <CheckCircle2 className="w-4 h-4 text-luxury-gold flex-shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Selector */}
          <div className="p-5 rounded-2xl bg-luxury-secondary border border-luxury-border space-y-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              2. Engagement Horizon
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[1, 3, 6, 12].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setDuration(m as 1 | 3 | 6 | 12)}
                  className={`py-3 px-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                    duration === m
                      ? 'bg-luxury-text text-white border-luxury-text shadow-sm'
                      : 'bg-white text-luxury-text border-luxury-border hover:border-luxury-gold'
                  }`}
                >
                  {m} Month{m > 1 ? 's' : ''}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-luxury-secondaryText leading-tight pt-1">
              * Recommended: 3-month validation horizon to evaluate Cost per Qualified Lead.
            </p>
          </div>

          {/* Optional Additional Monthly Ad Spend */}
          <div className="p-5 rounded-2xl bg-luxury-secondary border border-luxury-border space-y-2.5">
            <label htmlFor="additionalAd" className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              3. Extra Monthly Ad Spend
            </label>
            <p className="text-[11px] text-luxury-secondaryText leading-tight">
              Base Ad Spend: <span className="font-mono font-medium text-luxury-text">{formatINR(baseAd)} / mo</span>
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-xs text-luxury-secondaryText font-mono">+₹</span>
              <input
                id="additionalAd"
                type="number"
                min={0}
                max={150000}
                step={5000}
                value={additionalMonthlyAd}
                onChange={(e) => setAdditionalMonthlyAd(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-2.5 py-1.5 text-right font-mono text-xs font-bold rounded-xl border border-luxury-border focus:border-luxury-gold focus:outline-none bg-white"
              />
            </div>
            <div className="text-[11px] text-luxury-secondaryText flex justify-between pt-1">
              <span>Total Monthly Ad:</span>
              <span className="font-mono font-semibold text-luxury-text">{formatINR(effectiveMonthlyAd)}</span>
            </div>
          </div>

          {/* Optional Additional Setup Expense */}
          <div className="p-5 rounded-2xl bg-luxury-secondary border border-luxury-border space-y-2.5">
            <label htmlFor="additionalSetup" className="text-xs font-semibold uppercase tracking-wider text-luxury-gold block">
              4. Additional Setup Scope
            </label>
            <p className="text-[11px] text-luxury-secondaryText leading-tight">
              Base Setup: <span className="font-mono font-medium text-luxury-text">{formatINR(baseSetup)}</span> (M1 only)
            </p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-xs text-luxury-secondaryText font-mono">+₹</span>
              <input
                id="additionalSetup"
                type="number"
                min={0}
                max={100000}
                step={5000}
                value={additionalSetupFee}
                onChange={(e) => setAdditionalSetupFee(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-2.5 py-1.5 text-right font-mono text-xs font-bold rounded-xl border border-luxury-border focus:border-luxury-gold focus:outline-none bg-white"
              />
            </div>
            <div className="text-[11px] text-luxury-secondaryText flex justify-between pt-1">
              <span>Total Setup Fee:</span>
              <span className="font-mono font-semibold text-luxury-text">{formatINR(totalSetupMonth1)}</span>
            </div>
          </div>

        </div>

        {/* Month-by-Month Cost Breakdown Table */}
        <div className="rounded-3xl border border-luxury-border bg-white shadow-luxury overflow-hidden mb-8">
          <div className="p-5 sm:p-6 bg-luxury-secondary border-b border-luxury-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-luxury-gold">
                Monthly Schedule & Cost Ledger
              </span>
              <h3 className="text-lg font-serif text-luxury-text">
                {selectedPkg.name} ({duration}-Month Horizon)
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs text-luxury-secondaryText flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeGst}
                  onChange={(e) => setIncludeGst(e.target.checked)}
                  className="rounded accent-[#C6A56B]"
                />
                <span>Include 18% GST estimate</span>
              </label>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-luxury-borderLight bg-luxury-ivoryLight text-xs font-semibold text-luxury-secondaryText uppercase tracking-wider">
                  <th className="py-4 px-6 w-24">Month</th>
                  <th className="py-4 px-6 text-right">Setup Fee</th>
                  <th className="py-4 px-6 text-right">Agency Fee</th>
                  <th className="py-4 px-6 text-right">Ad Spend (Media)</th>
                  <th className="py-4 px-6 text-right font-bold text-luxury-text">Month Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-borderLight text-xs">
                {monthsData.map((row) => (
                  <tr key={row.month} className="hover:bg-luxury-secondary/50 transition-colors">
                    <td className="py-3.5 px-6 font-semibold text-luxury-text">
                      Month {row.month}
                      {row.month === 1 && (
                        <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-luxury-goldSubtle text-luxury-gold border border-luxury-goldLight font-normal">
                          Launch Setup
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-right font-mono text-luxury-secondaryText">
                      {row.setupFee > 0 ? formatINR(row.setupFee) : '—'}
                    </td>
                    <td className="py-3.5 px-6 text-right font-mono text-luxury-secondaryText">
                      {formatINR(row.agencyFee)}
                    </td>
                    <td className="py-3.5 px-6 text-right font-mono text-luxury-secondaryText">
                      {formatINR(row.adSpend)}
                    </td>
                    <td className="py-3.5 px-6 text-right font-mono font-bold text-luxury-text">
                      {formatINR(row.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Aggregation & CSV Download Bar */}
        <div className="rounded-3xl p-6 sm:p-8 bg-luxury-secondary border border-luxury-border shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
          
          {/* Summary Metric Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
            <div>
              <span className="text-[11px] text-luxury-secondaryText block">Total Setup Costs</span>
              <span className="text-base font-bold font-mono text-luxury-text">{formatINR(totalSetupCost)}</span>
            </div>
            <div>
              <span className="text-[11px] text-luxury-secondaryText block">Total Agency Fees</span>
              <span className="text-base font-bold font-mono text-luxury-text">{formatINR(totalAgencyFees)}</span>
            </div>
            <div>
              <span className="text-[11px] text-luxury-secondaryText block">Total Media Spend</span>
              <span className="text-base font-bold font-mono text-luxury-text">{formatINR(totalMediaSpend)}</span>
            </div>
            <div>
              <span className="text-[11px] text-luxury-gold font-semibold block">
                {includeGst ? 'Final Total (with GST)' : 'Total Pre-Tax'}
              </span>
              <span className="text-xl font-bold font-mono text-luxury-dark">
                {formatINR(includeGst ? finalTotal : totalPreTaxInvestment)}
              </span>
            </div>
          </div>

          {/* Action CTA with Real CSV Download */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleDownloadCSV}
              className="py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-luxury-text bg-white border border-luxury-border hover:border-luxury-gold shadow-sm flex items-center justify-center gap-2 transition-all hover:bg-luxury-ivoryLight"
            >
              <Download className="w-4 h-4 text-luxury-gold" />
              <span>Download Budget Estimate (.CSV)</span>
            </button>

            <a
              href="#proposal-summary"
              className="py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-luxury-dark hover:bg-luxury-text shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Review in Proposal Summary</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
