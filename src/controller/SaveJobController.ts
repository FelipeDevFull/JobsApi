import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const Prisma = new PrismaClient()

export class SaveJobController {

    async create(req: Request, res: Response){
        const {title, city, state, description, salary} = req.body
        const Infojob = {title, city, state, description, salary};
        try {
            await Prisma.job.create({data:Infojob})
            res.status(201).json([Infojob])
        } catch (error) {
            res.status(500).json({error:error})
        }
    } 
}