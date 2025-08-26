export default function putByIdProfileController(req, res) {
  const dados = req.body;
  res.json({
    message: 'Usuario atualizado',
    profile: dados
  });
}
