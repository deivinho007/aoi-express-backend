export default function deleteProfileController(req, res) {
  const id = req.params.id;
  console.log(id);
  res.json({ message: `Usuario ${id} deletado` });
}
