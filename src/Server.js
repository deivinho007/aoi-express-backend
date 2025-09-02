import express from 'express';
import profileRouter from './Routers/profileRouter.js';
import productRouter from './Routers/productRouter.js';
import supplierRouter from './Routers/supplierRouter.js';
import customerRouter from './Routers/customerRouter.js';
import carRouter from './Routers/carRouter.js';

const app = express();
const port = 3333;

// Middlewares
app.use(express.json()); // Converter o JSON da requisição em objeto

// Rotas
app.use('/profile', profileRouter);    // Padronizando no plural em inglês
app.use('/products', productRouter);    // Alterado de 'produto' para 'products'
app.use('/suppliers', supplierRouter);  // Alterado de 'fornecedor' para 'suppliers'
app.use('/customers', customerRouter);  // Mantendo padrão plural
app.use('/cars', carRouter);           // Alterado para plural

// Rota de status da API
app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date(),
    version: '1.0.0'
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
