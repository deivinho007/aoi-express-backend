export default function putByIdProductController(req, res) {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: 'Produto atualizado com sucesso',
        product: { id, ...dados }
    });
}