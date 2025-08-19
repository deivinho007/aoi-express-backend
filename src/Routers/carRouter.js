import express from 'express';

const router = express.Router();

router.put('/:id',(req,res)=>{
const id = req.params.id

const car = req.body
  res.json({
    messsage:`${car.marca} ${car.modelo} com id ${id} atualizado `,
    marca:car.marca,
    modelo:car.modelo,

  })
}) 


export default router;
