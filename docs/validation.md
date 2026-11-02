# Relatório de homologação — TA-SITE-01-R1

Data: 02/11/2026  
Resultado: **PASS**

## Escopo revisado

- Preservados o logotipo oficial `logo-160.webp`, o `favicon.ico` e a paleta Dark Tech Premium em preto/grafite, prata, azul elétrico e violeta.
- Rebalanceado o espaço vertical entre seções e ajustada a distribuição dos cards do ecossistema: coluna única no mobile, composição adaptável no tablet e três cards alinhados em uma linha a partir de 1024 px.
- Revisados os tamanhos e quebras de títulos, textos, etiquetas, diagramas, ícones e links dos cards. Os quatro cards de experiência ficam em uma coluna no mobile, duas no tablet e quatro em telas largas.
- O link “Pular para o conteúdo” permanece fora da tela sem foco e aparece ao receber foco pelo teclado.
- O rodapé identifica “Termos de uso” e “Privacidade” como documentos da NeuroLicence. Não foram criados documentos jurídicos para a Traders Automatizados.
- A experiência institucional representa software empresarial, automação e integrações, produtos próprios de trading e plataformas digitais. Não foram incluídos estudos de caso sem dados e autorização disponíveis.
- A pilha técnica de implementação foi removida da interface pública e registrada no `README.md`.

## Verificações automatizadas

| Verificação | Resultado |
| --- | --- |
| `npm run check` | Aprovado: 0 erros, 0 avisos e 0 dicas. |
| `npm run build` | Aprovado: build estático com uma rota em `dist/index.html`. |
| Prévia de produção local | Home respondeu HTTP 200 em `localhost:4322`. |
| Chrome + Playwright | Sem erros de página nas cinco larguras testadas. |
| `favicon.ico` | HTTP 200, `image/x-icon`. |
| Logotipo oficial | Imagem carregada no cabeçalho e nos usos medidos. |

## Responsividade e apresentação

| Viewport | Largura do documento | Overflow horizontal | Título principal | Ecossistema | Cards de experiência |
| ---: | ---: | --- | ---: | --- | --- |
| 320 px | 320 px | Não | 5 linhas | 1 coluna | 1 coluna |
| 375 px | 375 px | Não | 4 linhas | 1 coluna | 1 coluna |
| 768 px | 768 px | Não | 3 linhas | NeuroLicence em linha própria; outros 2 cards lado a lado | 2 colunas |
| 1024 px | 1024 px | Não | 3 linhas | 3 colunas alinhadas | 2 colunas |
| 1440 px | 1440 px | Não | 3 linhas | 3 colunas alinhadas | 4 colunas |

Em todas as larguras, os títulos e etiquetas medidos cabem sem corte horizontal, e os diagramas ficam dentro da viewport. As capturas completas da Home e da seção de ecossistema foram revisadas visualmente.

Contraste calculado por luminância relativa: texto secundário (`#b3b3b3`) sobre o canvas (`#07080a`), **9,56:1**; texto escuro do botão principal sobre o azul elétrico (`#3080f0`), **5,22:1**.

## Navegação e destinos

- O link de salto estava fora da viewport antes do foco e ficou visível no primeiro `Tab` nas cinco larguras. `Enter` navegou para `#conteudo`.
- No menu mobile a 375 px, abrir pelo teclado moveu o foco para “Empresa” e `Tab` avançou para “Ecossistema”. `Escape` fechou o menu e devolveu foco ao botão.
- A navegação para `#empresa` fechou o menu e posicionou a seção abaixo do cabeçalho fixo. Todas as âncoras internas verificadas apontam para elementos existentes.
- Links externos com `target="_blank"` usam `noopener noreferrer`.
- Consultas GET aos cinco destinos vinculados retornaram HTTP 200: NeuroLicence, vendas, HUB do Parceiro, termos e privacidade.

## Integridade e limites

- A pasta independente da NeuroLicence não apresentou alterações em `git status --short`; nenhum arquivo desse projeto foi editado nesta sprint.
- Não foram executados Lighthouse nem axe. As verificações solicitadas de layout, teclado, links e contraste foram feitas no Chrome e com Playwright.
- Não há pendências dentro dos testes de aceitação solicitados. Nenhum deploy, alteração de DNS, commit ou push remoto foi realizado.
