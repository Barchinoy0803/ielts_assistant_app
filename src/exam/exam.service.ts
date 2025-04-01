import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExamService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createExamDto: CreateExamDto) {
    try {
      let exam = await this.prisma.exam.create({ data: createExamDto })
      return exam
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let exam = await this.prisma.exam.findMany()
      if (!exam.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return exam
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let exam = await this.prisma.exam.findUnique({ where: { id } })
      if (!exam) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return exam
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateExamDto: UpdateExamDto) {
    try {
      let updated = await this.prisma.exam.update({
        data: updateExamDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.exam.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}  
