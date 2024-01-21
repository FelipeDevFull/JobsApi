import { NextFunction, Request, Response } from "express";

function Validate(req: Request, res: Response, next: NextFunction) {
  
    const {title, city, state, description, salary} = req.body
    
    if(title == null)
    {
        res.status(422).json({menssage:'O campo Title é obrigatório'})
        return
    }else if (title.trim() != title) {
        res.status(422).json({menssage:'Por favor, Retire os espaços desnecessários do campo Title'})
        return
    }else if (title.length <= 5) {
        res.status(422).json({menssage:'O campo Title deve ter mais de 5 caracteres'})
        return
    }



    if(city == null)
    {
        res.status(422).json({menssage:'O campo City é obrigatório'})
        return
    }else if (city.trim() != city) {
        res.status(422).json({menssage:'Por favor, Retire os espaços desnecessários do campo City'})
        return
    }else if (city.length <= 5) {
        res.status(422).json({menssage:'O campo City deve ter mais de 5 caracteres'})
        return
    }

        

    if(state == null)
    {
        res.status(422).json({menssage:'O campo State é obrigatório'})
        return
    }else if (state.trim() != state) {
        res.status(422).json({menssage:'Por favor, Retire os espaços desnecessários do campo State'})
        return
    }else if (state.length <= 5) {
        res.status(422).json({menssage:'O campo State deve ter mais de 5 caracteres'})
        return
    }
    


    if(description == null)
    {
        res.status(422).json({menssage:'O campo Description é obrigatório'})
        return
    }else if (description.trim() != description) {
        res.status(422).json({menssage:'Por favor, Retire os espaços desnecessários do campo Description'})
        return
    }else if (description.length <= 5) {
        res.status(422).json({menssage:'O campo Description deve ter mais de 5 caracteres'})
        return
    }
    

    if(salary == null)
    {
        res.status(422).json({menssage:'O campo Salary é obrigatório'})
        return
    }else if((typeof salary) == 'string')
    {
        res.status(422).json({menssage:'Por favor, Insira um valor válido no campo Salary'})
        return
    }
   
    next()
        
}

export {Validate}

  