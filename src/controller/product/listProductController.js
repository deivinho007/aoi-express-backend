export default function listProductController(req, res) {
    res.json({
        message: 'Lista de produtos',
        products: []
    });
}
