import { HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createTeacherDto: CreateTeacherDto) {
    try {
      let teacher = await this.prisma.teacher.create({ data: createTeacherDto })
      return teacher
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async findAll() {
    try {
      let teachers = await this.prisma.teacher.findMany({
        include: {
          center: true,
          Group1: true,
          Group2: true
        }
      })
      return teachers
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async findOne(id: string) {
    try {
      let teacher = await this.prisma.teacher.findUnique({
        where: { id },
        include: {
          center: true,
          Group1: true,
          Group2: true
        }
      })
      if (!teacher) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return teacher
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    try {
      let updatedTeacher = await this.prisma.teacher.update({
        data: updateTeacherDto,
        where: { id }
      })
      return updatedTeacher
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.teacher.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new InternalServerErrorException(error)
    }
  }
}
