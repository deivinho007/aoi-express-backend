export default function getByIdProductController(req, res) {
    const id = req.params.id;
    res.json({
        message: 'Produto encontrado',
        product: { id }
    });
}

