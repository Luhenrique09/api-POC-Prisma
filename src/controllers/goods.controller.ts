import { Request, Response } from "express";
import { findAllGoodsRep } from "../repositors/goods.repositor.js"

export async function findAllGoods(req: Request, res: Response ) {
    try {
        const result = await findAllGoodsRep();
        
        res.send(result).status(200);

    } catch (error) {
        res.status(500).send(error.message);
    }
}