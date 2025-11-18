import { create } from '../../model/productModel.js';

export const createProductController = async (req, res) => {
    const product = req.body;
    const result = await create(product);

    console.log('Produto criado:', req.userLogged.id);
    console.log('Produto criado:', req.userLogged.email);

    res.status(201).json({

        message: 'produto criado com sucesso',
        profile: result
    });
}
