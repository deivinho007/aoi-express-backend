# Comandos

- npm init // cria o package.json para iniciar um projeto node 

- npm init -y //cria o package sem perguntas 

- npm i nome_pacote // instala um pacote especifico 

- npm install ou npm i // instala todos os pacotes do package.json

- npm run + nome_do_arquivo // quando quiser rodar o projeto. O unico que subistitui o run é o npm start

# comandos git
- git config --global user.name "deivid"
-git config --global user.email "deividsantanaa989@"

- git init // inicial o git em uma pasta 
- git remote add oring // vincula o meu projeto com o git 


# topicos importantes 
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


# importação e exportação 
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

# Para que serve o router do framework do express

-Para melhor organização e melhorar a manutenção do cordigo 