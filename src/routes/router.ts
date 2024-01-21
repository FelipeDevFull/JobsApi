import { Request, Response } from "express";
import { Router} from "express";
import { SaveJobController } from "../controller/SaveJobController";
import { GetJobController } from "../controller/GetJobController";



import { Validate } from "../middleware/Validate";

const Routes = Router()

Routes.post("/v1/jobs",Validate, new SaveJobController().create);
Routes.get("/v1/jobs", new GetJobController().getAll);


export default Routes;