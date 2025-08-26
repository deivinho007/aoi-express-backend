export default function listProfileController(req, res) {
  const dados = req.body;
  console.log(dados);
  res.json({ message: 'Lista de Perfis' });
}
