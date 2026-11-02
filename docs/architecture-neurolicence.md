# Diagnóstico da landing page NeuroLicence

Esta inspeção foi somente de leitura. Nenhum arquivo, dependência, build, configuração ou processo do projeto NeuroLicence foi alterado ou executado.

## Stack e estrutura observadas

- Aplicação React 19 com TypeScript, Vite 7 e Tailwind CSS 4.
- Navegação entre rotas em wouter; ícones de interface em lucide-react.
- A Home atende pela rota / e compõe header, hero, conteúdo, CTA e footer a partir de componentes React em src/components/v2.
- Textos e dados das páginas ficam em src/components/v2/content.ts; os tokens V2 aparecem em design-system/tokens.ts e design-system/v2.css.
- Estilos da V2 são escopados pela classe .v2-root; a folha global importa Tailwind.
- O site carrega Geist e Geist Mono do Google Fonts.
- O build gera dist; o projeto também mantém um script próprio para sitemap.

## Decisões para a nova sede institucional

- O institucional foi criado à parte em Astro, conforme a stack indicada para esta sprint.
- A nova composição usa Astro para conteúdo estático, Tailwind CSS para estrutura e CSS próprio para identidade e tokens.
- Não há duplicação integral dos tokens, fonte, logo, imagens ou componentes da NeuroLicence.
- A NeuroLicence aparece como marca do ecossistema, não como pessoa jurídica independente.
- Dados comerciais reutilizados incluem apenas os canais institucionais e documentos legais referenciados no projeto existente.
