export default function deleteCustomerController(req, res) {
    const id = req.params.id;
    res.json({
        message: `Cliente ${id} deletado com sucesso`
    });
}
