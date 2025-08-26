export default function listSupplierController(req, res) {
  const dados = req.body;
  console.log(dados);
  res.json({ message: 'Perfil do fornecedor' });
}
