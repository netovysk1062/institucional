# TA-SITE-03 — Auditoria Técnica e Preparação para Produção

**Projeto:** Site institucional Traders Automatizados  
**Data:** 2 de novembro de 2026  
**Escopo:** projeto Astro institucional em `landing_page Traders Automatizados`  
**Veredito TA-SITE-03:** **PASS — preparação técnica local**  
**Publicação no Render:** pendente da configuração manual do serviço e da decisão de domínio.

## 1. Diagnóstico inicial

A auditoria foi executada no preview estático local em `http://localhost:4322/`, antes de qualquer deploy. O projeto já tinha seis páginas editoriais, metadados, sitemap e identidade visual aprovados. O diagnóstico encontrou solicitações de fontes externas do Google Fonts, instabilidade de layout atribuída à troca tardia de fontes (CLS máximo medido de 0,166), nomes acessíveis divergentes em links e ausência de uma página 404 própria.

Na primeira medição Lighthouse, a performance variou de 93 a 100 pontos; LCP ficou entre 481 e 1.496 ms e o peso transferido da navegação inicial entre 143,8 e 151,6 KiB. A auditoria axe também indicou problemas de nome acessível e grupos com rótulos ARIA sem semântica de grupo. O repositório GitHub indicado estava vazio no início da execução e a pasta do projeto ainda não tinha metadados Git.

## 2. Otimizações implementadas

- Removidas as requisições a Google Fonts. Open Sans e Poppins agora são servidas localmente em WOFF2, com licenças OFL incluídas, `font-display: swap` e preload dos arquivos usados na primeira tela.
- Corrigidos nomes acessíveis de links de marca e do link “ROLE PARA EXPLORAR”. O link de exploração passou a ter altura mínima de 24 px.
- Acrescentado `role="group"` nos conjuntos de frentes, tecnologias e recursos que já tinham nomes ARIA.
- Adicionado `tabindex="-1"` ao `<main>` das seis páginas e da página 404 para que “Pular para o conteúdo” também transfira foco ao destino.
- Criada página 404 própria. Ela responde com status 404 no preview, usa `noindex, follow` e não entra no sitemap.
- Preparado `render.yaml` para Static Site com publicação de `dist`, cache por tipo de recurso, cabeçalhos de segurança e cinco regras de normalização de URL sem barra final para barra final. O deploy automático está desligado e nenhum domínio foi associado.
- A identidade oficial, conteúdo aprovado, destinos comerciais, seis páginas e arquitetura Astro foram preservados. A NeuroLicence não foi modificada.

## 3. Resultados Lighthouse

Foram executadas 12 medições com Lighthouse 13.6.0 e Headless Chrome 156: seis páginas em desktop e mobile. Os detalhes estão em [lighthouse-summary.json](evidence/ta-site-03/lighthouse-summary.json).

| Página | Viewport | Performance | Acessibilidade | Boas práticas | SEO | LCP | CLS | TBT | Transferência inicial |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Home | Desktop | 100 | 100 | 100 | 100 | 219 ms | 0,000 | 0 ms | 81,3 KiB |
| Home | Mobile | 100 | 100 | 100 | 100 | 808 ms | 0,000 | 54 ms | 81,3 KiB |
| Empresa | Desktop | 100 | 100 | 100 | 100 | 216 ms | 0,003 | 0 ms | 87,9 KiB |
| Empresa | Mobile | 100 | 100 | 100 | 100 | 758 ms | 0,000 | 63 ms | 87,9 KiB |
| Ecossistema | Desktop | 100 | 100 | 100 | 100 | 228 ms | 0,000 | 0 ms | 80,6 KiB |
| Ecossistema | Mobile | 100 | 100 | 100 | 100 | 786 ms | 0,000 | 40 ms | 80,6 KiB |
| Projetos | Desktop | 100 | 100 | 100 | 100 | 241 ms | 0,000 | 0 ms | 80,9 KiB |
| Projetos | Mobile | 100 | 100 | 100 | 100 | 816 ms | 0,000 | 12 ms | 80,9 KiB |
| Engenharia | Desktop | 100 | 100 | 100 | 100 | 225 ms | 0,000 | 0 ms | 80,5 KiB |
| Engenharia | Mobile | 100 | 100 | 100 | 100 | 818 ms | 0,000 | 74 ms | 80,5 KiB |
| Contato | Desktop | 100 | 100 | 100 | 100 | 235 ms | 0,000 | 0 ms | 79,9 KiB |
| Contato | Mobile | 100 | 100 | 100 | 100 | 826 ms | 0,000 | 0 ms | 79,9 KiB |

