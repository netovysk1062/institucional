# TA-SITE-03 — Checklist de configuração manual no Render

Este roteiro prepara a implantação do site institucional sem executar deploy ou alterar DNS. A configuração deve usar somente o repositório institucional e manter os outros serviços da empresa intactos.

## 1. Criar o Static Site

- [ ] Em Render, crie um **Static Site** conectado a `https://github.com/netovysk1062/institucional.git`.
- [ ] Selecione a branch `main`.
- [ ] Deixe **Root Directory** vazio (raiz do repositório).
- [ ] Use **Build Command**: `npm ci && npm run build`.
- [ ] Use **Publish Directory**: `dist`.
- [ ] O projeto não requer variáveis de ambiente de produção.
- [ ] Mantenha auto-deploy desligado durante a validação inicial; `render.yaml` define `autoDeployTrigger: off`.
- [ ] Aplique os cabeçalhos e redirects de `render.yaml` por Blueprint ou cadastre as mesmas regras no Dashboard.
- [ ] Não adicione domínios personalizados nesta primeira validação.

O projeto é Astro estático (`output: "static"`), sem rotas de servidor; o preset documentado pelo Render usa Static Site e `dist`. O Render entrega sites estáticos por CDN com TLS gerenciado, redirecionamento HTTP para HTTPS, Brotli e HTTP/2. Esses recursos ainda precisam ser verificados no serviço depois da configuração. Consulte a [documentação Astro do Render](https://render.com/docs/deploy-astro) e [Static Sites](https://render.com/docs/static-sites).

## 2. Validar no domínio temporário `onrender.com`

- [ ] Confirmar build com `npm ci && npm run build` e saída em `dist`.
- [ ] Abrir `/`, `/empresa/`, `/ecossistema/`, `/projetos/`, `/engenharia/` e `/contato/`.
- [ ] Confirmar cada rota em 200 e navegação entre páginas; testar viewport mobile e teclado.
- [ ] Abrir uma rota inexistente: confirmar status 404, página própria e `noindex, follow`.
- [ ] Conferir `robots.txt`, `sitemap.xml`, favicon e imagem Open Graph.
- [ ] Conferir o menu mobile e Escape sob a CSP aplicada.
- [ ] Verificar as respostas HTTP para `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.
- [ ] Confirmar os cabeçalhos de cache em HTML, `/_astro/*`, `/fonts/*`, `/assets/*`, favicon e Open Graph.
- [ ] Confirmar negociação Brotli, HTTP/2 e certificado TLS no navegador e nas ferramentas de rede.
- [ ] Conferir os redirects das URLs sem barra final (`/empresa`, `/ecossistema`, `/projetos`, `/engenharia`, `/contato`) e garantir que a barra final permaneça no destino.
- [ ] Repetir um Lighthouse em desktop/mobile e um teste Playwright no endereço público do Render.

As respostas do preview local e os resultados deste relatório não substituem esta validação no CDN real.

## 3. Domínio e preservação dos serviços existentes

- [ ] Confirmar qual serviço deve receber `www.tradersautomatizados.com.br` e qual deve responder pelo domínio raiz.
- [ ] Mapear os serviços existentes antes de conectar domínio: institucional, NeuroLicence, vendas e app.
- [ ] Só após validar o `onrender.com`, decidir a associação de domínio e coordenar a mudança com o responsável pelo DNS.
- [ ] Preservar registros e subdomínios usados por vendas, app, NeuroLicence, e-mail e demais serviços ativos.
- [ ] Não remover registros DNS existentes sem identificar cada destino.
- [ ] Depois da mudança autorizada, confirmar os canonicals em `https://www.tradersautomatizados.com.br/`, redirects root/`www`, DNS propagado e HTTPS.

**Atenção à política de domínio do Render:** ao adicionar um domínio `www`, o Render também adiciona o root e o redireciona para `www`; ao adicionar o root, adiciona o `www` e redireciona para o root. A política precisa combinar com a arquitetura atualmente em produção antes da edição de DNS. Consulte [Custom Domains](https://render.com/docs/custom-domains).

## 4. Cabeçalhos e cache configurados

`render.yaml` contém 17 regras de cabeçalho:

- Segurança: CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`.
- HTML das rotas publicadas sem cache persistente.
- Assets versionados em `/_astro/*` e `/fonts/*` com cache imutável de um ano.
- `/assets/*`, favicon e Open Graph com cache de um dia e revalidação stale-while-revalidate.

A CSP inclui o hash do pequeno script inline de navegação gerado no build Astro. Se o script de navegação mudar, gere um novo build, recalcule o SHA-256 do conteúdo inline e atualize `script-src` antes da publicação. A simulação Playwright atual confirmou que menu e fontes continuam funcionais sob essa política.

## 5. Rollback e finalização

- [ ] Antes de alterar domínio, registrar os destinos DNS atuais e a página/serviço atual do domínio raiz.
- [ ] Manter o domínio temporário do Render disponível durante a validação.
- [ ] Se a configuração ou validação falhar, não fazer a migração de DNS; ajustar o Static Site e repetir os testes no `onrender.com`.
- [ ] Após estabilizar, definir quando ligar auto-deploy e reexecutar build, links, segurança, cabeçalhos e SEO.

Nenhuma das etapas deste checklist foi executada nesta sprint. O código e a configuração estão preparados; a criação do serviço e qualquer migração de domínio permanecem sob sua configuração manual.
