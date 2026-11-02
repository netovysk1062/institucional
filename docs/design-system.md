# Consulta UI/UX Pro Max — revisão da identidade oficial

Data: 02/11/2026.

## Diretriz de precedência

O usuário disponibilizou `favicon.ico` e `logo-160.webp` da Traders Automatizados e definiu preto/grafite, prata, azul elétrico e violeta como a identidade obrigatória. Esses ativos e essa direção prevalecem sobre qualquer resultado genérico da skill. Os arquivos originais foram mantidos byte a byte na pasta pública do site; a landing NeuroLicence não foi tocada.

## Consultas executadas nesta revisão

1. Busca de cor: `dark tech graphite silver electric blue violet` em `color`. A busca retornou cinco paletas genéricas para outros tipos de produto. Não foi encontrada paleta que representasse o logotipo fornecido; nenhuma cor sugerida pela skill foi aplicada.
2. Busca de UX: `dark interface logo contrast brand identity` em `ux`. O retorno enfatizou contraste mínimo para texto normal, foco visível e o limite entre critérios AA/AAA.
3. Busca Astro: `static image optimization astro layout stability` em `astro`. O retorno recomendou imagens locais otimizadas e dimensões reservadas para evitar deslocamento. O logo oficial já é um WebP 160×160 compacto e é servido diretamente com `width` e `height`, preservando o arquivo sem adicionar dependência de processamento.

## Cores usadas

A paleta foi amostrada visualmente no ativo oficial: azul `#3080F0`, violeta `#3020A0` e prata `#E9E9E9`. O layout usa canvas `#07080A`, superfícies grafite `#111318` e `#191B21`, texto claro `#F2F2F2` e prata `#B3B3B3`. Azul e violeta são aplicados a ações, foco, ícones e grafismos; textos pequenos permanecem em prata para legibilidade. Não há acentos verde-menta, turquesa, teal ou laranja.

## Alterações resultantes

- O símbolo oficial substituiu a marca estilizada no cabeçalho e no rodapé e substituiu o monograma desenhado nos diagramas.
- O favicon servido em `/favicon.ico` é a cópia oficial.
- Botões, foco, linhas, ícones, cartões, diagramas e o Open Graph foram ajustados à paleta preta, grafite, prata, azul e violeta.
- O arquivo Open Graph incorpora o mesmo WebP oficial sem redesenhar o símbolo.
- `design-system/traders-automatizados/MASTER.md` e `pages/home.md` agora registram a identidade prevalecente e impedem que pesquisas genéricas revertam a paleta.

## Refinamento de usabilidade — R1

- O espaçamento entre seções e o espaço interno de cartões foram reduzidos para encurtar a página e manter a composição equilibrada.
- A seção de experiência distingue sistemas e automação empresarial, produtos de trading e plataformas próprias. Em tablet os cartões usam duas colunas, em desktop largo quatro, e em mobile uma.
- Textos de diagramas, cartões, capacidades e rodapé ganharam tamanho e contraste. O skip link só aparece com foco visível de teclado.
- Stack da página saiu da interface comercial e permanece documentada no README e package.json.
- O grupo de documentos no rodapé está rotulado como NeuroLicence porque os destinos configurados são termos e privacidade dessa marca. Nenhum documento institucional da Traders Automatizados foi inventado.
- Nenhum estudo de caso de cliente foi adicionado. A seção descreve apenas capacidades e produtos já apresentados no site.

## Expansão multipáginas — TA-SITE-02

- As seis páginas reutilizam o mesmo SiteLayout, Header, Footer, tokens, tipografia e navegação.
- A Home conserva suas seções e âncoras existentes. As páginas internas têm conteúdo próprio e não são cópias da Home.
- Cada rota tem um H1, descrição, canonical, Open Graph e estado ativo na navegação. A hierarquia tem apenas um nível abaixo da Home; breadcrumbs foram omitidos para manter a navegação direta.
- A UI/UX Pro Max recomendou realçar a página atual, testar a ordem de Tab sem ponteiro, manter skip link e usar uma hierarquia de títulos/escala tipográfica consistente. Esses itens foram aplicados; sua paleta genérica monocromática e a combinação de fontes Archivo/Space Grotesk não foram aplicadas.
- A pesquisa para Astro recomendou preservar conteúdo acessível sem client-side routing. As rotas usam links HTML e páginas geradas estaticamente.
- Projetos listados publicamente limitam-se a FiboMat, CycleFX PRO e TAPF/HUB do Parceiro; Minibar Castro's continua fora até existir autorização de divulgação.
- A página de Engenharia lista tecnologias registradas em projetos do ecossistema e limita afirmações sobre segurança, arquitetura e processos ao escopo verificado, sem anunciar certificações.
- A página Contato direciona para NeuroLicence, vendas e o e-mail/Instagram institucionais já publicados; não inclui formulário sem processamento.

## Atualização de conteúdo e separação das frentes — TA-SITE-02

- A Home preserva o H1 aprovado e usa a frase de posicionamento para explicitar os dois mercados: automação de estratégias financeiras e desenvolvimento de sistemas empresariais.
- A história institucional registra que a Traders Automatizados nasceu da automação de estratégias de trading, com foco inicial em FIMATHE, e que em mais de dois anos ampliou sua engenharia para sistemas empresariais e plataformas digitais sem abandonar a frente financeira.
- Em todas as páginas, tecnologia financeira, engenharia empresarial pela NeuroLicence e infraestrutura digital própria aparecem como categorias separadas, com linguagem e links comerciais apropriados.
- A NeuroLicence é descrita como marca especializada operada pela Traders Automatizados LTDA, sem sugerir uma segunda pessoa jurídica.
- O portfólio mostra produtos financeiros, a frente empresarial como competência geral sem estudo de caso fictício, e as plataformas próprias. Estudos de caso de clientes dependem de dados e autorização.
- Metadados da Home foram ajustados para representar as duas especialidades. Metadados individuais das cinco páginas internas descrevem seus respectivos escopos e destinos.
