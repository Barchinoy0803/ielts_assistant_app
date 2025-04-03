import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createStudentDto: CreateStudentDto) {
    try {
      let student = await this.prisma.student.create({ data: createStudentDto })
      return student
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async findAll() {
    try {
      let students = await this.prisma.student.findMany({
        include: {
          group: true,
          Exam: true
        }
      })
      return students
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async findOne(id: string) {
    try {
      let student = await this.prisma.student.findUnique({
        where: { id },
        include: {
          group: true,
          Exam: true
        }
      })
      if (!student) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return student
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    try {
      let updated = await this.prisma.student.update({
        data: updateStudentDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.student.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }
}
