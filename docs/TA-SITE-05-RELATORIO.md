# TA-SITE-05 — Relatório de homologação

**Projeto:** Site institucional Traders Automatizados

**Data da verificação:** 2 de novembro de 2026

**Veredito técnico:** **PASS — homologação local concluída**

**Publicação:** não foi iniciado deploy manual nem alterado DNS. O push solicitado será feito após esta homologação.

## 1. Arquitetura da implementação

- O tema efetivo é aplicado em `data-theme` no elemento `<html>`.
- A preferência fica em `localStorage` na chave `traders-automatizados-theme`. A ausência da chave representa **Automático**; os valores `light` e `dark` representam escolhas manuais.
- Um inicializador síncrono no `<head>` lê a preferência antes do CSS. Em Automático, consulta `prefers-color-scheme`; um listener `matchMedia` acompanha mudanças do sistema sem recarregar a página.
- O Header exibe um controle compacto com ícone e rótulo do modo atual: monitor para **Automático**, sol para **Claro** e lua para **Escuro**. Ao abrir o controle, os três modos ficam disponíveis em botões acessíveis; no mobile, ele aparece dentro do menu.
- Ao escolher Automático, a chave é removida. Ao escolher Claro ou Escuro, a preferência é salva.
- A preferência manual e os eventos de teclado foram verificados após navegação e recarga.
- A implementação usa Astro, TypeScript e CSS existentes. Nenhuma biblioteca de estado ou dependência do projeto foi adicionada.

## 2. Tokens e identidade visual

O tema escuro continua como padrão de fallback e conserva os valores visuais existentes, inclusive `#07080A` nos fundos principais, `#111318` nas superfícies, azul `#3080F0`, violeta `#3020A0`, prata e cinzas atuais. Foram preservados o logotipo, o favicon e os gradientes Dark Tech Premium.

| Área | Tema escuro | Tema claro |
|---|---|---|
| Fundo e superfícies | Preto e grafite existentes (`#07080A`, `#0B0C10`, `#111318`) | Branco e prata (`#F4F6F9`, `#EDF0F4`, `#FFFFFF`) |
| Texto principal | `#F2F2F2` | Grafite `#1B2029` |
| Texto secundário | Prata/cinza existentes | Cinza grafite `#4D5868` e `#5F6B7A` |
| Destaque | Azul da marca `#3080F0`, azul claro existente `#4090F0` | Azul `#3080F0`; textos de destaque usam `#1D5EB8` para manter contraste |
| Detalhes | Violeta `#3020A0` e bordas atuais | Violeta `#3020A0`, bordas e sombras sutis |
| Gráficos neutros | Prata clara atual | Tons grafite ajustados nos SVGs decorativos |

Gradientes e superfícies semânticas cobrem Header, hero, diagrama do ecossistema, cards, páginas internas, CTAs, menu mobile e rodapé. O CSS respeita `prefers-reduced-motion`; em redução de movimento, rolagem suave é desativada e transições/animações são reduzidas a `0,01ms`.

## 3. Arquivos e componentes alterados

- `src/layouts/SiteLayout.astro`: inicialização antecipada, acompanhamento da preferência do sistema e atualização de `theme-color` e `color-scheme`.
- `src/components/Header.astro`: botão compacto com ícone e menu acessível de preferência de tema no desktop e no menu mobile.
- `src/styles/global.css`: tokens semânticos, variação Light Premium e ajustes de contraste para gráficos SVG, preservando os valores escuros originais.
- `render.yaml`: hashes SHA-256 da CSP alinhados aos scripts inline produzidos pelo build.
- `docs/TA-SITE-05-Capturas/`: capturas comparativas e relatórios de auditoria.

O logotipo, favicon, conteúdo editorial, destinos comerciais e a NeuroLicence não foram modificados.

## 4. Evidências visuais

As capturas de página completa cobrem as seis páginas e a página 404 nos dois temas:

| Página | Light | Dark |
|---|---|---|
| Início | [Captura Light](./TA-SITE-05-Capturas/rota-inicio-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-inicio-dark.jpg) |
| Empresa | [Captura Light](./TA-SITE-05-Capturas/rota-empresa-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-empresa-dark.jpg) |
| Ecossistema | [Captura Light](./TA-SITE-05-Capturas/rota-ecossistema-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-ecossistema-dark.jpg) |
| Projetos | [Captura Light](./TA-SITE-05-Capturas/rota-projetos-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-projetos-dark.jpg) |
| Engenharia | [Captura Light](./TA-SITE-05-Capturas/rota-engenharia-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-engenharia-dark.jpg) |
| Contato | [Captura Light](./TA-SITE-05-Capturas/rota-contato-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-contato-dark.jpg) |
| Página 404 | [Captura Light](./TA-SITE-05-Capturas/rota-404-html-light.jpg) | [Captura Dark](./TA-SITE-05-Capturas/rota-404-html-dark.jpg) |

Capturas adicionais da Home em alta resolução:

- [Home Light — desktop](./TA-SITE-05-Capturas/home-light-desktop.png)
- [Home Dark — desktop](./TA-SITE-05-Capturas/home-dark-desktop.png)
- [Home Light — mobile](./TA-SITE-05-Capturas/home-light-mobile.png)
- [Home Dark — mobile](./TA-SITE-05-Capturas/home-dark-mobile.png)
- [Controle de tema Light — menu mobile](./TA-SITE-05-Capturas/theme-control-light-mobile.png)
- [Controle de tema Dark — menu mobile](./TA-SITE-05-Capturas/theme-control-dark-mobile.png)

