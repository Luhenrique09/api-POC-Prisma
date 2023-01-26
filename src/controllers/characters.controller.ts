import { Request, Response } from "express";
import { Characters } from "../protocols/protocols.js";
import { createRep, findAllRep, findByIdRep, removeRep, updateRep } from "../repositors/characters.repositors.js";


export async function add(req: Request, res: Response) {
    const characters = req.body as Characters;
   
    try {
        await createRep(characters);
        
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findAll(req: Request, res: Response) {
    try {
        const result = await findAllRep();
        
        res.send(result);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function findAllBreed(req: Request, res: Response) {
    try {
        
        
        res.send();

    } catch (error) {
        res.status(500).send(error.message);
    }
}


export async function findById(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const  result  = await findByIdRep(Number(id))
        if (!result) {
            return res.send("Id não existe!")

        }
        res.send(result);
        return;
    } catch (error) {
        res.status(500).send(error.message);
    } 
}


export async function update(req: Request, res: Response) {
    const characters = req.body as Characters;
    const { id } = req.params;

    try {
        const  result  = await findByIdRep(Number(id))
        if (!result) {
            return res.send("Id não existe!")

        }
        await updateRep(characters, Number(id));

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function remove(req: Request, res: Response) {
    const { id } = req.params;

    try {
        await removeRep(Number(id))

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
}