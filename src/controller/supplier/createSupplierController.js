export default function createSupplierController(req, res) {
  const dados = req.body;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    message: 'Fornecedor Criado',
    profile: dados
  }, null, 2));
}
