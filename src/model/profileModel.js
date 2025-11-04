import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

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