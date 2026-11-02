export function setupNavigation() {
  const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const menu = document.querySelector<HTMLElement>("#menu-principal");

  if (!toggle || !menu) return;

  const closeMenu = (returnFocus = false) => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    menu.classList.remove("is-open");

    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
    menu.classList.toggle("is-open", !isExpanded);

    if (!isExpanded) {
      menu.querySelector<HTMLAnchorElement>("a")?.focus();
    }
  });

  menu.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu(true);
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 960px)").matches) closeMenu();
  });
}

