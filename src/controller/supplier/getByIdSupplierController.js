export default function getByIdSupplierController(req, res) {
  const dados = req.body;
  console.log(dados);
  res.json({ message: 'Perfil do Fornecedor' });
}
