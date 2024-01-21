import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const Prisma = new PrismaClient()

export class DeleteJobController{

    async delete(req: Request, res: Response){
        const id = req.params.id
        const Infojob = await await Prisma.job.findUnique({where:{id}})
        if(!Infojob){
            res.status(404).json({menssage:'A oferta de trabalho não foi encontrada!'})
            return
        }
        try {
        await await Prisma.job.delete({where:{id}})
        res.status(200).json({menssage:'Oferta de trabalho excluida com sucesso!'})
        } catch (error) {
            res.status(500).json({error:error})
        }
    } 
}