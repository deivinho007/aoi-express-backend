export default function createProductController(req, res) {
    const dados = req.body;
    res.json({
        message: 'Produto criado com sucesso',
        product: dados
    });
}

