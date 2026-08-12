"use client";

import { useEffect } from "react";

/**
 * All of the page's motion, in one place:
 *
 *  - `[data-anim]`      reveal-on-scroll (fade / slide / zoom, staggered)
 *  - `[data-count]`     count-up numbers, with `data-decimals` / `data-suffix`
 *  - `[data-w]`         funnel bar widths (percent)
 *  - `[data-parallax]`  gentle scroll offset, applied via the `translate`
 *                       property so it composes with the reveal `transform`
 *  - `[data-ripple]`    material-style click ripple on buttons
 *  - `#cursorGlow`      pointer-following ambient glow
 *
 * Rendered once from the page. Every element it touches is server-rendered
 * first, so this only layers motion on top of markup that already works.
 *
 * Everything here must survive being torn down and set up again: React
 * StrictMode (on by default in dev) mounts, cleans up, then mounts a second
 * time. So progress is tracked in an effect-scoped WeakSet rather than on the
 * DOM, and `fx-ready` is (re-)added here rather than only by the inline script
 * in the layout — that script fires once, before paint, and never again.
 */
export default function ScrollFx() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = new Set<number>();
    const cleanups: Array<() => void> = [];
    const activated = new WeakSet<HTMLElement>();

    // Idempotent: arms the reveal CSS on first mount and re-arms on remount.
    root.classList.add("fx-ready");

    const raf = (fn: FrameRequestCallback) => {
      const id = requestAnimationFrame((t) => {
        frames.delete(id);
        fn(t);
      });
      frames.add(id);
      return id;
    };

    /* ---------------------------------------------------------- counters */

    const format = (value: number, decimals: number) =>
      value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? 0);
      const decimals = Number(el.dataset.decimals ?? 0);
      const suffix = el.dataset.suffix ?? "";

      if (reduced) {
        el.textContent = format(target, decimals) + suffix;
        return;
      }

      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(target * eased, decimals) + suffix;
        if (p < 1) raf(tick);
      };
      raf(tick);
    };

    /* ------------------------------------------------------- reveal / IO */

    const fill = (el: HTMLElement) => {
      if (el.dataset.count !== undefined) countUp(el);
      if (el.dataset.w !== undefined) el.style.width = `${el.dataset.w}%`;
    };

    const activate = (el: HTMLElement) => {
      if (activated.has(el)) return;
      activated.add(el);

      el.classList.add("is-in");
      fill(el);

      // Children animate on their parent's cue, staggered slightly. Bars have
      // zero area until filled, so IntersectionObserver never fires on them
      // directly — the surrounding `[data-anim]` block is their cue.
      const kids = el.querySelectorAll<HTMLElement>("[data-count],[data-w]");
      kids.forEach((kid, i) => {
        if (activated.has(kid)) return;
        activated.add(kid);
        const t = window.setTimeout(() => fill(kid), reduced ? 0 : i * 70);
        cleanups.push(() => window.clearTimeout(t));
      });
    };

    /* ----------------------------------------------------------- stagger */

    // Elementor cascades sibling entrances with an animation delay rather than
    // firing a whole grid at once. Same idea: every group of `[data-anim]`
    // siblings gets an incrementing delay, capped so long grids don't drag.
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

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-anim],[data-count],[data-w]"),
    );

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(activate);
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            activate(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      targets.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    /* ---------------------------------------------------------- parallax */

    const parallaxEls = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    if (parallaxEls.length && !reduced) {
      let queued = false;
      const applyParallax = () => {
        queued = false;
        const mid = window.innerHeight / 2;
        parallaxEls.forEach((el) => {
          const speed = Number(el.dataset.parallax ?? 0);
          const rect = el.getBoundingClientRect();
          const offset = (mid - (rect.top + rect.height / 2)) * speed;
          el.style.translate = `0 ${offset.toFixed(1)}px`;
        });
      };
      const onScroll = () => {
        if (queued) return;
        queued = true;
        raf(applyParallax);
      };

      applyParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });
    }

    /* ------------------------------------------------------- cursor glow */

    const glow = document.getElementById("cursorGlow");
    if (glow && window.matchMedia("(pointer: fine)").matches) {
      const onMove = (e: PointerEvent) => {
        glow.style.opacity = "1";
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      };
      const onLeave = () => {
        glow.style.opacity = "0";
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerleave", onLeave);
      });
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
      window.setTimeout(() => span.remove(), 600);
    };

    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    /* ----------------------------------------------------------- cleanup */

    // `fx-ready` is deliberately left in place. Removing it would strip the
    // hidden state from elements that have already been revealed, and the
    // layout's inline script cannot put it back.
    return () => {
      cleanups.forEach((fn) => fn());
      frames.forEach((id) => cancelAnimationFrame(id));
    };
  }, []);

  return <div id="cursorGlow" aria-hidden="true" />;
}
