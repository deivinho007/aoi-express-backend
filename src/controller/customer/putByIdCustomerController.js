export default function putByIdCustomerController(req, res) {
    const id = req.params.id;
    const dados = req.body;
    res.json({
        message: 'Cliente atualizado com sucesso',
        customer: { id, ...dados }
    });
}
