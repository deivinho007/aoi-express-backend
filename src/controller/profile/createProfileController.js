import { create } from "../../model/profileModel.js";
import bcrypt from 'bcryptjs';

export const createProfileController = async (req, res) => {
    const profile = req.body;

    profile.pass = await bcrypt.hash(profile.pass, 10);

    const result = await create(profile);
    res.status(201).json({
        message: 'Perfil criado com sucesso',
        profile: result
    });
}

