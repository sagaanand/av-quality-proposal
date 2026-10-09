import { 
  Package, 
  ISOStandard, 
  BusinessServiceCategory,
  MarketingObjective, 
  ActionPlanStage, 
  DeliverableComparisonRow, 
  MetricCard, 
  FAQItem, 
  ContactConfig,
  ChannelAllocationItem,
  ProposalAgencyConfig,
  ExpectedOutputItem
} from '../types';

export const proposalAgencyConfig: ProposalAgencyConfig = {
  agencyName: "Digital Cake",
  agencyDescriptor: "Strategic Digital Marketing & B2B Growth Agency",
  clientName: "A V Quality Services",
  clientDescriptor: "ISO Training | Consulting | Certification Coordination",
  proposalCode: "DC-AVQS-2026-PROP",
  proposalDate: "October 2026",
  validityPeriod: "30 Days from Issuance",
  markets: ["India (Metro & Industrial Belts)", "Middle East (Phased Testing)"]
};

export const expectedOutputsData: ExpectedOutputItem[] = [
  {
    id: 'out-1',
    category: 'Commercial Leads',
    title: 'Qualified Inbound Enquiries',
    metricLabel: 'Primary Commercial Output',
    description: 'Direct inbound calls, WhatsApp chats, and enquiry form submissions from corporate quality heads, plant heads, and IT directors seeking ISO implementation or training.',
    timeframe: 'Starting Week 3 (Days 15–30)',
    commercialImpact: 'Fills the sales pipeline with verified commercial opportunities rather than cold contacts.'
  },
  {
    id: 'out-2',
    category: 'Unit Economics',
    title: 'Cost per Qualified Lead (CPQL) Baseline',
    metricLabel: 'Capital Efficiency Metric',
    description: 'Empirical data establishing exactly how much media ad spend is required to acquire one sales-ready, high-ticket ISO consulting or training prospect.',
    timeframe: 'Established in Month 1',
    commercialImpact: 'Provides predictable unit economics so you can scale advertising spend with confidence.'
  },
  {
    id: 'out-3',
    category: 'Sales Pipeline',
    title: 'Booked Scoping & Discovery Consultations',
    metricLabel: 'Consulting Pipeline',
    description: 'High-intent prospects who transition from enquiry into scheduled discovery meetings and formal quote requests for ISO gap analysis or corporate batch training.',
    timeframe: 'Ongoing Months 1–3',
    commercialImpact: 'Direct precursor to signed corporate consulting engagements and bulk training enrollments.'
  },
  {
    id: 'out-4',
    category: 'Market Intelligence',
    title: 'Customer Objections & Demand Insights',
    metricLabel: 'Strategic Asset',
    description: 'Documented feedback log of real market objections, pricing sensitivities, preferred batch timings, and highest-margin standards (e.g., ISO 27001 vs 9001).',
    timeframe: 'Bi-Weekly Reporting',
    commercialImpact: 'Allows rapid sharpening of service offerings and pricing tiers to maximize win rates.'
  },
  {
    id: 'out-5',
    category: 'Institutional Brand',
    title: 'Authoritative Digital Infrastructure',
    metricLabel: 'Long-Term Equity',
    description: 'A permanent high-converting web landing asset, active Google search rankings, verified tracking tags, and professional B2B social presence.',
    timeframe: 'Completed within 14 Days',
    commercialImpact: 'Instantly builds institutional credibility when potential corporate clients search for your brand.'
  },
  {
    id: 'out-6',
    category: 'Scale Readiness',
    title: 'Repeatable Acquisition Playbook',
    metricLabel: '90-Day Culmination',
    description: 'A documented standard operating procedure (SOP) showing proven winning keywords, conversion benchmarks, and expansion roadmaps for regional/Middle East scale.',
    timeframe: 'Delivered at Day 90',
    commercialImpact: 'Turns digital marketing from an uncertain experiment into a predictable, scalable revenue engine.'
  }
];

