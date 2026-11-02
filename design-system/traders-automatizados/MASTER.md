# Design system — Traders Automatizados

> Identidade institucional revisada em 02/11/2026. Os ativos oficiais e o pedido visual do usuário são a fonte de verdade desta página. Recomendações genéricas da UI/UX Pro Max são subordinadas a eles.

## Sistema de marca

A marca oficial é o arquivo `public/assets/logo-160.webp`; o favicon oficial é `public/favicon.ico`. Os arquivos devem ser usados sem redesenho ou estilização. Não criar um monograma alternativo.

| Papel | Cor | Token CSS |
| --- | --- | --- |
| Canvas | `#07080A` | `--ink` |
| Canvas elevado | `#0B0C10` | `--ink-raised` |
| Superfície | `#111318` | `--surface` |
| Superfície elevada | `#191B21` | `--surface-raised` |
| Azul elétrico amostrado do logotipo | `#3080F0` | `--brand-blue` |
| Violeta amostrado do logotipo | `#3020A0` | `--brand-violet` |
| Prata clara | `#F2F2F2` | `--text` |
| Prata | `#B3B3B3` | `--muted` |
| Prata discreta | `#858585` | `--muted-dim` |
| Divisórias prata | `rgba(210, 210, 220, 0.14)` | `--line` |

Preto e grafite predominam. Azul e violeta destacam ações, foco, ícones e visualizações. Prata é usada para texto, divisórias e informação de apoio. Não introduzir verde-menta, turquesa, teal ou laranja.

## Tipografia e layout

- Títulos: Poppins; texto: Open Sans.
- Container: 1260px com gutters fluidos.
- Espaçamento de seção amplo em desktop e progressivamente menor em tablet e mobile.
- Composição institucional: hero, empresa, ecossistema, portfólio, engenharia, contato e rodapé.

## Componentes

- CTA primário em azul oficial com texto preto; contorno secundário grafite com limite prata e texto claro.
- Cartões em superfícies opacas de grafite; azul/violeta aparecem em bordas, linhas e fundos de baixa opacidade.
- Diagrama SVG original usa azul, violeta e prata, com o logotipo oficial no núcleo.
- Cabeçalho e rodapé usam o logotipo WebP oficial com dimensão reservada e a grafia tipográfica do nome.

## Acessibilidade e comportamento

- Texto normal mantém contraste mínimo de 4,5:1; azul e violeta não substituem texto prateado em informação pequena.
- Foco visível em azul elétrico, navegação por teclado, menu mobile nativo, alvos de toque de pelo menos 44px.
- Sem movimento obrigatório; respeitar `prefers-reduced-motion`.
- Imagens WebP estáticas recebem largura e altura explícitas. O logo de 160px já é compacto, portanto é servido diretamente para preservar o arquivo oficial sem dependência de processamento.
- Layout testado em 375px, 768px, 1024px e 1440px.

## Orientação UI/UX Pro Max

A skill é usada para checar contraste, foco, interação, breakpoints e estabilidade de imagem. Sua busca de paleta retornou recomendações genéricas sem referência à marca; nenhuma cor sugerida foi aplicada. A paleta acima deriva do ativo fornecido pelo usuário.
