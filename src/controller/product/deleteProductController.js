import { remove } from '../../model/productModel.js'

export const deleteProductController = async (req, res) => {
  const id = req.params.id;
  const result = await remove(+id)
  res.json({
    message: `Usuario ${id} deletado`,
    Profile: result
  });
}
