<h1 align="center">Captação de Lead</h1>

<p align="center">O projeto tem como objetivo cadastrar leads, a fim de que, à partir de uma tabela, o setor comercial possa analisar tais dados e avaliar para um futuro contato. Tal tabela mostrará a localização de determinado lead, além do tipo de fornecimento, o valor mensal de consumo, e também o mesmo com desconto por mês além de uma estatística de até 5 anos. E, por fim, pode-se fazer o download da tabela como .csv.</p>

<p>Inicialmente, baixe o projeto em uma pasta no seu computador. Utilize o comando 
  ```
  npm install
  ```
  para baixar todas as dependências.</p>
<p>Em seguida, vá ao arquivo app/package.json e utilize o debugger 
  ```
  next dev
  ```
  </p>

<p>Abra o link</p> [http://localhost:3000](http://localhost:3000) em seu browser para visualizar.</p>
<p>Inicialmente, uma tela de login será visível, pedindo que entre com seu e-mail e senha ou para cadastrar-se. </p>
<p>Caso já tenha uma conta, o site verificará se os dados condizem com os salvos no sistema, e se validado, levar-te-á à página de leads, à qual exibirá a tabela de leads e um formulário para o cadastro de novas leads.</p>
<p>Caso ainda não tenha uma conta, basta clicar no botão de cadastro e será conduzido a um formulário para que preencha com seus dados e crie um e-mail e uma senha. Ao criar, será encaminhado para a página de leads.</p>

<p>** Algumas observações técnicas e melhorias: **</p>

<p>*A validação de inputs foi feita em um arquivo à parte, tive problemas com a instalação de algumas bibliotecas no início do projeto, porém resolvi tentar novamente, mas afim de não atrasar o projeto, deixei separadamente funcionando 90%.</p>
<p>*Melhoraria a seleção de Estados e Tipos de Fornecimento para um dropdown, a fim de melhor funcionalidade para usuário.</p>
<p>*Por fim, um sistema com hierarquia poderia ser acrescentado.</p>
<p>*O arquivo .env segue à parte, enviado por e-mail.</p>
