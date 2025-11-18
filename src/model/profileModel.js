import { PrismaClient } from "../generated/prisma/index.js"
import * as z from 'zod';

const prisma = new PrismaClient()

// regra de negocio e validação com zod 

const profileSchema = z.object({
    id: z.number()
     .positive(),
    name: z.string()
      .min(3 ,{error:'o nome deve ter no minimo 3 caracteres'})
      .max(100,{error:'o nome deve ter no maximo  255 caracteres'}),
    email: z.email({error:'Email INVÁLIDO'}),
    pass: z.string().min(6)
      .max(255,{error:'A senha deve ter no minimo 3 caracteres'}),
    avatar: z.url({error:'A imgaem do avatar deve ser uma URL válida'}).optional()
})

export const validateProfile = (profile, partial = false) => {
    // Use .partial() for updates, otherwise use the full schema for creation
    const schemaToUse = partial ? profileSchema.partial() : profileSchema;
    const result = schemaToUse.safeParse(profile);

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    return { success: true, data: result.data };
}

export const create = async (profile) => {
    return await prisma.user.create({
        data: profile,
        select: { id: true, name: true, email: true, avatar: true }
    })
}

export const update = async (id, profile) => {
    return await prisma.user.update({
        where: { id },
        data: profile,
        select: { id: true, name: true, email: true, avatar: true }
    })
}

export const list = async () => {
    return await prisma.user.findMany({
        select: { id: true, name: true, email: true, avatar: true }
    })

}

export const getById = async (id) => {
    return await prisma.user.findUnique({
        where: { id: Number(id) },
        select: { id: true, name: true, email: true, avatar: true }
    })
}

export const getEmail = async (id) => {
    return await prisma.user.findUnique({
        where: { id: Number(id) }
    })
}

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email },
    })
}



export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id: Number(id) },
        select: { id: true, name: true, email: true, avatar: true }
    })
}