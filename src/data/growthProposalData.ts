import {
  CommercialCard,
  DeliverableMetric,
  VideoShowcaseCategory,
  CalendarContentItem,
  QualificationQuestion,
  QualificationStep,
  RoadmapPhase,
  SampleReportMetric,
  ScopeExclusion,
  TrustDistinction,
  FAQItem
} from '../types';

export const growthBrandConfig = {
  brandName: 'A V QUALITY SERVICES',
  proposalTitle: 'Digital Growth Proposal',
  eyebrow: 'DIGITAL GROWTH PROPOSAL',
  heroHeadline: 'Build Your Digital Presence. Turn Expertise Into Enquiries.',
  heroSupportingText:
    'A structured digital marketing engagement combining consistent content, AI-generated videos and focused campaign support to establish A V Quality Services in the ISO services market.',
  cadenceNotice: 'Content is published approximately once every three days. Daily posting is not included.',
  proposalDate: 'Current Proposal',
  primaryMarkets: ['India', 'Middle East / GCC'],
};

export const growthCommercialCardsData: CommercialCard[] = [
  {
    id: 'setup',
    title: 'One-Time Setup',
    priceDisplay: 'Quoted Separately',
    priceSubtext: 'Initial foundational engagement',
    badge: 'Foundation',
    isPrimary: false,
    description:
      'A foundational setup to establish brand messaging, content direction and enquiry handling before ongoing execution begins.',
    deliverables: [
      'Brand positioning and value proposition',
      'Core service messaging',
      'Target audience definition',
      'Social profile optimisation',
      'Content pillars and visual direction',
      'Basic campaign planning',
      'WhatsApp enquiry flow and follow-up templates',
      'Basic lead-tracking sheet'
    ],
    keyHighlight: 'Quoted separately based on asset readiness and initial onboarding requirements.',
    ctaText: 'Discuss Setup Scope',
    disclaimer: 'The setup fee will be formally quoted and approved separately. Execution begins upon mutual confirmation.'
  },
  {
    id: 'retainer',
    title: 'Monthly Digital Marketing Retainer',
    priceDisplay: '₹10,000 / month',
    priceSubtext: 'Recurring monthly engagement',
    badge: 'Core Service',
    isPrimary: true,
    description:
      'Ongoing content planning, production, publishing and basic performance reporting to maintain active digital visibility.',
    deliverables: [
      'Monthly content calendar',
      'Up to 6 static creatives per month',
      'Up to 4 short AI-assisted videos per month',
      'Captions and calls to action',
      'Publishing support on up to 2 agreed social platforms',
      'Basic campaign recommendations',
      'Monthly performance report'
    ],
    keyHighlight: 'Publishing approximately every 3 days — not daily.',
    ctaText: 'View Monthly Scope',
    disclaimer: 'Deliverable quantities are upper monthly allocations. Content is scheduled and published upon timely client approvals.'
  },
  {
    id: 'advertising',
    title: 'Advertising Budget',
    priceDisplay: 'Separate Budget',
    priceSubtext: 'Direct media spend',
    badge: 'Paid Acquisition',
    isPrimary: false,
    description:
      'Advertising media spend is not included in the ₹10,000 monthly retainer. Media budget is paid directly by the client.',
    deliverables: [
      'Client-approved advertising budget',
      'Campaign objective and audience planning',
      'Campaign setup and monitoring, within the agreed scope',
      'Performance review and optimisation recommendations'
    ],
    keyHighlight: 'Paid directly through client-owned ad accounts — 100% transparent billing.',
    ctaText: 'Discuss Ad Strategy',
    disclaimer: 'The client pays advertising spend separately through their own advertising account. No fixed number of leads or results is guaranteed.'
  }
];

