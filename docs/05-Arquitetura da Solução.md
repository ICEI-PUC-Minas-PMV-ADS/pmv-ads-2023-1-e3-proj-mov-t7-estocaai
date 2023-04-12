# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.


## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![Students Enrollment Class Diagram (1)](https://user-images.githubusercontent.com/100283917/228946612-b8562a4c-396d-4820-a676-ed30b1ea4d18.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![Ca78787878787pturar](https://user-images.githubusercontent.com/100283917/228870741-5bcb5f56-cb64-4f16-96b7-e78a9556f041.PNG)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![DB](https://user-images.githubusercontent.com/100283917/228952372-44543040-eec1-49ad-acd2-805bda0914e2.png)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

As tecnologias listadas abaixo serão utilizadas para a implementação da solução.

- Expo Dev
- React
- React Native
- JSON
- JavaScript XML (JSX)

![image](https://user-images.githubusercontent.com/100283917/228871306-a0468910-90a6-4a30-9ee3-d52d146cf396.png)

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)


## Qualidade de Software

Para avaliar a qualidade do software desenvolvido, foram selecionadas algumas características e subcaracterísticas que serão importantes para avaliar os pontos mais importantes do sistema de acordo com a ISO/IEC 25010, sendo elas:

<h3>1) Eficiência de desempenho:</h3> 
 A) Comportamento temporal<br />
 B) Utilização de recursos
 <br />
 <br />
 <i>
 A eficiência de desempenho e as subcaracterísticas listadas serão importantes para avaliar o tempo de resposta da aplicação ao requisitar os dados e o quanto de equipamento / rede é necessário para usar o sistema, julgando-se indispensável avaliar esses pontos uma vez que o sistema deve ter uma resposta rápida nas consultas.
 </i>
 
 <hr />
 
<h3>2) Compatibilidade</h3>
 A) Interoperabilidade
 <br />
 <br />
 <i>
  interoperabilidade é a capacidade de diversos sistemas e organizações trabalharem em conjunto (interoperar), de modo a garantir que pessoas, organizações e sistemas computacionais interajam para trocar informações de maneira eficaz e eficiente devido a utilização de sistemas terceiros como base.
 </i>
 <hr />
 
<h3> 3) Usabilidade </h3>
 A) Apreensibilidade<br />
 B) Proteção a erros<br />
 C) Estética da interface<br />
 D) Operabilidade<br />
 <br />
 <br />
 <i>
 A usabilidade e as subcaracterísticas listadas serão importantes para avaliar a experência do usuário com a interface do sistema, o que é algo indispensável para termos noções de dados como a dificildade para executar as rotinas do sistema, se são difíceis de se executar, se o usuário tem recursos que o impeçam de errar ao informar, por exemplo, dados inválidos, se o visual da interface está moderno e confortável, pois o sistema precisa ser simples e de facil operabilidade.
 </i>
<hr />
 
<h3>4) Confiabilidade</h3>
 A) Toleraância a falhas <br />
 B) Recuperabilidade
 <br />
 <br />
 <i>
  A confiabilidade e as subcaracterísticas listadas serão importantes para avaliar o quanto o sistema será confiável apresentando tolerancia a falhas de comunicação com aplicações terceiras e sua capacidade de se recuperar de erros.
 </i>
   <hr />
  
<h3>5) Segurança</h3>
 A) Confidenciabilidade <br />
 B) Integridade
 <br />
 <br />
 <i>
 A segurança e as subcaracterísticas listadas serão importantes para avaliar principalmente o cuidado com os dados do usuário e sua preservação, assim como sua capacidade de ser exposta a internet sem comprometimento dos dados já cadastrados.
 </i>
  <hr />
  
<h3>8) Portabilidade</h3>
 A) Adaptabilidade
 <br />
 <br />
 <i>
 A portabilidade e as subcaracterísticas listadas serão importantes para avaliar se o sistema se adapata as diversas necessidades dos usuários que irão utiliza-lo.
 </i>
  <hr />
  
<h3>7) Manutenabilidade </h3>
 A) Modularidade <br />
 B) Modificabilidade <br />
 C) Reusabilidade <br />
 <br />
 <br />
 <i>
 A manutenabilidade e as subcaracterísticas listadas serão importantes para avaliar a qualidade do código fonte do sistema e a facilidade de trabalhar com ele, desejando-se ter uma boa reusabilidade através dos modulos criados com sua responsabilidade que sejam facilmente modificados
 </i>
  <hr />
 
 <h3> Métricas de avaliação</h3>
 
Esses foram as características e subcaracterísticas selecionadas pois foram julgadas indispensáveis e importantes para que o projeto tenha sucesso em seus objetivos.
Foram justificadas após enumerar cada uma, o motivo que se usou a característica e também as subcaracterísticas, que estão entendidas na descrição de acordo com suas definições.

Para ter o valor da qualidade de software através dessas características, criou-se métricas que possibilitam avaliar esses pontos, as perguntas / questionamentos abaixo que serão utilizadas pelos avaliadores do sistema abrangendo todas as subcaracterísticas e consequentemente as caracaterísticas anteriormente listadas:

<h5>

   1) O tempo de resposta ao requisitar um dado para o sistema é: <br />
    A) Ruim <br />
    B) Regular <br />
    C) Bom <br />
    D) Muito bom <br />
    
   
   2) Como o seu celular executa o sistema: <br />
    A) Rapidamente <br />
    B) Lentamente <br />
    C) Instantâneamente <br />
    D) Travando <br />
    
   
   3) Houve algum conflito com outro aplicativo ao instalar o sistema? <br />
    A) Sim <br />
    B) Não <br />
    
    
   4) As rotinas do sistema são: <br />
			 A) Fáceis de usar <br />
			 B) Difíceis de usar <br />
    

   5) O sistema normalmente exibe erros por informar dados incorretamente?<br />
    A) Sim <br />
    B) Quase sempre  <br />
    C) Quase nunca <br />
    D) Não <br />
    
    
   6) A interface do sistema é visualmente falando: <br />
    A) Excelente <br />
    B) Boa <br />
    C) Razoável  <br />
    D) Ruim <br />
    
   7) O sistema possui empechilhos ao utilizar sua interface? <br />
			 A) Não <br />
		  B) Sim <br />
    
   8) A frequência que o sistema exibe erros é: <br />
    A) O tempo todo <br />
    B) As vezes <br />
    C) Raramente <br />
    D) Nunca <br />
    
  9) Você já tentou acessar o sistema e o encontrou indisponível? <br />
    A) Sim <br />
    B) Quase sempre  <br />
    C) Quase nunca <br />
    D) Não <br />
    
  10) Os dados sensíveis informados no sistema são: <br />
    A) Expostos <br />
    D) Protegidos <br />
    
  11) Os dados informados no sistema quando exibidos são: <br />
    A) Confiáveis <br />
    B) Duvidosos <br />
    
  12) A frequência de uso dos componentes no sistema para reutilizar ocorre: <br />
    A) Sempre <br />
    B) Quase sempre <br />
    C) As vezes <br />
    D) Nunca <br />
    
  13) O código é facilmente entendido e claro? <br />
    A) Sim <br />
    B) Não <br />

  14) O código pode ser facilmente alterado? <br />
    A) Sim <br />
    B) Não <br />
     
  15) A realização de testes no sistema normalmente é <br />
    A) Fácil <br />
    B) Possível <br />
    C) Difícil <br />
    D) Impossível <br />
    
  16) O processo de instalação do sistema é: <br />
    A) Fácil <br />
    B) Possível <br />
    C) Difícil <br />
    D) Impossível <br />
 
 </h5>
