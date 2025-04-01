import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWritingTaskDto } from './dto/create-writing-task.dto';
import { UpdateWritingTaskDto } from './dto/update-writing-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingTaskService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createWritingTaskDto: CreateWritingTaskDto) {
    try {
      let writingTask = await this.prisma.writing_Task.create({ data: createWritingTaskDto })
      return writingTask
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let writingTasks = await this.prisma.writing_Task.findMany()
      if (!writingTasks.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingTasks
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let writingTask = await this.prisma.writing_Task.findUnique({ where: { id } })
      if (!writingTask) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingTask
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateWritingTaskDto: UpdateWritingTaskDto) {
    try {
      let updated = await this.prisma.writing_Task.update({
        data: updateWritingTaskDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.writing_Task.delete({ where: { id } })
      return deleted 
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
