import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWritingTaskOverviewDto } from './dto/create-writing-task-overview.dto';
import { UpdateWritingTaskOverviewDto } from './dto/update-writing-task-overview.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WritingTaskOverviewService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createWritingTaskOverviewDto: CreateWritingTaskOverviewDto) {
    try {
      let writingOverview = await this.prisma.writing_Task_Overview.create({ data: createWritingTaskOverviewDto })
      return writingOverview
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let writingOverviews = await this.prisma.writing_Task_Overview.findMany()
      if (!writingOverviews.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingOverviews
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let writingOverview = await this.prisma.writing_Task_Overview.findUnique({ where: { id } })
      if (!writingOverview) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return writingOverview
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateWritingTaskOverviewDto: UpdateWritingTaskOverviewDto) {
    try {
      let updated = await this.prisma.writing_Task_Overview.update({
        data: updateWritingTaskOverviewDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.writing_Task_Overview.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
