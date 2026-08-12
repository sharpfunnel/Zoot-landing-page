"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../assets/zoot-logo.png";
import { mailto, navLinks, site } from "../lib/content";

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
          {/* Above the fold, so it skips lazy loading. Next 16 deprecates
              `priority` in favour of eager loading + fetchPriority. */}
          <Image src={logo} alt={site.name} loading="eager" fetchPriority="high" sizes="120px" />
        </a>

        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a href={mailto} className="btn btn-accent btn-sm" data-ripple>
            Get FREE Quote
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
      </div>
    </header>
  );
}