Após as correções, a faixa de transferência inicial passou a 79,9–87,9 KiB; o CLS máximo medido caiu para 0,003. Cada navegação inicial fez 6 ou 7 requisições. A página carrega 63,5 KiB de fontes na amostra inicial; os arquivos WOFF2 completos somam 114.924 bytes no disco. O CSS de primeira carga mediu aproximadamente 9,3 KiB e a imagem principal transferida aproximadamente 4 KiB. O JavaScript pequeno do menu está incorporado ao HTML, por isso aparece como 0 KiB separado na soma por tipo do Lighthouse.

O Lighthouse ainda classifica a folha CSS local como recurso que bloqueia a renderização em uma amostra mobile. É a folha visual necessária ao primeiro desenho, com cerca de 9,3 KiB; não foram identificadas regras CSS ou JavaScript sem uso pelo relatório. Os diagnósticos de fontes, imagens e CLS não registraram economia material pendente.

**Limite da medição:** os resultados são do preview local com throttling simulado e não representam dados de campo nem o CDN do Render. Cache, compressão Brotli, HTTP/2, TLS e cabeçalhos configurados precisam ser confirmados no serviço Render depois que você o criar.

## 4. Acessibilidade

- axe-core 4.14.0 executado em 12 combinações (seis páginas em 375 px e 1440 px): **0 violações**.
- O axe marcou `color-contrast` como *incomplete* nas 12 combinações, pois não consegue calcular automaticamente o fundo em textos sobre gradientes e pseudo-elementos. Isso não é uma violação confirmada. A conferência numérica manual desses elementos permanece recomendada; as capturas abaixo permitem revisar cada página.
- Playwright percorreu seis páginas em 320, 375, 768, 1024 e 1440 px (30 combinações): todos os status foram 200, sem overflow horizontal, sem rota interna/âncora quebrada, com um H1 por página, alt presente em todas as imagens e sem links externos inseguros.
- Teclado: o link de salto fica oculto antes do foco, aparece ao receber foco e transfere o foco para `#conteudo`; o menu abre por teclado, move foco para a primeira opção, fecha com Escape e devolve foco ao botão.
- Movimento reduzido: a preferência `prefers-reduced-motion` foi detectada e reduziu transições/animações a 0,01 ms.
- A verificação customizada não encontrou alvos não inline menores que 24 × 24 px. O link de e-mail no parágrafo de contato mede 19 px de altura e permanece como link de texto inline.

## 5. Segurança e integridade

- `npm audit`: 0 vulnerabilidades informativas, baixas, moderadas, altas ou críticas. `npm audit --omit=dev`: também 0.
- A varredura de padrões conhecidos de credenciais não encontrou candidatos em `src`, `public` ou `docs`; não há arquivos `.env` no projeto e o `.gitignore` exclui `.env*`, `node_modules`, `dist` e `.astro`.
- Os recursos da interface são locais. A simulação da CSP em seis páginas e na 404 não gerou erros de console, falhas de recursos ou pedidos de terceiros; as fontes abriram e o menu permaneceu funcional.
- `render.yaml` define `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` e CSP restritiva. A CSP permite o hash SHA-256 do script inline de navegação gerado pelo Astro. Se o código de navegação mudar, recalcule o hash do HTML final e atualize o valor em `render.yaml`.
- Cache configurado: arquivos versionados em `/_astro/*` e `/fonts/*` por um ano; `/assets/*`, favicon e Open Graph por um dia com revalidação; páginas HTML conhecidas sem cache persistente.
- Estes cabeçalhos foram simulados localmente e configurados no Blueprint; ainda não foram observados em respostas HTTP de um serviço Render ativo.

## 6. SEO e indexação

- As seis páginas têm títulos e meta descriptions próprios, seis URLs canônicas distintas em `https://www.tradersautomatizados.com.br/`, metadados Open Graph/Twitter e JSON-LD válido.
- `robots.txt` e `sitemap.xml` respondem 200 no preview. O sitemap lista as seis páginas indexáveis; a 404 não aparece nele.
- As seis rotas de conteúdo usam `index, follow`; somente a página 404 usa `noindex, follow`.
- Treze destinos internos únicos foram verificados, sem links quebrados. Os destinos externos verificados responderam 200 no momento do teste: NeuroLicence, vendas, HUB do Parceiro, termos, privacidade e Instagram.
- Não foram encontradas duplicações de title ou description. Os canonicals continuam no domínio planejado; nenhum domínio ou DNS foi alterado nesta etapa.

## 7. Evidências visuais e relatórios de automação

Capturas completas foram registradas a 1440 px e 375 px para cada página, além da página 404 nas mesmas larguras:

