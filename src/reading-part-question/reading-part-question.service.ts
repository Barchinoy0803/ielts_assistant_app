import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReadingPartQuestionDto } from './dto/create-reading-part-question.dto';
import { UpdateReadingPartQuestionDto } from './dto/update-reading-part-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingPartQuestionService {
  constructor(private readonly prisma: PrismaService){}

  async create(createReadingPartQuestionDto: CreateReadingPartQuestionDto) {
    try {
      let partQuestion = await this.prisma.reading_Part_Question.create({ data: createReadingPartQuestionDto })
      return partQuestion
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let partQuestions = await this.prisma.reading_Part_Question.findMany()
      if (!partQuestions.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return partQuestions
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let partQuestion = await this.prisma.reading_Part_Question.findUnique({ where: { id } })
      if (!partQuestion) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return partQuestion
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateReadingPartQuestionDto: UpdateReadingPartQuestionDto) {
    try {
      let updated = await this.prisma.reading_Part_Question.update({
        data: updateReadingPartQuestionDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.reading_Part_Question.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
