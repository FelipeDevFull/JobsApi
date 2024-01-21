import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const Prisma = new PrismaClient()

export class GetOneJobController {

    async getOne(req: Request, res: Response){
        const id = req.params.id
        try {
        type type_infojob = {
            id: string;
            title: string;
            city: string;
            state: string;
            description: string;
            salary: number;
            createdAt: Date;
            updatedAt: Date;
    
        }
        const Infojob = await Prisma.job.findUnique({where:{id}})
        if(!Infojob){
            res.status(404).json({menssage:'A oferta de trabalho não foi encontrada!'})
            return
        }
        const {createdAt, updatedAt, ...new_infojob}: type_infojob = Infojob;
        res.status(200).json([new_infojob])
        } catch (error) {
            res.status(500).json({error:error})
        }
    } 
}