export const growthDeliverablesData: DeliverableMetric[] = [
  {
    id: 'static-creatives',
    count: 'Up to 6',
    unit: 'creatives / month',
    title: 'Static Educational & Brand Creatives',
    description: 'Custom-designed graphics breaking down ISO standards, business benefits, and service overviews tailored for professional feeds.',
    frequency: 'Distributed across monthly calendar (~every 5-6 days)',
    category: 'content'
  },
  {
    id: 'ai-videos',
    count: 'Up to 4',
    unit: 'videos / month',
    title: 'Short AI-Assisted Explainer Videos',
    description: 'Short, structured videos explaining technical ISO concepts, FAQ resolutions, and service value using AI-assisted visuals/voice.',
    frequency: 'Published approximately once every 7-8 days',
    category: 'video'
  },
  {
    id: 'calendar',
    count: '1',
    unit: 'calendar / month',
    title: 'Structured Monthly Content Calendar',
    description: 'Pre-planned 30-day publishing schedule specifying topics, post formats, angles, and publication dates for early review and sign-off.',
    frequency: 'Delivered before the start of each month',
    category: 'strategy'
  },
  {
    id: 'platforms',
    count: 'Up to 2',
    unit: 'platforms',
    title: 'Social Platform Publishing Support',
    description: 'Direct publishing and formatting support across up to two agreed professional channels (e.g., LinkedIn & Meta / Instagram).',
    frequency: 'Ongoing management as content is released',
    category: 'content'
  },
  {
    id: 'copywriting',
    count: '100%',
    unit: 'posts covered',
    title: 'Captions & Conversion Calls to Action',
    description: 'Clear, persuasive copywriting accompanying every post, crafted to prompt enquiries and direct prospects to WhatsApp or email.',
    frequency: 'Included with every creative and video',
    category: 'content'
  },
  {
    id: 'campaign-support',
    count: 'Ongoing',
    unit: 'recommendations',
    title: 'Basic Campaign Planning & Monitoring',
    description: 'Objective setting, audience targeting suggestions, and active monitoring for client-funded advertising within agreed scope.',
    frequency: 'Active during running campaigns',
    category: 'campaign'
  },
  {
    id: 'monthly-report',
    count: '1',
    unit: 'report / month',
    title: 'Monthly Performance & Insights Review',
    description: 'Comprehensive review document detailing published assets, observed reach, engagement, enquiry signals, and next-month improvements.',
    frequency: 'Delivered at the conclusion of each monthly cycle',
    category: 'reporting'
  }
];

export const growthVideoShowcaseCategories: VideoShowcaseCategory[] = [
  {
    id: 'awareness',
    title: 'ISO Awareness Videos',
    shortCode: '01',
    description: 'Explain fundamental ISO concepts, standards, and why modern businesses must adopt systematic management frameworks.',
    sampleHook: '“Why are global supply chains suddenly rejecting uncertified suppliers?”',
    coreInsight: 'Translates technical compliance language into commercial risk reduction, tender eligibility, and business reputation.',
    visualStyle: 'Modern typography motion, clean B2B iconography, structured infographic transitions.',
    targetAudience: 'Business Owners, Managing Directors, Procurement Heads',
    sampleStandards: ['ISO 9001 (Quality)', 'ISO 14001 (Environment)', 'ISO 45001 (Safety)']
  },
  {
    id: 'business-education',
    title: 'Business Education Videos',
    shortCode: '02',
    description: 'Demonstrate the tangible operational and financial value of ISO implementation beyond mere certificate acquisition.',
    sampleHook: '“ISO is not paperwork—here is how it cuts rework and operational errors by 30%.”',
    coreInsight: 'Focuses on bottom-line efficiency, standardized operating procedures, and customer satisfaction metrics.',
    visualStyle: 'Flowchart animations, process timelines, clean kinetic cards.',
    targetAudience: 'Operations Managers, Plant Heads, Quality Directors',
    sampleStandards: ['ISO 9001', 'ISO 22000 (Food Safety)', 'ISO 13485 (Medical Devices)']
  },
  {
    id: 'service-explainer',
    title: 'Service Explainer Videos',
    shortCode: '03',
    description: 'Clearly present A V Quality Services training courses, implementation consulting, and certification coordination pathways.',
    sampleHook: '“Confused between Lead Auditor training and implementation support? Here is the exact difference.”',
    coreInsight: 'Demystifies step-by-step engagement phases so corporate decision-makers understand how A V Quality Services assists them.',
    visualStyle: 'Clear 3-step roadmaps, role spotlights, clear call-to-action prompts.',
    targetAudience: 'HR Managers, Quality Engineers, Corporate Training Coordinators',
    sampleStandards: ['Lead Auditor Training', 'Implementation Support', 'Audit Coordination']
  },
  {
    id: 'faq-videos',
    title: 'FAQ Breakdown Videos',
    shortCode: '04',
    description: 'Directly address common objections, timelines, cost questions, and preparation steps from prospective corporate clients.',
    sampleHook: '“How long does an ISO implementation actually take? (And what delays it?)”',
    coreInsight: 'Builds immediate consultative credibility by answering real client questions with honesty and practical guidance.',
    visualStyle: 'Q&A card reveal, bulleted timelines, realistic milestone markers.',
    targetAudience: 'Prospective clients comparing consultants or planning annual budgets',
    sampleStandards: ['ISO/IEC 27001 (InfoSec)', 'ISO/IEC 42001 (AI Management)', 'Certification Timeline']
  }
];

