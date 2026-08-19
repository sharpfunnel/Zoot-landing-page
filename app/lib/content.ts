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
  // This one value feeds the nav, the mobile menu, the footer and the form's
  // confirmation message; `telHref` below strips it down to a dialable link.
  phone: "+91 90827 29185",
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

/* ==========================================================================
   ⚠️  UNVERIFIED FIGURES — CHECK BEFORE LAUNCH
   ==========================================================================
   `offer.now` and comparison3.cost[0] come straight from pricingPlans, so
   they're as real as the packages are. The rest of the money on this page is
   estimated, not researched — plausible market rates, not quotes:

     valueStack[].value  ·  offer.worth / offer.saves derived from them
     comparison3.cost[1] and [2], which are claims about other businesses

   Still placeholders:  offer.bar  ·  offer.countdownHours
   The scarcity line reads "0 of 00", and the timer restarts on every load,
   which is a rolling deadline rather than a real one.
   ========================================================================== */

export const offer = {
  /** Scarcity line in the top bar. */
  bar: "Limited build slots — 0 of 00 remaining this month",
  /** The entry package's price, shown in the hero, the sticky bar and the
      savings bar. Mirrors pricingPlans[0] — keep the two in step. */
  now: "₹1,999",
  period: "/mo",
  /** valueStack totalled, and that total less `now`. Both are arithmetic on
      the list below, so recompute them if any line item changes. */
  worth: "₹8,999",
  saves: "₹7,000",
  /** Hours the countdown runs for. Restarts on load — a real deadline should
      come from a fixed date instead. */
  countdownHours: 24,
};

/** Hero trust strip, mirroring the reference pages' learner-count + rating. */
export const heroTrust = {
  count: "100+",
  countLabel: "businesses tracked",
  rating: "4.9",
  ratingLabel: "average client rating",
  initials: ["RM", "JL", "SK", "AP", "KD"],
};

/** Spec chips, like the reference's "7hr 20min · Hindi · Self Paced" row. */
export const specChips = [
  { v: "7 days", l: "To go live" },
  { v: "20+", l: "Tracking tools" },
  { v: "Unlimited", l: "Dashboard logins" },
  { v: "100%", l: "Your data" },
  { v: "24 hrs", l: "Callback time" },
  { v: "Lifetime", l: "Page ownership" },
];

/* ------------------------------------------------------------ value stack */

/**
 * "Everything you get, and what it would cost separately." Mirrors the
 * reference's tool-cost breakdown that totals to a single number.
 *
 * Monthly figures, so they sit against the packages rather than against a
 * one-off build. Estimated market rates — see the note above. They sum to
 * offer.worth (₹8,999); change one and both offer.worth and offer.saves
 * have to move with it.
 */
export const valueStack = [
  { title: "Custom landing page design & build", value: "₹2,500" },
  { title: "Private analytics dashboard", value: "₹1,400" },
  { title: "Lead CRM with ad attribution", value: "₹1,100" },
  { title: "Heatmaps & session recording", value: "₹900" },
  { title: "Meta Pixel + Conversion API setup", value: "₹750" },
  { title: "Funnel & form analytics", value: "₹650" },
  { title: "Campaign dashboard (ROAS & ROI)", value: "₹950" },
  { title: "Automated weekly & monthly reports", value: "₹450" },
  { title: "Performance & error monitoring", value: "₹299" },
];

/* --------------------------------------------------- 3-way comparison */

/** Zoot vs the two realistic alternatives, like the reference's table. */
export const comparison3 = {
  columns: ["Zoot Web Agency", "Typical Agency", "DIY / Freelancers"],
  rows: [
    { feature: "Custom landing page", values: [true, true, true] },
    { feature: "Live analytics dashboard", values: [true, false, false] },
    { feature: "Lead CRM with ad attribution", values: [true, false, false] },
    { feature: "Heatmaps & session recording", values: [true, false, true] },
    { feature: "Meta Pixel + Conversion API", values: [true, false, true] },
    { feature: "Funnel & form analytics", values: [true, false, false] },
    { feature: "Campaign & ROAS tracking", values: [true, true, false] },
    { feature: "Automated reporting", values: [true, false, false] },
    { feature: "Performance monitoring", values: [true, false, false] },
    { feature: "One team, one invoice", values: [true, true, false] },
  ],
  cost: ["₹1,999/mo", "₹12,000+/mo", "₹4,500/mo + your time"],
};

