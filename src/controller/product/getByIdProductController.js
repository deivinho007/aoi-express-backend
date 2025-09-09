import { getById } from '../../model/productModel.js'


export const getByIdProductController = async (req, res) => {
  const id = req.params.id;

  const result = await getById(+id);

  res.json({
    message: `Perfil do Usuáriocom id ${id} consultado com sucesso`,
    profile: result
  });
}
