/**
 * Page copy for the Zoot Web Agency landing page (v3, light theme).
 *
 * Provenance: the hero copy, page metadata and the eleven FAQ entries are
 * verbatim from the design source. Section headings were read off the design
 * screenshots. Supporting body copy under those headings was not legible at
 * screenshot resolution and is written here in the same voice — review before
 * this goes live.
 */

export const site = {
  name: "Zoot Web Agency",
  url: "https://zootwebagency.com",
  logo: "https://zootwebagency.com/wp-content/uploads/2025/08/Zoot-Digital-logo-white.png",
  email: "contact@zootdigitalseo.com",
  // Placeholder, deliberately non-dialable. Swap in the real number before
  // launch — this one value feeds the nav, the mobile menu, the footer and
  // the form's confirmation message.
  phone: "+91 00000 00000",
  foundingDate: "2016",
  locality: "Navi Mumbai",
  country: "IN",
  social: {
    youtube: "https://www.youtube.com/@ZootDigitalMarketing",
    instagram: "https://www.instagram.com/zootdigitalmarketing/",
    linkedin: "https://www.linkedin.com/company/zootdigital/",
  },
} as const;

export const mailto = `mailto:${site.email}`;
export const telHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

export const navLinks = [
  { href: "#what-you-get", label: "What You Get" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
];

/* ----------------------------------------------------------------- hero */

export const heroBadges = [
  "More Qualified Leads",
  "Know Where Every Lead Comes From",
  "100% Transparent Tracking",
];

export const heroChecks = [
  "Know exactly where every lead came from",
  "Custom-built landing page, not a template",
  "We call you back within 24 hours",
];

/* Note: the hero's feature callouts (More Leads, Smarter Campaigns, Accurate
   Tracking, Real-Time Visitor Tracking, Higher Conversions) are baked into
   the composite at app/assets/hero-laptop.png, so they aren't rendered as
   markup. Editing them means editing that image. */

/* ------------------------------------------------------- proof / stats */

export const clientLogos = [
  "NORTHPEAK",
  "VELOURA",
  "ARGON CO",
  "BRIGHTFERRY",
  "KESTRA",
  "HALIFORM",
];

export const stats = [
  { n: "2", label: "Weeks to go live" },
  { n: "20+", label: "Tracking tools included" },
  { n: "24", label: "Hour callback time" },
  { n: "100%", label: "Your data, your dashboard" },
];

/* ----------------------------------------------------- what you get rows */

export const featureRows = [
  {
    eyebrow: "Real Leads",
    title: "Not Just Traffic — Actual Leads",
    body: "We don't just send clicks to your page. Every enquiry lands in your dashboard with the name, phone number and the ad that brought them in.",
    checks: ["Every lead captured automatically", "No spreadsheets, no manual copy-paste"],
    visual: "leads",
  },
  {
    eyebrow: "Clear Reporting",
    title: "Know Exactly What's Working",
    body: "Every lead is tagged with the exact ad, platform and date it came from — so you always know which campaign is actually working, not just guessing.",
    checks: ["See it live in your own dashboard", "No more end-of-month reporting"],
    visual: "kpis",
  },
  {
    eyebrow: "One Team",
    title: "Ads to Analytics, Handled by One Team",
    body: "Your listing page, your ads and your lead tracking come from the same team — built by people who know real estate, not a generalist agency.",
    checks: ["One point of contact, start to finish", "Real estate specialists, every other industry too"],
    visual: "bars",
  },
];

/* --------------------------------------------------------- ways to work */

export const waysToWork = [
  {
    tag: "Build It Once",
    title: "Property Landing Page + Dashboard",
    body: "Perfect if you already run ads and just need the page and tracking done properly.",
    checks: [
      "Custom-designed page for your listings or projects",
      "Your own live dashboard with 20+ tracking tools",
      "Heatmaps, funnels, forms and error tracking",
      "Weekly & monthly reports, sent automatically",
      "Built for brokers, developers and agencies",
    ],
    cta: "Get Page Details",
    featured: false,
  },
  {
    tag: "Run It For Me",
    title: "Real Estate Ads Management",
    body: "Full campaign setup and management on Meta and Google — plus everything above.",
    checks: [
      "Full campaign setup and management on Meta & Google",
      "Listing, project and open-house creative built for intent",
      "Retargeting, daily monitoring and budget control",
      "Buyer, renter and investor audience targeting",
      "Built for brokers, developers and agencies",
    ],
    cta: "Get Ads Details",
    featured: true,
  },
];

/* ------------------------------------------------------- three things tabs */

export const threeThings = [
  {
    key: "ads",
    tab: "Meta Ads",
    title: "We Run the Ads That Bring Buyers In",
    body: "Full setup and management on Meta and Google — built around your listings, location and open houses. Real estate campaigns are all we do most days.",
    checks: [
      "Listing and project campaigns on Meta & Google",
      "Buyer, renter and investor audience targeting",
      "Daily monitoring and budget control",
    ],
    visual: "bars",
  },
  {
    key: "page",
    tab: "Landing Page",
    title: "A Page Built to Turn Clicks Into Enquiries",
    body: "Designed around your offer and your audience — not a template with your logo dropped in. Fast, mobile-first and wired to the dashboard from day one.",
    checks: [
      "Custom design, built for conversion",
      "Loads fast on mobile, where your buyers are",
      "Forms, CTAs and calls tracked individually",
    ],
    visual: "kpis",
  },
  {
    key: "dashboard",
    tab: "Live Dashboard",
    title: "One Login Showing Every Number That Matters",
    body: "Visitors, leads, conversion rate, funnel drop-off, traffic sources and device split — all tied to the page we built, updating live.",
    checks: [
      "Your own login, provisioned just for you",
      "Every lead tagged to the ad that produced it",
      "Export to PDF or Excel whenever you need it",
    ],
    visual: "leads",
  },
];

/* -------------------------------------------------- dashboard modules */

export const dashboardModules = [
  { icon: "◍", title: "Heatmaps", body: "See where people click, scroll and stop reading on your page." },
  { icon: "◉", title: "CTA Tracking", body: "Book Now, Call Now, WhatsApp — every button counted separately." },
  { icon: "◈", title: "Meta Pixel & CAPI", body: "Server-side tracking that survives ad blockers and iOS limits." },
  { icon: "▦", title: "Campaign Analytics", body: "Spend, results and return, broken down by channel." },
  { icon: "▤", title: "Form Analytics", body: "Find the exact field where people give up and leave." },
  { icon: "◎", title: "Live Visitors", body: "Watch sessions unfold in real time, with device and location." },
];

export const moduleTags = [
  "Landing Page Conversions",
  "Lead Attribution (UTM)",
  "Session Tracking",
  "Form Analytics",
  "Performance Monitoring",
  "Error Tracking",
  "Traffic Sources",
  "Video Analytics",
  "Ads Optimisation",
  "Budget Optimisation",
  "Conversion Tracking",
  "Real Time Ad Campaigns",
];

/* ----------------------------------------------------------- lead table */

export const leadRows = [
  {
    name: "Aditya Sharma",
    source: "Facebook",
    sourceTone: "pill-blue",
    campaign: "3BHK Launch Offer — Sunrise",
    date: "12 Aug",
    time: "10:14",
    status: "New",
    statusTone: "pill-blue",
  },
  {
    name: "Ruhi Mehta",
    source: "Instagram",
    sourceTone: "pill-amber",
    campaign: "Weekend Site Visit Promo",
    date: "12 Aug",
    time: "09:02",
    status: "Contacted",
    statusTone: "pill-amber",
  },
  {
    name: "Priya Nair",
    source: "Google",
    sourceTone: "pill-green",
    campaign: "Commercial Office Space — Search",
    date: "11 Aug",
    time: "18:47",
    status: "Site Visit",
    statusTone: "pill-green",
  },
  {
    name: "Karan Desai",
    source: "Facebook",
    sourceTone: "pill-blue",
    campaign: "Retargeting — Website Visitors",
    date: "11 Aug",
    time: "16:20",
    status: "New",
    statusTone: "pill-blue",
  },
];

/* --------------------------------------------------------------- results */

export const results = [
  {
    stat: "46%",
    label: "Lower cost per lead",
    quote:
      "We ran ads for a year with no idea what happened after someone clicked. Now we can see the whole journey, and it paid for itself in the first month.",
    initials: "RM",
    name: "R. Mehta",
    role: "Broker, residential real estate team",
  },
  {
    stat: "3.1x",
    label: "Ad spend improvement",
    quote:
      "You are now offered a dashboard like this. Now I can just show my team which ad is actually working instead of guessing.",
    initials: "JL",
    name: "J. Lawton",
    role: "Marketing lead, developer group",
  },
  {
    stat: "63%",
    label: "More form completions",
    quote:
      "The heatmaps showed people weren't scrolling down. We moved things around, and a lot more people started filling out our form.",
    initials: "SK",
    name: "S. Kaur",
    role: "Marketing manager, real estate agency",
  },
];

/* --------------------------------------------------------------- process */

export const processSteps = [
  { n: "01", title: "Chat With Us", body: "We tell us about your business and goals, and what you want the page to do." },
  { n: "02", title: "We Build It", body: "Your page and dashboard get built, wired up and tested end to end." },
  { n: "03", title: "Go Live", body: "The page goes live, your dashboard goes live, and you get access on day one." },
  { n: "04", title: "Keep Improving", body: "We read the data with you and adjust the page, campaigns and budget." },
];

/* --------------------------------------------------------------- pricing */

export const pricingPlans = [
  {
    title: "Landing Page + Dashboard",
    body: "Perfect if you already run ads and just need the page and tracking done properly.",
    checks: [
      "Custom-designed landing page",
      "Your own live dashboard, 20+ tools",
      "Heatmaps, funnels, forms & error tracking",
      "Weekly & monthly reports",
    ],
    cta: "Get a Custom Quote",
    featured: false,
    badge: null as string | null,
  },
  {
    title: "Full Growth Package",
    body: "Everything above, and we run your Meta & Google ads for you.",
    checks: [
      "Everything in Landing Page + Dashboard",
      "Full Meta & Google Ads management",
      "Audience & creative testing, retargeting",
      "Real estate lead campaigns, our specialty",
    ],
    cta: "Get a Custom Quote",
    featured: true,
    badge: "MOST POPULAR",
  },
];

/* ------------------------------------------------------------------ faq */

export const faqs = [
  {
    q: "What exactly do I get?",
    a: "A landing page made just for you, plus your own dashboard that shows every visitor, lead, and ad result tied to that page.",
  },
  {
    q: "Is my dashboard shared with other clients?",
    a: "No. Your dashboard is set up just for you, with your own login and only the tools you actually need.",
  },
  {
    q: "Do you manage my ad campaigns too?",
    a: "Yes. We run your ads on Google, Meta, Instagram, Facebook and LinkedIn, and decide how to spend your budget based on real results.",
  },
  {
    q: "What is Meta CAPI, in simple terms?",
    a: "It's a backup way of tracking your ad results that keeps working even when ad blockers or phone privacy settings try to stop it.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most projects go from our first call to a fully working page and dashboard in two to four weeks.",
  },
  {
    q: "Can I download my reports?",
    a: "Yes, anytime, as a PDF or Excel file — weekly or monthly, your choice.",
  },
  {
    q: "Is my landing page a copy-paste template?",
    a: "No. Every page is designed from scratch around your business and your customers.",
  },
  {
    q: "What happens after my page goes live?",
    a: "We keep checking the data with you — clicks, scrolling, forms — and make changes to get better results.",
  },
  {
    q: "Will all this tracking make my page slow?",
    a: "No. Everything loads in the background, and we monitor page speed as part of the dashboard.",
  },
  {
    q: "Who is this for?",
    a: "Any business running ads or serious marketing who wants to actually see what's working.",
  },
  {
    q: "Do you work with all types of real estate businesses?",
    a: "Yes — brokers, agents, developers and real estate agencies of any size. If you sell or rent property and run ads, this is built for you.",
  },
];

/* --------------------------------------------------------------- footer */

export const footerSolutions = [
  { href: "#what-you-get", label: "What you get" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const footerLegalText =
  "This page is a marketing overview of our services. Actual results, timelines and pricing are decided per project, and depend on your budget, market and offer. Figures shown are illustrative examples of the kind of reporting the dashboard provides.";
