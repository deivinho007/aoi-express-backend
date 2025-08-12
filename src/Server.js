import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/profile',(req,res)=>{
  const dados = req.body
  console.log(req)
  res.json({messsage:'Perfil do Usuário'})
})

app.post('/profile', (req, res) => {
  const dados = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Usuario Criado',
    profile: dados
  }, null, 2)); // <-- identação de 2 espaços
});

app.put('/profile',(req,res)=>{
const dados = req.body
  res.json({
    messsage:'Usuario atualizado ',
    profile: dados
  })
})

app.delete('/profile',(req,res)=>{
  console.log(req)
  res.json({messsage:'Usuario deletado'})
})


app.listen(port,function(){
  console.log(`Servidor rodando na porta ${port}`)
})
