# Relatório técnico — TA-SITE-02

Data: 02/11/2026  
Classificação: **PASS**

## Escopo aplicado

- A Home mantém o título “Engenharia que transforma ideias em tecnologia real.” e recebeu o direcionamento solicitado: “Da automação de estratégias financeiras ao desenvolvimento de sistemas empresariais. Conheça as soluções tecnológicas que construímos para diferentes mercados.”
- `/empresa/` registra a origem da Traders Automatizados na engenharia algorítmica e automação de estratégias de trading com foco inicial em FIMATHE. Também registra a evolução de mais de dois anos para engenharia de software e soluções empresariais, sem declarar que a atividade financeira foi encerrada.
- Home e `/ecossistema/` distinguem tecnologia financeira para traders, engenharia empresarial pela NeuroLicence e plataformas digitais próprias.
- NeuroLicence está identificada como marca especializada de soluções empresariais operada pela Traders Automatizados LTDA, sem sugerir pessoa jurídica separada.
- `/projetos/` organiza o portfólio em tecnologia financeira (FiboMat e CycleFX PRO), sistemas empresariais pela NeuroLicence e infraestrutura própria (TAPF e HUB do Parceiro). Não foram adicionados estudos de caso de clientes.
- `/engenharia/` mostra competências compartilhadas com aplicações diferentes: Full Stack, sistemas, APIs, bancos de dados e automação empresarial; MQL5, FIMATHE, Expert Advisors e MetaTrader 5; e plataformas próprias.
- `/contato/` encaminha empresas e traders para canais comerciais separados e reserva e-mail/Instagram para assuntos institucionais. O rodapé mantém termos e privacidade rotulados como documentos da NeuroLicence; nenhum documento jurídico institucional foi inventado.
- Header, rodapé, CTAs, descrições, títulos, metadados e dados estruturados foram ajustados para manter os destinos e escopos coerentes. O aviso de risco de trading foi mantido.

## Identidade e limites de publicação

- As cores, tipografia, componentes e direção Dark Tech Premium aprovados foram preservados. Os arquivos de marca não foram substituídos.
- As consultas de UI/UX Pro Max registradas em `docs/design-system.md` orientaram hierarquia, navegação e adaptação responsiva; recomendações genéricas de paleta permaneceram subordinadas à identidade oficial.
- `/favicon.ico` responde com `image/x-icon` e seu SHA-256 (`F8D7B7D95D801D3A5AB0E250A128938F597ABA7071606B2236F6CA2FEF5551A9`) coincide com o `favicon.ico` oficial fornecido.
- O logotipo oficial `public/assets/logo-160.webp` é usado no cabeçalho, rodapé e diagramas.
- O nome Traders Automatizados LTDA informado no escopo aparece em `/empresa/` e em `Organization` JSON-LD. CNPJ não foi publicado. A NeuroLicence continua identificada como marca, e seus termos e política de privacidade permanecem atribuídos a ela.
- Não foram publicados dados de clientes, resultados financeiros, métricas, certificações, conquistas ou documentos jurídicos sem evidência/autorização.

## Verificações executadas

### Build

- `npm run check`: **passou** — 22 arquivos, 0 erros, 0 avisos e 0 hints.
- `npm run build`: **passou** — 6 rotas estáticas geradas: Home, Empresa, Ecossistema, Projetos, Engenharia e Contato.

### Navegador e responsividade

Preview local validado em Playwright/Chromium: `http://localhost:4322/`.

As seis rotas foram verificadas em 320, 375, 768, 1024 e 1440 px, totalizando 30 combinações:

- Todas responderam HTTP 200; não houve overflow horizontal, título fora do espaço, overflow do cabeçalho ou erro JavaScript.
- Cada rota apresentou exatamente um H1, metadados próprios e estado ativo correto na navegação.
- Todos os destinos internos e âncoras encontrados foram validados; links externos com `target="_blank"` incluem `noopener noreferrer`.
- Os quatro cards de portfólio se alinham em duas colunas em tablet/desktop e uma coluna em larguras móveis.
- Diagrama e elementos gráficos permaneceram dentro do viewport. Capturas completas foram revisadas em 1440 px para as seis páginas; Home/Projetos e páginas representativas também foram inspecionadas em larguras móveis e tablet.
- Skip link: oculto inicialmente, visível após foco de teclado e funcional para `#conteudo`.
- Menu mobile: alcançável por Tab, abre com Enter, foca o primeiro link, avança por Tab, fecha com Escape e devolve foco ao botão. A ativação do link “Empresa” navegou para `/empresa/`.
- Canonicals e descrições são únicos por rota. `Organization`, `WebSite` e `WebPage` JSON-LD estão presentes, com `legalName` igual a Traders Automatizados LTDA.

### Canais, arquivos públicos e contraste

- NeuroLicence, plataforma de vendas, HUB do Parceiro, termos, privacidade e Instagram responderam HTTP 200 durante a verificação.
- `robots.txt`, `sitemap.xml`, `/favicon.ico`, `/assets/logo-160.webp` e `/og-cover.svg` responderam HTTP 200. O sitemap lista somente as seis rotas institucionais e o robots referencia o sitemap.
- Relações de contraste calculadas com os tokens de cor principais: texto `#F2F2F2` sobre canvas `#07080A` = 17,90:1; prata `#B3B3B3` sobre canvas = 9,56:1; texto `#858585` sobre canvas = 5,43:1; texto escuro `#07080A` sobre azul `#3080F0` = 5,22:1.
- Lighthouse e axe não foram executados: `axe-core`, `@axe-core/playwright` e Lighthouse não estão instalados local ou globalmente. Os testes responsivos, de teclado, estrutura, contrastes principais e links foram feitos com Playwright e verificações diretas.

## Restrições respeitadas

- A pasta/repositório `landing_page NEURO` permanece sem alterações (`git status --short` vazio).
- Não houve deploy, alteração de DNS, commit ou push remoto.

## Resultado

**PASS.** Os requisitos obrigatórios de conteúdo, separação de mercados, navegação, responsividade, identidade oficial, `npm run check` e `npm run build` foram atendidos. Lighthouse/axe ficam registrados como opcionais indisponíveis no ambiente, sem bloquear a homologação baseada nas verificações executadas.