export const growthCalendarDays: CalendarContentItem[] = [
  {
    day: 1,
    dayLabel: 'Day 01',
    contentType: 'Static Creative',
    category: 'ISO Awareness',
    title: 'What is ISO 9001? 3 Core Commercial Benefits for MSMEs',
    objective: 'Establish baseline understanding of Quality Management Systems',
    platformFormat: 'Square / Carousel format (1080x1080)',
    coreAngle: 'Tender eligibility, customer trust, operational repeatability',
    hook: 'Beyond the certificate: Why customers demand ISO 9001 compliance.',
    callToAction: 'Message us on WhatsApp to review your organization’s ISO readiness.'
  },
  {
    day: 4,
    dayLabel: 'Day 04',
    contentType: 'AI Video',
    category: 'Service Explainer',
    title: 'Why Global Tenders Require ISO: The Supply Chain Reality',
    objective: 'Address lost business opportunities due to lack of certification',
    platformFormat: 'Vertical 9:16 Short Video (30-45 sec)',
    coreAngle: 'Explain how vendor evaluation scorecards automatically disqualify non-ISO bidders.',
    hook: 'Losing high-value bids? The missing document might be your ISO certification.',
    callToAction: 'Enquire for ISO consultation and gap audit assessment.'
  },
  {
    day: 7,
    dayLabel: 'Day 07',
    contentType: 'Static Creative',
    category: 'Business Education',
    title: 'ISO 14001: Transforming Environmental Compliance Into Cost Savings',
    objective: 'Shift perception of environmental standards from cost to operational efficiency',
    platformFormat: 'Single High-Impact Infographic',
    coreAngle: 'Waste reduction, energy management, and regulatory compliance.',
    hook: 'How proactive environmental management lowers production waste.',
    callToAction: 'Ask our team about ISO 14001 documentation roadmap.'
  },
  {
    day: 10,
    dayLabel: 'Day 10',
    contentType: 'Static Creative',
    category: 'FAQ Breakdown',
    title: 'FAQ: How Long Does ISO Certification Actually Take?',
    objective: 'Set transparent expectations for corporate decision-makers',
    platformFormat: 'Clean 3-Slide Carousel',
    coreAngle: 'Preparation timeline, internal audits, stage 1 & 2 audit coordination.',
    hook: 'Realistic timelines: 60 to 120 days depending on company size.',
    callToAction: 'Get an estimated timeline for your specific standard today.'
  },
  {
    day: 13,
    dayLabel: 'Day 13',
    contentType: 'AI Video',
    category: 'Service Explainer',
    title: 'Consulting vs. Certification: Understanding the Proper Process',
    objective: 'Educate on the separation of consulting/implementation and independent accreditation',
    platformFormat: 'Vertical 9:16 Short Video (40 sec)',
    coreAngle: 'Why a consultant prepares the system while an accredited body conducts the audit.',
    hook: 'Who actually issues your ISO certificate? Avoid common industry misunderstandings.',
    callToAction: 'Speak with our ISO advisors for step-by-step guidance.'
  },
  {
    day: 16,
    dayLabel: 'Day 16',
    contentType: 'Static Creative',
    category: 'Enquiry & Problem-Solution',
    title: 'Data Security in the Cloud Era: ISO/IEC 27001 Explained',
    objective: 'Target IT, SaaS, and service firms with information security awareness',
    platformFormat: 'Checklist / Comparison Graphic',
    coreAngle: 'Risk assessment, access controls, vendor due diligence.',
    hook: 'Protect client trust before a data breach exposes your vulnerabilities.',
    callToAction: 'Connect with A V Quality Services for ISO 27001 readiness review.'
  },
  {
    day: 19,
    dayLabel: 'Day 19',
    contentType: 'Static Creative',
    category: 'Business Education',
    title: 'Workplace Safety & ISO 45001: Protecting Your Workforce & Operations',
    objective: 'Highlight occupational health & safety management systems for manufacturing',
    platformFormat: 'Feature Breakdown Graphic',
    coreAngle: 'Hazard identification, legal compliance, reduced downtime.',
    hook: 'Safe operations equal uninterrupted production and reduced liability.',
    callToAction: 'Book an initial discussion on ISO 45001 implementation.'
  },
  {
    day: 22,
    dayLabel: 'Day 22',
    contentType: 'AI Video',
    category: 'ISO Awareness',
    title: 'AI Management Systems: An Introduction to ISO/IEC 42001',
    objective: 'Position A V Quality Services on forward-looking emerging standards',
    platformFormat: 'Vertical 9:16 Short Video (45 sec)',
    coreAngle: 'Responsible AI adoption, data governance, and regulatory readiness.',
    hook: 'Deploying AI in business? Understand the world’s first AI management standard.',
    callToAction: 'Enquire about modern management systems with A V Quality Services.'
  },
  {
    day: 25,
    dayLabel: 'Day 25',
    contentType: 'Static Creative',
    category: 'Service Focus',
    title: 'Internal Auditor & Lead Implementer Training Modules',
    objective: 'Promote corporate workforce upskilling and certification coordination',
    platformFormat: 'Course Highlight Grid',
    coreAngle: 'Hands-on auditing techniques, compliance checklists, certificate of training.',
    hook: 'Empower your internal team to maintain compliant systems effortlessly.',
    callToAction: 'Request training syllabus and batch availability.'
  },
  {
    day: 28,
    dayLabel: 'Day 28',
    contentType: 'AI Video',
    category: 'FAQ Breakdown',
    title: 'Top 3 Mistakes Companies Make During ISO Audits',
    objective: 'Highlight the necessity of structured advisory and documentation prep',
    platformFormat: 'Vertical 9:16 Short Video (35 sec)',
    coreAngle: 'Incomplete records, lack of employee awareness, unaddressed non-conformities.',
    hook: 'Don’t fail your audit on minor paperwork slips. Here’s what auditors check first.',
    callToAction: 'Schedule an ISO readiness consultation with our expert team.'
  }
];