export const contactConfig: ContactConfig = {
  brandName: "A V Quality Services",
  descriptor: "ISO Training | Consulting | Certification",
  email: "proposals@avqualityservices.com",
  phoneDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappPrefillText: "Hello Digital Cake, I would like to discuss the A V Quality Services digital marketing proposal.",
  markets: ["India (National Metro & Industrial Belts)", "Selected International Markets (Phased GCC/Middle East)"],
  disclaimer: "This proposal document is prepared by Digital Cake for A V Quality Services. All strategy outlines, budget projections, and milestone deliverables are subject to mutual agreement upon contract signing."
};

export const businessServiceCategories: BusinessServiceCategory[] = [
  {
    id: 'iso-training',
    title: 'ISO Training',
    subtitle: 'Lead Auditor & Internal Auditor Development',
    description: 'Expert-led accredited courses designed for quality managers, compliance officers, and engineering professionals seeking certified credentials.',
    deliverables: [
      'Lead Auditor (IRCA/Accredited alignment)',
      'Internal Auditor workshops',
      'Corporate batch programs & weekend schedules',
      'Certificate verification coordination'
    ],
    iconName: 'GraduationCap'
  },
  {
    id: 'consulting',
    title: 'Implementation Consulting',
    subtitle: 'End-to-End Gap Analysis & System Design',
    description: 'Tailored management system consulting from preliminary diagnostic gap assessment through documentation, SOP design, and audit readiness.',
    deliverables: [
      'Comprehensive gap assessment & roadmap',
      'Quality manual & documentation architecture',
      'Internal audit facilitation & non-conformance review',
      'Pre-assessment audit mock trials'
    ],
    iconName: 'Compass'
  },
  {
    id: 'coordination',
    title: 'Certification Coordination',
    subtitle: 'Independent Registrar Coordination',
    description: 'Transparent coordination with authorized accredited certification registrars to facilitate seamless external audit scheduling and credentialing.',
    deliverables: [
      'Registrar liaison & audit scope scoping',
      'Stage 1 & Stage 2 audit coordination',
      'Corrective action plan (CAPA) assistance',
      'Documented third-party accreditation pathways'
    ],
    iconName: 'ShieldCheck'
  }
];

export const packagesData: Package[] = [
  {
    id: 'essential',
    letterCode: 'Package A',
    name: 'Essential Launch',
    positioning: 'Start Your Digital Presence',
    setupFee: 15000,
    monthlyRetainer: 20000,
    monthlyAdBudget: 15000,
    month1Total: 50000,
    recurringMonthly: 35000,
    total90Days: 120000,
    ctaText: 'Select Package A',
    isRecommended: false,
    deliverables: [
      'Basic brand positioning & strategic messaging framework',
      'One high-converting lead-generation landing page',
      'Basic social media profile branding (LinkedIn & Meta)',
      'Up to 8 static/carousel posts per month',
      'One primary paid acquisition channel (Google Ads Search)',
      'Basic campaign tracking & conversion tag integration',
      'Monthly performance reporting & enquiry log review',
      'Initial demand validation for flagship ISO training courses'
    ]
  },
  {
    id: 'growth',
    letterCode: 'Package B',
    name: 'Growth Launch',
    badge: 'RECOMMENDED',
    positioning: 'Build the Brand and Generate Leads',
    setupFee: 25000,
    monthlyRetainer: 25000,
    monthlyAdBudget: 25000,
    month1Total: 75000,
    recurringMonthly: 50000,
    total90Days: 175000,
    ctaText: 'Select Package B',
    isRecommended: true,
    deliverables: [
      'Comprehensive brand positioning & editorial visual identity',
      'Template-based website or multi-section landing page',
      'Service pages with separate enquiry paths (Corporate vs Individual)',
      'Direct WhatsApp enquiry integration & routing',
      'Up to 12 static/carousel posts per month (authority & case proof)',
      'One primary paid acquisition channel with A/B ad variations',
      'Lead tracking, sales intake sheet & CRM coordination',
      'Monthly campaign optimization & executive strategy review'
    ]
  },
  {
    id: 'expansion',
    letterCode: 'Package C',
    name: 'Market Expansion',
    positioning: 'Scale in India and Test Selected International Markets',
    setupFee: 35000,
    monthlyRetainer: 30000,
    monthlyAdBudget: 35000,
    month1Total: 100000,
    recurringMonthly: 65000,
    total90Days: 230000,
    ctaText: 'Select Package C',
    isRecommended: false,
    deliverables: [
      'Expanded template-based multi-page website architecture',
      'Dedicated high-intent landing pages for flagship standards (e.g., ISO 27001, 42001)',
      'Up to 16 static/carousel posts per month across channels',
      'Up to two agreed paid campaign programmes (Search + LinkedIn/Meta)',
      'Advanced event tracking, lead pipeline attribution & CRM recommendations',
      'India national hubs + phased international market research & pilot testing',
      'Bi-weekly performance review sprints & strategic optimization'
    ]
  }
];

