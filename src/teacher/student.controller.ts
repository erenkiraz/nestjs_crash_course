
   
import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentResponseDto } from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get()
    getStudents(
        @Param('teacherId') teacherId: string 
    ): FindTeacherResponseDto[] {
       return `Get All Students That Belong To A Teacher With Id of ${teacherId}`
    }

    @Put('/:studentId',)
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return `Update Student With Id Of ${studentId} To Teacher With Id Of ${teacherId}`
    }
}