export const growthStrategicThemesList = [
  {
    title: 'Why businesses consider ISO certification',
    description: 'Commercial necessity: tender qualification, vendor compliance, export readiness, and risk reduction.'
  },
  {
    title: 'Understanding ISO 9001, ISO 14001 and ISO 45001',
    description: 'The foundational triad: Quality Management, Environmental Sustainability, and Occupational Health & Safety.'
  },
  {
    title: 'Information security and ISO/IEC 27001',
    description: 'Essential cyber security controls, data governance, and risk mitigation for IT, SaaS, and service enterprises.'
  },
  {
    title: 'Food safety and ISO 22000',
    description: 'Systematic hazard analysis (HACCP) and farm-to-fork hygiene management for food processors and hospitality.'
  },
  {
    title: 'Medical device quality management and ISO 13485',
    description: 'Stringent regulatory compliance, traceability, and risk control for medical equipment manufacturers.'
  },
  {
    title: 'AI management systems and ISO/IEC 42001',
    description: 'The emerging global standard for ethical, transparent, and accountable artificial intelligence deployment.'
  },
  {
    title: 'Training and implementation support',
    description: 'Workforce competency building, documentation frameworks, and internal audit coaching.'
  },
  {
    title: 'Frequently asked questions about the process',
    description: 'Honest answers regarding realistic timelines, stage audits, and documentation preparation.'
  }
];

