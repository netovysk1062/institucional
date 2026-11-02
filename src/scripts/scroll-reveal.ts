const sectionTargetsSelector = [
  ".company-section",
  ".ecosystem-section",
  ".experience-section",
  ".engineering-section",
  ".contact-section",
  ".route-section",
].join(",");
const cardTargetsSelector = ".ecosystem-card,.experience-card,.project-card,.technology-card";

export function setupScrollReveal() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const sections = Array.from(document.querySelectorAll<HTMLElement>(sectionTargetsSelector));
  const cards = Array.from(document.querySelectorAll<HTMLElement>(cardTargetsSelector));
  const targets = [
    ...sections.filter((section) => !section.querySelector(cardTargetsSelector)),
    ...cards,
  ];
  const firstViewportBoundary = window.innerHeight * 0.92;

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const target = entry.target as HTMLElement;
        target.classList.add("scroll-entering");
        target.addEventListener(
          "animationend",
          () => target.classList.remove("scroll-entering"),
          { once: true },
        );
        observer.unobserve(target);
      });
    },
    {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.08,
    },
  );

  targets.forEach((target) => {
    if (target.matches(cardTargetsSelector)) {
      const siblings = Array.from(target.parentElement?.children ?? []).filter((element) =>
        element.matches(cardTargetsSelector),
      );
      const siblingIndex = siblings.indexOf(target);

      if (siblingIndex > 0) {
        target.style.setProperty("--reveal-delay", `${Math.min(siblingIndex * 90, 270)}ms`);
      }
    }

    if (target.getBoundingClientRect().top > firstViewportBoundary) {
      observer.observe(target);
    }
  });
}