- Home: [1440 px](evidence/ta-site-03/home-1440.png) · [375 px](evidence/ta-site-03/home-375.png)
- Empresa: [1440 px](evidence/ta-site-03/empresa-1440.png) · [375 px](evidence/ta-site-03/empresa-375.png)
- Ecossistema: [1440 px](evidence/ta-site-03/ecossistema-1440.png) · [375 px](evidence/ta-site-03/ecossistema-375.png)
- Projetos: [1440 px](evidence/ta-site-03/projetos-1440.png) · [375 px](evidence/ta-site-03/projetos-375.png)
- Engenharia: [1440 px](evidence/ta-site-03/engenharia-1440.png) · [375 px](evidence/ta-site-03/engenharia-375.png)
- Contato: [1440 px](evidence/ta-site-03/contato-1440.png) · [375 px](evidence/ta-site-03/contato-375.png)
- 404: [1440 px](evidence/ta-site-03/404-1440.png) · [375 px](evidence/ta-site-03/404-375.png)
- [Resultados Playwright + axe](evidence/ta-site-03/playwright-audit.json) · [links, 404 e recursos estáticos](evidence/ta-site-03/internal-and-404-audit.json) · [sumário Lighthouse](evidence/ta-site-03/lighthouse-summary.json)

## 8. Build e verificações finais

| Verificação | Resultado |
|---|---|
| `npm run check` | PASS — 23 arquivos, 0 erros, 0 avisos, 0 hints |
| `npm run build` | PASS — sete páginas estáticas: seis páginas do site e `404.html` |
| Lighthouse | PASS — 12 medições completas; quatro categorias em 100 em todas |
| axe-core | PASS automatizado — 12 execuções, 0 violações; contraste marcado *incomplete* |
| Playwright responsivo | PASS — 30 combinações de rota/largura, sem overflow e sem erros JS/console |
| Links e recursos locais | PASS — 13 destinos internos; sitemap, robots, favicon, Open Graph e fontes carregam |
| `npm audit` completo e produção | PASS — 0 vulnerabilidades em ambos |
| CSP simulada | PASS — seis páginas e 404, menu e fontes funcionais, sem terceiros ou erros de console |
| Render Blueprint | PASS sintático — YAML parseável; não validado por API/conta Render |

## 9. Pendências pré-publicação

1. Criar/configurar manualmente o Static Site no Render e confirmar build, publish directory, cabeçalhos, redirects, status 404, cache, compressão e HTTPS em `onrender.com`.
2. Decidir a migração do domínio antes de alterar DNS. O canonical atual prefere `www.tradersautomatizados.com.br`; o Render cria e redireciona o domínio correspondente ao adicionar um root ou um `www`. Confirmar que isso não deslocará outro serviço atualmente atendido pelo domínio raiz. Preservar registros e subdomínios de vendas, app e NeuroLicence.
3. Confirmar manualmente os contrastes numéricos dos textos que usam gradientes/pseudo-elementos, porque axe não conseguiu calcular esses casos automaticamente.
4. Confirmar a denominação empresarial e os dados cadastrais oficiais antes de publicar eventual CNPJ. Nenhum documento jurídico da Traders Automatizados foi inventado; os documentos do rodapé continuam explicitamente identificados como pertencentes à NeuroLicence.
5. Nenhum estudo de caso de cliente foi incluído; qualquer inclusão futura requer dados verificáveis e autorização de publicação.

O repositório GitHub fornecido foi confirmado vazio no diagnóstico. Após a orientação posterior, o projeto institucional e esta documentação foram enviados à branch `main` do repositório indicado. Nenhum deploy ou alteração DNS foi realizado. O [checklist de configuração manual do Render](TA-SITE-03-IMPLANTACAO-RENDER.md) descreve a sequência de validação e migração.

## 10. Veredito

**TA-SITE-03: PASS para a preparação técnica local e para o envio do código ao GitHub.** Build, auditorias locais, rotas, responsividade e verificações de segurança/SEO executadas passaram nos critérios automatizados declarados.

**A publicação ainda depende da configuração manual do Render e da estratégia de domínio.** As métricas de CDN/HTTPS/cabeçalhos reais não foram testadas porque não houve deploy. A checagem numérica manual dos textos sobre gradientes também fica registrada como pendência específica; axe não reportou violações confirmadas.

## Referências do Render

- [Deploy de sites Astro estáticos](https://render.com/docs/deploy-astro)
- [Blueprint YAML](https://render.com/docs/blueprint-spec)
- [Static Sites — CDN, HTTPS, Brotli e HTTP/2](https://render.com/docs/static-sites)
- [Cabeçalhos HTTP para Static Sites](https://render.com/docs/static-site-headers)
- [Redirects e rewrites](https://render.com/docs/redirects-rewrites)
- [Domínios personalizados e redirecionamento root/www](https://render.com/docs/custom-domains)