export const growthWhatsappJourneySteps: QualificationStep[] = [
  {
    stepNumber: 1,
    title: 'Content / Ad Exposure',
    description: 'Prospect encounters an ISO educational post or video addressing a business challenge on social channels.',
    iconName: 'Megaphone'
  },
  {
    stepNumber: 2,
    title: 'Enquiry Click',
    description: 'User taps the embedded WhatsApp call-to-action button with a pre-filled enquiry prompt.',
    iconName: 'MessageSquare'
  },
  {
    stepNumber: 3,
    title: 'WhatsApp Conversation',
    description: 'A pre-configured structured greeting welcomes the prospect and prompts the qualification sequence.',
    iconName: 'Smartphone'
  },
  {
    stepNumber: 4,
    title: '5-Question Qualification',
    description: 'Prospect responds to standard qualifying questions to clarify need, company profile, and timeline.',
    iconName: 'CheckSquare'
  },
  {
    stepNumber: 5,
    title: 'Structured Follow-Up',
    description: 'Standardized response template provides introductory details and schedules an advisory call.',
    iconName: 'Clock'
  },
  {
    stepNumber: 6,
    title: 'Sales Team Handoff',
    description: 'Fully qualified opportunity details are immediately handed over to A V Quality Services consultants.',
    iconName: 'Users'
  }
];

export const growthWhatsappQualificationQuestions: QualificationQuestion[] = [
  {
    id: 1,
    question: 'Are you enquiring for a company or individual training?',
    purpose: 'Distinguishes high-value corporate consulting contracts from individual student/engineer training.',
    sampleOptions: ['Corporate / Company requirement', 'Individual professional training']
  },
  {
    id: 2,
    question: 'Which ISO standard are you interested in?',
    purpose: 'Identifies standard complexity (e.g. ISO 9001 vs ISO 27001 / ISO 13485 / ISO 42001).',
    sampleOptions: ['ISO 9001 (Quality)', 'ISO 14001 / 45001', 'ISO 27001 (Security)', 'ISO 22000 / 13485 / 42001', 'Unsure / Need advice']
  },
  {
    id: 3,
    question: 'Is your requirement training, implementation support or certification coordination?',
    purpose: 'Determines scope of engagement and expected deliverables from the outset.',
    sampleOptions: ['Full Implementation Support', 'Internal / Lead Auditor Training', 'Certification Coordination Only']
  },
  {
    id: 4,
    question: 'What is your organisation’s industry and team size?',
    purpose: 'Helps estimate audit scope, documentation requirements, and timeline expectations.',
    sampleOptions: ['Manufacturing / Engineering', 'IT / Software / Services', 'Healthcare / Pharma', 'Other Industry']
  },
  {
    id: 5,
    question: 'What is your expected timeline for completion?',
    purpose: 'Filters urgency (e.g., immediate tender deadline vs exploratory next-quarter planning).',
    sampleOptions: ['Urgent (Within 30–60 days)', 'Normal (2–4 months)', 'Exploring / Planning stage']
  }
];

export const growthExecutionRoadmapData: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    daysRange: 'Days 1–5',
    title: 'Foundation',
    summary: 'Align strategic priorities, define messaging, and establish workflow foundational requirements.',
    milestones: [
      'Confirm service priorities (Corporate implementation vs Training)',
      'Define target audience and primary geographic focus',
      'Finalise core service messaging and campaign direction',
      'Confirm setup scope and gather required client brand assets'
    ],
    clientActionNeeded: 'Provide service collateral, priority list, and access to social/ad channels.'
  },
  {
    phaseNumber: 2,
    daysRange: 'Days 6–10',
    title: 'Content Production',
    summary: 'Develop first batch of creative assets, video scripts, and obtain client approval before publishing.',
    milestones: [
      'Prepare initial 30-day content calendar with scheduled topics',
      'Produce first batch of static educational creatives',
      'Draft and finalize initial AI video scripts and voice treatments',
      'Review and obtain formal client approvals'
    ],
    clientActionNeeded: 'Timely review and approval of content calendar and creative drafts.'
  },
  {
    phaseNumber: 3,
    daysRange: 'Days 11–15',
    title: 'Launch',
    summary: 'Begin consistent publishing schedule and launch initial test campaign once media budget is live.',
    milestones: [
      'Initiate organic publishing on up to 2 agreed social platforms',
      'Verify WhatsApp click-to-chat links and enquiry prompt templates',
      'Launch agreed test campaign (if client ad account and budget are funded)',
      'Monitor initial platform delivery and link engagements'
    ],
    clientActionNeeded: 'Fund client ad account directly and confirm WhatsApp enquiry recipient.'
  },
  {
    phaseNumber: 4,
    daysRange: 'Days 16–30',
    title: 'Optimisation',
    summary: 'Maintain steady publishing rhythm (~every 3 days), evaluate enquiry feedback, and submit monthly report.',
    milestones: [
      'Continue publishing at approximately 3-day intervals (~10 total slots)',
      'Review inbound enquiry quality with client team',
      'Monitor campaign metrics within agreed basic scope',
      'Deliver formal monthly performance report and next-month recommendations'
    ],
    clientActionNeeded: 'Share feedback on lead quality and discuss next month’s focus standards.'
  }
];

