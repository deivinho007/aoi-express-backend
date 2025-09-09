import { update } from '../../model/productModel.js'

export const putByIdProductController= async (req, res) =>{
  const profile = req.body;
  const id = req.params.id;

  const result = await update(+id, profile);

  res.json({
    message: 'Usuario editado com sucesso',
    profile: result
  });
}
