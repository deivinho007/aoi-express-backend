export default function deleteProductController(req, res) {
    const id = req.params.id;
    res.json({
        message: `Produto ${id} deletado com sucesso`
    });
}
