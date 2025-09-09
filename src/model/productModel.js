import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

export const create = async (profile) =>{
    return await prisma.product.create({
        data: profile
    })
}

export const update = async (id, profile) =>{
    return await prisma.product.update({
        where: { id },
        data: profile
    })
}

export const list = async () =>{
    return await prisma.product.findMany()
}

export const getById  =  async (id) =>{
    return await prisma.product.findUnique({
        where: {id: Number(id)}
    })                                                                     
}

export const remove =  async (id) =>{
    return await prisma.product.delete({
        where: {id: Number(id)}
    })                                                                     
}