export const defaultChannelAllocations: ChannelAllocationItem[] = [
  {
    id: 'google-search',
    name: 'Google Search Ads',
    amount: 14000,
    color: '#C6A56B', // Champagne gold
    description: 'Capturing active commercial search queries: ISO certification consultant, Lead auditor training India, ISO 27001 audit.'
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    amount: 5000,
    color: '#171717', // Luxury black
    description: 'Targeting Quality Managers, CISOs, Plant Heads, and Operations Directors with authoritative B2B advisory messaging.'
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    amount: 3500,
    color: '#686868', // Slate grey
    description: 'Re-engagement, course schedule announcements, and carousel showcases for individual professional enrollments.'
  },
  {
    id: 'retargeting',
    name: 'Retargeting & Creative Testing',
    amount: 2500,
    color: '#34765C', // Soft luxury green
    description: 'Targeted remarketing to website visitors and rapid A/B testing of new value propositions.'
  }
];

export const isoStandardsData: ISOStandard[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001',
    title: 'Quality Management Systems (QMS)',
    category: 'Core Quality & Process Excellence',
    iconName: 'Award',
    description: 'The global benchmark for operational consistency, customer satisfaction, and repeatable process management across manufacturing and service enterprises.',
    keyBenefit: 'Foundational prerequisite for commercial tenders & enterprise supply chains.'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001',
    title: 'Environmental Management Systems (EMS)',
    category: 'Sustainability & ESG Compliance',
    iconName: 'Leaf',
    description: 'Framework to systematically reduce ecological footprints, achieve regulatory compliance, and fulfill international ESG mandates.',
    keyBenefit: 'Essential for global trade, export qualification & green scoring.'
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001',
    title: 'Occupational Health & Safety (OH&S)',
    category: 'Workplace Safety & Hazard Control',
    iconName: 'ShieldCheck',
    description: 'Proactively eliminates occupational hazards, prevents workplace injuries, and institutionalizes safety governance.',
    keyBenefit: 'Mitigates operational downtime & demonstrates statutory duty of care.'
  },
  {
    id: 'iso-27001',
    code: 'ISO/IEC 27001',
    title: 'Information Security Management (ISMS)',
    category: 'Cybersecurity, Cloud & Data Governance',
    iconName: 'Lock',
    description: 'Defends digital assets, proprietary data, and customer information against breaches, cyber threats, and cloud vulnerabilities.',
    keyBenefit: 'Mandatory standard for SaaS, IT outsourcing, fintech & BFSI vendors.'
  },
  {
    id: 'iso-22000',
    code: 'ISO 22000',
    title: 'Food Safety Management Systems (FSMS)',
    category: 'Agri-Processing, Packaging & Food Services',
    iconName: 'UtensilsCrossed',
    description: 'Farm-to-fork hazard control protocol ensuring compliance with rigorous international food hygiene and distribution benchmarks.',
    keyBenefit: 'Required for food processing exporters and multinational hospitality.'
  },
  {
    id: 'iso-13485',
    code: 'ISO 13485',
    title: 'Medical Devices Quality Management',
    category: 'Healthcare Devices & Diagnostic Systems',
    iconName: 'Stethoscope',
    description: 'Specialized regulatory framework for medical equipment manufacturers, component suppliers, and clinical diagnostic technologies.',
    keyBenefit: 'Direct prerequisite for domestic and international medical device regulatory filings.'
  },
  {
    id: 'iso-42001',
    code: 'ISO/IEC 42001',
    title: 'Artificial Intelligence Management (AIMS)',
    category: 'Artificial Intelligence & Algorithmic Governance',
    iconName: 'Cpu',
    description: 'The pioneering international standard for responsible AI deployment, risk mitigation, algorithmic transparency, and ethical oversight.',
    keyBenefit: 'High-growth market frontier providing decisive early-mover prestige.'
  }
];

