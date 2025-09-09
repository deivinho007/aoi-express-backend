# Comandos

- npm init // cria o package.json para iniciar um projeto node 

- npm init -y //cria o package sem perguntas 

- npm i nome_pacote // instala um pacote especifico 

- npm install ou npm i // instala todos os pacotes do package.json

- npm run + nome_do_arquivo // quando quiser rodar o projeto. O unico que subistitui o run é o npm start

### comandos git
- git config --global user.name "deivid"
-git config --global user.email "deividsantanaa989@"

- git init // inicial o git em uma pasta 
- git remote add oring // vincula o meu projeto com o git 


### topicos importantes 
- o que é framework // é um conjuto de ferramentas ou recursos  para resolver algum problemas
- o que é javascript // linguagem de programação
- o que é npm // node package manager - gerenciador de pacotes do node
- o que é node.js // o ambiente onde roda o javascript 
- o que é express// é um framework para desenvolver e construir um API 
- Protocolo http // 
- metodo http(get, post,put,pacth,delete)



- o que é o node.js // é ambiente ou runtime que roda no javascript no terminal e no servidor, que pode ser instalado em todos os sistemas operacionais

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

### Para que serve o router do framework do express

- Para melhor organização e melhorar a manutenção do cordigo 

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
   - npx prisma db pull

- Gerar os arquivos necessarios para usar o prisma client no codigo
   - npx prisma generate 