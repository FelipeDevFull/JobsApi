import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"

const Prisma = new PrismaClient()

export class GetJobController {

    async getAll(req: Request, res: Response){
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
        
            }[]
            const Infojob: type_infojob  = await Prisma.job.findMany();
            if(Infojob.length === 0)
            {
              res.status(404).json({menssage:'Infelizmente não temos ofertas de trabalho cadastradas no momento.'})
              return
            }
            let jobs = [];
            for (let index = 0; index < Infojob.length; index++) {
                const {createdAt, updatedAt, ...new_infojob} = Infojob[index]
                jobs.push(new_infojob)
            }
            res.status(200).json(jobs)
        } catch (error) {
            res.status(500).json({error:error})
        }
    } 
}