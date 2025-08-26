export default function deleteSupplierController(req, res) {
  const id = req.params.id;
  console.log(id);
  res.json({ message: `Fornecedor ${id} deletado` });
}
