export default function createProfileController(req, res) {
    const dados = req.body;
    res.json({
        message: 'Perfil criado com sucesso',
        profile: dados
    });
}