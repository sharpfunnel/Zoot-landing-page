"use client";

import { useEffect, useState } from "react";
import { navLinks, site, telHref } from "../lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled || menuOpen ? "scrolled" : undefined}>
      <nav>
        <a href="#top" className="logo" aria-label={`${site.name} — back to top`}>
          <span className="dot" aria-hidden="true" />
          ZOOT
        </a>

        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href={telHref} className="nav-phone">
            <span className="ic" aria-hidden="true">
              ✆
            </span>
            {site.phone}
          </a>
          <a href="#demo" className="btn btn-accent btn-sm" data-ripple>
            Get Free Demo
          </a>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={telHref} onClick={() => setMenuOpen(false)}>
          {site.phone}
        </a>
      </div>
    </header>
  );
}
