import express from 'express';
import authRouter from './Routers/authRouter.js'
import profileRouter from './Routers/profileRouter.js';
import productRouter from './Routers/productRouter.js';
import supplierRouter from './Routers/supplierRouter.js';
import customerRouter from './Routers/customerRouter.js';
import carRouter from './Routers/carRouter.js';
import { logger } from './middleware/Logger.js';
import cors from 'cors';

const app = express();
const port = 3333;



// Middlewares
app.use(logger)
app.use(cors()); // Habilitar CORS para todas as rotas
app.use(express.json()); // Converter o JSON da requisição em objeto

// Rotas
app.use('/auth',authRouter)
app.use('/profile', profileRouter);    // Padronizando no plural em inglês
app.use('/product', productRouter);    // Alterado de 'produto' para 'products'
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
