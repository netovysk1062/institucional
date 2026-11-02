const revealTargetsSelector = [
  ".company-section",
  ".ecosystem-section",
  ".experience-section",
  ".engineering-section",
  ".contact-section",
  ".route-section",
].join(",");

export function setupScrollReveal() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const targets = document.querySelectorAll<HTMLElement>(revealTargetsSelector);
  const firstViewportBoundary = window.innerHeight * 0.88;

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
      threshold: 0.04,
    },
  );

  targets.forEach((target) => {
    if (target.getBoundingClientRect().top > firstViewportBoundary) {
      observer.observe(target);
    }
  });
}
