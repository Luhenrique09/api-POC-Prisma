import prisma from "../database/db.js"

export async function findAllgoodsRep() {
    return await prisma.goods.findMany()
}