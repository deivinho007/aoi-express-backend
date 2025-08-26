export const deletProductController = (req, res) => {
  const id = req.params.id
  console.log(id)
  res.json({ messsage: `Produto ${id} deletado` })
};