export const growthSampleReportMetrics: SampleReportMetric[] = [
  {
    id: 'content-volume',
    label: 'Published Content Volume',
    sampleValue: '10 Assets (6 Creatives + 4 AI Videos)',
    benchmarkContext: '100% adherence to agreed ~3-day publishing rhythm',
    definition: 'Verified published creatives and videos across approved channels within the 30-day cycle.',
    category: 'volume'
  },
  {
    id: 'reach-impressions',
    label: 'Reach & Impressions (Est.)',
    sampleValue: '4,800 – 7,500',
    benchmarkContext: 'Subject to platform algorithms & active ad budget',
    definition: 'Total unique accounts and impressions served across targeted industry professionals.',
    category: 'reach'
  },
  {
    id: 'engagement',
    label: 'Engagement & Saves',
    sampleValue: '320 – 580 Interactions',
    benchmarkContext: 'Includes saves, reactions, comments, and shares',
    definition: 'Meaningful interactions indicating audience resonance with ISO educational guidance.',
    category: 'engagement'
  },
  {
    id: 'link-clicks',
    label: 'Outbound CTA Clicks',
    sampleValue: '90 – 160 Clicks',
    benchmarkContext: 'Direct clicks to WhatsApp or profile action',
    definition: 'Number of interested viewers clicking to initiate conversation or learn more.',
    category: 'engagement'
  },
  {
    id: 'enquiries',
    label: 'Enquiries Received (Trackable)',
    sampleValue: '8 – 15 Conversations',
    benchmarkContext: 'Illustrative indicator of inbound interest',
    definition: 'Prospects initiating WhatsApp conversation or submitting qualification details.',
    category: 'leads'
  },
  {
    id: 'cost-per-enquiry',
    label: 'Cost Per Enquiry (CPE)',
    sampleValue: 'Calculated from Ad Spend',
    benchmarkContext: 'Reported transparently when ad spend is active',
    definition: 'Direct media spend divided by trackable qualified conversations.',
    category: 'leads'
  }
];

export const growthScopeExclusionsData: ScopeExclusion[] = [
  {
    title: 'Advertising Media Spend',
    detail: 'Media budget is separate and paid directly by the client to advertising platforms via their own account.',
    category: 'budget'
  },
  {
    title: 'One-Time Setup Fee',
    detail: 'Initial onboarding, positioning, messaging, and templates are quoted and approved separately.',
    category: 'budget'
  },
  {
    title: 'Full Website Development',
    detail: 'Developing or redesigning a full corporate web portal is outside this monthly digital marketing scope.',
    category: 'production'
  },
  {
    title: 'Custom Landing Page Development',
    detail: 'Custom coded landing pages or external funnel infrastructure require separate project scoping.',
    category: 'production'
  },
  {
    title: 'WhatsApp API Integration',
    detail: 'Does not include paid Meta Cloud WhatsApp API, webhook development, or third-party CRM integrations.',
    category: 'technology'
  },
  {
    title: 'Custom AI Chatbot or Automation',
    detail: 'Automated AI chatbots or conversational AI engines are excluded; we provide manual message templates.',
    category: 'technology'
  },
  {
    title: 'Daily Posting',
    detail: 'Publishing occurs approximately once every three days (~10 slots/month). Daily posting is explicitly excluded.',
    category: 'production'
  },
  {
    title: 'Professional Live Video Shoots',
    detail: 'On-site camera crews, videographers, studio lighting, or physical location filming are excluded.',
    category: 'production'
  },
  {
    title: 'Complex AI Avatar Production',
    detail: 'Advanced photorealistic digital avatar syncing and enterprise synthetic media tools are excluded.',
    category: 'production'
  },
  {
    title: 'Paid Stock Assets & Third-Party Licenses',
    detail: 'Premium commercial footage, paid music tracks, or paid fonts are excluded unless separately approved.',
    category: 'budget'
  },
  {
    title: 'Guaranteed Leads, Reach, or Sales',
    detail: 'We provide structured creative production, strategy, and execution; market outcomes are never guaranteed.',
    category: 'commitment'
  }
];

