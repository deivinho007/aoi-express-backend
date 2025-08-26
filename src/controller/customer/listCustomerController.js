export default function listCustomerController(req, res) {
    res.json({
        message: 'Lista de clientes',
        customers: []
    });
}
