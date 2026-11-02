# Home — Traders Automatizados

## Autoridade da identidade visual

- A direção visual da Home é subordinada aos arquivos oficiais fornecidos: `public/assets/logo-160.webp` e `public/favicon.ico`.
- Use o logotipo WebP sem redesenhar, estilizar, recortar ou substituir seu símbolo. A mesma imagem aparece no cabeçalho, no rodapé, no diagrama principal e no cartão Open Graph.
- Use a paleta derivada visualmente do ativo: preto e grafite nas superfícies, prata para texto e divisórias, azul elétrico `#3080F0` e violeta `#3020A0` para ações, ícones e grafismos. O próprio logotipo é a referência para os gradientes.
- Não usar turquesa, verde-menta, teal, laranja ou um novo monograma como cores ou símbolos da Traders Automatizados.
- A UI/UX Pro Max orienta legibilidade, foco, áreas de toque e estabilidade de layout. Sugestões genéricas de cor e estilo não prevalecem sobre os ativos oficiais.

## Tokens de cor

| Papel | Valor |
| --- | --- |
| Canvas | `#07080A` |
| Canvas elevado | `#0B0C10` |
| Superfície | `#111318` |
| Superfície elevada | `#191B21` |
| Texto principal / prata clara | `#F2F2F2` |
| Prata | `#B3B3B3` |
| Prata discreta | `#858585` |
| Azul elétrico do logotipo | `#3080F0` |
| Violeta do logotipo | `#3020A0` |
| Divisória | `rgba(210, 210, 220, 0.14)` |

O CTA preenchido usa azul oficial com texto preto para contraste. A prata carrega textos pequenos de navegação e apoio; azul e violeta ficam em elementos de destaque, gráficos, foco e ícones.

## Tipo e layout

- Títulos: Poppins 400–600, tracking compacto e quebra equilibrada.
- Texto: Open Sans 400–600, base de 16px e altura de linha confortável.
- Container máximo: 1260px, com gutters fluidos.
- Ritmo: espaçamento amplo em desktop, reduzido em mobile.
- Progressão: hero, contexto institucional, ecossistema, produtos e plataformas, engenharia, contato e rodapé.

## Uso das imagens e da marca

- O símbolo original de 160×160 é servido sem transformação como WebP de poucos KB, com dimensões intrínsecas explícitas para impedir mudança de layout.
- O favicon servido em `/favicon.ico` é cópia byte a byte do arquivo oficial. Não referenciar ícones genéricos.
- `public/og-cover.svg` usa o mesmo símbolo oficial embutido e a paleta da marca; não contém monograma desenhado.
- Os grafismos de linhas, ciclos e conexões usam CSS/SVG e as cores azul, violeta, prata e grafite.

## Interação e acessibilidade

- Astro renderiza conteúdo estático; o menu mobile mantém botão nativo, `aria-expanded`, Escape e fechamento ao navegar.
- Foco visível em azul elétrico, texto pequeno em prata e controles com alvos de pelo menos 44px.
- O link para pular ao conteúdo e a ordem semântica permanecem.
- Imagens decorativas do logotipo ficam com `alt=""` dentro de links já rotulados; elas não duplicam o nome para leitores de tela.
- Respeitar `prefers-reduced-motion`; sem conteúdo essencial oculto por animação.
- Conferir 375px, 768px, 1024px e 1440px sem overflow horizontal.

## Conteúdo

- Minibar Castro's segue ausente até haver autorização para divulgar o case.
- Não incluir métricas, clientes, resultados ou capacidades sem confirmação.
- Produtos de trading mantêm aviso de risco e não prometem retorno.
- NeuroLicence é apresentada como marca do ecossistema, com navegação para seu próprio domínio.
