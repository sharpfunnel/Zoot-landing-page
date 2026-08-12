import Image from "next/image";
import logo from "../assets/zoot-logo.png";
import { site } from "../lib/content";

const platformLinks = [
  { href: "#dashboard", label: "Analytics dashboard" },
  { href: "#modules", label: "Analytics modules" },
  { href: "#tracking", label: "Marketing tracking" },
  { href: "#heatmaps", label: "Heatmaps" },
  { href: "#reports", label: "Reports" },
];

const companyLinks = [
  { href: "#why", label: "Why Zoot" },
  { href: "#meta-ads", label: "Meta Ads" },
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo">
              <Image src={logo} alt={site.name} sizes="150px" />
            </div>
            <p>
              Landing pages wired to a live analytics dashboard — built for every business, with a
              dedicated focus on real estate ad campaigns.
            </p>
            <div className="social-row">
              <a href={site.social.youtube} aria-label="YouTube" rel="noreferrer noopener" target="_blank">
                YT
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                rel="noreferrer noopener"
                target="_blank"
              >
                IG
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                rel="noreferrer noopener"
                target="_blank"
              >
                IN
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              </li>
              <li>Serving the US, UK, Australia &amp; Canada</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Landing pages + live analytics dashboards</span>
        </div>
      </div>
    </footer>
  );
}
