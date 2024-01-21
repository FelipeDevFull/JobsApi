import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const Prisma = new PrismaClient()

export class AlterJobController {

    async alter(req: Request, res: Response){
        const id = req.params.id
        const {title, city, state, description, salary} = req.body
        const Infojob = {title, city, state, description, salary}
        try {
           const updateperson = await Prisma.job.updateMany({where:{id}, data:Infojob})
           if(updateperson.count === 0){
                res.status(404).json({menssage:'A oferta de trabalho não foi encontrada!'})
                return
            }
           res.status(200).json([Infojob])
        } catch (error) {
            res.status(500).json({error:error})
        }
    } 
}