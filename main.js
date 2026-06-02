document.addEventListener("DOMContentLoaded", () => {
  initReducedMotion();
  initReadingProgress();
  initScrollReveal();
  animateHeroPipeline();
  initPipelineDiagram();
  initCopyButtons();
  initNavHighlight();
  initSmoothScroll();
  initNavScroll();
  initMobileNav();
  initBackToTop();
  initThemeToggle();
  handleInitialHash();

  if (typeof Prism !== "undefined") Prism.highlightAll();
});

// 1. Reduced Motion
// Checks prefers-reduced-motion and disables animations site-wide when requested.
function initReducedMotion() {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    document.documentElement.classList.add("reduced-motion");
  }
}

// 2. Reading Progress
// Tracks scroll depth and updates the reading progress bar width 0→100%.
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) return;

  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? Math.min((scrolled / total) * 100, 100) : 0;
    bar.style.width = pct + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// 3. Scroll Reveal  (was 2)
// Uses IntersectionObserver to add `.revealed` to `.reveal` elements as they enter the viewport.
// One-shot: observer disconnects from each element after it has been revealed.
function initScrollReveal() {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// 3. Hero Pipeline Animation
// Lights up `.hero-pipeline-step` elements one at a time in sequence, cycling infinitely.
// Pauses on hover and respects prefers-reduced-motion.
function animateHeroPipeline() {
  const steps = document.querySelectorAll(".hero-pipeline-step");
  if (!steps.length) return;

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) {
    steps[steps.length - 1].classList.add("active");
    return;
  }

  let current = 0;
  let paused = false;
  let timerId = null;

  const pipeline = document.querySelector(".hero-pipeline");
  if (pipeline) {
    pipeline.addEventListener("mouseenter", () => {
      paused = true;
    });
    pipeline.addEventListener("mouseleave", () => {
      paused = false;
    });
  }

  function next() {
    if (!paused) {
      steps.forEach((s) => s.classList.remove("active"));
      steps[current].classList.add("active");
      current = (current + 1) % steps.length;
    }
    const delay = current === 0 && !paused ? 2200 : 1200;
    timerId = setTimeout(next, delay);
  }

  timerId = setTimeout(next, 800);
}

// 4. Interactive Pipeline Diagram
// Clicking a `.pipeline-step` activates it and shows its detail panel.
// Clicking an already-active step toggles the detail panel off.
// Supports arrow-key navigation for accessibility.
function initPipelineDiagram() {
  const steps = Array.from(
    document.querySelectorAll(".pipeline-diagram .pipeline-step"),
  );
  const detail = document.querySelector(".pipeline-detail");
  const detailTitle = document.querySelector(".pipeline-detail-title");
  const detailBody = document.querySelector(".pipeline-detail-body");

  if (!steps.length || !detail) return;

  function activate(step, allowScroll = true) {
    const isActive = step.classList.contains("active");
    steps.forEach((s) => {
      s.classList.remove("active");
      s.setAttribute("aria-selected", "false");
    });

    if (isActive) {
      detail.classList.remove("visible");
    } else {
      step.classList.add("active");
      step.setAttribute("aria-selected", "true");
      detailTitle.textContent = step.dataset.title || "";
      detailBody.textContent = step.dataset.details || "";
      detail.classList.add("visible");
      if (allowScroll) {
        detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  steps.forEach((step, i) => {
    step.setAttribute("role", "button");
    step.setAttribute("tabindex", "0");
    step.setAttribute("aria-selected", "false");

    step.addEventListener("click", () => activate(step));

    step.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate(step);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = steps[i + 1];
        if (next) {
          next.focus();
          activate(next);
        }
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = steps[i - 1];
        if (prev) {
          prev.focus();
          activate(prev);
        }
      }
    });
  });

  if (steps[0]) setTimeout(() => activate(steps[0], false), 1200);
}

// 5. Copy-to-Clipboard
// Each `.copy-btn` reads code from the sibling `<pre><code>` inside `.code-block`.
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codeBlock = btn.closest(".code-block");
      const code = codeBlock?.querySelector("pre code");
      if (!code) return;

      const text = code.innerText || code.textContent || "";

      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 2000);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        btn.textContent = "Copied!";
        setTimeout(() => {
          btn.textContent = "Copy";
        }, 2000);
      }
    });
  });
}