## 5. Playwright e acessibilidade

**Playwright:** aprovado.

- 14 verificações axe: seis páginas institucionais e página 404, em Light e Dark; **zero violações WCAG 2.1 A/AA**.
- 35 verificações responsivas: sete rotas em 320, 375, 768, 1024 e 1440 px; **zero overflow horizontal**.
- Confirmados: primeira visita seguindo o sistema, escolha manual Light/Dark, limpeza da preferência ao voltar para Automático, acompanhamento de mudança de tema durante a sessão, persistência após recarga e entre páginas, e abertura/seleção do controle por teclado.
- Menu mobile: abertura, visibilidade do controle com ícone e rótulo, opções de tema e Escape em duas etapas (fecha primeiro as opções e depois o menu), com retorno do foco ao botão, foram aprovados.
- O tema ficou aplicado antes de a folha CSS terminar de carregar em um teste com atraso artificial dos estilos; não foi observado flash de tema incorreto.
- Console do navegador, erros de página e eventos de violação CSP: sem registros.
- `prefers-reduced-motion: reduce`: confirmado; `scroll-behavior` computado como `auto` e transição reduzida.

Evidências automatizadas: [resultado Playwright/axe/responsividade](./TA-SITE-05-Capturas/audit.json) e [persistência/reduced motion](./TA-SITE-05-Capturas/persistence.json).

## 6. Lighthouse

Lighthouse foi executado na Home em desktop e mobile, com a preferência Light ou Dark confirmada no seletor e em `localStorage` antes de cada coleta.

| Tema | Dispositivo | Performance | Acessibilidade | Boas práticas | SEO | FCP | LCP | CLS | TBT |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Light | Desktop | 100 | 100 | 100 | 100 | 0,3 s | 0,3 s | 0 | 0 ms |
| Dark | Desktop | 100 | 100 | 100 | 100 | 0,3 s | 0,3 s | 0 | 0 ms |
| Light | Mobile | 100 | 100 | 100 | 100 | 1,1 s | 1,1 s | 0 | 50 ms |
| Dark | Mobile | 100 | 100 | 100 | 100 | 1,1 s | 1,1 s | 0 | 50 ms |

Relatórios JSON completos: [Light desktop](./TA-SITE-05-Capturas/lighthouse-light-desktop-verified.json), [Dark desktop](./TA-SITE-05-Capturas/lighthouse-dark-desktop-verified.json), [Light mobile](./TA-SITE-05-Capturas/lighthouse-light-mobile-verified.json) e [Dark mobile](./TA-SITE-05-Capturas/lighthouse-dark-mobile-verified.json).

As pontuações das quatro categorias foram 100 nas quatro coletas. A análise de diagnóstico indicou uma cadeia crítica curta entre o HTML e a folha CSS principal (32–53 ms), sem reduzir as pontuações. No desktop, o teste BFCache também sinalizou `Cache-Control: no-store` do servidor local de auditoria; esse cabeçalho foi usado para garantir recarga dos arquivos durante os testes e não representa a política de cache de produção. O cache real do Render deve ser confirmado após a publicação.

## 7. CSP e segurança

- O servidor local de homologação aplicou os valores de `Content-Security-Policy` definidos em `render.yaml`.
- Os 14 scripts executáveis inline gerados nas sete rotas foram comparados aos hashes CSP. Os dois hashes necessários estão presentes em todas as páginas:
  - `sha256-dP0Pvb5iJKSEvGFrvGkvmcveG6irnsLVhYv982TWlNU=` — inicializador de tema.
  - `sha256-KCp4POVSUtD/H6Jk3WHkAbqseztl9kJrIUFbQfW1yD0=` — módulo do Header.
- `unsafe-inline` não foi adicionado. Os testes sob o cabeçalho CSP não registraram scripts ou recursos bloqueados.
- O hash preexistente em `render.yaml` não correspondia ao módulo inline atual; foi substituído pelos hashes do inicializador de tema e do módulo do Header. Não foram incluídas credenciais ou dependências novas no projeto.

## 8. Check e build

- `npm run check`: **PASS**, 0 erros, 0 avisos e 0 hints.
- `npm run build`: **PASS**, 7 páginas geradas (seis páginas e `404.html`).
- Tailwind detectado: 4.3.3. Nenhuma biblioteca adicional foi adicionada ao `package.json` ou ao lockfile; Playwright, axe-core e Lighthouse foram instalados apenas no diretório temporário de auditoria.

## 9. Pendências e limites

- Não houve deploy manual nem alteração de DNS nesta homologação.
- Depois que o push autorizado for processado pelo Render, ainda será necessário confirmar os dois temas no domínio público e observar os cabeçalhos de cache e a CSP realmente entregues pelo serviço. A verificação local confirmou o conteúdo de `render.yaml`, não a configuração efetiva do painel do Render.
- Não há pendência de contraste ou navegação identificada pelos testes automatizados; a inspeção visual das capturas confirmou a aplicação consistente dos tokens nas páginas, diagramas, cards, CTAs e rodapé.

## 10. Veredito

**PASS — TA-SITE-05 homologada tecnicamente no build local.** O padrão Automático, as escolhas manuais, a persistência, o acompanhamento do tema do sistema, a responsividade, o menu mobile, a acessibilidade automatizada e a CSP passaram nos testes executados. A validação da configuração em produção fica pendente até o Render processar a publicação.