/* --------------------------------------------------------- review wall */

/** Written reviews, mirroring the reference's Google-review masonry wall. */
export const reviews = [
  {
    name: "R. Mehta",
    initials: "RM",
    text: "We ran listing ads for a year with no idea what happened after the click. The funnel view alone paid for the build in the first month.",
  },
  {
    name: "J. Lawton",
    initials: "JL",
    text: "The dashboard is the part nobody else offered. I can tell my team which campaign is working instead of arguing about it.",
  },
  {
    name: "S. Kaur",
    initials: "SK",
    text: "Heatmaps showed people weren't scrolling past the fold. One layout change and form completions jumped within two weeks.",
  },
  {
    name: "A. Sharma",
    initials: "AS",
    text: "Setup took under three weeks and they handled the Pixel and CAPI properly — something two previous agencies got wrong.",
  },
  {
    name: "P. Nair",
    initials: "PN",
    text: "Every lead arrives tagged with the campaign that produced it. That one thing changed how we spend our budget.",
  },
  {
    name: "K. Desai",
    initials: "KD",
    text: "Reports land in my inbox every Monday without me chasing anyone. Small thing, but it never happened before.",
  },
];

export const navLinks = [
  { href: "#setup", label: "Dashboard" },
  { href: "#deliverables", label: "What You Get" },
  { href: "#journey", label: "How It Works" },
  { href: "#stories", label: "Reviews" },
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

/* The invented client names that fed the "Trusted by" marquee are gone with
   it — they named companies that aren't clients. */

/**
 * Headline numbers.
 *
 * IMPORTANT: these are marketing claims, not figures I can verify. Confirm
 * every one against your own records before publishing — "99.9% uptime" and
 * "45% average conversion improvement" in particular are the kind of claim
 * that invites a challenge.
 */
export const stats = [
  { count: 120, suffix: "+", label: "Landing pages built" },
  { count: 1.5, decimals: 1, suffix: "M+", label: "Visitors tracked" },
  { count: 250, suffix: "K+", label: "Leads captured" },
  { count: 99.9, decimals: 1, suffix: "%", label: "Dashboard uptime" },
  { count: 45, suffix: "%", label: "Avg. conversion lift" },
];

/** Trust markers shown alongside the numbers. Same caveat as above. */
export const trustPoints = [
  { icon: "★", title: "Rated 5 stars", body: "By the teams we build for" },
  { icon: "◆", title: "100+ projects", body: "Delivered since 2016" },
  { icon: "✓", title: "95% satisfaction", body: "Clients who'd recommend us" },
  { icon: "⚡", title: "Fast delivery", body: "Live in seven days" },
  { icon: "☎", title: "Dedicated support", body: "One team, one contact" },
];

/* ------------------------------------------------------- deliverables */

/**
 * What lands in the client's hands. Deliberately concrete nouns rather than
 * feature language — this is the "what do I actually receive" answer.
 */
export const deliverables = [
  { title: "Landing Page Design", body: "Custom-built around your offer" },
  { title: "Admin Dashboard", body: "Your own private login" },
  { title: "Lead CRM", body: "Every enquiry in one place" },
  { title: "Visitor Tracking", body: "Who visits and what they do" },
  { title: "Heatmaps", body: "Where people click and scroll" },
  { title: "Session Recording", body: "Watch real visits back" },
  { title: "Meta Pixel", body: "Standard events wired correctly" },
  { title: "Meta CAPI", body: "Server-side conversion tracking" },
  { title: "Funnel Analytics", body: "See exactly where people drop" },
  { title: "Campaign Dashboard", body: "Spend, ROAS and ROI by channel" },
  { title: "Reports", body: "PDF and Excel, on a schedule" },
  { title: "Performance Monitoring", body: "Core Web Vitals and errors" },
];

/* ---------------------------------------------------------- journey flow */

/** The end-to-end path a visitor takes, from ad click to reporting. */
export const journeySteps = [
  { n: "01", title: "Ad Click", body: "Someone taps your Meta or Google ad." },
  { n: "02", title: "Landing Page", body: "They land on a page built to convert." },
  { n: "03", title: "Visitor Tracked", body: "Source, device and campaign recorded." },
  { n: "04", title: "Heatmap Logged", body: "Clicks and scroll depth captured." },
  { n: "05", title: "CTA Clicked", body: "Call, WhatsApp or Book Now — counted." },
  { n: "06", title: "Form Submitted", body: "Field-by-field, so drop-off is visible." },
  { n: "07", title: "Lead Created", body: "Straight into your CRM, tagged to the ad." },
  { n: "08", title: "Pixel Fires", body: "Meta Pixel and CAPI confirm the conversion." },
  { n: "09", title: "Reports Generated", body: "Weekly and monthly, sent automatically." },
];

/* ------------------------------------------------------- tracking setup */

/**
 * The seven steps we set up on your page, shown as an accordion beside a mock
 * of what each one actually does. `panel` names the mock rendered in
 * tracking-setup.tsx; `url` is the fake address bar above it.
 *
 * Step 06 deliberately promises *visibility* of where people abandon, not
 * capture of what they half-typed. Partial-field capture is a real feature in
 * some tools, but it collects personal data the visitor never submitted —
 * don't advertise it here unless your consent notice covers it.
 */
export const setupSteps = [
  {
    key: "setup",
    n: "01",
    label: "Add Setup",
    body: "One small snippet goes into your site's head, connected to your dashboard. We install it and verify it fires — there's nothing for you to configure or maintain.",
    url: "dashboard / setup",
    panel: "setup",
  },
  {
    key: "page",
    n: "02",
    label: "Landing page created",
    body: "A page built around your offer, not a template with your logo dropped in. Fast on mobile, and wired to your dashboard before it ever goes live.",
    url: "yourbrand.com/3bhk-launch",
    panel: "page",
  },
  {
    key: "visitors",
    n: "03",
    label: "Visitor data tracked",
    body: "Every visit records its source, campaign, device, city and time on page — so you can see who your ads are actually bringing in, not just how many.",
    url: "dashboard / visitors",
    panel: "visitors",
  },
  {
    key: "replay",
    n: "04",
    label: "Visitor video tracked",
    body: "Watch real sessions back like a video. See the scrolling, the hesitation and the repeated clicks that no chart will ever show you.",
    url: "dashboard / session replay",
    panel: "replay",
  },
  {
    key: "cta",
    n: "05",
    label: "CTA clicks captured",
    body: "Call, WhatsApp, Book Now, brochure download — every button is counted separately, so you know which offer people actually want.",
    url: "dashboard / cta clicks",
    panel: "cta",
  },
  {
    key: "forms",
    n: "06",
    label: "Abandoned forms captured",
    body: "Your form is tracked field by field. You see exactly which question makes people quit — usually one you could simply remove.",
    url: "dashboard / form analytics",
    panel: "forms",
  },
  {
    key: "leads",
    n: "07",
    label: "Leads captured",
    body: "Every completed enquiry lands in your dashboard tagged with the ad, platform and date it came from, then goes straight to your team.",
    url: "dashboard / leads",
    panel: "leads",
  },
  {
    key: "whatsapp",
    n: "08",
    label: "Leads on WhatsApp",
    body: "Every lead from your Meta and Google ads is forwarded to your WhatsApp the moment it arrives, so you can reply while they are still reading your page.",
    url: "dashboard / whatsapp leads",
    panel: "whatsapp",
  },
];

/**
 * The snippet shown in the "Add Setup" mock, and the wizard steps beside it.
 *
 * ⚠️ Transcribed verbatim from the reference artwork, at the client's request.
 * Two things to know before launch:
 *   1. cdn.addsetup.com is a third party, not us. As written, the panel shows
 *      visitors someone else's install snippet.
 *   2. The host and project id are placeholders either way.
 * Swap `open` / `tag` / `close` for the real Zoot snippet when it exists. The
 * mock is a picture of the setup screen, not a working one — the Copy Code
 * bar is decorative, so nobody can walk away with a snippet that won't load.
 */
export const setupSnippet = {
  intro: "Place the following code in the <head> section of every page you want to track.",
  open: "<!-- Add Setup Code -->",
  tag: '<script async src="https://cdn.addsetup.com/setup.js" data-project="ABC123"></script>',
  close: "<!-- End Add Setup Code -->",
  /**
   * `state` drives the circle: done = solid blue tick, fill = solid blue
   * number, now = white with a blue ring, idle = greyed out.
   */
  wizard: [
    {
      n: "1",
      title: "Create Account",
      body: "Your account is ready",
      state: "done",
      art: "account",
    },
    {
      n: "2",
      title: "Add Site Details",
      body: "Add your website name and domain",
      state: "fill",
      art: "site",
    },
    {
      n: "3",
      title: "Install Tracking Code",
      body: "Add the tracking snippet to your website",
      state: "now",
      art: "code",
    },
    {
      n: "4",
      title: "Start Tracking",
      body: "All set! We'll start capturing data",
      state: "idle",
      art: "chart",
    },
  ],
};

/**
 * The ad-account row under the setup wizard.
 *
 * The Google Ads and Meta marks are drawn as simplified SVG approximations of
 * third-party logos — fine for an "integrates with" illustration, but replace
 * them with the official assets if this ever becomes a real integrations page.
 * Click and conversion figures are illustrative.
 */
export const setupAds = {
  title: "Track campaigns from your ads",
  body: "Connect your ad accounts and monitor performance in one place.",
  accounts: [
    { key: "google", name: "Google Ads", clicks: "1,245", conversions: "145" },
    { key: "meta", name: "Meta Ads", clicks: "2,134", conversions: "214" },
  ],
};

/* ------------------------------------------------------ dashboard gallery */

/**
 * Tabs for the interactive dashboard showcase.
 *
 * `shot` names a real screenshot; tabs without one fall back to a styled HTML
 * panel. Only two real captures exist so far (Overview and Heatmaps). Send
 * the remaining screenshots and they drop straight in — no code changes
 * beyond adding the import and setting `shot`.
 */
export const galleryTabs = [
  {
    key: "overview",
    label: "Overview",
    title: "Everything at a glance",
    body: "Visitors, sessions, leads, conversion rate and scroll depth for the last 7, 30 or 90 days.",
    shot: "dashboard",
  },
  {
    key: "leads",
    label: "Leads",
    title: "Every lead, tagged to its ad",
    body: "Name, phone, campaign and date — sortable, exportable, never a spreadsheet again.",
    shot: null,
    panel: "leads",
  },
  {
    key: "sessions",
    label: "Sessions",
    title: "What each visit actually did",
    body: "Entry page, time on site, pages viewed, device and location, session by session.",
    shot: null,
    panel: "kpis",
  },
  {
    key: "funnels",
    label: "Funnels",
    title: "Exactly where people drop out",
    body: "Visitor to CTA click to form start to lead — with the drop-off at every step.",
    shot: null,
    panel: "funnel",
  },
  {
    key: "heatmaps",
    label: "Heatmaps",
    title: "Where attention actually goes",
    body: "Click and scroll heatmaps showing what gets noticed and what never gets seen.",
    shot: "heatmap",
  },
  {
    key: "performance",
    label: "Performance",
    title: "Speed and errors, monitored",
    body: "Core Web Vitals, JavaScript errors and broken pages, flagged before they cost you leads.",
    shot: null,
    panel: "performance",
  },
  {
    key: "reports",
    label: "Reports",
    title: "Reporting that shows up",
    body: "Weekly and monthly summaries, exportable to PDF or Excel whenever you need them.",
    shot: null,
    panel: "reports",
  },
];

/* ------------------------------------------------------ dashboard modules */

export const dashboardModules = [
  { icon: "◎", title: "Overview", body: "Real-time business insights" },
  { icon: "▤", title: "Lead CRM", body: "Manage every lead" },
  { icon: "◍", title: "Heatmaps", body: "See where users click" },
  { icon: "▽", title: "Funnels", body: "Know where visitors leave" },
  { icon: "⚡", title: "Performance", body: "Core Web Vitals" },
  { icon: "◈", title: "Meta Pixel", body: "Server-side tracking" },
  { icon: "◹", title: "Campaigns", body: "ROAS & ROI" },
  { icon: "⇩", title: "Reports", body: "Export PDF & Excel" },
];

/* ------------------------------------------------------------ industries */

export const industries = [
  { icon: "⌂", name: "Real Estate", note: "Our specialty" },
  { icon: "✚", name: "Healthcare", note: null },
  { icon: "✎", name: "Education", note: null },
  { icon: "⚙", name: "Automotive", note: null },
  { icon: "◍", name: "Restaurants", note: null },
  { icon: "⛭", name: "Construction", note: null },
  { icon: "§", name: "Law Firms", note: null },
  { icon: "₹", name: "Finance", note: null },
  { icon: "◈", name: "Agencies", note: null },
  { icon: "▤", name: "Ecommerce", note: null },
  { icon: "★", name: "Coaches", note: null },
  { icon: "◆", name: "Consultants", note: null },
];

/* --------------------------------------------------------- before / after */

export const comparison = {
  before: {
    title: "A Traditional Agency",
    items: [
      { text: "Beautiful landing page", has: true },
      { text: "Live dashboard", has: false },
      { text: "Lead CRM", has: false },
      { text: "Heatmaps", has: false },
      { text: "Campaign tracking", has: false },
      { text: "Meta Pixel", has: false },
      { text: "Conversion API", has: false },
      { text: "Performance monitoring", has: false },
      { text: "Reports", has: false },
    ],
  },
  after: {
    title: "Zoot Web Agency",
    items: [
      { text: "Beautiful landing page", has: true },
      { text: "Live dashboard", has: true },
      { text: "Lead CRM", has: true },
      { text: "Heatmaps", has: true },
      { text: "Campaign tracking", has: true },
      { text: "Meta Pixel", has: true },
      { text: "Conversion API", has: true },
      { text: "Performance monitoring", has: true },
      { text: "Reports", has: true },
    ],
  },
};

/* ------------------------------------------------------- why choose us */

export const whyChooseUs = [
  { icon: "◱", title: "Landing Pages", body: "Custom-designed, built to convert." },
  { icon: "◎", title: "Analytics", body: "Your own dashboard, not a shared tool." },
  { icon: "◹", title: "Meta Ads", body: "Setup, testing, retargeting, scaling." },
  { icon: "◈", title: "Pixel Tracking", body: "Pixel and CAPI, wired properly." },
  { icon: "▽", title: "Funnels", body: "Every step measured, drop-off visible." },
  { icon: "⇩", title: "Reports", body: "Automatic, exportable, on schedule." },
  { icon: "⚡", title: "Performance", body: "Fast pages, monitored continuously." },
  { icon: "◍", title: "Heatmaps", body: "Real behaviour, not assumptions." },
  { icon: "▤", title: "Lead CRM", body: "Every enquiry captured and tagged." },
  { icon: "↻", title: "Automation", body: "Reports and alerts without chasing." },
];

/* ---------------------------------------------------------------- video */

/**
 * Set `src` to an MP4 (in /public) or leave null to show the poster with a
 * "coming soon" state. No video file exists yet — the section renders the
 * frame and the shot list, ready for one.
 */
export const video = {
  src: null as string | null,
  title: "See Everything in Action",
  body: "Forty-five seconds: a lead arrives, the dashboard updates, the heatmap fills in, and the report writes itself.",
  chapters: [
    "Dashboard overview",
    "A lead arrives",
    "Heatmap replay",
    "Funnel drop-off",
    "Campaign & ROAS",
    "Meta Pixel firing",
    "Reports exported",
  ],
};

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
  { n: "01", title: "Discovery", body: "We learn your offer, audience and goals on one call." },
  { n: "02", title: "Wireframe", body: "The page structure is mapped before anything is designed." },
  { n: "03", title: "UI Design", body: "A custom design built around your brand and your buyers." },
  { n: "04", title: "Development", body: "Built fast, responsive and clean — no page builders." },
  { n: "05", title: "Dashboard", body: "Your private admin panel is provisioned and connected." },
  { n: "06", title: "Tracking Setup", body: "Pixel, CAPI, funnels, CTAs and heatmaps wired in." },
  { n: "07", title: "Testing", body: "Every form, event and conversion verified end to end." },
  { n: "08", title: "Launch", body: "Page live, dashboard live, access handed to you." },
  { n: "09", title: "Optimization", body: "We read the data with you and keep improving it." },
];

