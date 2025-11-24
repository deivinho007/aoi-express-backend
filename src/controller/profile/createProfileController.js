import { create, validateProfile } from "../../model/profileModel.js";

import bcrypt from 'bcryptjs';

export const createProfileController = async (req, res, next) => {
    try {
        const profile = req.body;

        //validar dados
        // validateProfile recebe o objeo profile com os dados do usuario e um segundo parametro um objeto indicando que a validação é parcial (id opcional)
        const validation = validateProfile(profile, { id: true });

        if (!validation.success) {
            return res.status(400).json({
                message: 'Dados inválidos',
                errors: validation.errors
            });
        }

        validation.data.pass = await bcrypt.hash(validation.data.pass, 10);

        const result = await create(validation.data);
        res.status(201).json({
            message: 'Perfil criado com sucesso',
            profile: result
        });
    } catch (error) {

        if (error.code === 'P2022' && error.meta.target.includes('email')) {
            return res.status(400).json({
                message: 'Erro ao criar perfil',
                error: 'Email já cadastrado'
            });
        }
        next(error);
    }

}

