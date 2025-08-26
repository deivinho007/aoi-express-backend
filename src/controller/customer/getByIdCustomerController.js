export default function getByIdCustomerController(req, res) {
    const id = req.params.id;
    res.json({
        message: 'Cliente encontrado',
        customer: { id }
    });
}
