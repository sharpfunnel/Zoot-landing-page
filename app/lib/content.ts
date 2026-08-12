/**
 * Page copy and static figures for the Zoot Web Agency landing page.
 * Kept in one place so marketing copy can be edited without touching layout.
 */

export const site = {
  name: "Zoot Web Agency",
  url: "https://zootwebagency.com",
  pageUrl: "https://zootwebagency.com/landing-pages",
  logo: "https://zootwebagency.com/wp-content/uploads/2025/08/Zoot-Digital-logo-white.png",
  email: "contact@zootdigitalseo.com",
  phone: "+91-9082729185",
  foundingDate: "2016",
  social: {
    youtube: "https://www.youtube.com/@ZootDigitalMarketing",
    instagram: "https://www.instagram.com/zootdigitalmarketing/",
    linkedin: "https://www.linkedin.com/company/zootdigital/",
  },
} as const;

export const mailto = `mailto:${site.email}`;

export const navLinks = [
  { href: "#dashboard", label: "Dashboard" },
  { href: "#modules", label: "Platform" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export const clientLogos = [
  "NORTHPEAK",
  "VELOURA",
  "ARGON CO",
  "BRIGHTFERRY",
  "KESTRA",
  "HALIFORM",
];

/* --------------------------------------------------------------------------
   Hero dashboard mock.

   Every figure below is taken from the real dashboard screenshot shown in the
   #dashboard section (7-day view, 5–11 Aug) so the two can't contradict each
   other. If you refresh that screenshot, refresh these numbers with it.
   -------------------------------------------------------------------------- */

export const heroKpis = [
  { label: "Total visitors", count: 28, delta: "+55.6%" },
  { label: "Total leads", count: 4, delta: "+33.3%" },
];

/** Derived from the same account: 39 sessions, 9 CTA clicks, 4 leads. */
export const heroFunnel = [
  { name: "Sessions", value: 100 },
  { name: "CTA click", value: 23, display: "23%" },
  { name: "Lead sent", value: 10, display: "10.3%" },
];

export const heroFloatCards = [
  { label: "Conversion rate", value: "10.3%", note: "+33.3% leads", positive: true },
  { label: "Avg. session", value: "49m 51s", note: "7-day view", positive: false },
  { label: "CTA clicks", value: "9", note: "23% of sessions", positive: false },
];

export const whyItems = [
  {
    num: "01",
    title: "One system, not three vendors",
    body: "Design, development and tracking come from the same team, so nothing gets lost between handoffs.",
  },
  {
    num: "02",
    title: "You see the same data we do",
    body: "No black-box reporting — your dashboard is the same one our strategists work from.",
  },
  {
    num: "03",
    title: "Built to be optimized, not just launched",
    body: "Every page ships with heatmaps, funnels and form analytics from day one.",
  },
];

export const compareRows = [
  { text: "Typical agency: page delivered, no visibility after launch", tag: "common", good: false },
  { text: "Typical agency: ad spend reported monthly, after the fact", tag: "common", good: false },
  {
    text: "Zoot Web Agency: live dashboard, funnels & heatmaps from day one",
    tag: "ZOOT",
    good: true,
  },
  {
    text: "Zoot Web Agency: campaign data and page data in one place",
    tag: "ZOOT",
    good: true,
  },
];

/**
 * Alt text for the real dashboard screenshot in the #dashboard section.
 * The image itself is statically imported in `dashboard-showcase.tsx` from
 * `app/assets/`, so Next derives its dimensions and blur placeholder.
 */
export const dashboardShotAlt =
  "The Zoot Web Agency analytics dashboard: total visitors, sessions, leads, conversion rate, scroll depth, CTA clicks, average session duration and bounce rate, alongside a visitors-over-time chart, device distribution, conversion funnel and traffic sources for a client landing page.";

export const services = [
  { icon: "01", title: "Landing page design", body: "Custom UI/UX, enterprise-ready and conversion-focused." },
  { icon: "02", title: "Responsive builds", body: "Pixel-perfect on desktop, laptop, tablet and mobile." },
  {
    icon: "03",
    title: "Lightning-fast delivery",
    body: "Optimized for speed and Core Web Vitals from the first commit.",
  },
  { icon: "04", title: "SEO friendly", body: "Semantic structure and clean markup, built to be found." },
  { icon: "05", title: "Custom analytics dashboard", body: "Your own admin panel, not a shared template." },
  { icon: "06", title: "Meta Ads management", body: "Campaign setup, creative testing, retargeting and scaling." },
  {
    icon: "07",
    title: "Real estate ad campaigns",
    body: "Listing-led Google & Meta campaigns built for buyer and renter intent, our core specialization.",
  },
  {
    icon: "08",
    title: "Reports on autopilot",
    body: "Weekly and monthly reports, exportable as PDF, Excel or CSV.",
  },
  {
    icon: "09",
    title: "A/B-ready architecture",
    body: "Pages structured to test and improve, not just launch once.",
  },
];

export const analyticsModules = [
  {
    icon: "◎",
    title: "Live Visitors",
    body: "Watch sessions unfold in real time — entry pages, exit pages, device and location.",
  },
  {
    icon: "▤",
    title: "Conversion Funnel",
    body: "Visitor → CTA click → form submitted → lead generated → sale, tracked at every step.",
  },
  {
    icon: "▣",
    title: "Device Analytics",
    body: "Desktop, tablet and mobile split, browser and OS breakdowns.",
  },
  {
    icon: "↗",
    title: "Traffic Sources",
    body: "Know exactly which channel — organic, paid or referral — brought each visitor in.",
  },
  {
    icon: "▧",
    title: "Video Analytics",
    body: "Plays, watch time, drop-off point and completion rate for every embedded video.",
  },
  {
    icon: "⚙",
    title: "Tech Stack Detection",
    body: "CMS, framework, hosting and installed tools, detected automatically.",
  },
];

export const ctaTracking = [
  { name: "Book Now", value: 72 },
  { name: "Call Now", value: 48 },
  { name: "WhatsApp", value: 35 },
  { name: "Get Quote", value: 26 },
];

export const metaAdsCards = [
  { icon: "①", title: "Pixel installation", body: "Standard events wired in correctly from day one." },
  {
    icon: "②",
    title: "Conversion API",
    body: "Server-side tracking that holds up against ad blockers and iOS privacy limits.",
  },
  {
    icon: "③",
    title: "Audience & creative testing",
    body: "Structured testing across audiences, placements and creative variants.",
  },
  {
    icon: "④",
    title: "Retargeting & scaling",
    body: "Warm audiences re-engaged, winning ad sets scaled with daily monitoring.",
  },
];

/**
 * Alt text for the real heatmap screenshot in the #heatmaps section. The image
 * is statically imported in `heatmaps.tsx` from `app/assets/`.
 */
export const heatmapShotAlt =
  "A click and scroll heatmap of a client landing page, showing which sections draw the most attention and how far down the page visitors actually scroll.";

export const budgetSplit = [
  { name: "Google Search", value: 42 },
  { name: "Meta Retarget", value: 28 },
  { name: "Instagram", value: 18 },
  { name: "LinkedIn", value: 12 },
];

export const cpaByChannel = [
  { name: "Google Search", value: "$18.40" },
  { name: "Meta Retargeting", value: "$11.20" },
  { name: "Instagram Reels", value: "$24.90" },
  { name: "LinkedIn Lead Gen", value: "$41.10" },
];

export const reportCards = [
  { icon: "↻", title: "Weekly & monthly reports", body: "Scheduled automatically, no chasing required." },
  { icon: "▤", title: "Campaign & ROI reports", body: "Spend, results and return, broken down by channel." },
  { icon: "⇩", title: "Export anywhere", body: "PDF, Excel or CSV — built for how your team already works." },
];

export const processSteps = [
  {
    num: "01",
    title: "Strategy",
    body: "We map your offer, audience and goals, and decide what the dashboard needs to track.",
  },
  {
    num: "02",
    title: "Landing page design",
    body: "A custom UI built around conversion — not a template with your logo dropped in.",
  },
  {
    num: "03",
    title: "Backend development",
    body: "Your private dashboard is built and connected to the page, module by module.",
  },
  {
    num: "04",
    title: "Tracking setup",
    body: "Pixel, Conversion API, funnels, CTAs and heatmaps wired in and verified end to end.",
  },
  {
    num: "05",
    title: "Launch",
    body: "Page goes live, dashboard goes live, and you get access on day one.",
  },
  {
    num: "06",
    title: "Optimization",
    body: "We read the data with you and adjust the page, campaigns and budget accordingly.",
  },
];

export const caseStudies = [
  {
    tag: "Real estate — residential",
    count: 46,
    decimals: 0,
    suffix: "%",
    statLabel: "Lower cost per lead",
    body: 'Funnel data showed most drop-off happened at the "schedule a viewing" step — a simpler booking flow fixed it.',
  },
  {
    tag: "Real estate — rentals",
    count: 3.1,
    decimals: 1,
    suffix: "x",
    statLabel: "ROAS improvement",
    body: "Budget reallocated away from broad-radius targeting the dashboard flagged as underperforming for three weeks straight.",
  },
  {
    tag: "E-commerce",
    count: 63,
    decimals: 0,
    suffix: "%",
    statLabel: "More form completions",
    body: "Heatmaps revealed a CTA below the fold that almost nobody scrolled to reach.",
  },
];

export const benefits = [
  {
    icon: "↑",
    title: "Higher conversion rates",
    body: "Pages built and tested against real funnel data, not guesswork.",
  },
  {
    icon: "◎",
    title: "Full visibility",
    body: "Every visitor, session and ad dollar tracked in one dashboard.",
  },
  {
    icon: "$",
    title: "Less wasted ad spend",
    body: "Budget allocation guided by ROAS, not by which platform shouts loudest.",
  },
];

export const testimonials = [
  {
    quote:
      "We'd been running listing ads for a year with almost no visibility into what happened after the click. The funnel view alone paid for the build in the first month.",
    initials: "RM",
    name: "R. Mehta",
    role: "Broker, residential real estate team",
  },
  {
    quote:
      "The dashboard is the part nobody else offered. I can finally tell my team which campaign is actually working instead of arguing about it.",
    initials: "JL",
    name: "J. Lawton",
    role: "Marketing lead, clinic group",
  },
  {
    quote:
      "Heatmaps showed us people weren't scrolling past the fold. One layout change and form completions jumped noticeably within two weeks.",
    initials: "SK",
    name: "S. Kaur",
    role: "Ops manager, e-commerce brand",
  },
];

export const faqs = [
  {
    q: "What exactly do I get with Zoot Web Agency?",
    a: "A custom landing page plus a private analytics dashboard tracking every visitor, lead, session, campaign and funnel step tied to that page.",
  },
  {
    q: "Is the dashboard shared or built per client?",
    a: "Each dashboard is provisioned individually with its own tracking IDs, login and modules turned on based on what you need.",
  },
  {
    q: "Do you manage the ad campaigns too?",
    a: "Yes — Google, Meta, Instagram, Facebook and LinkedIn Ads, including creative testing, retargeting and budget allocation.",
  },
  {
    q: "What is Meta CAPI?",
    a: "Meta's Conversion API sends event data server-side so conversions are recorded even when browser-based tracking is blocked.",
  },
  {
    q: "How long does setup take?",
    a: "Most builds go from strategy call to live tracking in two to four weeks depending on scope.",
  },
  {
    q: "Can I export reports?",
    a: "Yes, as PDF, Excel or CSV, on a weekly or monthly schedule.",
  },
  {
    q: "Is the landing page templated?",
    a: "No. Every page is designed around your brand, offer and audience.",
  },
  {
    q: "What happens after launch?",
    a: "We move into optimization — reading heatmaps, funnel drop-off and campaign data to improve conversion rate.",
  },
  {
    q: "Does the tracking slow the page down?",
    a: "No — tracking loads asynchronously and Core Web Vitals are monitored as part of the performance module.",
  },
  {
    q: "Who is this built for?",
    a: "Businesses running paid ads or serious organic campaigns with no clear view of what happens after the click.",
  },
  {
    q: "Do you only work with real estate businesses?",
    a: "No — we work with every industry. Real estate lead campaigns are our core specialization, but the same landing page and dashboard system is built for any business running paid traffic.",
  },
];
