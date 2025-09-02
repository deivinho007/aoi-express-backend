import { create } from "../../model/profileModel.js";

export const createProfileController = async (req, res) => {
    const profile = req.body;
    const result = await create(profile);
    res.status(201).json({
        message: 'Perfil criado com sucesso',
        profile: result
    });
}

