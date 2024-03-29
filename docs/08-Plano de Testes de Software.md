# Plano de Testes de Software

| **Caso de Teste** 	| **CT-01 – Cadastrar Empresa** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 - A aplicação deve gerenciar empresas. Para uma empresa se cadastrar deverá fornecer: Razão social, Cnpj, Endereço e senha. |
| Objetivo do Teste 	| Verificar se a empresa consegue se cadastrar na aplicação. |
| Passos 	| - Acessar a aplicação <br> - Informar a Razão Social, CNPJ, Endereço e senha <br> - Clicar em "Cadastrar" |
|Critério de Êxito | - O cadastro foi realizado com sucesso <br> - Redirecionar para tela home  |


| **Caso de Teste** 	| **CT-02 – Login** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-003 - A aplicação deve gerenciar empresas. Para uma empresa logar no sistema deverá fornecer Cnpj e senha |
| Objetivo do Teste 	| Verificar se um representante da empresa consegue logar na aplicação usando usuário e senha cadastrado   |
| Passos 	| - Acessar a aplicação <br> - Na tela de login, Inserir usuário e senha validos <br> - Clicar em entrar   |
|Critério de Êxito | - Abrir a aplicação com a tela de login  <br> - Redirecionar o usuário conforme a empresa     |


| **Caso de Teste** 	| **CT-03 – Exibir informações do perfil** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-010 - O software deverá exibir as informações do usuario |
| Objetivo do Teste 	| Verificar se as informações do usuario estão sendo informadas |
| Passos 	| - Acessar a aplicação <br> - Clicar no icone de perfil |
|Critério de Êxito | - Exibir as informações do usuario |


| **Caso de Teste** 	| **CT-04 – Calcular rota** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-011 - O software deverá calcular a rota e exibir a distância e duração |
| Objetivo do Teste 	| Verificar se a empresa consegue calcular a rota |
| Passos 	| - Acessar a aplicação <br> - Informar origem e destino |
|Critério de Êxito | - Exibir a distância e duração do percurso |


| **Caso de Teste** 	| **CT-05 – Cadastrar Item** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-004- A aplicação deverá conter uma funcionalidade para cadastrar itens, no qual deverá ser informado: Nome, Quantidade e se possui validade ou não |
| Objetivo do Teste 	| Verificar se a empresa consegue cadastrar um item na aplicação. |
| Passos 	| - Acessar a aplicação  <br> - Informar o nome do item, a quantidade, e se possuir validade informa-la  <br>- Clicar em "Cadastrar"  | - O cadastro foi realizado com sucesso   <br> - Continuar na página   |


| **Caso de Teste** 	| **CT-06 – Listar Itens** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-009- A aplicação deverá listar todos os itens cadastrados  |
| Objetivo do Teste 	| Verificar se a empresa listar itens cadastrados na aplicação.  |
| Passos 	| - Acessar a aplicação    <br>- Clicar na listagem de itens  |
|Critério de Êxito | - Listar todos os itens cadastrados    |


| **Caso de Teste** 	| **CT-07 – Listar Itens próximos a vencer** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-005- A aplicação deverá listar os itens próximos a vencer  |
| Objetivo do Teste 	| Verificar se a empresa listar itens próximos a vencer cadastrados na aplicação.  |
| Passos 	| - Acessar a aplicação   <br> - Clicar na listagem de itens que estão próximos a vencer  |
|Critério de Êxito | - Listar todos os itens cadastrados próximos a vencer   |


| **Caso de Teste** 	| **CT-08 – Exibir informações sobre item selecionado** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-006- Deverá ser exibido informações sobre o item cadastrado   |
| Objetivo do Teste 	| Verificar se a empresa consegue obter informações mais detalhadas de item cadastrado.  |
| Passos 	| - Acessar a aplicação <br> - Clicar na listagem de itens <br> - Selecionar um item   |
|Critério de Êxito | - Listar todos os itens cadastrados <br> - Mostrar detalhes do item selecionado   |


| **Caso de Teste** 	| **CT-09 – Exibir itens de acordo com a pesquisa** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-007- A aplicação deverá permitir que o usuário pesquise um item por Nome, validade ou quantidade   |
| Objetivo do Teste 	| Verificar se a empresa consegue listar itens de acordo informações como nome e validade  |
| Passos 	| - Acessar a aplicação <br> - Clicar na listagem de itens <br> - Digitar "nome" no campo de pesquisa   |
|Critério de Êxito | - Listar todos os itens cadastrados <br> - Mostrar item de acordo com o pesquisado   |

| **Caso de Teste** 	| **CCT-010 – Remover item** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-008- Deve conter uma opção para retirada do item em estoque, tendo obrigatoriamente de informar o motivo (Validade, Requisitado, Outros)  |
| Objetivo do Teste 	| Verificar se a empresa consegue listar itens de acordo informações como nome e validade  |
| Passos 	| - Acessar a aplicação <br> - Clicar na listagem de itens <br> - Clicar no item <br> - Clicar em retirar item <br> - Inserir o motivo e a quantidade   |
|Critério de Êxito | - Listar todos os itens cadastrados <br> - Abrir seleção de item <br>- Retirar a quantidade selecionada    |

