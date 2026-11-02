# Traders Automatizados — Site Institucional

Site institucional multipágina da **Traders Automatizados**, publicado como site estático no Render. O projeto conta a história da empresa e apresenta com clareza duas áreas de atuação: tecnologia para estratégias de trade e desenvolvimento de software e automação para empresas.

**Site:** [www.tradersautomatizados.com.br](https://www.tradersautomatizados.com.br/)

**Repositório:** [netovysk1062/institucional](https://github.com/netovysk1062/institucional)

## O que foi desenvolvido

- Site institucional com seis páginas, navegação responsiva e página 404.
- Identidade oficial da Traders Automatizados, com logotipo e favicon fornecidos pela empresa.
- Design Dark Tech Premium e tema claro correspondente, usando azul elétrico, violeta, prata e grafite.
- Controle de tema em três modos: **Automático**, que acompanha o sistema, **Claro** e **Escuro**. A escolha manual é salva no navegador.
- Navegação mobile, controles de tema e estados de foco acessíveis por teclado.
- Efeitos sutis de entrada ao rolar a página, respeitando `prefers-reduced-motion`.
- SEO técnico: títulos e descrições por página, URL canônica, Open Graph, dados estruturados, sitemap, `robots.txt` e tratamento de rota 404.
- Cabeçalhos de segurança e regras de cache e redirecionamento documentados na configuração do Render.

A implementação do site institucional não altera a aplicação **NeuroLicence**, que é um produto e uma frente comercial apresentados pelo site.

## Áreas apresentadas

| Área | O que comunica | Destino principal |
|---|---|---|
| Tecnologia para trade | Automação de estratégias financeiras, com foco na metodologia FIMATHE e ferramentas para MetaTrader 5, incluindo FiboMat e CycleFX PRO | Página de vendas dos produtos |
| Tecnologia para empresas | Desenvolvimento de sistemas personalizados e automação de processos comerciais e empresariais, apresentada pela NeuroLicence | NeuroLicence |
| Ecossistema digital | Produtos, plataformas e canais próprios, incluindo o HUB do Parceiro | Plataforma do ecossistema |

O conteúdo institucional não inventa estudos de caso, resultados de clientes ou documentos jurídicos. Os documentos de termos e privacidade exibidos no site pertencem à NeuroLicence e são identificados separadamente.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Apresentação da empresa e direcionamento para as áreas de atuação |
| `/empresa/` | Origem, evolução e história institucional |
| `/ecossistema/` | Produtos, plataformas e acessos do ecossistema |
| `/projetos/` | Produtos e projetos próprios publicados |
| `/engenharia/` | Desenvolvimento de software e automação empresarial |
| `/contato/` | Canais institucionais e direcionamento comercial |
| `/404.html` | Página para rotas inexistentes |

## Tecnologias

- Astro 7 para geração estática multipágina.
- TypeScript 6.
- Tailwind CSS 4 integrado ao Vite.
- HTML, CSS e JavaScript sem framework adicional no cliente.

## Executar localmente

Requer Node.js e npm compatíveis com o `package-lock.json`.

```powershell
npm ci
npm run dev
```

O Astro informa no terminal o endereço local de desenvolvimento.

## Verificar e gerar o site

```powershell
npm run check
npm run build
npm run preview
```

O build estático é gerado em `dist/`.

## Validação

A implementação foi verificada com `npm run check`, `npm run build`, Playwright, axe-core e Lighthouse. A homologação cobriu os seis caminhos institucionais e a página 404, os temas claro e escuro, navegação por teclado e larguras de 320, 375, 768, 1024 e 1440 pixels. Foram registrados zero problemas de overflow horizontal ou violações axe nas verificações executadas.

O relatório de arquitetura, CSP, acessibilidade, Lighthouse, capturas e limitações está em [docs/TA-SITE-05-RELATORIO.md](docs/TA-SITE-05-RELATORIO.md). As evidências ficam em `docs/TA-SITE-05-Capturas/`.

## Estrutura principal

- `src/pages/` — as seis páginas e a rota 404.
- `src/components/` — Header, Footer, hero, diagrama do ecossistema, conteúdo e CTAs.
- `src/layouts/` — layout institucional e metadados compartilhados.
- `src/data/site.ts` — rotas, marca, e-mails, redes e destinos externos.
- `src/styles/global.css` — identidade visual, tokens de tema e estilos responsivos.
- `src/scripts/` — navegação mobile e efeitos de rolagem.
- `public/` — logotipo, favicon, recursos sociais, sitemap e `robots.txt`.
- `render.yaml` — configuração versionada para o Render Static Site.
- `docs/` — relatórios, evidências e documentação técnica.

## Publicação no Render

O `render.yaml` define um Static Site para o repositório `netovysk1062/institucional`, branch `main`, com:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`
- Cabeçalhos de segurança, cache para assets e regras de barra final nas rotas internas.

A configuração versionada atualmente declara `autoDeployTrigger: off`. A opção de deploy automático do painel Render pode ter configuração própria; confirme o estado no serviço antes de contar com publicação automática a cada push. Esta documentação não configura DNS, domínio ou painel do Render.

Consulte [docs/TA-SITE-03-IMPLANTACAO-RENDER.md](docs/TA-SITE-03-IMPLANTACAO-RENDER.md) para o checklist de implantação.

## Contatos e governança de conteúdo

- Contato institucional: `contato@tradersautomatizados.com.br`.
- Contato NeuroLicence: `sistemasneuro@tradersautomatizados.com.br`.
- Os links e destinos comerciais ficam centralizados em `src/data/site.ts`.
- Estudos de caso empresariais só devem ser incluídos com dados verificáveis e autorização de publicação.
- Não publique dados cadastrais ou documentos jurídicos da Traders Automatizados sem confirmação oficial. NeuroLicence e Traders Automatizados mantêm frentes e documentação próprias.
