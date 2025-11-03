# Comandos

- npm init // cria o package.json para iniciar um projeto node 

- npm init -y //cria o package sem perguntas 

- npm i nome_pacote // instala um pacote especifico 

- npm install ou npm i // instala todos os pacotes do package.json

- npm run + nome_do_arquivo // quando quiser rodar o projeto. O unico que subistitui o run é o npm start

### comandos git
- git config --global user.name "deivid"
- git config --global user.email "deividsantanaa989@"

- git init // inicial o git em uma pasta 
- git remote add oring // vincula o meu projeto com o git 


### topicos importantes 
- o que é framework // é um conjuto de ferramentas ou recursos  para resolver algum problemas

- Protocolo http // Hypertext Transfer Protocol = (request e response)

- o que é javascript // linguagem de programação

- metodo http:  = (get, post,put,pacth,delete)

### NPM 

- o que é npm // node package manager - gerenciador de pacotes do node

- o que é node.js // o ambiente onde roda o javascript 

- o que é express// é um framework para desenvolver e construir um API 

- NPM i - cria a pasta Node_modules

- NPM INIT = cria o package.json

- o que é o node.js // é ambiente ou runtime que roda no javascript no terminal e no servidor, que pode ser instalado em todos os sistemas operacionais

- Framework do Backend: Express conjunto de recurso para o backend.


- o que é javascript // é a linguagem de programação ultilizada
- get // pegar ou trazer informações
- post // criar dados
- put // atualizar todos os dados
- patch // atualizar parcialmente alguns dados NÃO TODOS OS DADOS !
- delete - //  deletar dados 
- como mudar o modo de importação/exportação de require para import// adicionar no package.json a propriedade "Type" e colocar module = "Type" = 'import'


### importação e exportação 
- exportação com o defalt é só 1 exportação sem chaves

- se exporta usando a exportação com chaves pode ser mais de 1 objeto 

- exemplo: export default teste 1 

- export {texte1,teste2}

- a mesma coisa o import = import text = from "./src/texte.js

- import {texte,text}= from ./src/texte

- O QUE É WATCH: toda vez que eu quiser observar um arquivo depois de alterar tipo o 'NODEMON' É no package.json no script em baixo do start você coloca o "dev":"node --watch src/server.js".

- Sintaxe básica de uma Rota API

app.put('/user',(req,res)=>{
  console.log('editado com sucesso')
  res.json({user:'usuario editado com sucesso'})
})

- método criar/inserir:post 
- Rota ou endereço: /produto
- tipo de resposta: send ou json

### Router 

 - Router = serve para separar as rotas, organizar o codigo e facilitar a manutenção de codigo.

### Para que serve o router do framework do express

- Para melhor organização e melhorar a manutenção do código 

### MVC 

- Padrão de Projeto// é uma forma fazer codigos e é muito conhecida
- Mvc / padrão do projeto e organiza os codigos em 3 camadas para melhor manutenção

- MVC //  Model, View , Controller 

- Model // acesso ao banco de dados e regras do Projeto 

- View // camada de apresentação ou interface - geralmente o que o front usa

- Controller// controla a entrada do dados, processa os dados, e a saida dos dados - rertonar a mensagem do usuario

### prisma 
- o prisma é uma orm / objeto relacional model - uma forma de relacionar um objeto javascript e o banco de dados 

- porque usar uma orm - facilidade de executar os codigos , sem precisar de fazer comandos msql

- se mudar o banco de dados é só mudar uma linha de configuração do prisma e ai posso usar em qualquer banco sem alterar a base de dados  

- qual a diferença de deoendencias dev e dependecias normais?/ ferramentas dev você usa durante o desenvolvimento para ajudar e as dependecias normais você usa no codigo em todo o projeto 

## Comandos Prisma 

- Instalação prisma
   - npm i -D
   - npm i @prisma/client
   

- Inicializar o prisma
   - npx prisma init

- Gerar o model do prisma a partir de um BD existente
   - npx prisma db pull

- Gerar o BD a partir de um model
   - npx prisma db push

- Gerar os arquivos necessarios para usar o prisma client no codigo
   - npx prisma generate 

   ### Middleware

   - Middleware - meio/metade 

   - No codigo o middleware é uma função

   - tudo que tem res e req é um Middleware

   - padrão de projeto middleware usado pelo express que divide o codigo em funções que são chamadas de middleware execuções 

   - ele usa 2 funções como req e res onde ele manda para os middlewares e adiciona um body req.body e passa para os outros middlewares em sequencia e todos fazem a mesma     função recebendo o req e o res menos o final que da a resposta

   - Todos os middlewares recebem, por padrão: (req, res, next) => { ... }

   # Estudo para Prova

   ## Estudo para prova

- Freamework / Conjunto de recursos ou ferramentas para resolver um determinado problema ou criar uma solução

- Express / É um freamework para construir API Backend

- JavaScript / É a linguagem de programação usada para web

- NPM (Node Package Menager) / Gerencia o pacote do node

- Node.js / É o ambiente runtime que executa o JS no terminal / servidor da maquina

- HTTPs / Protocolo de transferencia que estabelece as regras das requisições e repostas da web / comunicação entre clientes e servidores

- Get - Listar / tras as informações
- Post - Cadastrar / cadastra dados
- Put - Edita os dados completos
- Patch - Atualizar dados parcialmente
- Delete - Apaga os dados

- Como mudo o formado de importação de importação/exportação de require para inport / adicionar o package.json a propriedade (type:) "module"

- --whatch = observar / toda vez que salva o código ele desliga o servidor e liga novamente altomaticamente e deixa mais produtivo

- Router (Para que separar as rotas?) / organizar o código e facilitar a manutenção

- Parâmetros de rota. Exemplo: /:id
- const id = req.params.id

- O que é um padrão de projeto / É uma forma de codificar que é amplamente conhecida

- MVC / Model, View, Controller

- Para que serve / Organizar o codigo separando em tres camadas

- Papel do model (M) / Acesso ao banco de dados e regras de negocios do proeto
- Camada view (V) / É a camada de vizualização / apresentação
- Controller (C) / Controlar a entrada, processamento e saida dos dados

- ORM / Object / Relational / Model

- O que é ORM // é uma forama de relacionar um código js e a base de dados que cria uma representação do BD

o prisma da ferramentas para criar o

- Middlewaers = Meio / Metade

- padrão de projeto usado no express que divide o codigo em funções que são chamadas de middlewares, e toda vez que ele termina de fazer o que tem que fazer, ele passa pro proximo

é uma forma de organizar o codigo onde cada função segue o fluxo