/* ---------------------------------------------------- dashboard views */

/**
 * The tabs over the dashboard section. One entry per view; `view` picks the
 * mock that renders below the tab strip, and every view but the first falls
 * back to the overview until its own mock is built.
 */
export const dashboardViews = [
  {
    key: "overview",
    label: "Overview",
    view: "overview",
    body: "Visitors, sessions, leads and conversion rate for the week, with the funnel from first scroll to submitted form underneath.",
  },
  {
    key: "leads",
    label: "Leads",
    view: "leads",
    body: "Every form submission as a row: what they asked about, where they came from, and whether the conversion made it back to Meta.",
  },
  {
    key: "sessions",
    label: "Sessions",
    view: "sessions",
    body: "One row per visit — city, device, campaign, how far they scrolled and how long they stayed — with the recording of each one a click away.",
  },
  {
    key: "funnels",
    label: "Funnels",
    view: "funnels",
    body: "The same journey twice — everyone, then only the sessions that came from a Meta ad — so you can see which step is losing people and whether your ads lose them faster.",
  },
  {
    key: "ctas",
    label: "CTAs",
    view: "ctas",
    body: "Which button people actually press. Every call, WhatsApp and enquiry element on the page, ranked by clicks, with the views and hovers behind each one.",
  },
  {
    key: "forms",
    label: "Forms",
    view: "forms",
    body: "How many people saw each form, how many began it and how many finished — and the field they gave up on last, so you know which question to cut.",
  },
  {
    key: "heatmap",
    label: "Heatmap",
    view: "heatmap",
    body: "Your page with the clicks painted over it, so the buttons people press and the ones they ignore are visible at a glance — plus scroll depth and hover.",
  },
  {
    key: "performance",
    label: "Performance",
    view: "performance",
    body: "Core Web Vitals measured on real visits rather than a lab test, with the spread behind each number and how it breaks down by device.",
  },
];

