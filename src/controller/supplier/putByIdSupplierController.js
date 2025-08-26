export default function putByIdSupplierController(req, res) {
  const dados = req.body;
  res.json({
    message: 'Fornecedor atualizado',
    profile: dados
  });
}