// 6. Active Nav Highlight
// Tracks which section is currently visible and highlights the matching nav link.
function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    { threshold: 0.25 },
  );

  sections.forEach((section) => observer.observe(section));
}

// 7. Smooth Scroll
// Intercepts anchor clicks and uses scrollIntoView for consistent behavior.
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL without triggering scroll
        history.pushState(null, "", href);
      }
    });
  });
}

// 8. Nav Shadow on Scroll
// Adds `.scrolled` class to nav when page scrolled more than 10px.
function initNavScroll() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;
  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 10);
    },
    { passive: true },
  );
}

// 9. Back to Top
// Shows a fixed button once the user scrolls past the hero (~600px).
// Click scrolls to top; focus returns to the skip link.
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

  window.addEventListener(
    "scroll",
    () => {
      const visible = window.scrollY > 600;
      btn.classList.toggle("visible", visible);
      btn.setAttribute("aria-hidden", String(!visible));
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: mq.matches ? "instant" : "smooth" });
    // Return focus to the start of the page
    const skipLink = document.querySelector(".skip-link");
    const target = skipLink || document.querySelector("h1") || document.body;
    target.focus({ preventScroll: true });
  });
}

// 10. Initial Hash Scroll / Reload Scroll Restore
// On fresh navigation: smoothly scroll to the hash target.
// On reload: restore the exact saved scroll position from sessionStorage.
function handleInitialHash() {
  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = nav && nav.type === "reload";

  if (isReload) {
    const saved = sessionStorage.getItem("_pipelineScrollY");
    if (saved !== null) {
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
    }
    return;
  }

  const hash = window.location.hash;
  if (!hash || hash === "#") return;
  const target = document.querySelector(hash);
  if (!target) return;
  setTimeout(() => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 120);
}

// Continuously save scroll position so reload can restore it exactly.
window.addEventListener(
  "scroll",
  () => sessionStorage.setItem("_pipelineScrollY", window.scrollY),
  { passive: true },
);

// 11. Mobile Nav Drawer
// Hamburger button toggles a slide-in drawer. Overlay click closes it.
// Implements a full focus trap while the drawer is open (WCAG 2.1.1, 2.4.3).
function initMobileNav() {
  const hamburger = document.querySelector(".nav-hamburger");
  const drawer = document.querySelector(".nav-drawer");
  const overlay = document.querySelector(".nav-overlay");
  const closeBtn = document.querySelector(".nav-drawer-close");

  if (!hamburger || !drawer || !overlay) return;

  let trapHandler = null;

  function getFocusable() {
    return Array.from(
      drawer.querySelectorAll('button, a[href], [tabindex="0"]'),
    ).filter((el) => !el.hasAttribute("disabled") && !el.closest("[hidden]"));
  }

  function buildTrapHandler() {
    return function trapFocus(e) {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (!focusable.length) {
        e.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
  }

  function openDrawer() {
    drawer.hidden = false;
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
    hamburger.setAttribute("aria-expanded", "true");

    // Engage focus trap
    trapHandler = buildTrapHandler();
    drawer.addEventListener("keydown", trapHandler);

    // Move focus into the drawer
    const firstFocusable = getFocusable()[0];
    requestAnimationFrame(() => firstFocusable?.focus());
  }

  function closeDrawer() {
    // Release focus trap
    if (trapHandler) {
      drawer.removeEventListener("keydown", trapHandler);
      trapHandler = null;
    }
    drawer.hidden = true;
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
  }

  hamburger.addEventListener("click", () => {
    if (!drawer.hidden) closeDrawer();
    else openDrawer();
  });

  overlay.addEventListener("click", closeDrawer);
  closeBtn?.addEventListener("click", closeDrawer);

  drawer.querySelectorAll(".drawer-link").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Close on Escape from anywhere on the page
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !drawer.hidden) closeDrawer();
  });
}

// 12. Theme Toggle
// Persists theme preference to localStorage. Respects prefers-color-scheme
// when no saved preference exists. Toggle lives in the nav bar.
function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function resolvedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    btn.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark mode" : "Switch to light mode",
    );
  }

  btn.addEventListener("click", () => {
    const next = resolvedTheme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });

  // Sync if OS preference changes and no manual override is saved
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", () => {
      if (!localStorage.getItem("theme")) applyTheme(resolvedTheme());
    });

  // Set initial aria-label
  applyTheme(resolvedTheme());
}