export const objectivesData: MarketingObjective[] = [
  {
    id: 'brand-launch',
    title: 'Structured Brand Launch',
    tagline: 'High-Trust Editorial Identity',
    description: 'Develop refined brand messaging, an authoritative digital presence, and high-trust assets communicating institutional reliability.',
    deliverableSnippet: 'Design system, conversion landing page, and branded executive social presence.',
    iconName: 'Rocket'
  },
  {
    id: 'lead-generation',
    title: 'Measurable Lead Generation',
    tagline: 'High-Intent B2B Capture',
    description: 'Deploy targeted search and consultative acquisition campaigns capturing decision-makers seeking ISO training and consulting.',
    deliverableSnippet: 'High-intent search campaigns, segmented inquiry forms, and WhatsApp routing.',
    iconName: 'Target'
  },
  {
    id: 'market-development',
    title: 'Strategic Market Development',
    tagline: 'Domestic & Regional Expansion',
    description: 'Prioritize key industrial hubs in India first, followed by phased validation in high-value Middle Eastern commercial clusters.',
    deliverableSnippet: 'Geo-targeted campaigns and customized corporate training pathways.',
    iconName: 'Globe2'
  },
  {
    id: 'transparent-investment',
    title: 'Transparent Investment & ROI',
    tagline: 'Clear Unit Economics',
    description: 'Track cost-per-qualified-lead (CPQL), discovery consultations, conversion velocity, and gross margins with zero hidden fees.',
    deliverableSnippet: 'Centralized inquiry tracking and actionable monthly performance reviews.',
    iconName: 'LineChart'
  }
];

export const actionPlanStages: ActionPlanStage[] = [
  {
    stage: 1,
    days: 'Days 1–14',
    title: 'Brand Launch & Foundation',
    themeColor: 'royal',
    tasks: [
      'Finalize core brand positioning & value proposition messaging',
      'Review service pricing and verified partner documentation',
      'Build refined luxury-style brand assets and landing page',
      'Configure conversion tracking, analytics & direct WhatsApp routing',
      'Prepare initial paid search ad copies and negative keyword lists',
      'Go-live within 14 days upon receiving client asset approvals'
    ],
    keyMilestone: 'Active digital foundation ready for commercial lead capture'
  },
  {
    stage: 2,
    days: 'Days 15–30',
    title: 'Demand Validation',
    themeColor: 'gold',
    tasks: [
      'Launch initial acquisition campaigns targeting top 2-3 ISO standards',
      'Capture and record inbound telephone, WhatsApp, and form inquiries',
      'Conduct weekly reviews with client sales to evaluate lead quality',
      'Track objections, pricing feedback, and course timing requests',
      'Deliver Month 1 performance report and initial acquisition unit metrics'
    ],
    keyMilestone: 'Initial qualified inquiries flowing & baseline metrics recorded'
  },
  {
    stage: 3,
    days: 'Days 31–60',
    title: 'Optimization & Iteration',
    themeColor: 'emerald',
    tasks: [
      'Test fresh ad creatives, value propositions, and headline angles',
      'Improve audience targeting and expand high-performing search terms',
      'Improve landing-page conversion rates based on visitor behavioral data',
      'Evaluate Cost Per Qualified Lead (CPQL) by individual standard',
      'Identify most lucrative corporate offers and training demand clusters'
    ],
    keyMilestone: 'Lowered cost per inquiry & optimized consultation booking rate'
  },
  {
    stage: 4,
    days: 'Days 61–90',
    title: 'Selective Expansion',
    themeColor: 'blue',
    tasks: [
      'Focus advertising investment on proven high-margin ISO offers',
      'Consider testing a second market (e.g., Middle East corporate pilot) if justified',
      'Review total 90-day closed contracts, revenue generated, and client CAC',
      'Document standard operating procedures for ongoing client acquisition',
      'Deliver next-quarter strategic growth roadmap with expansion budget recommendations'
    ],
    keyMilestone: 'Repeatable client acquisition model & documented scale strategy'
  }
];

