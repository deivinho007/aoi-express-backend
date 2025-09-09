import { update } from '../../model/profileModel.js'

export const putByIdProfileController= async (req, res) =>{
  const profile = req.body;
  const id = req.params.id;

  const result = await update(+id, profile);

  res.json({
    message: 'Usuario editado com sucesso',
    profile: result
  });
}
