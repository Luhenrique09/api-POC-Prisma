import { Request, Response } from "express";
import { findAllBreedRep } from "../repositors/breed.repositor.js";

export async function findAllBreed(req: Request, res: Response ) {
    try {
        const result = await findAllBreedRep();
        
        res.send(result).status(200);

    } catch (error) {
        res.status(500).send(error.message);
    }
}