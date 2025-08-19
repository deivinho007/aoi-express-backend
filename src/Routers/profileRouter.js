import express from 'express';

const router = express.Router();


router.get('/',(req,res)=>{
  const dados = req.body
  console.log(dados)
  res.json({messsage:'Perfil do Usuário'})
})

router.get('//:id',(req,res)=>{
  const dados = req.body
  console.log(dados)
  res.json({messsage:'Perfil do Usuário'})
})


router.post('/', (req, res) => {
  const dados = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Usuario Criado',
    profile: dados
  }, null, 2)); // <-- identação de 2 espaços
});

router.put('//:id',(req,res)=>{
const dados = req.body
  res.json({
    messsage:'Usuario atualizado ',
    profile: dados
  })
})

router.delete('//:id',(req,res)=>{
  const id = req.params.id
  console.log(id)
  res.json({messsage:`Usuario ${id} deletado`})
})


export default router;