export const siteConfig = {
  name: "Traders Automatizados",
  legalName: "Traders Automatizados LTDA",
  url: "https://www.tradersautomatizados.com.br/",
  description:
    "Soluções da Traders Automatizados para automatizar estratégias de trading e processos empresariais.",
  brand: {
    name: "NeuroLicence",
    url: "https://neurolicence.com.br/",
  },
} as const;

export const siteRoutes = {
  home: "/",
  company: "/empresa/",
  ecosystem: "/ecossistema/",
  projects: "/projetos/",
  engineering: "/engenharia/",
  contact: "/contato/",
} as const;

export const sitePages = [
  { href: siteRoutes.home, label: "Início" },
  { href: siteRoutes.company, label: "Empresa" },
  { href: siteRoutes.ecosystem, label: "Ecossistema" },
  { href: siteRoutes.projects, label: "Projetos" },
  { href: siteRoutes.engineering, label: "Engenharia" },
  { href: siteRoutes.contact, label: "Contato" },
] as const;

export const siteLinks = {
  neuroLicence: siteConfig.brand.url,
  tradingProducts: "https://vendas.tradersautomatizados.com.br/",
  partnerHub: "https://app.tradersautomatizados.com.br/",
  terms: "https://neurolicence.com.br/termos",
  privacy: "https://neurolicence.com.br/privacidade",
  neuroLicenceEmail: "sistemasneuro@tradersautomatizados.com.br",
  institutionalEmail: "contato@tradersautomatizados.com.br",
  instagram: "https://www.instagram.com/tradersautomatizados/",
} as const;