export const deliverablesComparisonTable: DeliverableComparisonRow[] = [
  {
    category: 'Strategic',
    feature: 'One-Time Setup Fee',
    essential: '₹15,000',
    growth: '₹25,000',
    expansion: '₹35,000'
  },
  {
    category: 'Strategic',
    feature: 'Monthly Agency Retainer',
    essential: '₹20,000 / month',
    growth: '₹25,000 / month',
    expansion: '₹30,000 / month'
  },
  {
    category: 'Strategic',
    feature: 'Monthly Advertising Budget',
    essential: '₹15,000 / month',
    growth: '₹25,000 / month',
    expansion: '₹35,000 / month'
  },
  {
    category: 'Strategic',
    feature: 'First-Month Total Investment',
    essential: '₹50,000',
    growth: '₹75,000',
    expansion: '₹1,00,000'
  },
  {
    category: 'Strategic',
    feature: 'Recurring Monthly Total (Month 2+)',
    essential: '₹35,000 / month',
    growth: '₹50,000 / month',
    expansion: '₹65,000 / month'
  },
  {
    category: 'Strategic',
    feature: 'Total 90-Day Investment',
    essential: '₹1,20,000',
    growth: '₹1,75,000',
    expansion: '₹2,30,000'
  },
  {
    category: 'Digital Assets',
    feature: 'Website & Landing Architecture',
    essential: '1 Dedicated High-Converting Landing Page',
    growth: 'Template Website / Structured Multi-Section',
    expansion: 'Expanded Multi-Page Site + Dedicated Offer Pages'
  },
  {
    category: 'Content & Social',
    feature: 'Monthly Social Media Content',
    essential: 'Up to 8 posts / month',
    growth: 'Up to 12 posts / month',
    expansion: 'Up to 16 posts / month'
  },
  {
    category: 'Paid Acquisition',
    feature: 'Paid Campaign Channels',
    essential: '1 Channel (Google Search Ads)',
    growth: '1 Primary Channel with A/B Variations',
    expansion: 'Up to 2 Channels (Search + LinkedIn / Meta)'
  },
  {
    category: 'Measurement',
    feature: 'Lead Tracking & CRM Guidance',
    essential: 'Basic Tags + Central Inquiry Sheet',
    growth: 'Full Event Tracking + WhatsApp Routing',
    expansion: 'Advanced Attribution + CRM Architecture'
  },
  {
    category: 'Measurement',
    feature: 'Reporting & Strategy Cadence',
    essential: 'Monthly Performance Summary',
    growth: 'Monthly Strategy Review & Optimization',
    expansion: 'Bi-Weekly Sprints & Executive Strategy Review'
  },
  {
    category: 'Paid Acquisition',
    feature: 'Market Scope Tested',
    essential: 'Priority Regional Hubs (India)',
    growth: 'Pan-India Target Metro & Industrial Hubs',
    expansion: 'India Hubs + Phased International Testing'
  }
];

