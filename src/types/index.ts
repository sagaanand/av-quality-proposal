// ==========================================
// 1. ORIGINAL COMPREHENSIVE PROPOSAL TYPES
// ==========================================

export interface Package {
  id: 'essential' | 'growth' | 'expansion';
  letterCode: 'Package A' | 'Package B' | 'Package C';
  name: string;
  badge?: string;
  positioning: string;
  setupFee: number;
  monthlyRetainer: number;
  monthlyAdBudget: number;
  month1Total: number;
  recurringMonthly: number;
  total90Days: number;
  ctaText: string;
  deliverables: string[];
  isRecommended?: boolean;
}

export interface ISOStandard {
  id: string;
  code: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  keyBenefit: string;
}

export interface BusinessServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface MarketingObjective {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverableSnippet: string;
  iconName: string;
}

export interface ActionPlanStage {
  stage: number;
  days: string;
  title: string;
  themeColor: 'blue' | 'gold' | 'emerald' | 'royal';
  tasks: string[];
  keyMilestone: string;
}

export interface DeliverableComparisonRow {
  feature: string;
  category: 'Strategic' | 'Digital Assets' | 'Content & Social' | 'Paid Acquisition' | 'Measurement';
  essential: string;
  growth: string;
  expansion: string;
}

export interface MetricCard {
  title: string;
  iconName: string;
  description: string;
  commercialValue: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'commercial' | 'content' | 'workflow' | 'scope';
}

export interface ProposalAgencyConfig {
  agencyName: string;
  agencyDescriptor: string;
  clientName: string;
  clientDescriptor: string;
  proposalCode: string;
  proposalDate: string;
  validityPeriod: string;
  markets: string[];
}

export interface ExpectedOutputItem {
  id: string;
  category: string;
  title: string;
  metricLabel: string;
  description: string;
  timeframe: string;
  commercialImpact: string;
}

export interface ContactConfig {
  brandName: string;
  descriptor: string;
  email: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappPrefillText: string;
  markets: string[];
  disclaimer: string;
}

export interface BudgetCalculatorInputs {
  setupBudget: number;
  monthlyRetainer: number;
  monthlyAdBudget: number;
  duration: 1 | 3 | 6 | 12;
  applyGst: boolean;
  gstRate: number; // e.g. 0.18 for 18%
}

export interface BudgetCalculatorResults {
  setupCost: number;
  totalAgencyFees: number;
  totalAdSpend: number;
  preTaxTotal: number;
  estimatedGst: number;
  totalWithTax: number;
  firstMonthTotal: number;
  recurringMonthly: number;
  effectiveMonthlyAverage: number;
}

export interface MonthBreakdownRow {
  month: number;
  setupFee: number;
  agencyFee: number;
  adSpend: number;
  total: number;
}

export interface ChannelAllocationItem {
  id: string;
  name: string;
  amount: number;
  color: string;
  description: string;
}

// ==========================================
// 2. NEW DIGITAL GROWTH PROPOSAL TYPES (₹10k Retainer & AI Video)
// ==========================================

export interface CommercialCard {
  id: 'setup' | 'retainer' | 'advertising';
  title: string;
  priceDisplay: string;
  priceSubtext?: string;
  badge?: string;
  isPrimary?: boolean;
  description: string;
  deliverables: string[];
  keyHighlight?: string;
  ctaText: string;
  disclaimer: string;
}

export interface DeliverableMetric {
  id: string;
  count: string;
  unit: string;
  title: string;
  description: string;
  frequency: string;
  category: 'content' | 'video' | 'campaign' | 'strategy' | 'reporting';
}

export interface VideoShowcaseCategory {
  id: string;
  title: string;
  shortCode: string;
  description: string;
  sampleHook: string;
  coreInsight: string;
  visualStyle: string;
  targetAudience: string;
  sampleStandards: string[];
}

export interface CalendarContentItem {
  day: number;
  dayLabel: string;
  contentType: 'Static Creative' | 'AI Video';
  category: 'ISO Awareness' | 'Business Education' | 'Service Explainer' | 'FAQ Breakdown' | 'Enquiry & Problem-Solution' | 'Service Focus';
  title: string;
  objective: string;
  platformFormat: string;
  coreAngle: string;
  hook: string;
  callToAction: string;
}

export interface QualificationStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface QualificationQuestion {
  id: number;
  question: string;
  purpose: string;
  sampleOptions: string[];
}

export interface RoadmapPhase {
  phaseNumber: number;
  daysRange: string;
  title: string;
  summary: string;
  milestones: string[];
  clientActionNeeded: string;
}

export interface SampleReportMetric {
  id: string;
  label: string;
  sampleValue: string;
  benchmarkContext: string;
  definition: string;
  category: 'volume' | 'reach' | 'engagement' | 'leads';
}

export interface ScopeExclusion {
  title: string;
  detail: string;
  category: 'budget' | 'production' | 'technology' | 'commitment';
}

export interface TrustDistinction {
  title: string;
  definition: string;
  responsibility: string;
  complianceNote: string;
}
