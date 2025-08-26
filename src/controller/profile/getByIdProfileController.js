export default function getByIdProfileController(req, res) {
  const dados = req.body;
  console.log(dados);
  res.json({ message: 'Perfil do Usuário' });
}
