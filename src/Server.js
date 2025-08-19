import express from 'express'
import ProfileRouter from './Routers/ProfileRouter.js';
import ProductRouter from './Routers/ProductRouter.js';
import supplierRouter from './Routers/supplierRouter.js';
import carRouter from './Routers/carRouter.js';

const app = express()
const port = 3333

app.use(express.json()) // converter o json que chegou na requisição em um objeto em Obj

app.use('/profile', ProfileRouter);
app.use('/produto', ProductRouter);
app.use('/fornecedor', supplierRouter);
app.use('/car', carRouter);


app.listen(port,function(){
  console.log(`Servidor rodando na porta ${port}`)
})
