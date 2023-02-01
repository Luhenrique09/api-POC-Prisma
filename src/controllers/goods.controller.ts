import { Request, Response } from "express";
import { findAllgoodsRep } from "../repositors/goods.repositor.js"

export async function findAllgoods(req: Request, res: Response ) {
    try {
        const result = await findAllgoodsRep();
        
        res.send(result).status(200);

    } catch (error) {
        res.status(500).send(error.message);
    }
}