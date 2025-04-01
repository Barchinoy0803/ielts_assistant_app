import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReadingQuestionDto } from './dto/create-reading-question.dto';
import { UpdateReadingQuestionDto } from './dto/update-reading-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReadingQuestionService {
  constructor(private readonly prisma: PrismaService){}

  async create(createReadingQuestionDto: CreateReadingQuestionDto) {
    try {
      let question = await this.prisma.reading_Question.create({ data: createReadingQuestionDto })
      return question
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findAll() {
    try {
      let questions = await this.prisma.reading_Question.findMany()
      if (!questions.length) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return questions
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async findOne(id: string) {
    try {
      let question = await this.prisma.reading_Question.findUnique({ where: { id } })
      if (!question) return new HttpException("Not found", HttpStatus.NOT_FOUND)
      return question
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async update(id: string, updateReadingQuestionDto: UpdateReadingQuestionDto) {
    try {
      let updated = await this.prisma.reading_Question.update({
        data: updateReadingQuestionDto,
        where: { id }
      })
      return updated
    } catch (error) {
      return new BadRequestException(error)
    }
  }

  async remove(id: string) {
    try {
      let deleted = await this.prisma.reading_Question.delete({ where: { id } })
      return deleted
    } catch (error) {
      return new BadRequestException(error)
    }
  }
}
