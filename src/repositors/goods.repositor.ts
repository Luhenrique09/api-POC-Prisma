import prisma from "../database/db.js"

export async function findAllGoodsRep() {
    return await prisma.goods.findMany()
}