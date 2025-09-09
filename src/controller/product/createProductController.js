import { create } from '../../model/productModel.js';

export const createProductController = async (req, res) => {
    const profile = req.body;
    const result = await create(profile);
    res.status(201).json({
        message: 'produto criado com sucesso',
        profile: result
    });
}
