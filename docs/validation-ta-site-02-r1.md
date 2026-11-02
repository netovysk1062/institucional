# Relatório de revisão editorial e homologação — TA-SITE-02-R1

Data: 02/11/2026  
Resultado: **PASS**

## Escopo

Revisão editorial da Home institucional e das páginas Empresa, Ecossistema, Projetos, Engenharia e Contato. A identidade oficial, os tokens visuais e a navegação multipágina foram preservados. O conteúdo diferencia a automação de estratégias de trading das soluções de software e automação empresarial da NeuroLicence.

## Alterações realizadas

- **Home:** preserva o título aprovado “Engenharia que transforma ideias em tecnologia real.” e a frase de direcionamento acordada. Apresenta um diretório compacto de soluções e acessos, sem repetir a história e as explicações detalhadas das páginas internas.
- **Empresa:** reúne a origem na automação de estratégias com foco em FIMATHE e a expansão da atuação ao longo de mais de dois anos em uma narrativa institucional concisa.
- **Ecossistema:** direciona separadamente para NeuroLicence, FiboMat e CycleFX PRO, TAPF e HUB do Parceiro.
- **Projetos:** descreve quatro produtos e plataformas com funções verificadas. NeuroLicence não é apresentada como entrega ou estudo de caso. Nenhum resultado financeiro ou caso de cliente foi inventado.
- **Engenharia:** explica o processo em linguagem direta e usa exemplos de software empresarial e ferramentas de trading, sem expor listas de implementação que não agregam valor ao visitante.
- **Contato:** separa os caminhos de empresas, traders e assuntos institucionais. Inclui o e-mail empresarial oficial da NeuroLicence, `sistemasneuro@tradersautomatizados.com.br`, como link `mailto:`; mantém distinto o e-mail institucional da Traders Automatizados.
- **Legendas do HUB do Parceiro:** removida a referência a TAPF da legenda do diagrama da Home, do título do cartão de acesso na Home e das legendas do cartão de plataformas na página Engenharia. O título correspondente no diretório Ecossistema foi alinhado como “Ecossistema & HUB do Parceiro”. As referências próprias da plataforma TAPF foram preservadas.
- **Rodapé:** identifica separadamente os documentos da NeuroLicence e os links institucionais, sem criar documentos jurídicos.
- **Documentação técnica:** registra diagnóstico e critérios editoriais em [editorial-audit.md](editorial-audit.md), mantendo decisões e limites fora da interface comercial.

O mapa de concentração editorial por página e as redundâncias eliminadas estão descritos em [editorial-audit.md](editorial-audit.md).

## Verificações automatizadas

### Comandos do projeto

| Verificação | Resultado |
| --- | --- |
| `npm run check` | Aprovado: 22 arquivos verificados, 0 erros, 0 avisos e 0 dicas. |
| `npm run build` | Aprovado: build estático concluído e seis páginas geradas. |

### Navegador e responsividade

O Playwright verificou as seis rotas (`/`, `/empresa/`, `/ecossistema/`, `/projetos/`, `/engenharia/` e `/contato/`) nas larguras 320, 375, 768, 1024 e 1440 px: **30 combinações de rota e largura**.

| Item | Resultado observado |
| --- | --- |
| Carregamento das rotas | HTTP 200 nas seis páginas. |
| Overflow horizontal | Não observado nas 30 combinações. |
| Títulos e hierarquia | Um H1 por página; títulos cabem na largura verificada. |
| Cards e diagramas | Alinhamento e dimensões conferidos; quatro cards de produto/plataforma na página Projetos. |
| Âncoras internas | Sem hash de destino inexistente. |
| Links externos | Destinos de NeuroLicence, vendas, HUB, termos, privacidade e Instagram responderam HTTP 200 durante a verificação. Links em nova aba incluem `rel` seguro. |
| Erros de JavaScript | Nenhum erro de página observado. |
| SEO | Títulos e descrições únicos por página; nome jurídico presente nos dados estruturados conforme a informação fornecida. |
| Link “Pular para o conteúdo” | Oculto no estado inicial, visível ao receber foco pelo teclado e funcional. |
| Menu mobile | Abre por teclado, permite navegação, fecha com Escape e devolve foco ao controle do menu. |
| E-mail da NeuroLicence | Presente uma vez na página Contato, visível e com `mailto:sistemasneuro@tradersautomatizados.com.br`; conferido também a 320 px, sem overflow. |

Capturas complementares foram revistas visualmente em desktop e mobile. A amostra guardada inclui as seis páginas em 1440 px e Home, Projetos e Contato em 320 px, além de Contato em 375 px.

## Evidências visuais

As imagens estão em [`docs/evidence/ta-site-02-r1/`](evidence/ta-site-02-r1/).

| Página | Desktop — 1440 px | Mobile |
| --- | --- | --- |
| Home | [captura](evidence/ta-site-02-r1/ta-site-02-final-home-1440.png) | [320 px](evidence/ta-site-02-r1/ta-site-02-r1-home-320.png) |
| Empresa | [captura](evidence/ta-site-02-r1/ta-site-02-final-empresa-1440.png) | — |
| Ecossistema | [captura](evidence/ta-site-02-r1/ta-site-02-final-ecossistema-1440.png) | — |
| Projetos | [captura](evidence/ta-site-02-r1/ta-site-02-final-projetos-1440.png) | [320 px](evidence/ta-site-02-r1/ta-site-02-r1-projetos-320.png) |
| Engenharia | [captura](evidence/ta-site-02-r1/ta-site-02-final-engenharia-1440.png) | — |
| Contato | [captura](evidence/ta-site-02-r1/ta-site-02-final-contato-1440.png) | [320 px](evidence/ta-site-02-r1/ta-site-02-r1-contato-320.png) · [375 px](evidence/ta-site-02-r1/ta-site-02-r1-contato-375.png) |

## Limites e pendências

- Não foram acrescentados estudos de caso de clientes: não havia dados e autorização de publicação disponíveis.
- As funções do TAPF e do HUB foram limitadas aos materiais comerciais e do ecossistema consultados, sem incluir dados de clientes.
- A checagem HTTP de links externos é uma observação no momento do teste; disponibilidade de terceiros pode mudar.
- O projeto separado da NeuroLicence não foi editado nem reinicializado.
- Não houve deploy, alteração de DNS, commit ou push remoto.

**Classificação final da TA-SITE-02-R1: PASS.** Os comandos solicitados e os critérios automatizados de navegação, conteúdo e responsividade foram aprovados. A prévia local permanece disponível em `http://localhost:4322/`.