export const performanceMetrics: MetricCard[] = [
  {
    title: 'Qualified Enquiries',
    iconName: 'UserCheck',
    description: 'Volume of verified inquiries from corporate decision-makers and professionals actively seeking ISO training or certification consulting.',
    commercialValue: 'Filters out non-commercial traffic to maximize internal sales bandwidth.'
  },
  {
    title: 'Cost per Qualified Lead (CPQL)',
    iconName: 'BadgePercent',
    description: 'Total advertising expenditure divided strictly by sales-ready prospects rather than raw contact form fills.',
    commercialValue: 'Guarantees scalable customer acquisition economics.'
  },
  {
    title: 'Consultations Booked',
    iconName: 'CalendarCheck',
    description: 'The number of exploratory discovery meetings and scoping sessions successfully scheduled with corporate clients.',
    commercialValue: 'Primary leading indicator of forthcoming proposal pipeline.'
  },
  {
    title: 'Proposal-to-Sale Conversion',
    iconName: 'FileCheck',
    description: 'The proportion of formal consulting proposals and corporate training quotes that convert into signed contracts.',
    commercialValue: 'Exposes pricing acceptance, customer objections, and sales velocity.'
  },
  {
    title: 'Revenue & Gross Margin',
    iconName: 'TrendingUp',
    description: 'Gross collected revenue compared against total acquisition expenses (agency retainer plus advertising investment).',
    commercialValue: 'Aligns digital marketing performance directly with bottom-line profit.'
  },
  {
    title: 'Channel Performance',
    iconName: 'BarChart3',
    description: 'Granular attribution comparing performance across search queries, ad creatives, geographic territories, and audience segments.',
    commercialValue: 'Enables precise capital allocation into the most lucrative ISO offerings.'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Can the brand launch within 14 days?',
    answer: 'Yes. The initial 14-day schedule covers positioning, landing page build, analytics tags, and initial campaign setup. Meeting this timeline depends on timely client approval of service pricing, trainer profiles, and ad account billing.'
  },
  {
    id: 'faq-2',
    question: 'Does the proposal guarantee leads or revenue?',
    answer: 'No professional agency can ethically guarantee specific revenue or inquiry quotas for an unlaunched brand prior to live market validation. We guarantee proven methodology, rigorous ad optimization, rapid testing of high-intent search keywords, and full visibility into all metrics.'
  },
  {
    id: 'faq-3',
    question: 'Are advertising costs included in the agency fee?',
    answer: 'No. Advertising expenditure is paid directly to advertising platforms (such as Google Ads) through the client\'s own billing card. This ensures complete transparency, client ownership of advertising accounts, and zero markup on media.'
  },
  {
    id: 'faq-4',
    question: 'Can all seven standards be promoted immediately?',
    answer: 'We strongly recommend focusing initially on 2 to 3 priority standards where you have confirmed trainer availability, documented partner credentials, and proven market demand (such as ISO 9001 and ISO 27001) rather than diluting early spend.'
  },
  {
    id: 'faq-5',
    question: 'What does "certification coordination" mean?',
    answer: 'A V Quality Services conducts gap assessments, internal audits, and implementation consulting to prepare clients for certification. The formal certification audit and certificate issuance is conducted by independent, accredited certification bodies through documented partnerships.'
  },
  {
    id: 'faq-6',
    question: 'What happens after the initial 90 days?',
    answer: 'At day 90, we conduct an executive performance review analyzing cost-per-lead, conversion rates, and revenue generated. Based on validated findings, we transition to an ongoing growth retainer, reallocate budget to the highest-margin services, or expand into additional international territories.'
  }
];

export const clientResponsibilities = [
  {
    title: 'Approved Course Pricing & Service Formats',
    description: 'Finalized course curriculum, fee structure, batch timings, and consulting engagement models prior to campaign launch.'
  },
  {
    title: 'Trainer Profiles & Verified Qualifications',
    description: 'Accreditation credentials, resumes, and bios of lead auditors and instructors to feature legitimately in marketing collateral.'
  },
  {
    title: 'Documented Partner Agreements & Scope',
    description: 'Signed agreements with authorized certification bodies and accredited registrars defining exact coordination boundaries.'
  },
  {
    title: 'Live Service Schedules & Batch Availability',
    description: 'Accurate calendar of upcoming weekend/weekday training batches and consultant capacity for corporate gap assessments.'
  },
  {
    title: 'Timely Content Approvals',
    description: 'Review and sign-off on landing pages, ad copies, and social posts within 48 hours to maintain the 14-day launch cadence.'
  },
  {
    title: 'Named Daily Lead Follow-up Owner',
    description: 'A designated internal coordinator responsible for calling new enquiries within 15–30 minutes to maximize conversion.'
  },
  {
    title: 'Client-Owned Advertising Accounts',
    description: 'Google Ads and Meta/LinkedIn business managers created directly under A V Quality Services ownership for transparency.'
  },
  {
    title: 'Direct Payment of Advertising Spend',
    description: 'Direct billing method (credit card / bank) linked to ad platforms; advertising capital is never mingled with agency retainers.'
  },
  {
    title: 'Regular Updates on Lead Status & Closed Deals',
    description: 'Weekly status updates on which leads attended discovery calls, received proposals, or converted into paying accounts.'
  }
];

