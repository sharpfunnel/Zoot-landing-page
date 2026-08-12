"use client";

import { useEffect } from "react";

/**
 * Page motion, in one place:
 *
 *  - `[data-anim]`   reveal-on-scroll (fade / slide / zoom), cascaded across
 *                    sibling groups the way the design staggers its grids
 *  - `[data-ripple]` material-style click ripple on buttons
 *
 * Everything it touches is server-rendered first, so this only layers motion
 * on top of markup that already works without JavaScript.
 *
 * It must survive teardown and setup again: React StrictMode (on by default
 * in dev) mounts, cleans up, then mounts a second time. So progress lives in
 * an effect-scoped WeakSet rather than on the DOM, and `fx-ready` is
 * (re-)added here — the inline script in the layout fires once, before paint,
 * and never again.
 */
export default function ScrollFx() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    const revealed = new WeakSet<HTMLElement>();

    // Idempotent: arms the reveal CSS on first mount, re-arms on remount.
    root.classList.add("fx-ready");

    /* ----------------------------------------------------------- stagger */

    if (!reduced) {
      const groups = new Map<HTMLElement, HTMLElement[]>();
      document.querySelectorAll<HTMLElement>("[data-anim]").forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const list = groups.get(parent);
        if (list) list.push(el);
        else groups.set(parent, [el]);
      });

      groups.forEach((siblings) => {
        if (siblings.length < 2) return;
        siblings.forEach((el, i) => {
          el.style.setProperty("--fx-delay", `${Math.min(i * 90, 450)}ms`);
        });
      });
    }

    /* ---------------------------------------------------------- counters */

    const frames = new Set<number>();
    const raf = (fn: FrameRequestCallback) => {
      const id = requestAnimationFrame((t) => {
        frames.delete(id);
        fn(t);
      });
      frames.add(id);
    };
    cleanups.push(() => frames.forEach((id) => cancelAnimationFrame(id)));

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? 0);
      const decimals = Number(el.dataset.decimals ?? 0);
      const suffix = el.dataset.suffix ?? "";
      const fmt = (v: number) =>
        v.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) + suffix;

      if (reduced) {
        el.textContent = fmt(target);
        return;
      }

      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf(tick);
      };
      raf(tick);
    };

    /* ------------------------------------------------------------ reveal */

    const reveal = (el: HTMLElement) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.classList.add("is-in");

      if (el.dataset.count !== undefined) countUp(el);
      // Numbers and bars nested inside a revealing block animate on its cue,
      // since they have no height of their own for the observer to catch.
      el.querySelectorAll<HTMLElement>("[data-count]").forEach((kid) => {
        if (revealed.has(kid)) return;
        revealed.add(kid);
        countUp(kid);
      });
      el.querySelectorAll<HTMLElement>("[data-w]").forEach((kid) => {
        kid.style.width = `${kid.dataset.w}%`;
      });
    };

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-anim],[data-count]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
      );

      targets.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    /* ------------------------------------------------------------ ripple */

    const onClick = (e: MouseEvent) => {
      if (reduced) return;
      const host = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-ripple]");
      if (!host) return;

      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const span = document.createElement("span");
      span.className = "ripple";
      span.style.width = span.style.height = `${size}px`;
      span.style.left = `${e.clientX - rect.left - size / 2}px`;
      span.style.top = `${e.clientY - rect.top - size / 2}px`;
      host.appendChild(span);
      const t = window.setTimeout(() => span.remove(), 600);
      cleanups.push(() => window.clearTimeout(t));
    };

    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    // `fx-ready` is deliberately left in place: removing it would strip the
    // hidden state from elements already revealed, and the layout's inline
    // script cannot put it back.
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
