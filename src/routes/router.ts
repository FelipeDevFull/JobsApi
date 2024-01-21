import { Request, Response } from "express";
import { Router} from "express";
import { SaveJobController } from "../controller/SaveJobController";

import { Validate } from "../middleware/Validate";

const Routes = Router()

Routes.post("/v1/jobs",Validate, new SaveJobController().create);


export default Routes;