export const growthTrustDistinctionsData: TrustDistinction[] = [
  {
    title: '1. ISO Training',
    definition: 'Building knowledge, workforce competency, and internal audit capabilities through structured courses and syllabi.',
    responsibility: 'A V Quality Services delivers professional instructional training and awareness workshops.',
    complianceNote: 'Training certificates acknowledge course completion and internal competency, not accredited institutional certification.'
  },
  {
    title: '2. ISO Consulting & Implementation',
    definition: 'Conducting gap assessments, preparing mandatory documentation, and guiding management system integration.',
    responsibility: 'A V Quality Services provides expert consulting to ensure management systems satisfy standard criteria.',
    complianceNote: 'Consulting prepares the organization for audits; independent integrity requires consulting and certification to remain distinct.'
  },
  {
    title: '3. Certification Coordination',
    definition: 'Liaising with third-party accredited bodies, scheduling stage 1 and stage 2 audits, and assisting with non-conformity clearance.',
    responsibility: 'A V Quality Services assists the client in selecting and coordinating with reputable accredited registrars.',
    complianceNote: 'Coordination streamlines audit scheduling and administrative liaison.'
  },
  {
    title: '4. Accredited Certification',
    definition: 'The formal audit assessment and issuance of an accredited certificate with valid national or international accreditation marks.',
    responsibility: 'Issued exclusively by an independent, appropriately accredited Certification Body (CB).',
    complianceNote: 'A V Quality Services does not claim to be an accredited certification body itself unless independently confirmed.'
  }
];

export const growthProposalFAQs: FAQItem[] = [
  {
    id: 'commercial-retainer',
    question: 'How is the ₹10,000 monthly retainer billed and what does it cover?',
    answer: 'The ₹10,000 monthly retainer is billed at the beginning of each 30-day service cycle. It covers ongoing content calendar planning, producing up to 6 static creatives, producing up to 4 short AI-assisted videos, crafting captions/CTAs, publishing on up to 2 agreed social platforms, basic campaign planning, and a monthly performance review.',
    category: 'commercial'
  },
  {
    id: 'setup-fee',
    question: 'Why is the one-time setup fee quoted separately?',
    answer: 'Every organization begins at a different digital maturity stage. Some clients already have established brand identity assets and active social profiles, while others require complete messaging definition, audience profiling, and enquiry template creation from scratch. Quoting setup separately ensures you only pay for the exact onboarding work your business requires.',
    category: 'commercial'
  },
  {
    id: 'ad-spend',
    question: 'Who pays for the advertising budget and how is it managed?',
    answer: 'The advertising media budget is paid directly by A V Quality Services through your own advertising accounts (Meta Ads Manager, LinkedIn Campaign Manager, etc.). This ensures complete billing transparency. We provide campaign setup, audience targeting recommendations, and ongoing monitoring within our agreed scope, with zero markup on your direct media spend.',
    category: 'commercial'
  },
  {
    id: 'cadence-reason',
    question: 'Why is content published approximately every 3 days rather than daily?',
    answer: 'For B2B compliance and ISO consulting, audience decision cycles are longer and value technical depth over high-frequency noise. Publishing high-quality educational content approximately once every three days (~10 strategic pieces per month) allows each asset sufficient platform distribution time, maintains high editorial standards, and respects your team’s review capacity.',
    category: 'content'
  },
  {
    id: 'approval-process',
    question: 'How does the content review and approval process work?',
    answer: 'At the start of each monthly cycle, we present a structured content calendar outlining topics, hooks, and formats. Creatives and video scripts are submitted in batches with reasonable advance notice. Publishing commences once your designated point of contact provides written approval, ensuring complete alignment with your technical standards.',
    category: 'workflow'
  },
  {
    id: 'guarantees',
    question: 'Are specific lead volumes or sales figures guaranteed?',
    answer: 'No. Professional digital marketing is a structured process of testing, audience engagement, and positioning. While we ensure disciplined execution, high-grade creatives, and qualified enquiry routing, actual lead volumes and conversion rates depend on advertising budget, market demand, pricing, and your internal sales follow-up.',
    category: 'scope'
  }
];
