import prisma from "../database/db.js"

export async function findAllBreedRep() {
    return await prisma.breed.findMany()
}