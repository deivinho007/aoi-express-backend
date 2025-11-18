// ...existing code...
import { remove, validateProfile } from '../../model/profileModel.js'

export const deleteProfileController = async (req, res) => {
  const id = Number(req.params.id)

  // valida apenas o campo id usando validação parcial
  const validation = validateProfile({ id }, true)

  if (!validation.success) {
    return res.status(400).json({
      message: 'Dados inválidos',
      errors: validation.errors
    })
  }

  const result = await remove(id)
  res.json({
    message: `Usuario ${id} deletado`,
    profile: result
  })
}
// ...existing code...