import { update } from '../../model/profileModel.js'

export const putByIdProfileController= async (req, res) =>{
  const profile = req.body;
  const id = req.params.id;

  const result = await update(+id, profile);

  if(req.userLogged.id !== id){
    return res.status(403).json({message: 'Forbidden: You can only edit your own profile'});
  }

  res.json({
    message: 'Usuario editado com sucesso',
    profile: result
  });
}