/* --------------------------------------------------------------- pricing */

export const pricingPlans = [
  {
    title: "Starter Launch",
    price: "₹1,999",
    period: "/mo",
    body: "Get your first campaign live on a page built to convert, with tracking wired in from day one.",
    checks: [
      "Conversion-focused landing page",
      "Meta Ads campaign setup",
      "Audience targeting",
      "Basic conversion tracking",
      "Ad copy & creative direction",
      "Campaign monitoring",
    ],
    cta: "Start with Starter",
    featured: false,
    badge: null as string | null,
  },
  {
    title: "Growth Engine",
    price: "₹2,899",
    period: "/mo",
    body: "Once the first campaign works, this is the one that scales it — more segments, retargeting and monthly optimisation.",
    checks: [
      "Everything in Starter",
      "Advanced campaign structure",
      "Multiple audience segments",
      "Retargeting campaigns",
      "Conversion optimization",
      "Advanced tracking",
      "Performance monitoring",
      "Monthly optimization",
    ],
    cta: "Choose Growth Engine",
    featured: true,
    badge: "MOST POPULAR",
  },
  {
    title: "Scale Boost",
    price: "₹4,999",
    period: "/mo",
    body: "For campaigns already bringing in leads, where the work is testing, lead quality and spending more without paying more per lead.",
    checks: [
      "Everything in Growth",
      "Advanced retargeting",
      "A/B testing",
      "Landing page optimization",
      "Lead-quality optimization",
      "Continuous campaign optimization",
      "Budget scaling strategy",
      "Detailed performance insights",
    ],
    cta: "Scale with Scale Boost",
    featured: false,
    badge: null as string | null,
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
    a: "Most projects go from our first call to a fully working page and dashboard in seven days.",
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
  {
    q: "How does the tracking actually work?",
    a: "A small script on your page records each visit, and the Meta Pixel plus Conversion API confirm conversions back to the ad platform. Everything lands in your dashboard tagged with the campaign, device and source it came from.",
  },
  {
    q: "Can I connect Google Ads as well as Meta?",
    a: "Yes. Google, Meta, Instagram, Facebook and LinkedIn all report into the same dashboard, so you can compare cost per lead across channels side by side.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes — the page runs on your domain or a subdomain of it, and the dashboard can sit on a subdomain too so everything stays under your brand.",
  },
  {
    q: "Can you integrate with my existing CRM?",
    a: "In most cases yes. Leads can be pushed to your CRM as they arrive, or exported on a schedule if your system doesn't support a direct connection.",
  },
];

/* --------------------------------------------------------------- footer */

export const footerSolutions = [
  { href: "#setup", label: "Your setup" },
  { href: "#deliverables", label: "What you get" },
  { href: "#journey", label: "How it works" },
  { href: "#compare", label: "Why us" },
  { href: "#stories", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
];

export const footerLegalText =
  "This page is a marketing overview of our services. Actual results, timelines and pricing are decided per project, and depend on your budget, market and offer. Figures shown are illustrative examples of the kind of reporting the dashboard provides.";
