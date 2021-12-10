import { HttpException, Injectable, NestMiddleware} from "@nestjs/common"
import { Request, Response, NextFunction } from 'express';
import { students } from "src/db";

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Middleware Called")
        const studentId = req.params.studentId;
        let studentExists = students.some(student => {
          return student.id === studentId
        })
        if(!studentExists){
          throw new HttpException("Student not found", 400)
        }
        next();

    }

}