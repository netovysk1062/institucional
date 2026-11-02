# Traders Automatizados — Site Institucional

Site institucional estático multipáginas da Traders Automatizados. A Home apresenta a marca e direciona para páginas de empresa, ecossistema, projetos, engenharia e contato.

## Requisitos

- Node.js e npm compatíveis com a versão de Astro registrada no package-lock.json.

## Instalação e desenvolvimento

~~~powershell
npm ci
npm run dev
~~~

O servidor local anuncia a URL de desenvolvimento no terminal.

## Verificação e build

~~~powershell
npm run check
npm run build
npm run preview
~~~

Astro gera o site estático no diretório dist.

## Render Static Site

O projeto inclui render.yaml com o runtime estático, build command npm ci && npm run build e publicação de dist. O mesmo build pode ser configurado no painel do Render. Nenhum deploy foi efetuado nesta sprint.

## Arquitetura técnica

- Astro 7 gera o site estático; TypeScript 6 e Tailwind CSS 4 dão suporte ao código e aos estilos.
- O roteamento é nativo do Astro: `/`, `/empresa/`, `/ecossistema/`, `/projetos/`, `/engenharia/` e `/contato/` são páginas estáticas independentes.
- Header, Footer, layout, tokens visuais, navegação e introdução de página são componentes reutilizados.
- A navegação usa links HTML, indica a página ativa e funciona sem client-side routing. O JavaScript no cliente fica restrito ao menu mobile.
- As tecnologias usadas para construir este site ficam documentadas aqui e em package.json; a interface institucional prioriza serviços, produtos e resultados de negócio.
- O sitemap inclui apenas as seis rotas publicáveis; robots.txt permite indexação em produção.
- O portfólio usa produtos e plataformas próprios verificados. Não apresenta estudos de caso de clientes sem dados e autorização de publicação.

## Estrutura

- src/layouts: layout e metadados globais.
- src/components: navegação, hero, diagrama, empresa, ecossistema, portfólio de produtos, capacidades, introdução multipágina, direcionamento comercial e footer.
- src/data/site.ts: marca, rotas publicáveis, navegação, canais e destinos externos.
- src/pages: Home e rotas estáticas de empresa, ecossistema, projetos, engenharia e contato.
- src/styles: tokens, identidade, componentes visuais e responsividade.
- src/scripts: comportamento acessível do menu mobile.
- public: favicon oficial ICO, logotipo WebP, cartão Open Graph com a marca oficial, robots e sitemap.
- design-system: sistema de marca atualizado e regras específicas da Home.
- docs: decisões de design, diagnóstico da arquitetura NeuroLicence, validação e pendência de identidade jurídica.

## Conteúdo e canais

- Tecnologia financeira: engenharia algorítmica, MQL5, FIMATHE, Expert Advisors e MetaTrader 5; FiboMat e CycleFX PRO são direcionados à plataforma de vendas.
- Engenharia empresarial: sistemas personalizados, aplicações web/SaaS, automação operacional e integrações são direcionados à NeuroLicence, marca especializada operada pela Traders Automatizados LTDA.
- HUB do Parceiro: plataforma do ecossistema.
- TAPF e HUB do Parceiro: infraestrutura digital própria, apresentada separadamente das duas especialidades de mercado.
- Minibar Castro's não aparece no portfólio enquanto não houver autorização de publicação.
- Mensagens de trading incluem aviso de risco e não fazem promessa de resultado.

## Publicação e domínio

A implementação não altera DNS, domínio, aplicações existentes ou checkout. A URL institucional e as rotas externas ficam centralizadas em src/data/site.ts e nos metadados de astro.config.mjs.

## Verificação da TA-SITE-02

Consulte [docs/validation-ta-site-02.md](docs/validation-ta-site-02.md) para os resultados de check, build, rotas, responsividade, navegação, SEO e acessibilidade desta sprint.

## Revisão editorial TA-SITE-02-R1

Consulte [docs/editorial-audit.md](docs/editorial-audit.md) para o diagnóstico e a estratégia editorial, e [docs/validation-ta-site-02-r1.md](docs/validation-ta-site-02-r1.md) para as alterações, resultados de homologação e capturas de evidência.

## Auditoria técnica TA-SITE-03

Consulte [docs/TA-SITE-03-RELATORIO-FINAL.md](docs/TA-SITE-03-RELATORIO-FINAL.md) para resultados Lighthouse, axe-core, Playwright, segurança, SEO e build; [docs/TA-SITE-03-IMPLANTACAO-RENDER.md](docs/TA-SITE-03-IMPLANTACAO-RENDER.md) contém o checklist para configurar o Static Site manualmente no Render. Evidências visuais e JSON ficam em `docs/evidence/ta-site-03/`. Nenhum deploy ou alteração DNS foi efetuado.

## Identificação jurídica

O nome Traders Automatizados LTDA informado no escopo é usado na página Empresa e nos dados estruturados. O CNPJ não é publicado sem confirmação cadastral oficial. Os termos e a política de privacidade no rodapé pertencem à NeuroLicence e permanecem identificados dessa forma. Consulte docs/identity-review.md.
